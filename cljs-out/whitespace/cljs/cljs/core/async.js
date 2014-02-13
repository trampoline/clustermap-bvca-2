// Compiled by ClojureScript 0.0-2138
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t33560 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33560 = (function (f,fn_handler,meta33561){
this.f = f;
this.fn_handler = fn_handler;
this.meta33561 = meta33561;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33560.cljs$lang$type = true;
cljs.core.async.t33560.cljs$lang$ctorStr = "cljs.core.async/t33560";
cljs.core.async.t33560.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33560");
});
cljs.core.async.t33560.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t33560.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t33560.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t33560.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33562){var self__ = this;
var _33562__$1 = this;return self__.meta33561;
});
cljs.core.async.t33560.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33562,meta33561__$1){var self__ = this;
var _33562__$1 = this;return (new cljs.core.async.t33560(self__.f,self__.fn_handler,meta33561__$1));
});
cljs.core.async.__GT_t33560 = (function __GT_t33560(f__$1,fn_handler__$1,meta33561){return (new cljs.core.async.t33560(f__$1,fn_handler__$1,meta33561));
});
}
return (new cljs.core.async.t33560(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__33564 = buff;if(G__33564)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__33564.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__33564.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__33564);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__33564);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_33565 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_33565);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_33565);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3394__auto__ = ret;if(cljs.core.truth_(and__3394__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3394__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___33566 = n;var x_33567 = 0;while(true){
if((x_33567 < n__4248__auto___33566))
{(a[x_33567] = 0);
{
var G__33568 = (x_33567 + 1);
x_33567 = G__33568;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__33569 = (i + 1);
i = G__33569;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t33573 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33573 = (function (flag,alt_flag,meta33574){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta33574 = meta33574;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33573.cljs$lang$type = true;
cljs.core.async.t33573.cljs$lang$ctorStr = "cljs.core.async/t33573";
cljs.core.async.t33573.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33573");
});
cljs.core.async.t33573.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t33573.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t33573.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t33573.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33575){var self__ = this;
var _33575__$1 = this;return self__.meta33574;
});
cljs.core.async.t33573.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33575,meta33574__$1){var self__ = this;
var _33575__$1 = this;return (new cljs.core.async.t33573(self__.flag,self__.alt_flag,meta33574__$1));
});
cljs.core.async.__GT_t33573 = (function __GT_t33573(flag__$1,alt_flag__$1,meta33574){return (new cljs.core.async.t33573(flag__$1,alt_flag__$1,meta33574));
});
}
return (new cljs.core.async.t33573(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t33579 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33579 = (function (cb,flag,alt_handler,meta33580){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta33580 = meta33580;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33579.cljs$lang$type = true;
cljs.core.async.t33579.cljs$lang$ctorStr = "cljs.core.async/t33579";
cljs.core.async.t33579.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33579");
});
cljs.core.async.t33579.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t33579.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t33579.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t33579.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33581){var self__ = this;
var _33581__$1 = this;return self__.meta33580;
});
cljs.core.async.t33579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33581,meta33580__$1){var self__ = this;
var _33581__$1 = this;return (new cljs.core.async.t33579(self__.cb,self__.flag,self__.alt_handler,meta33580__$1));
});
cljs.core.async.__GT_t33579 = (function __GT_t33579(cb__$1,flag__$1,alt_handler__$1,meta33580){return (new cljs.core.async.t33579(cb__$1,flag__$1,alt_handler__$1,meta33580));
});
}
return (new cljs.core.async.t33579(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33582_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33582_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3406__auto__ = wport;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__33583 = (i + 1);
i = G__33583;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3406__auto__ = ret;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3394__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3394__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3394__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__33584){var map__33586 = p__33584;var map__33586__$1 = ((cljs.core.seq_QMARK_.call(null,map__33586))?cljs.core.apply.call(null,cljs.core.hash_map,map__33586):map__33586);var opts = map__33586__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__33584 = null;if (arguments.length > 1) {
  p__33584 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__33584);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__33587){
var ports = cljs.core.first(arglist__33587);
var p__33584 = cljs.core.rest(arglist__33587);
return alts_BANG___delegate(ports,p__33584);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t33595 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33595 = (function (ch,f,map_LT_,meta33596){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta33596 = meta33596;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33595.cljs$lang$type = true;
cljs.core.async.t33595.cljs$lang$ctorStr = "cljs.core.async/t33595";
cljs.core.async.t33595.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33595");
});
cljs.core.async.t33595.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t33595.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t33595.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t33595.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t33598 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33598 = (function (fn1,_,meta33596,ch,f,map_LT_,meta33599){
this.fn1 = fn1;
this._ = _;
this.meta33596 = meta33596;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta33599 = meta33599;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33598.cljs$lang$type = true;
cljs.core.async.t33598.cljs$lang$ctorStr = "cljs.core.async/t33598";
cljs.core.async.t33598.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33598");
});
cljs.core.async.t33598.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t33598.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t33598.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t33598.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__33588_SHARP_){return f1.call(null,(((p1__33588_SHARP_ == null))?null:self__.f.call(null,p1__33588_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t33598.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33600){var self__ = this;
var _33600__$1 = this;return self__.meta33599;
});
cljs.core.async.t33598.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33600,meta33599__$1){var self__ = this;
var _33600__$1 = this;return (new cljs.core.async.t33598(self__.fn1,self__._,self__.meta33596,self__.ch,self__.f,self__.map_LT_,meta33599__$1));
});
cljs.core.async.__GT_t33598 = (function __GT_t33598(fn1__$1,___$2,meta33596__$1,ch__$2,f__$2,map_LT___$2,meta33599){return (new cljs.core.async.t33598(fn1__$1,___$2,meta33596__$1,ch__$2,f__$2,map_LT___$2,meta33599));
});
}
return (new cljs.core.async.t33598(fn1,___$1,self__.meta33596,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3394__auto__ = ret;if(cljs.core.truth_(and__3394__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3394__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t33595.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t33595.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t33595.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33597){var self__ = this;
var _33597__$1 = this;return self__.meta33596;
});
cljs.core.async.t33595.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33597,meta33596__$1){var self__ = this;
var _33597__$1 = this;return (new cljs.core.async.t33595(self__.ch,self__.f,self__.map_LT_,meta33596__$1));
});
cljs.core.async.__GT_t33595 = (function __GT_t33595(ch__$1,f__$1,map_LT___$1,meta33596){return (new cljs.core.async.t33595(ch__$1,f__$1,map_LT___$1,meta33596));
});
}
return (new cljs.core.async.t33595(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t33604 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33604 = (function (ch,f,map_GT_,meta33605){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta33605 = meta33605;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33604.cljs$lang$type = true;
cljs.core.async.t33604.cljs$lang$ctorStr = "cljs.core.async/t33604";
cljs.core.async.t33604.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33604");
});
cljs.core.async.t33604.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t33604.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t33604.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t33604.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t33604.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t33604.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t33604.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33606){var self__ = this;
var _33606__$1 = this;return self__.meta33605;
});
cljs.core.async.t33604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33606,meta33605__$1){var self__ = this;
var _33606__$1 = this;return (new cljs.core.async.t33604(self__.ch,self__.f,self__.map_GT_,meta33605__$1));
});
cljs.core.async.__GT_t33604 = (function __GT_t33604(ch__$1,f__$1,map_GT___$1,meta33605){return (new cljs.core.async.t33604(ch__$1,f__$1,map_GT___$1,meta33605));
});
}
return (new cljs.core.async.t33604(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t33610 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33610 = (function (ch,p,filter_GT_,meta33611){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta33611 = meta33611;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33610.cljs$lang$type = true;
cljs.core.async.t33610.cljs$lang$ctorStr = "cljs.core.async/t33610";
cljs.core.async.t33610.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33610");
});
cljs.core.async.t33610.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t33610.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t33610.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t33610.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t33610.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t33610.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t33610.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33612){var self__ = this;
var _33612__$1 = this;return self__.meta33611;
});
cljs.core.async.t33610.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33612,meta33611__$1){var self__ = this;
var _33612__$1 = this;return (new cljs.core.async.t33610(self__.ch,self__.p,self__.filter_GT_,meta33611__$1));
});
cljs.core.async.__GT_t33610 = (function __GT_t33610(ch__$1,p__$1,filter_GT___$1,meta33611){return (new cljs.core.async.t33610(ch__$1,p__$1,filter_GT___$1,meta33611));
});
}
return (new cljs.core.async.t33610(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___33695 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33674){var state_val_33675 = (state_33674[1]);if((state_val_33675 === 1))
{var state_33674__$1 = state_33674;var statearr_33676_33696 = state_33674__$1;(statearr_33676_33696[2] = null);
(statearr_33676_33696[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33675 === 2))
{var state_33674__$1 = state_33674;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33674__$1,4,ch);
} else
{if((state_val_33675 === 3))
{var inst_33672 = (state_33674[2]);var state_33674__$1 = state_33674;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33674__$1,inst_33672);
} else
{if((state_val_33675 === 4))
{var inst_33656 = (state_33674[7]);var inst_33656__$1 = (state_33674[2]);var inst_33657 = (inst_33656__$1 == null);var state_33674__$1 = (function (){var statearr_33677 = state_33674;(statearr_33677[7] = inst_33656__$1);
return statearr_33677;
})();if(cljs.core.truth_(inst_33657))
{var statearr_33678_33697 = state_33674__$1;(statearr_33678_33697[1] = 5);
} else
{var statearr_33679_33698 = state_33674__$1;(statearr_33679_33698[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33675 === 5))
{var inst_33659 = cljs.core.async.close_BANG_.call(null,out);var state_33674__$1 = state_33674;var statearr_33680_33699 = state_33674__$1;(statearr_33680_33699[2] = inst_33659);
(statearr_33680_33699[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33675 === 6))
{var inst_33656 = (state_33674[7]);var inst_33661 = p.call(null,inst_33656);var state_33674__$1 = state_33674;if(cljs.core.truth_(inst_33661))
{var statearr_33681_33700 = state_33674__$1;(statearr_33681_33700[1] = 8);
} else
{var statearr_33682_33701 = state_33674__$1;(statearr_33682_33701[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33675 === 7))
{var inst_33670 = (state_33674[2]);var state_33674__$1 = state_33674;var statearr_33683_33702 = state_33674__$1;(statearr_33683_33702[2] = inst_33670);
(statearr_33683_33702[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33675 === 8))
{var inst_33656 = (state_33674[7]);var state_33674__$1 = state_33674;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33674__$1,11,out,inst_33656);
} else
{if((state_val_33675 === 9))
{var state_33674__$1 = state_33674;var statearr_33684_33703 = state_33674__$1;(statearr_33684_33703[2] = null);
(statearr_33684_33703[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33675 === 10))
{var inst_33667 = (state_33674[2]);var state_33674__$1 = (function (){var statearr_33685 = state_33674;(statearr_33685[8] = inst_33667);
return statearr_33685;
})();var statearr_33686_33704 = state_33674__$1;(statearr_33686_33704[2] = null);
(statearr_33686_33704[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33675 === 11))
{var inst_33664 = (state_33674[2]);var state_33674__$1 = state_33674;var statearr_33687_33705 = state_33674__$1;(statearr_33687_33705[2] = inst_33664);
(statearr_33687_33705[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_33691 = [null,null,null,null,null,null,null,null,null];(statearr_33691[0] = state_machine__5507__auto__);
(statearr_33691[1] = 1);
return statearr_33691;
});
var state_machine__5507__auto____1 = (function (state_33674){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33674);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33692){if((e33692 instanceof Object))
{var ex__5510__auto__ = e33692;var statearr_33693_33706 = state_33674;(statearr_33693_33706[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33674);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33692;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33707 = state_33674;
state_33674 = G__33707;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33674){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33694 = f__5522__auto__.call(null);(statearr_33694[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33695);
return statearr_33694;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33859){var state_val_33860 = (state_33859[1]);if((state_val_33860 === 1))
{var state_33859__$1 = state_33859;var statearr_33861_33898 = state_33859__$1;(statearr_33861_33898[2] = null);
(statearr_33861_33898[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33860 === 2))
{var state_33859__$1 = state_33859;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33859__$1,4,in$);
} else
{if((state_val_33860 === 3))
{var inst_33857 = (state_33859[2]);var state_33859__$1 = state_33859;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33859__$1,inst_33857);
} else
{if((state_val_33860 === 4))
{var inst_33805 = (state_33859[7]);var inst_33805__$1 = (state_33859[2]);var inst_33806 = (inst_33805__$1 == null);var state_33859__$1 = (function (){var statearr_33862 = state_33859;(statearr_33862[7] = inst_33805__$1);
return statearr_33862;
})();if(cljs.core.truth_(inst_33806))
{var statearr_33863_33899 = state_33859__$1;(statearr_33863_33899[1] = 5);
} else
{var statearr_33864_33900 = state_33859__$1;(statearr_33864_33900[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33860 === 5))
{var inst_33808 = cljs.core.async.close_BANG_.call(null,out);var state_33859__$1 = state_33859;var statearr_33865_33901 = state_33859__$1;(statearr_33865_33901[2] = inst_33808);
(statearr_33865_33901[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33860 === 6))
{var inst_33805 = (state_33859[7]);var inst_33810 = f.call(null,inst_33805);var inst_33815 = cljs.core.seq.call(null,inst_33810);var inst_33816 = inst_33815;var inst_33817 = null;var inst_33818 = 0;var inst_33819 = 0;var state_33859__$1 = (function (){var statearr_33866 = state_33859;(statearr_33866[8] = inst_33818);
(statearr_33866[9] = inst_33819);
(statearr_33866[10] = inst_33816);
(statearr_33866[11] = inst_33817);
return statearr_33866;
})();var statearr_33867_33902 = state_33859__$1;(statearr_33867_33902[2] = null);
(statearr_33867_33902[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33860 === 7))
{var inst_33855 = (state_33859[2]);var state_33859__$1 = state_33859;var statearr_33868_33903 = state_33859__$1;(statearr_33868_33903[2] = inst_33855);
(statearr_33868_33903[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33860 === 8))
{var inst_33818 = (state_33859[8]);var inst_33819 = (state_33859[9]);var inst_33821 = (inst_33819 < inst_33818);var inst_33822 = inst_33821;var state_33859__$1 = state_33859;if(cljs.core.truth_(inst_33822))
{var statearr_33869_33904 = state_33859__$1;(statearr_33869_33904[1] = 10);
} else
{var statearr_33870_33905 = state_33859__$1;(statearr_33870_33905[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33860 === 9))
{var inst_33852 = (state_33859[2]);var state_33859__$1 = (function (){var statearr_33871 = state_33859;(statearr_33871[12] = inst_33852);
return statearr_33871;
})();var statearr_33872_33906 = state_33859__$1;(statearr_33872_33906[2] = null);
(statearr_33872_33906[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33860 === 10))
{var inst_33819 = (state_33859[9]);var inst_33817 = (state_33859[11]);var inst_33824 = cljs.core._nth.call(null,inst_33817,inst_33819);var state_33859__$1 = state_33859;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33859__$1,13,out,inst_33824);
} else
{if((state_val_33860 === 11))
{var inst_33830 = (state_33859[13]);var inst_33816 = (state_33859[10]);var inst_33830__$1 = cljs.core.seq.call(null,inst_33816);var state_33859__$1 = (function (){var statearr_33876 = state_33859;(statearr_33876[13] = inst_33830__$1);
return statearr_33876;
})();if(inst_33830__$1)
{var statearr_33877_33907 = state_33859__$1;(statearr_33877_33907[1] = 14);
} else
{var statearr_33878_33908 = state_33859__$1;(statearr_33878_33908[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33860 === 12))
{var inst_33850 = (state_33859[2]);var state_33859__$1 = state_33859;var statearr_33879_33909 = state_33859__$1;(statearr_33879_33909[2] = inst_33850);
(statearr_33879_33909[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33860 === 13))
{var inst_33818 = (state_33859[8]);var inst_33819 = (state_33859[9]);var inst_33816 = (state_33859[10]);var inst_33817 = (state_33859[11]);var inst_33826 = (state_33859[2]);var inst_33827 = (inst_33819 + 1);var tmp33873 = inst_33818;var tmp33874 = inst_33816;var tmp33875 = inst_33817;var inst_33816__$1 = tmp33874;var inst_33817__$1 = tmp33875;var inst_33818__$1 = tmp33873;var inst_33819__$1 = inst_33827;var state_33859__$1 = (function (){var statearr_33880 = state_33859;(statearr_33880[8] = inst_33818__$1);
(statearr_33880[9] = inst_33819__$1);
(statearr_33880[10] = inst_33816__$1);
(statearr_33880[11] = inst_33817__$1);
(statearr_33880[14] = inst_33826);
return statearr_33880;
})();var statearr_33881_33910 = state_33859__$1;(statearr_33881_33910[2] = null);
(statearr_33881_33910[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33860 === 14))
{var inst_33830 = (state_33859[13]);var inst_33832 = cljs.core.chunked_seq_QMARK_.call(null,inst_33830);var state_33859__$1 = state_33859;if(inst_33832)
{var statearr_33882_33911 = state_33859__$1;(statearr_33882_33911[1] = 17);
} else
{var statearr_33883_33912 = state_33859__$1;(statearr_33883_33912[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33860 === 15))
{var state_33859__$1 = state_33859;var statearr_33884_33913 = state_33859__$1;(statearr_33884_33913[2] = null);
(statearr_33884_33913[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33860 === 16))
{var inst_33848 = (state_33859[2]);var state_33859__$1 = state_33859;var statearr_33885_33914 = state_33859__$1;(statearr_33885_33914[2] = inst_33848);
(statearr_33885_33914[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33860 === 17))
{var inst_33830 = (state_33859[13]);var inst_33834 = cljs.core.chunk_first.call(null,inst_33830);var inst_33835 = cljs.core.chunk_rest.call(null,inst_33830);var inst_33836 = cljs.core.count.call(null,inst_33834);var inst_33816 = inst_33835;var inst_33817 = inst_33834;var inst_33818 = inst_33836;var inst_33819 = 0;var state_33859__$1 = (function (){var statearr_33886 = state_33859;(statearr_33886[8] = inst_33818);
(statearr_33886[9] = inst_33819);
(statearr_33886[10] = inst_33816);
(statearr_33886[11] = inst_33817);
return statearr_33886;
})();var statearr_33887_33915 = state_33859__$1;(statearr_33887_33915[2] = null);
(statearr_33887_33915[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33860 === 18))
{var inst_33830 = (state_33859[13]);var inst_33839 = cljs.core.first.call(null,inst_33830);var state_33859__$1 = state_33859;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33859__$1,20,out,inst_33839);
} else
{if((state_val_33860 === 19))
{var inst_33845 = (state_33859[2]);var state_33859__$1 = state_33859;var statearr_33888_33916 = state_33859__$1;(statearr_33888_33916[2] = inst_33845);
(statearr_33888_33916[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33860 === 20))
{var inst_33830 = (state_33859[13]);var inst_33841 = (state_33859[2]);var inst_33842 = cljs.core.next.call(null,inst_33830);var inst_33816 = inst_33842;var inst_33817 = null;var inst_33818 = 0;var inst_33819 = 0;var state_33859__$1 = (function (){var statearr_33889 = state_33859;(statearr_33889[8] = inst_33818);
(statearr_33889[9] = inst_33819);
(statearr_33889[10] = inst_33816);
(statearr_33889[11] = inst_33817);
(statearr_33889[15] = inst_33841);
return statearr_33889;
})();var statearr_33890_33917 = state_33859__$1;(statearr_33890_33917[2] = null);
(statearr_33890_33917[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_33894 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33894[0] = state_machine__5507__auto__);
(statearr_33894[1] = 1);
return statearr_33894;
});
var state_machine__5507__auto____1 = (function (state_33859){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33859);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33895){if((e33895 instanceof Object))
{var ex__5510__auto__ = e33895;var statearr_33896_33918 = state_33859;(statearr_33896_33918[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33859);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33895;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33919 = state_33859;
state_33859 = G__33919;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33859){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33897 = f__5522__auto__.call(null);(statearr_33897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_33897;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___34000 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33979){var state_val_33980 = (state_33979[1]);if((state_val_33980 === 1))
{var state_33979__$1 = state_33979;var statearr_33981_34001 = state_33979__$1;(statearr_33981_34001[2] = null);
(statearr_33981_34001[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33980 === 2))
{var state_33979__$1 = state_33979;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33979__$1,4,from);
} else
{if((state_val_33980 === 3))
{var inst_33977 = (state_33979[2]);var state_33979__$1 = state_33979;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33979__$1,inst_33977);
} else
{if((state_val_33980 === 4))
{var inst_33962 = (state_33979[7]);var inst_33962__$1 = (state_33979[2]);var inst_33963 = (inst_33962__$1 == null);var state_33979__$1 = (function (){var statearr_33982 = state_33979;(statearr_33982[7] = inst_33962__$1);
return statearr_33982;
})();if(cljs.core.truth_(inst_33963))
{var statearr_33983_34002 = state_33979__$1;(statearr_33983_34002[1] = 5);
} else
{var statearr_33984_34003 = state_33979__$1;(statearr_33984_34003[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33980 === 5))
{var state_33979__$1 = state_33979;if(cljs.core.truth_(close_QMARK_))
{var statearr_33985_34004 = state_33979__$1;(statearr_33985_34004[1] = 8);
} else
{var statearr_33986_34005 = state_33979__$1;(statearr_33986_34005[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33980 === 6))
{var inst_33962 = (state_33979[7]);var state_33979__$1 = state_33979;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33979__$1,11,to,inst_33962);
} else
{if((state_val_33980 === 7))
{var inst_33975 = (state_33979[2]);var state_33979__$1 = state_33979;var statearr_33987_34006 = state_33979__$1;(statearr_33987_34006[2] = inst_33975);
(statearr_33987_34006[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33980 === 8))
{var inst_33966 = cljs.core.async.close_BANG_.call(null,to);var state_33979__$1 = state_33979;var statearr_33988_34007 = state_33979__$1;(statearr_33988_34007[2] = inst_33966);
(statearr_33988_34007[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33980 === 9))
{var state_33979__$1 = state_33979;var statearr_33989_34008 = state_33979__$1;(statearr_33989_34008[2] = null);
(statearr_33989_34008[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33980 === 10))
{var inst_33969 = (state_33979[2]);var state_33979__$1 = state_33979;var statearr_33990_34009 = state_33979__$1;(statearr_33990_34009[2] = inst_33969);
(statearr_33990_34009[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33980 === 11))
{var inst_33972 = (state_33979[2]);var state_33979__$1 = (function (){var statearr_33991 = state_33979;(statearr_33991[8] = inst_33972);
return statearr_33991;
})();var statearr_33992_34010 = state_33979__$1;(statearr_33992_34010[2] = null);
(statearr_33992_34010[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_33996 = [null,null,null,null,null,null,null,null,null];(statearr_33996[0] = state_machine__5507__auto__);
(statearr_33996[1] = 1);
return statearr_33996;
});
var state_machine__5507__auto____1 = (function (state_33979){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33979);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33997){if((e33997 instanceof Object))
{var ex__5510__auto__ = e33997;var statearr_33998_34011 = state_33979;(statearr_33998_34011[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33979);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33997;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34012 = state_33979;
state_33979 = G__34012;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33979){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33999 = f__5522__auto__.call(null);(statearr_33999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34000);
return statearr_33999;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___34099 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34077){var state_val_34078 = (state_34077[1]);if((state_val_34078 === 1))
{var state_34077__$1 = state_34077;var statearr_34079_34100 = state_34077__$1;(statearr_34079_34100[2] = null);
(statearr_34079_34100[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34078 === 2))
{var state_34077__$1 = state_34077;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34077__$1,4,ch);
} else
{if((state_val_34078 === 3))
{var inst_34075 = (state_34077[2]);var state_34077__$1 = state_34077;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34077__$1,inst_34075);
} else
{if((state_val_34078 === 4))
{var inst_34058 = (state_34077[7]);var inst_34058__$1 = (state_34077[2]);var inst_34059 = (inst_34058__$1 == null);var state_34077__$1 = (function (){var statearr_34080 = state_34077;(statearr_34080[7] = inst_34058__$1);
return statearr_34080;
})();if(cljs.core.truth_(inst_34059))
{var statearr_34081_34101 = state_34077__$1;(statearr_34081_34101[1] = 5);
} else
{var statearr_34082_34102 = state_34077__$1;(statearr_34082_34102[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34078 === 5))
{var inst_34061 = cljs.core.async.close_BANG_.call(null,tc);var inst_34062 = cljs.core.async.close_BANG_.call(null,fc);var state_34077__$1 = (function (){var statearr_34083 = state_34077;(statearr_34083[8] = inst_34061);
return statearr_34083;
})();var statearr_34084_34103 = state_34077__$1;(statearr_34084_34103[2] = inst_34062);
(statearr_34084_34103[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34078 === 6))
{var inst_34058 = (state_34077[7]);var inst_34064 = p.call(null,inst_34058);var state_34077__$1 = state_34077;if(cljs.core.truth_(inst_34064))
{var statearr_34085_34104 = state_34077__$1;(statearr_34085_34104[1] = 9);
} else
{var statearr_34086_34105 = state_34077__$1;(statearr_34086_34105[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34078 === 7))
{var inst_34073 = (state_34077[2]);var state_34077__$1 = state_34077;var statearr_34087_34106 = state_34077__$1;(statearr_34087_34106[2] = inst_34073);
(statearr_34087_34106[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34078 === 8))
{var inst_34070 = (state_34077[2]);var state_34077__$1 = (function (){var statearr_34088 = state_34077;(statearr_34088[9] = inst_34070);
return statearr_34088;
})();var statearr_34089_34107 = state_34077__$1;(statearr_34089_34107[2] = null);
(statearr_34089_34107[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34078 === 9))
{var state_34077__$1 = state_34077;var statearr_34090_34108 = state_34077__$1;(statearr_34090_34108[2] = tc);
(statearr_34090_34108[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34078 === 10))
{var state_34077__$1 = state_34077;var statearr_34091_34109 = state_34077__$1;(statearr_34091_34109[2] = fc);
(statearr_34091_34109[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34078 === 11))
{var inst_34058 = (state_34077[7]);var inst_34068 = (state_34077[2]);var state_34077__$1 = state_34077;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34077__$1,8,inst_34068,inst_34058);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_34095 = [null,null,null,null,null,null,null,null,null,null];(statearr_34095[0] = state_machine__5507__auto__);
(statearr_34095[1] = 1);
return statearr_34095;
});
var state_machine__5507__auto____1 = (function (state_34077){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34077);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34096){if((e34096 instanceof Object))
{var ex__5510__auto__ = e34096;var statearr_34097_34110 = state_34077;(statearr_34097_34110[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34077);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34096;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34111 = state_34077;
state_34077 = G__34111;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34077){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34098 = f__5522__auto__.call(null);(statearr_34098[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34099);
return statearr_34098;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34158){var state_val_34159 = (state_34158[1]);if((state_val_34159 === 7))
{var inst_34154 = (state_34158[2]);var state_34158__$1 = state_34158;var statearr_34160_34176 = state_34158__$1;(statearr_34160_34176[2] = inst_34154);
(statearr_34160_34176[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34159 === 6))
{var inst_34144 = (state_34158[7]);var inst_34147 = (state_34158[8]);var inst_34151 = f.call(null,inst_34144,inst_34147);var inst_34144__$1 = inst_34151;var state_34158__$1 = (function (){var statearr_34161 = state_34158;(statearr_34161[7] = inst_34144__$1);
return statearr_34161;
})();var statearr_34162_34177 = state_34158__$1;(statearr_34162_34177[2] = null);
(statearr_34162_34177[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34159 === 5))
{var inst_34144 = (state_34158[7]);var state_34158__$1 = state_34158;var statearr_34163_34178 = state_34158__$1;(statearr_34163_34178[2] = inst_34144);
(statearr_34163_34178[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34159 === 4))
{var inst_34147 = (state_34158[8]);var inst_34147__$1 = (state_34158[2]);var inst_34148 = (inst_34147__$1 == null);var state_34158__$1 = (function (){var statearr_34164 = state_34158;(statearr_34164[8] = inst_34147__$1);
return statearr_34164;
})();if(cljs.core.truth_(inst_34148))
{var statearr_34165_34179 = state_34158__$1;(statearr_34165_34179[1] = 5);
} else
{var statearr_34166_34180 = state_34158__$1;(statearr_34166_34180[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34159 === 3))
{var inst_34156 = (state_34158[2]);var state_34158__$1 = state_34158;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34158__$1,inst_34156);
} else
{if((state_val_34159 === 2))
{var state_34158__$1 = state_34158;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34158__$1,4,ch);
} else
{if((state_val_34159 === 1))
{var inst_34144 = init;var state_34158__$1 = (function (){var statearr_34167 = state_34158;(statearr_34167[7] = inst_34144);
return statearr_34167;
})();var statearr_34168_34181 = state_34158__$1;(statearr_34168_34181[2] = null);
(statearr_34168_34181[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_34172 = [null,null,null,null,null,null,null,null,null];(statearr_34172[0] = state_machine__5507__auto__);
(statearr_34172[1] = 1);
return statearr_34172;
});
var state_machine__5507__auto____1 = (function (state_34158){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34158);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34173){if((e34173 instanceof Object))
{var ex__5510__auto__ = e34173;var statearr_34174_34182 = state_34158;(statearr_34174_34182[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34158);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34173;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34183 = state_34158;
state_34158 = G__34183;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34158){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34175 = f__5522__auto__.call(null);(statearr_34175[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_34175;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34245){var state_val_34246 = (state_34245[1]);if((state_val_34246 === 1))
{var inst_34225 = cljs.core.seq.call(null,coll);var inst_34226 = inst_34225;var state_34245__$1 = (function (){var statearr_34247 = state_34245;(statearr_34247[7] = inst_34226);
return statearr_34247;
})();var statearr_34248_34266 = state_34245__$1;(statearr_34248_34266[2] = null);
(statearr_34248_34266[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34246 === 2))
{var inst_34226 = (state_34245[7]);var state_34245__$1 = state_34245;if(cljs.core.truth_(inst_34226))
{var statearr_34249_34267 = state_34245__$1;(statearr_34249_34267[1] = 4);
} else
{var statearr_34250_34268 = state_34245__$1;(statearr_34250_34268[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34246 === 3))
{var inst_34243 = (state_34245[2]);var state_34245__$1 = state_34245;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34245__$1,inst_34243);
} else
{if((state_val_34246 === 4))
{var inst_34226 = (state_34245[7]);var inst_34229 = cljs.core.first.call(null,inst_34226);var state_34245__$1 = state_34245;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34245__$1,7,ch,inst_34229);
} else
{if((state_val_34246 === 5))
{var state_34245__$1 = state_34245;if(cljs.core.truth_(close_QMARK_))
{var statearr_34251_34269 = state_34245__$1;(statearr_34251_34269[1] = 8);
} else
{var statearr_34252_34270 = state_34245__$1;(statearr_34252_34270[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34246 === 6))
{var inst_34241 = (state_34245[2]);var state_34245__$1 = state_34245;var statearr_34253_34271 = state_34245__$1;(statearr_34253_34271[2] = inst_34241);
(statearr_34253_34271[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34246 === 7))
{var inst_34226 = (state_34245[7]);var inst_34231 = (state_34245[2]);var inst_34232 = cljs.core.next.call(null,inst_34226);var inst_34226__$1 = inst_34232;var state_34245__$1 = (function (){var statearr_34254 = state_34245;(statearr_34254[7] = inst_34226__$1);
(statearr_34254[8] = inst_34231);
return statearr_34254;
})();var statearr_34255_34272 = state_34245__$1;(statearr_34255_34272[2] = null);
(statearr_34255_34272[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34246 === 8))
{var inst_34236 = cljs.core.async.close_BANG_.call(null,ch);var state_34245__$1 = state_34245;var statearr_34256_34273 = state_34245__$1;(statearr_34256_34273[2] = inst_34236);
(statearr_34256_34273[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34246 === 9))
{var state_34245__$1 = state_34245;var statearr_34257_34274 = state_34245__$1;(statearr_34257_34274[2] = null);
(statearr_34257_34274[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34246 === 10))
{var inst_34239 = (state_34245[2]);var state_34245__$1 = state_34245;var statearr_34258_34275 = state_34245__$1;(statearr_34258_34275[2] = inst_34239);
(statearr_34258_34275[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_34262 = [null,null,null,null,null,null,null,null,null];(statearr_34262[0] = state_machine__5507__auto__);
(statearr_34262[1] = 1);
return statearr_34262;
});
var state_machine__5507__auto____1 = (function (state_34245){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34245);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34263){if((e34263 instanceof Object))
{var ex__5510__auto__ = e34263;var statearr_34264_34276 = state_34245;(statearr_34264_34276[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34245);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34263;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34277 = state_34245;
state_34245 = G__34277;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34245){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34265 = f__5522__auto__.call(null);(statearr_34265[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_34265;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj34279 = {};return obj34279;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3394__auto__ = _;if(and__3394__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4027__auto__ = (((_ == null))?null:_);return (function (){var or__3406__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj34281 = {};return obj34281;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t34505 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34505 = (function (cs,ch,mult,meta34506){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta34506 = meta34506;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34505.cljs$lang$type = true;
cljs.core.async.t34505.cljs$lang$ctorStr = "cljs.core.async/t34505";
cljs.core.async.t34505.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34505");
});})(cs))
;
cljs.core.async.t34505.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t34505.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t34505.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t34505.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t34505.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t34505.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t34505.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34507){var self__ = this;
var _34507__$1 = this;return self__.meta34506;
});})(cs))
;
cljs.core.async.t34505.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34507,meta34506__$1){var self__ = this;
var _34507__$1 = this;return (new cljs.core.async.t34505(self__.cs,self__.ch,self__.mult,meta34506__$1));
});})(cs))
;
cljs.core.async.__GT_t34505 = ((function (cs){
return (function __GT_t34505(cs__$1,ch__$1,mult__$1,meta34506){return (new cljs.core.async.t34505(cs__$1,ch__$1,mult__$1,meta34506));
});})(cs))
;
}
return (new cljs.core.async.t34505(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___34728 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34642){var state_val_34643 = (state_34642[1]);if((state_val_34643 === 32))
{var inst_34510 = (state_34642[7]);var inst_34586 = (state_34642[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34642,31,Object,null,30);var inst_34593 = cljs.core.async.put_BANG_.call(null,inst_34586,inst_34510,done);var state_34642__$1 = state_34642;var statearr_34644_34729 = state_34642__$1;(statearr_34644_34729[2] = inst_34593);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34642__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34643 === 1))
{var state_34642__$1 = state_34642;var statearr_34645_34730 = state_34642__$1;(statearr_34645_34730[2] = null);
(statearr_34645_34730[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34643 === 33))
{var inst_34599 = (state_34642[9]);var inst_34601 = cljs.core.chunked_seq_QMARK_.call(null,inst_34599);var state_34642__$1 = state_34642;if(inst_34601)
{var statearr_34646_34731 = state_34642__$1;(statearr_34646_34731[1] = 36);
} else
{var statearr_34647_34732 = state_34642__$1;(statearr_34647_34732[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34643 === 2))
{var state_34642__$1 = state_34642;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34642__$1,4,ch);
} else
{if((state_val_34643 === 34))
{var state_34642__$1 = state_34642;var statearr_34648_34733 = state_34642__$1;(statearr_34648_34733[2] = null);
(statearr_34648_34733[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34643 === 3))
{var inst_34640 = (state_34642[2]);var state_34642__$1 = state_34642;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34642__$1,inst_34640);
} else
{if((state_val_34643 === 35))
{var inst_34624 = (state_34642[2]);var state_34642__$1 = state_34642;var statearr_34649_34734 = state_34642__$1;(statearr_34649_34734[2] = inst_34624);
(statearr_34649_34734[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34643 === 4))
{var inst_34510 = (state_34642[7]);var inst_34510__$1 = (state_34642[2]);var inst_34511 = (inst_34510__$1 == null);var state_34642__$1 = (function (){var statearr_34650 = state_34642;(statearr_34650[7] = inst_34510__$1);
return statearr_34650;
})();if(cljs.core.truth_(inst_34511))
{var statearr_34651_34735 = state_34642__$1;(statearr_34651_34735[1] = 5);
} else
{var statearr_34652_34736 = state_34642__$1;(statearr_34652_34736[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34643 === 36))
{var inst_34599 = (state_34642[9]);var inst_34603 = cljs.core.chunk_first.call(null,inst_34599);var inst_34604 = cljs.core.chunk_rest.call(null,inst_34599);var inst_34605 = cljs.core.count.call(null,inst_34603);var inst_34578 = inst_34604;var inst_34579 = inst_34603;var inst_34580 = inst_34605;var inst_34581 = 0;var state_34642__$1 = (function (){var statearr_34653 = state_34642;(statearr_34653[10] = inst_34581);
(statearr_34653[11] = inst_34580);
(statearr_34653[12] = inst_34578);
(statearr_34653[13] = inst_34579);
return statearr_34653;
})();var statearr_34654_34737 = state_34642__$1;(statearr_34654_34737[2] = null);
(statearr_34654_34737[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34643 === 5))
{var inst_34517 = cljs.core.deref.call(null,cs);var inst_34518 = cljs.core.seq.call(null,inst_34517);var inst_34519 = inst_34518;var inst_34520 = null;var inst_34521 = 0;var inst_34522 = 0;var state_34642__$1 = (function (){var statearr_34655 = state_34642;(statearr_34655[14] = inst_34522);
(statearr_34655[15] = inst_34521);
(statearr_34655[16] = inst_34520);
(statearr_34655[17] = inst_34519);
return statearr_34655;
})();var statearr_34656_34738 = state_34642__$1;(statearr_34656_34738[2] = null);
(statearr_34656_34738[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34643 === 37))
{var inst_34599 = (state_34642[9]);var inst_34608 = cljs.core.first.call(null,inst_34599);var state_34642__$1 = (function (){var statearr_34657 = state_34642;(statearr_34657[18] = inst_34608);
return statearr_34657;
})();var statearr_34658_34739 = state_34642__$1;(statearr_34658_34739[2] = null);
(statearr_34658_34739[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34643 === 6))
{var inst_34570 = (state_34642[19]);var inst_34569 = cljs.core.deref.call(null,cs);var inst_34570__$1 = cljs.core.keys.call(null,inst_34569);var inst_34571 = cljs.core.count.call(null,inst_34570__$1);var inst_34572 = cljs.core.reset_BANG_.call(null,dctr,inst_34571);var inst_34577 = cljs.core.seq.call(null,inst_34570__$1);var inst_34578 = inst_34577;var inst_34579 = null;var inst_34580 = 0;var inst_34581 = 0;var state_34642__$1 = (function (){var statearr_34659 = state_34642;(statearr_34659[20] = inst_34572);
(statearr_34659[19] = inst_34570__$1);
(statearr_34659[10] = inst_34581);
(statearr_34659[11] = inst_34580);
(statearr_34659[12] = inst_34578);
(statearr_34659[13] = inst_34579);
return statearr_34659;
})();var statearr_34660_34740 = state_34642__$1;(statearr_34660_34740[2] = null);
(statearr_34660_34740[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34643 === 38))
{var inst_34621 = (state_34642[2]);var state_34642__$1 = state_34642;var statearr_34661_34741 = state_34642__$1;(statearr_34661_34741[2] = inst_34621);
(statearr_34661_34741[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34643 === 7))
{var inst_34638 = (state_34642[2]);var state_34642__$1 = state_34642;var statearr_34662_34742 = state_34642__$1;(statearr_34662_34742[2] = inst_34638);
(statearr_34662_34742[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34643 === 39))
{var inst_34599 = (state_34642[9]);var inst_34617 = (state_34642[2]);var inst_34618 = cljs.core.next.call(null,inst_34599);var inst_34578 = inst_34618;var inst_34579 = null;var inst_34580 = 0;var inst_34581 = 0;var state_34642__$1 = (function (){var statearr_34663 = state_34642;(statearr_34663[21] = inst_34617);
(statearr_34663[10] = inst_34581);
(statearr_34663[11] = inst_34580);
(statearr_34663[12] = inst_34578);
(statearr_34663[13] = inst_34579);
return statearr_34663;
})();var statearr_34664_34743 = state_34642__$1;(statearr_34664_34743[2] = null);
(statearr_34664_34743[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34643 === 8))
{var inst_34522 = (state_34642[14]);var inst_34521 = (state_34642[15]);var inst_34524 = (inst_34522 < inst_34521);var inst_34525 = inst_34524;var state_34642__$1 = state_34642;if(cljs.core.truth_(inst_34525))
{var statearr_34665_34744 = state_34642__$1;(statearr_34665_34744[1] = 10);
} else
{var statearr_34666_34745 = state_34642__$1;(statearr_34666_34745[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34643 === 40))
{var inst_34608 = (state_34642[18]);var inst_34609 = (state_34642[2]);var inst_34610 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_34611 = cljs.core.async.untap_STAR_.call(null,m,inst_34608);var state_34642__$1 = (function (){var statearr_34667 = state_34642;(statearr_34667[22] = inst_34610);
(statearr_34667[23] = inst_34609);
return statearr_34667;
})();var statearr_34668_34746 = state_34642__$1;(statearr_34668_34746[2] = inst_34611);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34642__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34643 === 9))
{var inst_34567 = (state_34642[2]);var state_34642__$1 = state_34642;var statearr_34669_34747 = state_34642__$1;(statearr_34669_34747[2] = inst_34567);
(statearr_34669_34747[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34643 === 41))
{var inst_34510 = (state_34642[7]);var inst_34608 = (state_34642[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34642,40,Object,null,39);var inst_34615 = cljs.core.async.put_BANG_.call(null,inst_34608,inst_34510,done);var state_34642__$1 = state_34642;var statearr_34670_34748 = state_34642__$1;(statearr_34670_34748[2] = inst_34615);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34642__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34643 === 10))
{var inst_34522 = (state_34642[14]);var inst_34520 = (state_34642[16]);var inst_34528 = cljs.core._nth.call(null,inst_34520,inst_34522);var inst_34529 = cljs.core.nth.call(null,inst_34528,0,null);var inst_34530 = cljs.core.nth.call(null,inst_34528,1,null);var state_34642__$1 = (function (){var statearr_34671 = state_34642;(statearr_34671[24] = inst_34529);
return statearr_34671;
})();if(cljs.core.truth_(inst_34530))
{var statearr_34672_34749 = state_34642__$1;(statearr_34672_34749[1] = 13);
} else
{var statearr_34673_34750 = state_34642__$1;(statearr_34673_34750[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34643 === 42))
{var state_34642__$1 = state_34642;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34642__$1,45,dchan);
} else
{if((state_val_34643 === 11))
{var inst_34539 = (state_34642[25]);var inst_34519 = (state_34642[17]);var inst_34539__$1 = cljs.core.seq.call(null,inst_34519);var state_34642__$1 = (function (){var statearr_34674 = state_34642;(statearr_34674[25] = inst_34539__$1);
return statearr_34674;
})();if(inst_34539__$1)
{var statearr_34675_34751 = state_34642__$1;(statearr_34675_34751[1] = 16);
} else
{var statearr_34676_34752 = state_34642__$1;(statearr_34676_34752[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34643 === 43))
{var state_34642__$1 = state_34642;var statearr_34677_34753 = state_34642__$1;(statearr_34677_34753[2] = null);
(statearr_34677_34753[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34643 === 12))
{var inst_34565 = (state_34642[2]);var state_34642__$1 = state_34642;var statearr_34678_34754 = state_34642__$1;(statearr_34678_34754[2] = inst_34565);
(statearr_34678_34754[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34643 === 44))
{var inst_34635 = (state_34642[2]);var state_34642__$1 = (function (){var statearr_34679 = state_34642;(statearr_34679[26] = inst_34635);
return statearr_34679;
})();var statearr_34680_34755 = state_34642__$1;(statearr_34680_34755[2] = null);
(statearr_34680_34755[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34643 === 13))
{var inst_34529 = (state_34642[24]);var inst_34532 = cljs.core.async.close_BANG_.call(null,inst_34529);var state_34642__$1 = state_34642;var statearr_34681_34756 = state_34642__$1;(statearr_34681_34756[2] = inst_34532);
(statearr_34681_34756[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34643 === 45))
{var inst_34632 = (state_34642[2]);var state_34642__$1 = state_34642;var statearr_34685_34757 = state_34642__$1;(statearr_34685_34757[2] = inst_34632);
(statearr_34685_34757[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34643 === 14))
{var state_34642__$1 = state_34642;var statearr_34686_34758 = state_34642__$1;(statearr_34686_34758[2] = null);
(statearr_34686_34758[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34643 === 15))
{var inst_34522 = (state_34642[14]);var inst_34521 = (state_34642[15]);var inst_34520 = (state_34642[16]);var inst_34519 = (state_34642[17]);var inst_34535 = (state_34642[2]);var inst_34536 = (inst_34522 + 1);var tmp34682 = inst_34521;var tmp34683 = inst_34520;var tmp34684 = inst_34519;var inst_34519__$1 = tmp34684;var inst_34520__$1 = tmp34683;var inst_34521__$1 = tmp34682;var inst_34522__$1 = inst_34536;var state_34642__$1 = (function (){var statearr_34687 = state_34642;(statearr_34687[14] = inst_34522__$1);
(statearr_34687[15] = inst_34521__$1);
(statearr_34687[16] = inst_34520__$1);
(statearr_34687[17] = inst_34519__$1);
(statearr_34687[27] = inst_34535);
return statearr_34687;
})();var statearr_34688_34759 = state_34642__$1;(statearr_34688_34759[2] = null);
(statearr_34688_34759[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34643 === 16))
{var inst_34539 = (state_34642[25]);var inst_34541 = cljs.core.chunked_seq_QMARK_.call(null,inst_34539);var state_34642__$1 = state_34642;if(inst_34541)
{var statearr_34689_34760 = state_34642__$1;(statearr_34689_34760[1] = 19);
} else
{var statearr_34690_34761 = state_34642__$1;(statearr_34690_34761[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34643 === 17))
{var state_34642__$1 = state_34642;var statearr_34691_34762 = state_34642__$1;(statearr_34691_34762[2] = null);
(statearr_34691_34762[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34643 === 18))
{var inst_34563 = (state_34642[2]);var state_34642__$1 = state_34642;var statearr_34692_34763 = state_34642__$1;(statearr_34692_34763[2] = inst_34563);
(statearr_34692_34763[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34643 === 19))
{var inst_34539 = (state_34642[25]);var inst_34543 = cljs.core.chunk_first.call(null,inst_34539);var inst_34544 = cljs.core.chunk_rest.call(null,inst_34539);var inst_34545 = cljs.core.count.call(null,inst_34543);var inst_34519 = inst_34544;var inst_34520 = inst_34543;var inst_34521 = inst_34545;var inst_34522 = 0;var state_34642__$1 = (function (){var statearr_34693 = state_34642;(statearr_34693[14] = inst_34522);
(statearr_34693[15] = inst_34521);
(statearr_34693[16] = inst_34520);
(statearr_34693[17] = inst_34519);
return statearr_34693;
})();var statearr_34694_34764 = state_34642__$1;(statearr_34694_34764[2] = null);
(statearr_34694_34764[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34643 === 20))
{var inst_34539 = (state_34642[25]);var inst_34549 = cljs.core.first.call(null,inst_34539);var inst_34550 = cljs.core.nth.call(null,inst_34549,0,null);var inst_34551 = cljs.core.nth.call(null,inst_34549,1,null);var state_34642__$1 = (function (){var statearr_34695 = state_34642;(statearr_34695[28] = inst_34550);
return statearr_34695;
})();if(cljs.core.truth_(inst_34551))
{var statearr_34696_34765 = state_34642__$1;(statearr_34696_34765[1] = 22);
} else
{var statearr_34697_34766 = state_34642__$1;(statearr_34697_34766[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34643 === 21))
{var inst_34560 = (state_34642[2]);var state_34642__$1 = state_34642;var statearr_34698_34767 = state_34642__$1;(statearr_34698_34767[2] = inst_34560);
(statearr_34698_34767[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34643 === 22))
{var inst_34550 = (state_34642[28]);var inst_34553 = cljs.core.async.close_BANG_.call(null,inst_34550);var state_34642__$1 = state_34642;var statearr_34699_34768 = state_34642__$1;(statearr_34699_34768[2] = inst_34553);
(statearr_34699_34768[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34643 === 23))
{var state_34642__$1 = state_34642;var statearr_34700_34769 = state_34642__$1;(statearr_34700_34769[2] = null);
(statearr_34700_34769[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34643 === 24))
{var inst_34539 = (state_34642[25]);var inst_34556 = (state_34642[2]);var inst_34557 = cljs.core.next.call(null,inst_34539);var inst_34519 = inst_34557;var inst_34520 = null;var inst_34521 = 0;var inst_34522 = 0;var state_34642__$1 = (function (){var statearr_34701 = state_34642;(statearr_34701[14] = inst_34522);
(statearr_34701[29] = inst_34556);
(statearr_34701[15] = inst_34521);
(statearr_34701[16] = inst_34520);
(statearr_34701[17] = inst_34519);
return statearr_34701;
})();var statearr_34702_34770 = state_34642__$1;(statearr_34702_34770[2] = null);
(statearr_34702_34770[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34643 === 25))
{var inst_34581 = (state_34642[10]);var inst_34580 = (state_34642[11]);var inst_34583 = (inst_34581 < inst_34580);var inst_34584 = inst_34583;var state_34642__$1 = state_34642;if(cljs.core.truth_(inst_34584))
{var statearr_34703_34771 = state_34642__$1;(statearr_34703_34771[1] = 27);
} else
{var statearr_34704_34772 = state_34642__$1;(statearr_34704_34772[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34643 === 26))
{var inst_34570 = (state_34642[19]);var inst_34628 = (state_34642[2]);var inst_34629 = cljs.core.seq.call(null,inst_34570);var state_34642__$1 = (function (){var statearr_34705 = state_34642;(statearr_34705[30] = inst_34628);
return statearr_34705;
})();if(inst_34629)
{var statearr_34706_34773 = state_34642__$1;(statearr_34706_34773[1] = 42);
} else
{var statearr_34707_34774 = state_34642__$1;(statearr_34707_34774[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34643 === 27))
{var inst_34581 = (state_34642[10]);var inst_34579 = (state_34642[13]);var inst_34586 = cljs.core._nth.call(null,inst_34579,inst_34581);var state_34642__$1 = (function (){var statearr_34708 = state_34642;(statearr_34708[8] = inst_34586);
return statearr_34708;
})();var statearr_34709_34775 = state_34642__$1;(statearr_34709_34775[2] = null);
(statearr_34709_34775[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34643 === 28))
{var inst_34599 = (state_34642[9]);var inst_34578 = (state_34642[12]);var inst_34599__$1 = cljs.core.seq.call(null,inst_34578);var state_34642__$1 = (function (){var statearr_34713 = state_34642;(statearr_34713[9] = inst_34599__$1);
return statearr_34713;
})();if(inst_34599__$1)
{var statearr_34714_34776 = state_34642__$1;(statearr_34714_34776[1] = 33);
} else
{var statearr_34715_34777 = state_34642__$1;(statearr_34715_34777[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34643 === 29))
{var inst_34626 = (state_34642[2]);var state_34642__$1 = state_34642;var statearr_34716_34778 = state_34642__$1;(statearr_34716_34778[2] = inst_34626);
(statearr_34716_34778[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34643 === 30))
{var inst_34581 = (state_34642[10]);var inst_34580 = (state_34642[11]);var inst_34578 = (state_34642[12]);var inst_34579 = (state_34642[13]);var inst_34595 = (state_34642[2]);var inst_34596 = (inst_34581 + 1);var tmp34710 = inst_34580;var tmp34711 = inst_34578;var tmp34712 = inst_34579;var inst_34578__$1 = tmp34711;var inst_34579__$1 = tmp34712;var inst_34580__$1 = tmp34710;var inst_34581__$1 = inst_34596;var state_34642__$1 = (function (){var statearr_34717 = state_34642;(statearr_34717[10] = inst_34581__$1);
(statearr_34717[11] = inst_34580__$1);
(statearr_34717[31] = inst_34595);
(statearr_34717[12] = inst_34578__$1);
(statearr_34717[13] = inst_34579__$1);
return statearr_34717;
})();var statearr_34718_34779 = state_34642__$1;(statearr_34718_34779[2] = null);
(statearr_34718_34779[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34643 === 31))
{var inst_34586 = (state_34642[8]);var inst_34587 = (state_34642[2]);var inst_34588 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_34589 = cljs.core.async.untap_STAR_.call(null,m,inst_34586);var state_34642__$1 = (function (){var statearr_34719 = state_34642;(statearr_34719[32] = inst_34588);
(statearr_34719[33] = inst_34587);
return statearr_34719;
})();var statearr_34720_34780 = state_34642__$1;(statearr_34720_34780[2] = inst_34589);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34642__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_34724 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34724[0] = state_machine__5507__auto__);
(statearr_34724[1] = 1);
return statearr_34724;
});
var state_machine__5507__auto____1 = (function (state_34642){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34642);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34725){if((e34725 instanceof Object))
{var ex__5510__auto__ = e34725;var statearr_34726_34781 = state_34642;(statearr_34726_34781[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34642);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34725;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34782 = state_34642;
state_34642 = G__34782;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34642){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34727 = f__5522__auto__.call(null);(statearr_34727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34728);
return statearr_34727;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj34784 = {};return obj34784;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t34894 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34894 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta34895){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta34895 = meta34895;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34894.cljs$lang$type = true;
cljs.core.async.t34894.cljs$lang$ctorStr = "cljs.core.async/t34894";
cljs.core.async.t34894.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34894");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34894.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t34894.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34894.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34894.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34894.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34894.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34894.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t34894.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34894.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34896){var self__ = this;
var _34896__$1 = this;return self__.meta34895;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34894.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34896,meta34895__$1){var self__ = this;
var _34896__$1 = this;return (new cljs.core.async.t34894(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta34895__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t34894 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t34894(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta34895){return (new cljs.core.async.t34894(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta34895));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t34894(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___35003 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34961){var state_val_34962 = (state_34961[1]);if((state_val_34962 === 1))
{var inst_34900 = (state_34961[7]);var inst_34900__$1 = calc_state.call(null);var inst_34901 = cljs.core.seq_QMARK_.call(null,inst_34900__$1);var state_34961__$1 = (function (){var statearr_34963 = state_34961;(statearr_34963[7] = inst_34900__$1);
return statearr_34963;
})();if(inst_34901)
{var statearr_34964_35004 = state_34961__$1;(statearr_34964_35004[1] = 2);
} else
{var statearr_34965_35005 = state_34961__$1;(statearr_34965_35005[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34962 === 2))
{var inst_34900 = (state_34961[7]);var inst_34903 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34900);var state_34961__$1 = state_34961;var statearr_34966_35006 = state_34961__$1;(statearr_34966_35006[2] = inst_34903);
(statearr_34966_35006[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34962 === 3))
{var inst_34900 = (state_34961[7]);var state_34961__$1 = state_34961;var statearr_34967_35007 = state_34961__$1;(statearr_34967_35007[2] = inst_34900);
(statearr_34967_35007[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34962 === 4))
{var inst_34900 = (state_34961[7]);var inst_34906 = (state_34961[2]);var inst_34907 = cljs.core.get.call(null,inst_34906,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_34908 = cljs.core.get.call(null,inst_34906,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_34909 = cljs.core.get.call(null,inst_34906,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_34910 = inst_34900;var state_34961__$1 = (function (){var statearr_34968 = state_34961;(statearr_34968[8] = inst_34909);
(statearr_34968[9] = inst_34907);
(statearr_34968[10] = inst_34908);
(statearr_34968[11] = inst_34910);
return statearr_34968;
})();var statearr_34969_35008 = state_34961__$1;(statearr_34969_35008[2] = null);
(statearr_34969_35008[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34962 === 5))
{var inst_34910 = (state_34961[11]);var inst_34913 = cljs.core.seq_QMARK_.call(null,inst_34910);var state_34961__$1 = state_34961;if(inst_34913)
{var statearr_34970_35009 = state_34961__$1;(statearr_34970_35009[1] = 7);
} else
{var statearr_34971_35010 = state_34961__$1;(statearr_34971_35010[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34962 === 6))
{var inst_34959 = (state_34961[2]);var state_34961__$1 = state_34961;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34961__$1,inst_34959);
} else
{if((state_val_34962 === 7))
{var inst_34910 = (state_34961[11]);var inst_34915 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34910);var state_34961__$1 = state_34961;var statearr_34972_35011 = state_34961__$1;(statearr_34972_35011[2] = inst_34915);
(statearr_34972_35011[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34962 === 8))
{var inst_34910 = (state_34961[11]);var state_34961__$1 = state_34961;var statearr_34973_35012 = state_34961__$1;(statearr_34973_35012[2] = inst_34910);
(statearr_34973_35012[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34962 === 9))
{var inst_34918 = (state_34961[12]);var inst_34918__$1 = (state_34961[2]);var inst_34919 = cljs.core.get.call(null,inst_34918__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_34920 = cljs.core.get.call(null,inst_34918__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_34921 = cljs.core.get.call(null,inst_34918__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_34961__$1 = (function (){var statearr_34974 = state_34961;(statearr_34974[13] = inst_34920);
(statearr_34974[14] = inst_34921);
(statearr_34974[12] = inst_34918__$1);
return statearr_34974;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_34961__$1,10,inst_34919);
} else
{if((state_val_34962 === 10))
{var inst_34926 = (state_34961[15]);var inst_34925 = (state_34961[16]);var inst_34924 = (state_34961[2]);var inst_34925__$1 = cljs.core.nth.call(null,inst_34924,0,null);var inst_34926__$1 = cljs.core.nth.call(null,inst_34924,1,null);var inst_34927 = (inst_34925__$1 == null);var inst_34928 = cljs.core._EQ_.call(null,inst_34926__$1,change);var inst_34929 = (inst_34927) || (inst_34928);var state_34961__$1 = (function (){var statearr_34975 = state_34961;(statearr_34975[15] = inst_34926__$1);
(statearr_34975[16] = inst_34925__$1);
return statearr_34975;
})();if(cljs.core.truth_(inst_34929))
{var statearr_34976_35013 = state_34961__$1;(statearr_34976_35013[1] = 11);
} else
{var statearr_34977_35014 = state_34961__$1;(statearr_34977_35014[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34962 === 11))
{var inst_34925 = (state_34961[16]);var inst_34931 = (inst_34925 == null);var state_34961__$1 = state_34961;if(cljs.core.truth_(inst_34931))
{var statearr_34978_35015 = state_34961__$1;(statearr_34978_35015[1] = 14);
} else
{var statearr_34979_35016 = state_34961__$1;(statearr_34979_35016[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34962 === 12))
{var inst_34921 = (state_34961[14]);var inst_34926 = (state_34961[15]);var inst_34940 = (state_34961[17]);var inst_34940__$1 = inst_34921.call(null,inst_34926);var state_34961__$1 = (function (){var statearr_34980 = state_34961;(statearr_34980[17] = inst_34940__$1);
return statearr_34980;
})();if(cljs.core.truth_(inst_34940__$1))
{var statearr_34981_35017 = state_34961__$1;(statearr_34981_35017[1] = 17);
} else
{var statearr_34982_35018 = state_34961__$1;(statearr_34982_35018[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34962 === 13))
{var inst_34957 = (state_34961[2]);var state_34961__$1 = state_34961;var statearr_34983_35019 = state_34961__$1;(statearr_34983_35019[2] = inst_34957);
(statearr_34983_35019[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34962 === 14))
{var inst_34926 = (state_34961[15]);var inst_34933 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_34926);var state_34961__$1 = state_34961;var statearr_34984_35020 = state_34961__$1;(statearr_34984_35020[2] = inst_34933);
(statearr_34984_35020[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34962 === 15))
{var state_34961__$1 = state_34961;var statearr_34985_35021 = state_34961__$1;(statearr_34985_35021[2] = null);
(statearr_34985_35021[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34962 === 16))
{var inst_34936 = (state_34961[2]);var inst_34937 = calc_state.call(null);var inst_34910 = inst_34937;var state_34961__$1 = (function (){var statearr_34986 = state_34961;(statearr_34986[18] = inst_34936);
(statearr_34986[11] = inst_34910);
return statearr_34986;
})();var statearr_34987_35022 = state_34961__$1;(statearr_34987_35022[2] = null);
(statearr_34987_35022[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34962 === 17))
{var inst_34940 = (state_34961[17]);var state_34961__$1 = state_34961;var statearr_34988_35023 = state_34961__$1;(statearr_34988_35023[2] = inst_34940);
(statearr_34988_35023[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34962 === 18))
{var inst_34920 = (state_34961[13]);var inst_34921 = (state_34961[14]);var inst_34926 = (state_34961[15]);var inst_34943 = cljs.core.empty_QMARK_.call(null,inst_34921);var inst_34944 = inst_34920.call(null,inst_34926);var inst_34945 = cljs.core.not.call(null,inst_34944);var inst_34946 = (inst_34943) && (inst_34945);var state_34961__$1 = state_34961;var statearr_34989_35024 = state_34961__$1;(statearr_34989_35024[2] = inst_34946);
(statearr_34989_35024[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34962 === 19))
{var inst_34948 = (state_34961[2]);var state_34961__$1 = state_34961;if(cljs.core.truth_(inst_34948))
{var statearr_34990_35025 = state_34961__$1;(statearr_34990_35025[1] = 20);
} else
{var statearr_34991_35026 = state_34961__$1;(statearr_34991_35026[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34962 === 20))
{var inst_34925 = (state_34961[16]);var state_34961__$1 = state_34961;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34961__$1,23,out,inst_34925);
} else
{if((state_val_34962 === 21))
{var state_34961__$1 = state_34961;var statearr_34992_35027 = state_34961__$1;(statearr_34992_35027[2] = null);
(statearr_34992_35027[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34962 === 22))
{var inst_34918 = (state_34961[12]);var inst_34954 = (state_34961[2]);var inst_34910 = inst_34918;var state_34961__$1 = (function (){var statearr_34993 = state_34961;(statearr_34993[11] = inst_34910);
(statearr_34993[19] = inst_34954);
return statearr_34993;
})();var statearr_34994_35028 = state_34961__$1;(statearr_34994_35028[2] = null);
(statearr_34994_35028[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34962 === 23))
{var inst_34951 = (state_34961[2]);var state_34961__$1 = state_34961;var statearr_34995_35029 = state_34961__$1;(statearr_34995_35029[2] = inst_34951);
(statearr_34995_35029[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_34999 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34999[0] = state_machine__5507__auto__);
(statearr_34999[1] = 1);
return statearr_34999;
});
var state_machine__5507__auto____1 = (function (state_34961){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34961);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35000){if((e35000 instanceof Object))
{var ex__5510__auto__ = e35000;var statearr_35001_35030 = state_34961;(statearr_35001_35030[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34961);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35000;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35031 = state_34961;
state_34961 = G__35031;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34961){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35002 = f__5522__auto__.call(null);(statearr_35002[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35003);
return statearr_35002;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj35033 = {};return obj35033;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3406__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3406__auto__,mults){
return (function (p1__35034_SHARP_){if(cljs.core.truth_(p1__35034_SHARP_.call(null,topic)))
{return p1__35034_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__35034_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t35159 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35159 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta35160){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta35160 = meta35160;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35159.cljs$lang$type = true;
cljs.core.async.t35159.cljs$lang$ctorStr = "cljs.core.async/t35159";
cljs.core.async.t35159.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t35159");
});})(mults,ensure_mult))
;
cljs.core.async.t35159.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t35159.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t35159.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t35159.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t35159.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t35159.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t35159.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t35159.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35161){var self__ = this;
var _35161__$1 = this;return self__.meta35160;
});})(mults,ensure_mult))
;
cljs.core.async.t35159.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35161,meta35160__$1){var self__ = this;
var _35161__$1 = this;return (new cljs.core.async.t35159(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta35160__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t35159 = ((function (mults,ensure_mult){
return (function __GT_t35159(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta35160){return (new cljs.core.async.t35159(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta35160));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t35159(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___35283 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35235){var state_val_35236 = (state_35235[1]);if((state_val_35236 === 1))
{var state_35235__$1 = state_35235;var statearr_35237_35284 = state_35235__$1;(statearr_35237_35284[2] = null);
(statearr_35237_35284[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35236 === 2))
{var state_35235__$1 = state_35235;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35235__$1,4,ch);
} else
{if((state_val_35236 === 3))
{var inst_35233 = (state_35235[2]);var state_35235__$1 = state_35235;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35235__$1,inst_35233);
} else
{if((state_val_35236 === 4))
{var inst_35164 = (state_35235[7]);var inst_35164__$1 = (state_35235[2]);var inst_35165 = (inst_35164__$1 == null);var state_35235__$1 = (function (){var statearr_35238 = state_35235;(statearr_35238[7] = inst_35164__$1);
return statearr_35238;
})();if(cljs.core.truth_(inst_35165))
{var statearr_35239_35285 = state_35235__$1;(statearr_35239_35285[1] = 5);
} else
{var statearr_35240_35286 = state_35235__$1;(statearr_35240_35286[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35236 === 5))
{var inst_35171 = cljs.core.deref.call(null,mults);var inst_35172 = cljs.core.vals.call(null,inst_35171);var inst_35173 = cljs.core.seq.call(null,inst_35172);var inst_35174 = inst_35173;var inst_35175 = null;var inst_35176 = 0;var inst_35177 = 0;var state_35235__$1 = (function (){var statearr_35241 = state_35235;(statearr_35241[8] = inst_35177);
(statearr_35241[9] = inst_35175);
(statearr_35241[10] = inst_35176);
(statearr_35241[11] = inst_35174);
return statearr_35241;
})();var statearr_35242_35287 = state_35235__$1;(statearr_35242_35287[2] = null);
(statearr_35242_35287[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35236 === 6))
{var inst_35214 = (state_35235[12]);var inst_35212 = (state_35235[13]);var inst_35164 = (state_35235[7]);var inst_35212__$1 = topic_fn.call(null,inst_35164);var inst_35213 = cljs.core.deref.call(null,mults);var inst_35214__$1 = cljs.core.get.call(null,inst_35213,inst_35212__$1);var state_35235__$1 = (function (){var statearr_35243 = state_35235;(statearr_35243[12] = inst_35214__$1);
(statearr_35243[13] = inst_35212__$1);
return statearr_35243;
})();if(cljs.core.truth_(inst_35214__$1))
{var statearr_35244_35288 = state_35235__$1;(statearr_35244_35288[1] = 19);
} else
{var statearr_35245_35289 = state_35235__$1;(statearr_35245_35289[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35236 === 7))
{var inst_35231 = (state_35235[2]);var state_35235__$1 = state_35235;var statearr_35246_35290 = state_35235__$1;(statearr_35246_35290[2] = inst_35231);
(statearr_35246_35290[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35236 === 8))
{var inst_35177 = (state_35235[8]);var inst_35176 = (state_35235[10]);var inst_35179 = (inst_35177 < inst_35176);var inst_35180 = inst_35179;var state_35235__$1 = state_35235;if(cljs.core.truth_(inst_35180))
{var statearr_35250_35291 = state_35235__$1;(statearr_35250_35291[1] = 10);
} else
{var statearr_35251_35292 = state_35235__$1;(statearr_35251_35292[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35236 === 9))
{var inst_35210 = (state_35235[2]);var state_35235__$1 = state_35235;var statearr_35252_35293 = state_35235__$1;(statearr_35252_35293[2] = inst_35210);
(statearr_35252_35293[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35236 === 10))
{var inst_35177 = (state_35235[8]);var inst_35175 = (state_35235[9]);var inst_35176 = (state_35235[10]);var inst_35174 = (state_35235[11]);var inst_35182 = cljs.core._nth.call(null,inst_35175,inst_35177);var inst_35183 = cljs.core.async.muxch_STAR_.call(null,inst_35182);var inst_35184 = cljs.core.async.close_BANG_.call(null,inst_35183);var inst_35185 = (inst_35177 + 1);var tmp35247 = inst_35175;var tmp35248 = inst_35176;var tmp35249 = inst_35174;var inst_35174__$1 = tmp35249;var inst_35175__$1 = tmp35247;var inst_35176__$1 = tmp35248;var inst_35177__$1 = inst_35185;var state_35235__$1 = (function (){var statearr_35253 = state_35235;(statearr_35253[8] = inst_35177__$1);
(statearr_35253[9] = inst_35175__$1);
(statearr_35253[10] = inst_35176__$1);
(statearr_35253[11] = inst_35174__$1);
(statearr_35253[14] = inst_35184);
return statearr_35253;
})();var statearr_35254_35294 = state_35235__$1;(statearr_35254_35294[2] = null);
(statearr_35254_35294[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35236 === 11))
{var inst_35174 = (state_35235[11]);var inst_35188 = (state_35235[15]);var inst_35188__$1 = cljs.core.seq.call(null,inst_35174);var state_35235__$1 = (function (){var statearr_35255 = state_35235;(statearr_35255[15] = inst_35188__$1);
return statearr_35255;
})();if(inst_35188__$1)
{var statearr_35256_35295 = state_35235__$1;(statearr_35256_35295[1] = 13);
} else
{var statearr_35257_35296 = state_35235__$1;(statearr_35257_35296[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35236 === 12))
{var inst_35208 = (state_35235[2]);var state_35235__$1 = state_35235;var statearr_35258_35297 = state_35235__$1;(statearr_35258_35297[2] = inst_35208);
(statearr_35258_35297[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35236 === 13))
{var inst_35188 = (state_35235[15]);var inst_35190 = cljs.core.chunked_seq_QMARK_.call(null,inst_35188);var state_35235__$1 = state_35235;if(inst_35190)
{var statearr_35259_35298 = state_35235__$1;(statearr_35259_35298[1] = 16);
} else
{var statearr_35260_35299 = state_35235__$1;(statearr_35260_35299[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35236 === 14))
{var state_35235__$1 = state_35235;var statearr_35261_35300 = state_35235__$1;(statearr_35261_35300[2] = null);
(statearr_35261_35300[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35236 === 15))
{var inst_35206 = (state_35235[2]);var state_35235__$1 = state_35235;var statearr_35262_35301 = state_35235__$1;(statearr_35262_35301[2] = inst_35206);
(statearr_35262_35301[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35236 === 16))
{var inst_35188 = (state_35235[15]);var inst_35192 = cljs.core.chunk_first.call(null,inst_35188);var inst_35193 = cljs.core.chunk_rest.call(null,inst_35188);var inst_35194 = cljs.core.count.call(null,inst_35192);var inst_35174 = inst_35193;var inst_35175 = inst_35192;var inst_35176 = inst_35194;var inst_35177 = 0;var state_35235__$1 = (function (){var statearr_35263 = state_35235;(statearr_35263[8] = inst_35177);
(statearr_35263[9] = inst_35175);
(statearr_35263[10] = inst_35176);
(statearr_35263[11] = inst_35174);
return statearr_35263;
})();var statearr_35264_35302 = state_35235__$1;(statearr_35264_35302[2] = null);
(statearr_35264_35302[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35236 === 17))
{var inst_35188 = (state_35235[15]);var inst_35197 = cljs.core.first.call(null,inst_35188);var inst_35198 = cljs.core.async.muxch_STAR_.call(null,inst_35197);var inst_35199 = cljs.core.async.close_BANG_.call(null,inst_35198);var inst_35200 = cljs.core.next.call(null,inst_35188);var inst_35174 = inst_35200;var inst_35175 = null;var inst_35176 = 0;var inst_35177 = 0;var state_35235__$1 = (function (){var statearr_35265 = state_35235;(statearr_35265[8] = inst_35177);
(statearr_35265[9] = inst_35175);
(statearr_35265[10] = inst_35176);
(statearr_35265[11] = inst_35174);
(statearr_35265[16] = inst_35199);
return statearr_35265;
})();var statearr_35266_35303 = state_35235__$1;(statearr_35266_35303[2] = null);
(statearr_35266_35303[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35236 === 18))
{var inst_35203 = (state_35235[2]);var state_35235__$1 = state_35235;var statearr_35267_35304 = state_35235__$1;(statearr_35267_35304[2] = inst_35203);
(statearr_35267_35304[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35236 === 19))
{var state_35235__$1 = state_35235;var statearr_35268_35305 = state_35235__$1;(statearr_35268_35305[2] = null);
(statearr_35268_35305[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35236 === 20))
{var state_35235__$1 = state_35235;var statearr_35269_35306 = state_35235__$1;(statearr_35269_35306[2] = null);
(statearr_35269_35306[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35236 === 21))
{var inst_35228 = (state_35235[2]);var state_35235__$1 = (function (){var statearr_35270 = state_35235;(statearr_35270[17] = inst_35228);
return statearr_35270;
})();var statearr_35271_35307 = state_35235__$1;(statearr_35271_35307[2] = null);
(statearr_35271_35307[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35236 === 22))
{var inst_35225 = (state_35235[2]);var state_35235__$1 = state_35235;var statearr_35272_35308 = state_35235__$1;(statearr_35272_35308[2] = inst_35225);
(statearr_35272_35308[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35236 === 23))
{var inst_35212 = (state_35235[13]);var inst_35216 = (state_35235[2]);var inst_35217 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35212);var state_35235__$1 = (function (){var statearr_35273 = state_35235;(statearr_35273[18] = inst_35216);
return statearr_35273;
})();var statearr_35274_35309 = state_35235__$1;(statearr_35274_35309[2] = inst_35217);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35235__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35236 === 24))
{var inst_35214 = (state_35235[12]);var inst_35164 = (state_35235[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35235,23,Object,null,22);var inst_35221 = cljs.core.async.muxch_STAR_.call(null,inst_35214);var state_35235__$1 = state_35235;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35235__$1,25,inst_35221,inst_35164);
} else
{if((state_val_35236 === 25))
{var inst_35223 = (state_35235[2]);var state_35235__$1 = state_35235;var statearr_35275_35310 = state_35235__$1;(statearr_35275_35310[2] = inst_35223);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35235__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_35279 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35279[0] = state_machine__5507__auto__);
(statearr_35279[1] = 1);
return statearr_35279;
});
var state_machine__5507__auto____1 = (function (state_35235){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35235);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35280){if((e35280 instanceof Object))
{var ex__5510__auto__ = e35280;var statearr_35281_35311 = state_35235;(statearr_35281_35311[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35235);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35280;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35312 = state_35235;
state_35235 = G__35312;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35235){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35282 = f__5522__auto__.call(null);(statearr_35282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35283);
return statearr_35282;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__5521__auto___35449 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35419){var state_val_35420 = (state_35419[1]);if((state_val_35420 === 1))
{var state_35419__$1 = state_35419;var statearr_35421_35450 = state_35419__$1;(statearr_35421_35450[2] = null);
(statearr_35421_35450[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35420 === 2))
{var inst_35382 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_35383 = 0;var state_35419__$1 = (function (){var statearr_35422 = state_35419;(statearr_35422[7] = inst_35383);
(statearr_35422[8] = inst_35382);
return statearr_35422;
})();var statearr_35423_35451 = state_35419__$1;(statearr_35423_35451[2] = null);
(statearr_35423_35451[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35420 === 3))
{var inst_35417 = (state_35419[2]);var state_35419__$1 = state_35419;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35419__$1,inst_35417);
} else
{if((state_val_35420 === 4))
{var inst_35383 = (state_35419[7]);var inst_35385 = (inst_35383 < cnt);var state_35419__$1 = state_35419;if(cljs.core.truth_(inst_35385))
{var statearr_35424_35452 = state_35419__$1;(statearr_35424_35452[1] = 6);
} else
{var statearr_35425_35453 = state_35419__$1;(statearr_35425_35453[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35420 === 5))
{var inst_35403 = (state_35419[2]);var state_35419__$1 = (function (){var statearr_35426 = state_35419;(statearr_35426[9] = inst_35403);
return statearr_35426;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35419__$1,12,dchan);
} else
{if((state_val_35420 === 6))
{var state_35419__$1 = state_35419;var statearr_35427_35454 = state_35419__$1;(statearr_35427_35454[2] = null);
(statearr_35427_35454[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35420 === 7))
{var state_35419__$1 = state_35419;var statearr_35428_35455 = state_35419__$1;(statearr_35428_35455[2] = null);
(statearr_35428_35455[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35420 === 8))
{var inst_35401 = (state_35419[2]);var state_35419__$1 = state_35419;var statearr_35429_35456 = state_35419__$1;(statearr_35429_35456[2] = inst_35401);
(statearr_35429_35456[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35420 === 9))
{var inst_35383 = (state_35419[7]);var inst_35396 = (state_35419[2]);var inst_35397 = (inst_35383 + 1);var inst_35383__$1 = inst_35397;var state_35419__$1 = (function (){var statearr_35430 = state_35419;(statearr_35430[7] = inst_35383__$1);
(statearr_35430[10] = inst_35396);
return statearr_35430;
})();var statearr_35431_35457 = state_35419__$1;(statearr_35431_35457[2] = null);
(statearr_35431_35457[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35420 === 10))
{var inst_35387 = (state_35419[2]);var inst_35388 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_35419__$1 = (function (){var statearr_35432 = state_35419;(statearr_35432[11] = inst_35387);
return statearr_35432;
})();var statearr_35433_35458 = state_35419__$1;(statearr_35433_35458[2] = inst_35388);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35419__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35420 === 11))
{var inst_35383 = (state_35419[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35419,10,Object,null,9);var inst_35392 = chs__$1.call(null,inst_35383);var inst_35393 = done.call(null,inst_35383);var inst_35394 = cljs.core.async.take_BANG_.call(null,inst_35392,inst_35393);var state_35419__$1 = state_35419;var statearr_35434_35459 = state_35419__$1;(statearr_35434_35459[2] = inst_35394);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35419__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35420 === 12))
{var inst_35405 = (state_35419[12]);var inst_35405__$1 = (state_35419[2]);var inst_35406 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_35405__$1);var state_35419__$1 = (function (){var statearr_35435 = state_35419;(statearr_35435[12] = inst_35405__$1);
return statearr_35435;
})();if(cljs.core.truth_(inst_35406))
{var statearr_35436_35460 = state_35419__$1;(statearr_35436_35460[1] = 13);
} else
{var statearr_35437_35461 = state_35419__$1;(statearr_35437_35461[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35420 === 13))
{var inst_35408 = cljs.core.async.close_BANG_.call(null,out);var state_35419__$1 = state_35419;var statearr_35438_35462 = state_35419__$1;(statearr_35438_35462[2] = inst_35408);
(statearr_35438_35462[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35420 === 14))
{var inst_35405 = (state_35419[12]);var inst_35410 = cljs.core.apply.call(null,f,inst_35405);var state_35419__$1 = state_35419;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35419__$1,16,out,inst_35410);
} else
{if((state_val_35420 === 15))
{var inst_35415 = (state_35419[2]);var state_35419__$1 = state_35419;var statearr_35439_35463 = state_35419__$1;(statearr_35439_35463[2] = inst_35415);
(statearr_35439_35463[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35420 === 16))
{var inst_35412 = (state_35419[2]);var state_35419__$1 = (function (){var statearr_35440 = state_35419;(statearr_35440[13] = inst_35412);
return statearr_35440;
})();var statearr_35441_35464 = state_35419__$1;(statearr_35441_35464[2] = null);
(statearr_35441_35464[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_35445 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35445[0] = state_machine__5507__auto__);
(statearr_35445[1] = 1);
return statearr_35445;
});
var state_machine__5507__auto____1 = (function (state_35419){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35419);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35446){if((e35446 instanceof Object))
{var ex__5510__auto__ = e35446;var statearr_35447_35465 = state_35419;(statearr_35447_35465[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35419);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35446;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35466 = state_35419;
state_35419 = G__35466;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35419){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35448 = f__5522__auto__.call(null);(statearr_35448[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35449);
return statearr_35448;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35574 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35550){var state_val_35551 = (state_35550[1]);if((state_val_35551 === 1))
{var inst_35521 = cljs.core.vec.call(null,chs);var inst_35522 = inst_35521;var state_35550__$1 = (function (){var statearr_35552 = state_35550;(statearr_35552[7] = inst_35522);
return statearr_35552;
})();var statearr_35553_35575 = state_35550__$1;(statearr_35553_35575[2] = null);
(statearr_35553_35575[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35551 === 2))
{var inst_35522 = (state_35550[7]);var inst_35524 = cljs.core.count.call(null,inst_35522);var inst_35525 = (inst_35524 > 0);var state_35550__$1 = state_35550;if(cljs.core.truth_(inst_35525))
{var statearr_35554_35576 = state_35550__$1;(statearr_35554_35576[1] = 4);
} else
{var statearr_35555_35577 = state_35550__$1;(statearr_35555_35577[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35551 === 3))
{var inst_35548 = (state_35550[2]);var state_35550__$1 = state_35550;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35550__$1,inst_35548);
} else
{if((state_val_35551 === 4))
{var inst_35522 = (state_35550[7]);var state_35550__$1 = state_35550;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_35550__$1,7,inst_35522);
} else
{if((state_val_35551 === 5))
{var inst_35544 = cljs.core.async.close_BANG_.call(null,out);var state_35550__$1 = state_35550;var statearr_35556_35578 = state_35550__$1;(statearr_35556_35578[2] = inst_35544);
(statearr_35556_35578[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35551 === 6))
{var inst_35546 = (state_35550[2]);var state_35550__$1 = state_35550;var statearr_35557_35579 = state_35550__$1;(statearr_35557_35579[2] = inst_35546);
(statearr_35557_35579[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35551 === 7))
{var inst_35530 = (state_35550[8]);var inst_35529 = (state_35550[9]);var inst_35529__$1 = (state_35550[2]);var inst_35530__$1 = cljs.core.nth.call(null,inst_35529__$1,0,null);var inst_35531 = cljs.core.nth.call(null,inst_35529__$1,1,null);var inst_35532 = (inst_35530__$1 == null);var state_35550__$1 = (function (){var statearr_35558 = state_35550;(statearr_35558[8] = inst_35530__$1);
(statearr_35558[10] = inst_35531);
(statearr_35558[9] = inst_35529__$1);
return statearr_35558;
})();if(cljs.core.truth_(inst_35532))
{var statearr_35559_35580 = state_35550__$1;(statearr_35559_35580[1] = 8);
} else
{var statearr_35560_35581 = state_35550__$1;(statearr_35560_35581[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35551 === 8))
{var inst_35530 = (state_35550[8]);var inst_35531 = (state_35550[10]);var inst_35529 = (state_35550[9]);var inst_35522 = (state_35550[7]);var inst_35534 = (function (){var c = inst_35531;var v = inst_35530;var vec__35527 = inst_35529;var cs = inst_35522;return ((function (c,v,vec__35527,cs,inst_35530,inst_35531,inst_35529,inst_35522,state_val_35551){
return (function (p1__35467_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__35467_SHARP_);
});
;})(c,v,vec__35527,cs,inst_35530,inst_35531,inst_35529,inst_35522,state_val_35551))
})();var inst_35535 = cljs.core.filterv.call(null,inst_35534,inst_35522);var inst_35522__$1 = inst_35535;var state_35550__$1 = (function (){var statearr_35561 = state_35550;(statearr_35561[7] = inst_35522__$1);
return statearr_35561;
})();var statearr_35562_35582 = state_35550__$1;(statearr_35562_35582[2] = null);
(statearr_35562_35582[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35551 === 9))
{var inst_35530 = (state_35550[8]);var state_35550__$1 = state_35550;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35550__$1,11,out,inst_35530);
} else
{if((state_val_35551 === 10))
{var inst_35542 = (state_35550[2]);var state_35550__$1 = state_35550;var statearr_35564_35583 = state_35550__$1;(statearr_35564_35583[2] = inst_35542);
(statearr_35564_35583[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35551 === 11))
{var inst_35522 = (state_35550[7]);var inst_35539 = (state_35550[2]);var tmp35563 = inst_35522;var inst_35522__$1 = tmp35563;var state_35550__$1 = (function (){var statearr_35565 = state_35550;(statearr_35565[7] = inst_35522__$1);
(statearr_35565[11] = inst_35539);
return statearr_35565;
})();var statearr_35566_35584 = state_35550__$1;(statearr_35566_35584[2] = null);
(statearr_35566_35584[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_35570 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35570[0] = state_machine__5507__auto__);
(statearr_35570[1] = 1);
return statearr_35570;
});
var state_machine__5507__auto____1 = (function (state_35550){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35550);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35571){if((e35571 instanceof Object))
{var ex__5510__auto__ = e35571;var statearr_35572_35585 = state_35550;(statearr_35572_35585[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35550);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35571;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35586 = state_35550;
state_35550 = G__35586;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35550){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35573 = f__5522__auto__.call(null);(statearr_35573[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35574);
return statearr_35573;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35679 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35656){var state_val_35657 = (state_35656[1]);if((state_val_35657 === 1))
{var inst_35633 = 0;var state_35656__$1 = (function (){var statearr_35658 = state_35656;(statearr_35658[7] = inst_35633);
return statearr_35658;
})();var statearr_35659_35680 = state_35656__$1;(statearr_35659_35680[2] = null);
(statearr_35659_35680[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35657 === 2))
{var inst_35633 = (state_35656[7]);var inst_35635 = (inst_35633 < n);var state_35656__$1 = state_35656;if(cljs.core.truth_(inst_35635))
{var statearr_35660_35681 = state_35656__$1;(statearr_35660_35681[1] = 4);
} else
{var statearr_35661_35682 = state_35656__$1;(statearr_35661_35682[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35657 === 3))
{var inst_35653 = (state_35656[2]);var inst_35654 = cljs.core.async.close_BANG_.call(null,out);var state_35656__$1 = (function (){var statearr_35662 = state_35656;(statearr_35662[8] = inst_35653);
return statearr_35662;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35656__$1,inst_35654);
} else
{if((state_val_35657 === 4))
{var state_35656__$1 = state_35656;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35656__$1,7,ch);
} else
{if((state_val_35657 === 5))
{var state_35656__$1 = state_35656;var statearr_35663_35683 = state_35656__$1;(statearr_35663_35683[2] = null);
(statearr_35663_35683[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35657 === 6))
{var inst_35651 = (state_35656[2]);var state_35656__$1 = state_35656;var statearr_35664_35684 = state_35656__$1;(statearr_35664_35684[2] = inst_35651);
(statearr_35664_35684[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35657 === 7))
{var inst_35638 = (state_35656[9]);var inst_35638__$1 = (state_35656[2]);var inst_35639 = (inst_35638__$1 == null);var inst_35640 = cljs.core.not.call(null,inst_35639);var state_35656__$1 = (function (){var statearr_35665 = state_35656;(statearr_35665[9] = inst_35638__$1);
return statearr_35665;
})();if(inst_35640)
{var statearr_35666_35685 = state_35656__$1;(statearr_35666_35685[1] = 8);
} else
{var statearr_35667_35686 = state_35656__$1;(statearr_35667_35686[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35657 === 8))
{var inst_35638 = (state_35656[9]);var state_35656__$1 = state_35656;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35656__$1,11,out,inst_35638);
} else
{if((state_val_35657 === 9))
{var state_35656__$1 = state_35656;var statearr_35668_35687 = state_35656__$1;(statearr_35668_35687[2] = null);
(statearr_35668_35687[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35657 === 10))
{var inst_35648 = (state_35656[2]);var state_35656__$1 = state_35656;var statearr_35669_35688 = state_35656__$1;(statearr_35669_35688[2] = inst_35648);
(statearr_35669_35688[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35657 === 11))
{var inst_35633 = (state_35656[7]);var inst_35643 = (state_35656[2]);var inst_35644 = (inst_35633 + 1);var inst_35633__$1 = inst_35644;var state_35656__$1 = (function (){var statearr_35670 = state_35656;(statearr_35670[10] = inst_35643);
(statearr_35670[7] = inst_35633__$1);
return statearr_35670;
})();var statearr_35671_35689 = state_35656__$1;(statearr_35671_35689[2] = null);
(statearr_35671_35689[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_35675 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_35675[0] = state_machine__5507__auto__);
(statearr_35675[1] = 1);
return statearr_35675;
});
var state_machine__5507__auto____1 = (function (state_35656){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35656);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35676){if((e35676 instanceof Object))
{var ex__5510__auto__ = e35676;var statearr_35677_35690 = state_35656;(statearr_35677_35690[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35656);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35676;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35691 = state_35656;
state_35656 = G__35691;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35656){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35678 = f__5522__auto__.call(null);(statearr_35678[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35679);
return statearr_35678;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35788 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35763){var state_val_35764 = (state_35763[1]);if((state_val_35764 === 1))
{var inst_35740 = null;var state_35763__$1 = (function (){var statearr_35765 = state_35763;(statearr_35765[7] = inst_35740);
return statearr_35765;
})();var statearr_35766_35789 = state_35763__$1;(statearr_35766_35789[2] = null);
(statearr_35766_35789[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35764 === 2))
{var state_35763__$1 = state_35763;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35763__$1,4,ch);
} else
{if((state_val_35764 === 3))
{var inst_35760 = (state_35763[2]);var inst_35761 = cljs.core.async.close_BANG_.call(null,out);var state_35763__$1 = (function (){var statearr_35767 = state_35763;(statearr_35767[8] = inst_35760);
return statearr_35767;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35763__$1,inst_35761);
} else
{if((state_val_35764 === 4))
{var inst_35743 = (state_35763[9]);var inst_35743__$1 = (state_35763[2]);var inst_35744 = (inst_35743__$1 == null);var inst_35745 = cljs.core.not.call(null,inst_35744);var state_35763__$1 = (function (){var statearr_35768 = state_35763;(statearr_35768[9] = inst_35743__$1);
return statearr_35768;
})();if(inst_35745)
{var statearr_35769_35790 = state_35763__$1;(statearr_35769_35790[1] = 5);
} else
{var statearr_35770_35791 = state_35763__$1;(statearr_35770_35791[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35764 === 5))
{var inst_35743 = (state_35763[9]);var inst_35740 = (state_35763[7]);var inst_35747 = cljs.core._EQ_.call(null,inst_35743,inst_35740);var state_35763__$1 = state_35763;if(inst_35747)
{var statearr_35771_35792 = state_35763__$1;(statearr_35771_35792[1] = 8);
} else
{var statearr_35772_35793 = state_35763__$1;(statearr_35772_35793[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35764 === 6))
{var state_35763__$1 = state_35763;var statearr_35774_35794 = state_35763__$1;(statearr_35774_35794[2] = null);
(statearr_35774_35794[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35764 === 7))
{var inst_35758 = (state_35763[2]);var state_35763__$1 = state_35763;var statearr_35775_35795 = state_35763__$1;(statearr_35775_35795[2] = inst_35758);
(statearr_35775_35795[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35764 === 8))
{var inst_35740 = (state_35763[7]);var tmp35773 = inst_35740;var inst_35740__$1 = tmp35773;var state_35763__$1 = (function (){var statearr_35776 = state_35763;(statearr_35776[7] = inst_35740__$1);
return statearr_35776;
})();var statearr_35777_35796 = state_35763__$1;(statearr_35777_35796[2] = null);
(statearr_35777_35796[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35764 === 9))
{var inst_35743 = (state_35763[9]);var state_35763__$1 = state_35763;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35763__$1,11,out,inst_35743);
} else
{if((state_val_35764 === 10))
{var inst_35755 = (state_35763[2]);var state_35763__$1 = state_35763;var statearr_35778_35797 = state_35763__$1;(statearr_35778_35797[2] = inst_35755);
(statearr_35778_35797[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35764 === 11))
{var inst_35743 = (state_35763[9]);var inst_35752 = (state_35763[2]);var inst_35740 = inst_35743;var state_35763__$1 = (function (){var statearr_35779 = state_35763;(statearr_35779[7] = inst_35740);
(statearr_35779[10] = inst_35752);
return statearr_35779;
})();var statearr_35780_35798 = state_35763__$1;(statearr_35780_35798[2] = null);
(statearr_35780_35798[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_35784 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_35784[0] = state_machine__5507__auto__);
(statearr_35784[1] = 1);
return statearr_35784;
});
var state_machine__5507__auto____1 = (function (state_35763){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35763);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35785){if((e35785 instanceof Object))
{var ex__5510__auto__ = e35785;var statearr_35786_35799 = state_35763;(statearr_35786_35799[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35763);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35785;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35800 = state_35763;
state_35763 = G__35800;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35763){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35787 = f__5522__auto__.call(null);(statearr_35787[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35788);
return statearr_35787;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35935 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35905){var state_val_35906 = (state_35905[1]);if((state_val_35906 === 1))
{var inst_35868 = (new Array(n));var inst_35869 = inst_35868;var inst_35870 = 0;var state_35905__$1 = (function (){var statearr_35907 = state_35905;(statearr_35907[7] = inst_35869);
(statearr_35907[8] = inst_35870);
return statearr_35907;
})();var statearr_35908_35936 = state_35905__$1;(statearr_35908_35936[2] = null);
(statearr_35908_35936[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35906 === 2))
{var state_35905__$1 = state_35905;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35905__$1,4,ch);
} else
{if((state_val_35906 === 3))
{var inst_35903 = (state_35905[2]);var state_35905__$1 = state_35905;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35905__$1,inst_35903);
} else
{if((state_val_35906 === 4))
{var inst_35873 = (state_35905[9]);var inst_35873__$1 = (state_35905[2]);var inst_35874 = (inst_35873__$1 == null);var inst_35875 = cljs.core.not.call(null,inst_35874);var state_35905__$1 = (function (){var statearr_35909 = state_35905;(statearr_35909[9] = inst_35873__$1);
return statearr_35909;
})();if(inst_35875)
{var statearr_35910_35937 = state_35905__$1;(statearr_35910_35937[1] = 5);
} else
{var statearr_35911_35938 = state_35905__$1;(statearr_35911_35938[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35906 === 5))
{var inst_35869 = (state_35905[7]);var inst_35870 = (state_35905[8]);var inst_35878 = (state_35905[10]);var inst_35873 = (state_35905[9]);var inst_35877 = (inst_35869[inst_35870] = inst_35873);var inst_35878__$1 = (inst_35870 + 1);var inst_35879 = (inst_35878__$1 < n);var state_35905__$1 = (function (){var statearr_35912 = state_35905;(statearr_35912[11] = inst_35877);
(statearr_35912[10] = inst_35878__$1);
return statearr_35912;
})();if(cljs.core.truth_(inst_35879))
{var statearr_35913_35939 = state_35905__$1;(statearr_35913_35939[1] = 8);
} else
{var statearr_35914_35940 = state_35905__$1;(statearr_35914_35940[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35906 === 6))
{var inst_35870 = (state_35905[8]);var inst_35891 = (inst_35870 > 0);var state_35905__$1 = state_35905;if(cljs.core.truth_(inst_35891))
{var statearr_35916_35941 = state_35905__$1;(statearr_35916_35941[1] = 12);
} else
{var statearr_35917_35942 = state_35905__$1;(statearr_35917_35942[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35906 === 7))
{var inst_35901 = (state_35905[2]);var state_35905__$1 = state_35905;var statearr_35918_35943 = state_35905__$1;(statearr_35918_35943[2] = inst_35901);
(statearr_35918_35943[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35906 === 8))
{var inst_35869 = (state_35905[7]);var inst_35878 = (state_35905[10]);var tmp35915 = inst_35869;var inst_35869__$1 = tmp35915;var inst_35870 = inst_35878;var state_35905__$1 = (function (){var statearr_35919 = state_35905;(statearr_35919[7] = inst_35869__$1);
(statearr_35919[8] = inst_35870);
return statearr_35919;
})();var statearr_35920_35944 = state_35905__$1;(statearr_35920_35944[2] = null);
(statearr_35920_35944[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35906 === 9))
{var inst_35869 = (state_35905[7]);var inst_35883 = cljs.core.vec.call(null,inst_35869);var state_35905__$1 = state_35905;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35905__$1,11,out,inst_35883);
} else
{if((state_val_35906 === 10))
{var inst_35889 = (state_35905[2]);var state_35905__$1 = state_35905;var statearr_35921_35945 = state_35905__$1;(statearr_35921_35945[2] = inst_35889);
(statearr_35921_35945[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35906 === 11))
{var inst_35885 = (state_35905[2]);var inst_35886 = (new Array(n));var inst_35869 = inst_35886;var inst_35870 = 0;var state_35905__$1 = (function (){var statearr_35922 = state_35905;(statearr_35922[7] = inst_35869);
(statearr_35922[8] = inst_35870);
(statearr_35922[12] = inst_35885);
return statearr_35922;
})();var statearr_35923_35946 = state_35905__$1;(statearr_35923_35946[2] = null);
(statearr_35923_35946[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35906 === 12))
{var inst_35869 = (state_35905[7]);var inst_35893 = cljs.core.vec.call(null,inst_35869);var state_35905__$1 = state_35905;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35905__$1,15,out,inst_35893);
} else
{if((state_val_35906 === 13))
{var state_35905__$1 = state_35905;var statearr_35924_35947 = state_35905__$1;(statearr_35924_35947[2] = null);
(statearr_35924_35947[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35906 === 14))
{var inst_35898 = (state_35905[2]);var inst_35899 = cljs.core.async.close_BANG_.call(null,out);var state_35905__$1 = (function (){var statearr_35925 = state_35905;(statearr_35925[13] = inst_35898);
return statearr_35925;
})();var statearr_35926_35948 = state_35905__$1;(statearr_35926_35948[2] = inst_35899);
(statearr_35926_35948[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35906 === 15))
{var inst_35895 = (state_35905[2]);var state_35905__$1 = state_35905;var statearr_35927_35949 = state_35905__$1;(statearr_35927_35949[2] = inst_35895);
(statearr_35927_35949[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_35931 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35931[0] = state_machine__5507__auto__);
(statearr_35931[1] = 1);
return statearr_35931;
});
var state_machine__5507__auto____1 = (function (state_35905){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35905);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35932){if((e35932 instanceof Object))
{var ex__5510__auto__ = e35932;var statearr_35933_35950 = state_35905;(statearr_35933_35950[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35905);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35932;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35951 = state_35905;
state_35905 = G__35951;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35905){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35934 = f__5522__auto__.call(null);(statearr_35934[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35935);
return statearr_35934;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___36094 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36064){var state_val_36065 = (state_36064[1]);if((state_val_36065 === 1))
{var inst_36023 = [];var inst_36024 = inst_36023;var inst_36025 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_36064__$1 = (function (){var statearr_36066 = state_36064;(statearr_36066[7] = inst_36024);
(statearr_36066[8] = inst_36025);
return statearr_36066;
})();var statearr_36067_36095 = state_36064__$1;(statearr_36067_36095[2] = null);
(statearr_36067_36095[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36065 === 2))
{var state_36064__$1 = state_36064;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36064__$1,4,ch);
} else
{if((state_val_36065 === 3))
{var inst_36062 = (state_36064[2]);var state_36064__$1 = state_36064;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36064__$1,inst_36062);
} else
{if((state_val_36065 === 4))
{var inst_36028 = (state_36064[9]);var inst_36028__$1 = (state_36064[2]);var inst_36029 = (inst_36028__$1 == null);var inst_36030 = cljs.core.not.call(null,inst_36029);var state_36064__$1 = (function (){var statearr_36068 = state_36064;(statearr_36068[9] = inst_36028__$1);
return statearr_36068;
})();if(inst_36030)
{var statearr_36069_36096 = state_36064__$1;(statearr_36069_36096[1] = 5);
} else
{var statearr_36070_36097 = state_36064__$1;(statearr_36070_36097[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36065 === 5))
{var inst_36025 = (state_36064[8]);var inst_36028 = (state_36064[9]);var inst_36032 = (state_36064[10]);var inst_36032__$1 = f.call(null,inst_36028);var inst_36033 = cljs.core._EQ_.call(null,inst_36032__$1,inst_36025);var inst_36034 = cljs.core.keyword_identical_QMARK_.call(null,inst_36025,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_36035 = (inst_36033) || (inst_36034);var state_36064__$1 = (function (){var statearr_36071 = state_36064;(statearr_36071[10] = inst_36032__$1);
return statearr_36071;
})();if(cljs.core.truth_(inst_36035))
{var statearr_36072_36098 = state_36064__$1;(statearr_36072_36098[1] = 8);
} else
{var statearr_36073_36099 = state_36064__$1;(statearr_36073_36099[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36065 === 6))
{var inst_36024 = (state_36064[7]);var inst_36049 = inst_36024.length;var inst_36050 = (inst_36049 > 0);var state_36064__$1 = state_36064;if(cljs.core.truth_(inst_36050))
{var statearr_36075_36100 = state_36064__$1;(statearr_36075_36100[1] = 12);
} else
{var statearr_36076_36101 = state_36064__$1;(statearr_36076_36101[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36065 === 7))
{var inst_36060 = (state_36064[2]);var state_36064__$1 = state_36064;var statearr_36077_36102 = state_36064__$1;(statearr_36077_36102[2] = inst_36060);
(statearr_36077_36102[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36065 === 8))
{var inst_36024 = (state_36064[7]);var inst_36028 = (state_36064[9]);var inst_36032 = (state_36064[10]);var inst_36037 = inst_36024.push(inst_36028);var tmp36074 = inst_36024;var inst_36024__$1 = tmp36074;var inst_36025 = inst_36032;var state_36064__$1 = (function (){var statearr_36078 = state_36064;(statearr_36078[7] = inst_36024__$1);
(statearr_36078[8] = inst_36025);
(statearr_36078[11] = inst_36037);
return statearr_36078;
})();var statearr_36079_36103 = state_36064__$1;(statearr_36079_36103[2] = null);
(statearr_36079_36103[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36065 === 9))
{var inst_36024 = (state_36064[7]);var inst_36040 = cljs.core.vec.call(null,inst_36024);var state_36064__$1 = state_36064;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36064__$1,11,out,inst_36040);
} else
{if((state_val_36065 === 10))
{var inst_36047 = (state_36064[2]);var state_36064__$1 = state_36064;var statearr_36080_36104 = state_36064__$1;(statearr_36080_36104[2] = inst_36047);
(statearr_36080_36104[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36065 === 11))
{var inst_36028 = (state_36064[9]);var inst_36032 = (state_36064[10]);var inst_36042 = (state_36064[2]);var inst_36043 = [];var inst_36044 = inst_36043.push(inst_36028);var inst_36024 = inst_36043;var inst_36025 = inst_36032;var state_36064__$1 = (function (){var statearr_36081 = state_36064;(statearr_36081[7] = inst_36024);
(statearr_36081[8] = inst_36025);
(statearr_36081[12] = inst_36044);
(statearr_36081[13] = inst_36042);
return statearr_36081;
})();var statearr_36082_36105 = state_36064__$1;(statearr_36082_36105[2] = null);
(statearr_36082_36105[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36065 === 12))
{var inst_36024 = (state_36064[7]);var inst_36052 = cljs.core.vec.call(null,inst_36024);var state_36064__$1 = state_36064;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36064__$1,15,out,inst_36052);
} else
{if((state_val_36065 === 13))
{var state_36064__$1 = state_36064;var statearr_36083_36106 = state_36064__$1;(statearr_36083_36106[2] = null);
(statearr_36083_36106[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36065 === 14))
{var inst_36057 = (state_36064[2]);var inst_36058 = cljs.core.async.close_BANG_.call(null,out);var state_36064__$1 = (function (){var statearr_36084 = state_36064;(statearr_36084[14] = inst_36057);
return statearr_36084;
})();var statearr_36085_36107 = state_36064__$1;(statearr_36085_36107[2] = inst_36058);
(statearr_36085_36107[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36065 === 15))
{var inst_36054 = (state_36064[2]);var state_36064__$1 = state_36064;var statearr_36086_36108 = state_36064__$1;(statearr_36086_36108[2] = inst_36054);
(statearr_36086_36108[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_36090 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36090[0] = state_machine__5507__auto__);
(statearr_36090[1] = 1);
return statearr_36090;
});
var state_machine__5507__auto____1 = (function (state_36064){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36064);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36091){if((e36091 instanceof Object))
{var ex__5510__auto__ = e36091;var statearr_36092_36109 = state_36064;(statearr_36092_36109[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36064);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36091;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36110 = state_36064;
state_36064 = G__36110;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36064){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36093 = f__5522__auto__.call(null);(statearr_36093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36094);
return statearr_36093;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
