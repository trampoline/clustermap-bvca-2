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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t13692 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13692 = (function (f,fn_handler,meta13693){
this.f = f;
this.fn_handler = fn_handler;
this.meta13693 = meta13693;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13692.cljs$lang$type = true;
cljs.core.async.t13692.cljs$lang$ctorStr = "cljs.core.async/t13692";
cljs.core.async.t13692.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13692");
});
cljs.core.async.t13692.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13692.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t13692.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t13692.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13694){var self__ = this;
var _13694__$1 = this;return self__.meta13693;
});
cljs.core.async.t13692.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13694,meta13693__$1){var self__ = this;
var _13694__$1 = this;return (new cljs.core.async.t13692(self__.f,self__.fn_handler,meta13693__$1));
});
cljs.core.async.__GT_t13692 = (function __GT_t13692(f__$1,fn_handler__$1,meta13693){return (new cljs.core.async.t13692(f__$1,fn_handler__$1,meta13693));
});
}
return (new cljs.core.async.t13692(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__13696 = buff;if(G__13696)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__13696.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__13696.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13696);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13696);
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
{var val_13697 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_13697);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_13697);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___13698 = n;var x_13699 = 0;while(true){
if((x_13699 < n__4248__auto___13698))
{(a[x_13699] = 0);
{
var G__13700 = (x_13699 + 1);
x_13699 = G__13700;
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
var G__13701 = (i + 1);
i = G__13701;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t13705 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13705 = (function (flag,alt_flag,meta13706){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta13706 = meta13706;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13705.cljs$lang$type = true;
cljs.core.async.t13705.cljs$lang$ctorStr = "cljs.core.async/t13705";
cljs.core.async.t13705.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13705");
});
cljs.core.async.t13705.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13705.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t13705.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t13705.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13707){var self__ = this;
var _13707__$1 = this;return self__.meta13706;
});
cljs.core.async.t13705.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13707,meta13706__$1){var self__ = this;
var _13707__$1 = this;return (new cljs.core.async.t13705(self__.flag,self__.alt_flag,meta13706__$1));
});
cljs.core.async.__GT_t13705 = (function __GT_t13705(flag__$1,alt_flag__$1,meta13706){return (new cljs.core.async.t13705(flag__$1,alt_flag__$1,meta13706));
});
}
return (new cljs.core.async.t13705(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t13711 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13711 = (function (cb,flag,alt_handler,meta13712){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta13712 = meta13712;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13711.cljs$lang$type = true;
cljs.core.async.t13711.cljs$lang$ctorStr = "cljs.core.async/t13711";
cljs.core.async.t13711.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13711");
});
cljs.core.async.t13711.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13711.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t13711.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t13711.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13713){var self__ = this;
var _13713__$1 = this;return self__.meta13712;
});
cljs.core.async.t13711.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13713,meta13712__$1){var self__ = this;
var _13713__$1 = this;return (new cljs.core.async.t13711(self__.cb,self__.flag,self__.alt_handler,meta13712__$1));
});
cljs.core.async.__GT_t13711 = (function __GT_t13711(cb__$1,flag__$1,alt_handler__$1,meta13712){return (new cljs.core.async.t13711(cb__$1,flag__$1,alt_handler__$1,meta13712));
});
}
return (new cljs.core.async.t13711(cb,flag,alt_handler,null));
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
return (function (p1__13714_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13714_SHARP_,port], null));
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
var G__13715 = (i + 1);
i = G__13715;
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
var alts_BANG___delegate = function (ports,p__13716){var map__13718 = p__13716;var map__13718__$1 = ((cljs.core.seq_QMARK_.call(null,map__13718))?cljs.core.apply.call(null,cljs.core.hash_map,map__13718):map__13718);var opts = map__13718__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__13716 = null;if (arguments.length > 1) {
  p__13716 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__13716);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__13719){
var ports = cljs.core.first(arglist__13719);
var p__13716 = cljs.core.rest(arglist__13719);
return alts_BANG___delegate(ports,p__13716);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t13727 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13727 = (function (ch,f,map_LT_,meta13728){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13728 = meta13728;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13727.cljs$lang$type = true;
cljs.core.async.t13727.cljs$lang$ctorStr = "cljs.core.async/t13727";
cljs.core.async.t13727.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13727");
});
cljs.core.async.t13727.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13727.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t13727.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13727.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t13730 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13730 = (function (fn1,_,meta13728,ch,f,map_LT_,meta13731){
this.fn1 = fn1;
this._ = _;
this.meta13728 = meta13728;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13731 = meta13731;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13730.cljs$lang$type = true;
cljs.core.async.t13730.cljs$lang$ctorStr = "cljs.core.async/t13730";
cljs.core.async.t13730.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13730");
});
cljs.core.async.t13730.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13730.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t13730.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t13730.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__13720_SHARP_){return f1.call(null,(((p1__13720_SHARP_ == null))?null:self__.f.call(null,p1__13720_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t13730.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13732){var self__ = this;
var _13732__$1 = this;return self__.meta13731;
});
cljs.core.async.t13730.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13732,meta13731__$1){var self__ = this;
var _13732__$1 = this;return (new cljs.core.async.t13730(self__.fn1,self__._,self__.meta13728,self__.ch,self__.f,self__.map_LT_,meta13731__$1));
});
cljs.core.async.__GT_t13730 = (function __GT_t13730(fn1__$1,___$2,meta13728__$1,ch__$2,f__$2,map_LT___$2,meta13731){return (new cljs.core.async.t13730(fn1__$1,___$2,meta13728__$1,ch__$2,f__$2,map_LT___$2,meta13731));
});
}
return (new cljs.core.async.t13730(fn1,___$1,self__.meta13728,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t13727.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13727.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13727.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13729){var self__ = this;
var _13729__$1 = this;return self__.meta13728;
});
cljs.core.async.t13727.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13729,meta13728__$1){var self__ = this;
var _13729__$1 = this;return (new cljs.core.async.t13727(self__.ch,self__.f,self__.map_LT_,meta13728__$1));
});
cljs.core.async.__GT_t13727 = (function __GT_t13727(ch__$1,f__$1,map_LT___$1,meta13728){return (new cljs.core.async.t13727(ch__$1,f__$1,map_LT___$1,meta13728));
});
}
return (new cljs.core.async.t13727(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t13736 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13736 = (function (ch,f,map_GT_,meta13737){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta13737 = meta13737;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13736.cljs$lang$type = true;
cljs.core.async.t13736.cljs$lang$ctorStr = "cljs.core.async/t13736";
cljs.core.async.t13736.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13736");
});
cljs.core.async.t13736.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13736.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t13736.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13736.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13736.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13736.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13736.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13738){var self__ = this;
var _13738__$1 = this;return self__.meta13737;
});
cljs.core.async.t13736.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13738,meta13737__$1){var self__ = this;
var _13738__$1 = this;return (new cljs.core.async.t13736(self__.ch,self__.f,self__.map_GT_,meta13737__$1));
});
cljs.core.async.__GT_t13736 = (function __GT_t13736(ch__$1,f__$1,map_GT___$1,meta13737){return (new cljs.core.async.t13736(ch__$1,f__$1,map_GT___$1,meta13737));
});
}
return (new cljs.core.async.t13736(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t13742 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13742 = (function (ch,p,filter_GT_,meta13743){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta13743 = meta13743;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13742.cljs$lang$type = true;
cljs.core.async.t13742.cljs$lang$ctorStr = "cljs.core.async/t13742";
cljs.core.async.t13742.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13742");
});
cljs.core.async.t13742.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13742.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t13742.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13742.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13742.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13742.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13742.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13744){var self__ = this;
var _13744__$1 = this;return self__.meta13743;
});
cljs.core.async.t13742.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13744,meta13743__$1){var self__ = this;
var _13744__$1 = this;return (new cljs.core.async.t13742(self__.ch,self__.p,self__.filter_GT_,meta13743__$1));
});
cljs.core.async.__GT_t13742 = (function __GT_t13742(ch__$1,p__$1,filter_GT___$1,meta13743){return (new cljs.core.async.t13742(ch__$1,p__$1,filter_GT___$1,meta13743));
});
}
return (new cljs.core.async.t13742(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___13827 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13806){var state_val_13807 = (state_13806[1]);if((state_val_13807 === 1))
{var state_13806__$1 = state_13806;var statearr_13808_13828 = state_13806__$1;(statearr_13808_13828[2] = null);
(statearr_13808_13828[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13807 === 2))
{var state_13806__$1 = state_13806;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13806__$1,4,ch);
} else
{if((state_val_13807 === 3))
{var inst_13804 = (state_13806[2]);var state_13806__$1 = state_13806;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13806__$1,inst_13804);
} else
{if((state_val_13807 === 4))
{var inst_13788 = (state_13806[7]);var inst_13788__$1 = (state_13806[2]);var inst_13789 = (inst_13788__$1 == null);var state_13806__$1 = (function (){var statearr_13809 = state_13806;(statearr_13809[7] = inst_13788__$1);
return statearr_13809;
})();if(cljs.core.truth_(inst_13789))
{var statearr_13810_13829 = state_13806__$1;(statearr_13810_13829[1] = 5);
} else
{var statearr_13811_13830 = state_13806__$1;(statearr_13811_13830[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13807 === 5))
{var inst_13791 = cljs.core.async.close_BANG_.call(null,out);var state_13806__$1 = state_13806;var statearr_13812_13831 = state_13806__$1;(statearr_13812_13831[2] = inst_13791);
(statearr_13812_13831[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13807 === 6))
{var inst_13788 = (state_13806[7]);var inst_13793 = p.call(null,inst_13788);var state_13806__$1 = state_13806;if(cljs.core.truth_(inst_13793))
{var statearr_13813_13832 = state_13806__$1;(statearr_13813_13832[1] = 8);
} else
{var statearr_13814_13833 = state_13806__$1;(statearr_13814_13833[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13807 === 7))
{var inst_13802 = (state_13806[2]);var state_13806__$1 = state_13806;var statearr_13815_13834 = state_13806__$1;(statearr_13815_13834[2] = inst_13802);
(statearr_13815_13834[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13807 === 8))
{var inst_13788 = (state_13806[7]);var state_13806__$1 = state_13806;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13806__$1,11,out,inst_13788);
} else
{if((state_val_13807 === 9))
{var state_13806__$1 = state_13806;var statearr_13816_13835 = state_13806__$1;(statearr_13816_13835[2] = null);
(statearr_13816_13835[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13807 === 10))
{var inst_13799 = (state_13806[2]);var state_13806__$1 = (function (){var statearr_13817 = state_13806;(statearr_13817[8] = inst_13799);
return statearr_13817;
})();var statearr_13818_13836 = state_13806__$1;(statearr_13818_13836[2] = null);
(statearr_13818_13836[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13807 === 11))
{var inst_13796 = (state_13806[2]);var state_13806__$1 = state_13806;var statearr_13819_13837 = state_13806__$1;(statearr_13819_13837[2] = inst_13796);
(statearr_13819_13837[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_13823 = [null,null,null,null,null,null,null,null,null];(statearr_13823[0] = state_machine__5507__auto__);
(statearr_13823[1] = 1);
return statearr_13823;
});
var state_machine__5507__auto____1 = (function (state_13806){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13806);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13824){if((e13824 instanceof Object))
{var ex__5510__auto__ = e13824;var statearr_13825_13838 = state_13806;(statearr_13825_13838[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13806);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13824;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13839 = state_13806;
state_13806 = G__13839;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13806){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13826 = f__5522__auto__.call(null);(statearr_13826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13827);
return statearr_13826;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13991){var state_val_13992 = (state_13991[1]);if((state_val_13992 === 1))
{var state_13991__$1 = state_13991;var statearr_13993_14030 = state_13991__$1;(statearr_13993_14030[2] = null);
(statearr_13993_14030[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13992 === 2))
{var state_13991__$1 = state_13991;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13991__$1,4,in$);
} else
{if((state_val_13992 === 3))
{var inst_13989 = (state_13991[2]);var state_13991__$1 = state_13991;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13991__$1,inst_13989);
} else
{if((state_val_13992 === 4))
{var inst_13937 = (state_13991[7]);var inst_13937__$1 = (state_13991[2]);var inst_13938 = (inst_13937__$1 == null);var state_13991__$1 = (function (){var statearr_13994 = state_13991;(statearr_13994[7] = inst_13937__$1);
return statearr_13994;
})();if(cljs.core.truth_(inst_13938))
{var statearr_13995_14031 = state_13991__$1;(statearr_13995_14031[1] = 5);
} else
{var statearr_13996_14032 = state_13991__$1;(statearr_13996_14032[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13992 === 5))
{var inst_13940 = cljs.core.async.close_BANG_.call(null,out);var state_13991__$1 = state_13991;var statearr_13997_14033 = state_13991__$1;(statearr_13997_14033[2] = inst_13940);
(statearr_13997_14033[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13992 === 6))
{var inst_13937 = (state_13991[7]);var inst_13942 = f.call(null,inst_13937);var inst_13947 = cljs.core.seq.call(null,inst_13942);var inst_13948 = inst_13947;var inst_13949 = null;var inst_13950 = 0;var inst_13951 = 0;var state_13991__$1 = (function (){var statearr_13998 = state_13991;(statearr_13998[8] = inst_13951);
(statearr_13998[9] = inst_13950);
(statearr_13998[10] = inst_13949);
(statearr_13998[11] = inst_13948);
return statearr_13998;
})();var statearr_13999_14034 = state_13991__$1;(statearr_13999_14034[2] = null);
(statearr_13999_14034[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13992 === 7))
{var inst_13987 = (state_13991[2]);var state_13991__$1 = state_13991;var statearr_14000_14035 = state_13991__$1;(statearr_14000_14035[2] = inst_13987);
(statearr_14000_14035[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13992 === 8))
{var inst_13951 = (state_13991[8]);var inst_13950 = (state_13991[9]);var inst_13953 = (inst_13951 < inst_13950);var inst_13954 = inst_13953;var state_13991__$1 = state_13991;if(cljs.core.truth_(inst_13954))
{var statearr_14001_14036 = state_13991__$1;(statearr_14001_14036[1] = 10);
} else
{var statearr_14002_14037 = state_13991__$1;(statearr_14002_14037[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13992 === 9))
{var inst_13984 = (state_13991[2]);var state_13991__$1 = (function (){var statearr_14003 = state_13991;(statearr_14003[12] = inst_13984);
return statearr_14003;
})();var statearr_14004_14038 = state_13991__$1;(statearr_14004_14038[2] = null);
(statearr_14004_14038[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13992 === 10))
{var inst_13951 = (state_13991[8]);var inst_13949 = (state_13991[10]);var inst_13956 = cljs.core._nth.call(null,inst_13949,inst_13951);var state_13991__$1 = state_13991;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13991__$1,13,out,inst_13956);
} else
{if((state_val_13992 === 11))
{var inst_13962 = (state_13991[13]);var inst_13948 = (state_13991[11]);var inst_13962__$1 = cljs.core.seq.call(null,inst_13948);var state_13991__$1 = (function (){var statearr_14008 = state_13991;(statearr_14008[13] = inst_13962__$1);
return statearr_14008;
})();if(inst_13962__$1)
{var statearr_14009_14039 = state_13991__$1;(statearr_14009_14039[1] = 14);
} else
{var statearr_14010_14040 = state_13991__$1;(statearr_14010_14040[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13992 === 12))
{var inst_13982 = (state_13991[2]);var state_13991__$1 = state_13991;var statearr_14011_14041 = state_13991__$1;(statearr_14011_14041[2] = inst_13982);
(statearr_14011_14041[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13992 === 13))
{var inst_13951 = (state_13991[8]);var inst_13950 = (state_13991[9]);var inst_13949 = (state_13991[10]);var inst_13948 = (state_13991[11]);var inst_13958 = (state_13991[2]);var inst_13959 = (inst_13951 + 1);var tmp14005 = inst_13950;var tmp14006 = inst_13949;var tmp14007 = inst_13948;var inst_13948__$1 = tmp14007;var inst_13949__$1 = tmp14006;var inst_13950__$1 = tmp14005;var inst_13951__$1 = inst_13959;var state_13991__$1 = (function (){var statearr_14012 = state_13991;(statearr_14012[8] = inst_13951__$1);
(statearr_14012[9] = inst_13950__$1);
(statearr_14012[10] = inst_13949__$1);
(statearr_14012[11] = inst_13948__$1);
(statearr_14012[14] = inst_13958);
return statearr_14012;
})();var statearr_14013_14042 = state_13991__$1;(statearr_14013_14042[2] = null);
(statearr_14013_14042[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13992 === 14))
{var inst_13962 = (state_13991[13]);var inst_13964 = cljs.core.chunked_seq_QMARK_.call(null,inst_13962);var state_13991__$1 = state_13991;if(inst_13964)
{var statearr_14014_14043 = state_13991__$1;(statearr_14014_14043[1] = 17);
} else
{var statearr_14015_14044 = state_13991__$1;(statearr_14015_14044[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13992 === 15))
{var state_13991__$1 = state_13991;var statearr_14016_14045 = state_13991__$1;(statearr_14016_14045[2] = null);
(statearr_14016_14045[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13992 === 16))
{var inst_13980 = (state_13991[2]);var state_13991__$1 = state_13991;var statearr_14017_14046 = state_13991__$1;(statearr_14017_14046[2] = inst_13980);
(statearr_14017_14046[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13992 === 17))
{var inst_13962 = (state_13991[13]);var inst_13966 = cljs.core.chunk_first.call(null,inst_13962);var inst_13967 = cljs.core.chunk_rest.call(null,inst_13962);var inst_13968 = cljs.core.count.call(null,inst_13966);var inst_13948 = inst_13967;var inst_13949 = inst_13966;var inst_13950 = inst_13968;var inst_13951 = 0;var state_13991__$1 = (function (){var statearr_14018 = state_13991;(statearr_14018[8] = inst_13951);
(statearr_14018[9] = inst_13950);
(statearr_14018[10] = inst_13949);
(statearr_14018[11] = inst_13948);
return statearr_14018;
})();var statearr_14019_14047 = state_13991__$1;(statearr_14019_14047[2] = null);
(statearr_14019_14047[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13992 === 18))
{var inst_13962 = (state_13991[13]);var inst_13971 = cljs.core.first.call(null,inst_13962);var state_13991__$1 = state_13991;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13991__$1,20,out,inst_13971);
} else
{if((state_val_13992 === 19))
{var inst_13977 = (state_13991[2]);var state_13991__$1 = state_13991;var statearr_14020_14048 = state_13991__$1;(statearr_14020_14048[2] = inst_13977);
(statearr_14020_14048[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13992 === 20))
{var inst_13962 = (state_13991[13]);var inst_13973 = (state_13991[2]);var inst_13974 = cljs.core.next.call(null,inst_13962);var inst_13948 = inst_13974;var inst_13949 = null;var inst_13950 = 0;var inst_13951 = 0;var state_13991__$1 = (function (){var statearr_14021 = state_13991;(statearr_14021[8] = inst_13951);
(statearr_14021[9] = inst_13950);
(statearr_14021[10] = inst_13949);
(statearr_14021[11] = inst_13948);
(statearr_14021[15] = inst_13973);
return statearr_14021;
})();var statearr_14022_14049 = state_13991__$1;(statearr_14022_14049[2] = null);
(statearr_14022_14049[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_14026 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14026[0] = state_machine__5507__auto__);
(statearr_14026[1] = 1);
return statearr_14026;
});
var state_machine__5507__auto____1 = (function (state_13991){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13991);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14027){if((e14027 instanceof Object))
{var ex__5510__auto__ = e14027;var statearr_14028_14050 = state_13991;(statearr_14028_14050[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13991);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14027;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14051 = state_13991;
state_13991 = G__14051;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13991){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14029 = f__5522__auto__.call(null);(statearr_14029[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_14029;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___14132 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14111){var state_val_14112 = (state_14111[1]);if((state_val_14112 === 1))
{var state_14111__$1 = state_14111;var statearr_14113_14133 = state_14111__$1;(statearr_14113_14133[2] = null);
(statearr_14113_14133[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14112 === 2))
{var state_14111__$1 = state_14111;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14111__$1,4,from);
} else
{if((state_val_14112 === 3))
{var inst_14109 = (state_14111[2]);var state_14111__$1 = state_14111;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14111__$1,inst_14109);
} else
{if((state_val_14112 === 4))
{var inst_14094 = (state_14111[7]);var inst_14094__$1 = (state_14111[2]);var inst_14095 = (inst_14094__$1 == null);var state_14111__$1 = (function (){var statearr_14114 = state_14111;(statearr_14114[7] = inst_14094__$1);
return statearr_14114;
})();if(cljs.core.truth_(inst_14095))
{var statearr_14115_14134 = state_14111__$1;(statearr_14115_14134[1] = 5);
} else
{var statearr_14116_14135 = state_14111__$1;(statearr_14116_14135[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14112 === 5))
{var state_14111__$1 = state_14111;if(cljs.core.truth_(close_QMARK_))
{var statearr_14117_14136 = state_14111__$1;(statearr_14117_14136[1] = 8);
} else
{var statearr_14118_14137 = state_14111__$1;(statearr_14118_14137[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14112 === 6))
{var inst_14094 = (state_14111[7]);var state_14111__$1 = state_14111;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14111__$1,11,to,inst_14094);
} else
{if((state_val_14112 === 7))
{var inst_14107 = (state_14111[2]);var state_14111__$1 = state_14111;var statearr_14119_14138 = state_14111__$1;(statearr_14119_14138[2] = inst_14107);
(statearr_14119_14138[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14112 === 8))
{var inst_14098 = cljs.core.async.close_BANG_.call(null,to);var state_14111__$1 = state_14111;var statearr_14120_14139 = state_14111__$1;(statearr_14120_14139[2] = inst_14098);
(statearr_14120_14139[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14112 === 9))
{var state_14111__$1 = state_14111;var statearr_14121_14140 = state_14111__$1;(statearr_14121_14140[2] = null);
(statearr_14121_14140[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14112 === 10))
{var inst_14101 = (state_14111[2]);var state_14111__$1 = state_14111;var statearr_14122_14141 = state_14111__$1;(statearr_14122_14141[2] = inst_14101);
(statearr_14122_14141[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14112 === 11))
{var inst_14104 = (state_14111[2]);var state_14111__$1 = (function (){var statearr_14123 = state_14111;(statearr_14123[8] = inst_14104);
return statearr_14123;
})();var statearr_14124_14142 = state_14111__$1;(statearr_14124_14142[2] = null);
(statearr_14124_14142[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14128 = [null,null,null,null,null,null,null,null,null];(statearr_14128[0] = state_machine__5507__auto__);
(statearr_14128[1] = 1);
return statearr_14128;
});
var state_machine__5507__auto____1 = (function (state_14111){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14111);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14129){if((e14129 instanceof Object))
{var ex__5510__auto__ = e14129;var statearr_14130_14143 = state_14111;(statearr_14130_14143[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14111);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14129;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14144 = state_14111;
state_14111 = G__14144;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14111){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14131 = f__5522__auto__.call(null);(statearr_14131[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14132);
return statearr_14131;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___14231 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14209){var state_val_14210 = (state_14209[1]);if((state_val_14210 === 1))
{var state_14209__$1 = state_14209;var statearr_14211_14232 = state_14209__$1;(statearr_14211_14232[2] = null);
(statearr_14211_14232[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14210 === 2))
{var state_14209__$1 = state_14209;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14209__$1,4,ch);
} else
{if((state_val_14210 === 3))
{var inst_14207 = (state_14209[2]);var state_14209__$1 = state_14209;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14209__$1,inst_14207);
} else
{if((state_val_14210 === 4))
{var inst_14190 = (state_14209[7]);var inst_14190__$1 = (state_14209[2]);var inst_14191 = (inst_14190__$1 == null);var state_14209__$1 = (function (){var statearr_14212 = state_14209;(statearr_14212[7] = inst_14190__$1);
return statearr_14212;
})();if(cljs.core.truth_(inst_14191))
{var statearr_14213_14233 = state_14209__$1;(statearr_14213_14233[1] = 5);
} else
{var statearr_14214_14234 = state_14209__$1;(statearr_14214_14234[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14210 === 5))
{var inst_14193 = cljs.core.async.close_BANG_.call(null,tc);var inst_14194 = cljs.core.async.close_BANG_.call(null,fc);var state_14209__$1 = (function (){var statearr_14215 = state_14209;(statearr_14215[8] = inst_14193);
return statearr_14215;
})();var statearr_14216_14235 = state_14209__$1;(statearr_14216_14235[2] = inst_14194);
(statearr_14216_14235[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14210 === 6))
{var inst_14190 = (state_14209[7]);var inst_14196 = p.call(null,inst_14190);var state_14209__$1 = state_14209;if(cljs.core.truth_(inst_14196))
{var statearr_14217_14236 = state_14209__$1;(statearr_14217_14236[1] = 9);
} else
{var statearr_14218_14237 = state_14209__$1;(statearr_14218_14237[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14210 === 7))
{var inst_14205 = (state_14209[2]);var state_14209__$1 = state_14209;var statearr_14219_14238 = state_14209__$1;(statearr_14219_14238[2] = inst_14205);
(statearr_14219_14238[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14210 === 8))
{var inst_14202 = (state_14209[2]);var state_14209__$1 = (function (){var statearr_14220 = state_14209;(statearr_14220[9] = inst_14202);
return statearr_14220;
})();var statearr_14221_14239 = state_14209__$1;(statearr_14221_14239[2] = null);
(statearr_14221_14239[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14210 === 9))
{var state_14209__$1 = state_14209;var statearr_14222_14240 = state_14209__$1;(statearr_14222_14240[2] = tc);
(statearr_14222_14240[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14210 === 10))
{var state_14209__$1 = state_14209;var statearr_14223_14241 = state_14209__$1;(statearr_14223_14241[2] = fc);
(statearr_14223_14241[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14210 === 11))
{var inst_14190 = (state_14209[7]);var inst_14200 = (state_14209[2]);var state_14209__$1 = state_14209;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14209__$1,8,inst_14200,inst_14190);
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
var state_machine__5507__auto____0 = (function (){var statearr_14227 = [null,null,null,null,null,null,null,null,null,null];(statearr_14227[0] = state_machine__5507__auto__);
(statearr_14227[1] = 1);
return statearr_14227;
});
var state_machine__5507__auto____1 = (function (state_14209){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14209);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14228){if((e14228 instanceof Object))
{var ex__5510__auto__ = e14228;var statearr_14229_14242 = state_14209;(statearr_14229_14242[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14209);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14228;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14243 = state_14209;
state_14209 = G__14243;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14209){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14230 = f__5522__auto__.call(null);(statearr_14230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14231);
return statearr_14230;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14290){var state_val_14291 = (state_14290[1]);if((state_val_14291 === 7))
{var inst_14286 = (state_14290[2]);var state_14290__$1 = state_14290;var statearr_14292_14308 = state_14290__$1;(statearr_14292_14308[2] = inst_14286);
(statearr_14292_14308[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14291 === 6))
{var inst_14279 = (state_14290[7]);var inst_14276 = (state_14290[8]);var inst_14283 = f.call(null,inst_14276,inst_14279);var inst_14276__$1 = inst_14283;var state_14290__$1 = (function (){var statearr_14293 = state_14290;(statearr_14293[8] = inst_14276__$1);
return statearr_14293;
})();var statearr_14294_14309 = state_14290__$1;(statearr_14294_14309[2] = null);
(statearr_14294_14309[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14291 === 5))
{var inst_14276 = (state_14290[8]);var state_14290__$1 = state_14290;var statearr_14295_14310 = state_14290__$1;(statearr_14295_14310[2] = inst_14276);
(statearr_14295_14310[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14291 === 4))
{var inst_14279 = (state_14290[7]);var inst_14279__$1 = (state_14290[2]);var inst_14280 = (inst_14279__$1 == null);var state_14290__$1 = (function (){var statearr_14296 = state_14290;(statearr_14296[7] = inst_14279__$1);
return statearr_14296;
})();if(cljs.core.truth_(inst_14280))
{var statearr_14297_14311 = state_14290__$1;(statearr_14297_14311[1] = 5);
} else
{var statearr_14298_14312 = state_14290__$1;(statearr_14298_14312[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14291 === 3))
{var inst_14288 = (state_14290[2]);var state_14290__$1 = state_14290;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14290__$1,inst_14288);
} else
{if((state_val_14291 === 2))
{var state_14290__$1 = state_14290;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14290__$1,4,ch);
} else
{if((state_val_14291 === 1))
{var inst_14276 = init;var state_14290__$1 = (function (){var statearr_14299 = state_14290;(statearr_14299[8] = inst_14276);
return statearr_14299;
})();var statearr_14300_14313 = state_14290__$1;(statearr_14300_14313[2] = null);
(statearr_14300_14313[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14304 = [null,null,null,null,null,null,null,null,null];(statearr_14304[0] = state_machine__5507__auto__);
(statearr_14304[1] = 1);
return statearr_14304;
});
var state_machine__5507__auto____1 = (function (state_14290){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14290);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14305){if((e14305 instanceof Object))
{var ex__5510__auto__ = e14305;var statearr_14306_14314 = state_14290;(statearr_14306_14314[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14290);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14305;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14315 = state_14290;
state_14290 = G__14315;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14290){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14307 = f__5522__auto__.call(null);(statearr_14307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_14307;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14377){var state_val_14378 = (state_14377[1]);if((state_val_14378 === 1))
{var inst_14357 = cljs.core.seq.call(null,coll);var inst_14358 = inst_14357;var state_14377__$1 = (function (){var statearr_14379 = state_14377;(statearr_14379[7] = inst_14358);
return statearr_14379;
})();var statearr_14380_14398 = state_14377__$1;(statearr_14380_14398[2] = null);
(statearr_14380_14398[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14378 === 2))
{var inst_14358 = (state_14377[7]);var state_14377__$1 = state_14377;if(cljs.core.truth_(inst_14358))
{var statearr_14381_14399 = state_14377__$1;(statearr_14381_14399[1] = 4);
} else
{var statearr_14382_14400 = state_14377__$1;(statearr_14382_14400[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14378 === 3))
{var inst_14375 = (state_14377[2]);var state_14377__$1 = state_14377;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14377__$1,inst_14375);
} else
{if((state_val_14378 === 4))
{var inst_14358 = (state_14377[7]);var inst_14361 = cljs.core.first.call(null,inst_14358);var state_14377__$1 = state_14377;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14377__$1,7,ch,inst_14361);
} else
{if((state_val_14378 === 5))
{var state_14377__$1 = state_14377;if(cljs.core.truth_(close_QMARK_))
{var statearr_14383_14401 = state_14377__$1;(statearr_14383_14401[1] = 8);
} else
{var statearr_14384_14402 = state_14377__$1;(statearr_14384_14402[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14378 === 6))
{var inst_14373 = (state_14377[2]);var state_14377__$1 = state_14377;var statearr_14385_14403 = state_14377__$1;(statearr_14385_14403[2] = inst_14373);
(statearr_14385_14403[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14378 === 7))
{var inst_14358 = (state_14377[7]);var inst_14363 = (state_14377[2]);var inst_14364 = cljs.core.next.call(null,inst_14358);var inst_14358__$1 = inst_14364;var state_14377__$1 = (function (){var statearr_14386 = state_14377;(statearr_14386[8] = inst_14363);
(statearr_14386[7] = inst_14358__$1);
return statearr_14386;
})();var statearr_14387_14404 = state_14377__$1;(statearr_14387_14404[2] = null);
(statearr_14387_14404[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14378 === 8))
{var inst_14368 = cljs.core.async.close_BANG_.call(null,ch);var state_14377__$1 = state_14377;var statearr_14388_14405 = state_14377__$1;(statearr_14388_14405[2] = inst_14368);
(statearr_14388_14405[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14378 === 9))
{var state_14377__$1 = state_14377;var statearr_14389_14406 = state_14377__$1;(statearr_14389_14406[2] = null);
(statearr_14389_14406[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14378 === 10))
{var inst_14371 = (state_14377[2]);var state_14377__$1 = state_14377;var statearr_14390_14407 = state_14377__$1;(statearr_14390_14407[2] = inst_14371);
(statearr_14390_14407[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_14394 = [null,null,null,null,null,null,null,null,null];(statearr_14394[0] = state_machine__5507__auto__);
(statearr_14394[1] = 1);
return statearr_14394;
});
var state_machine__5507__auto____1 = (function (state_14377){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14377);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14395){if((e14395 instanceof Object))
{var ex__5510__auto__ = e14395;var statearr_14396_14408 = state_14377;(statearr_14396_14408[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14377);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14395;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14409 = state_14377;
state_14377 = G__14409;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14377){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14397 = f__5522__auto__.call(null);(statearr_14397[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_14397;
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
cljs.core.async.Mux = (function (){var obj14411 = {};return obj14411;
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
cljs.core.async.Mult = (function (){var obj14413 = {};return obj14413;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t14637 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14637 = (function (cs,ch,mult,meta14638){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta14638 = meta14638;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14637.cljs$lang$type = true;
cljs.core.async.t14637.cljs$lang$ctorStr = "cljs.core.async/t14637";
cljs.core.async.t14637.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14637");
});})(cs))
;
cljs.core.async.t14637.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t14637.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t14637.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t14637.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t14637.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14637.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t14637.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14639){var self__ = this;
var _14639__$1 = this;return self__.meta14638;
});})(cs))
;
cljs.core.async.t14637.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14639,meta14638__$1){var self__ = this;
var _14639__$1 = this;return (new cljs.core.async.t14637(self__.cs,self__.ch,self__.mult,meta14638__$1));
});})(cs))
;
cljs.core.async.__GT_t14637 = ((function (cs){
return (function __GT_t14637(cs__$1,ch__$1,mult__$1,meta14638){return (new cljs.core.async.t14637(cs__$1,ch__$1,mult__$1,meta14638));
});})(cs))
;
}
return (new cljs.core.async.t14637(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___14860 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14774){var state_val_14775 = (state_14774[1]);if((state_val_14775 === 32))
{var inst_14642 = (state_14774[7]);var inst_14718 = (state_14774[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14774,31,Object,null,30);var inst_14725 = cljs.core.async.put_BANG_.call(null,inst_14718,inst_14642,done);var state_14774__$1 = state_14774;var statearr_14776_14861 = state_14774__$1;(statearr_14776_14861[2] = inst_14725);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14774__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 1))
{var state_14774__$1 = state_14774;var statearr_14777_14862 = state_14774__$1;(statearr_14777_14862[2] = null);
(statearr_14777_14862[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 33))
{var inst_14731 = (state_14774[9]);var inst_14733 = cljs.core.chunked_seq_QMARK_.call(null,inst_14731);var state_14774__$1 = state_14774;if(inst_14733)
{var statearr_14778_14863 = state_14774__$1;(statearr_14778_14863[1] = 36);
} else
{var statearr_14779_14864 = state_14774__$1;(statearr_14779_14864[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 2))
{var state_14774__$1 = state_14774;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14774__$1,4,ch);
} else
{if((state_val_14775 === 34))
{var state_14774__$1 = state_14774;var statearr_14780_14865 = state_14774__$1;(statearr_14780_14865[2] = null);
(statearr_14780_14865[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 3))
{var inst_14772 = (state_14774[2]);var state_14774__$1 = state_14774;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14774__$1,inst_14772);
} else
{if((state_val_14775 === 35))
{var inst_14756 = (state_14774[2]);var state_14774__$1 = state_14774;var statearr_14781_14866 = state_14774__$1;(statearr_14781_14866[2] = inst_14756);
(statearr_14781_14866[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 4))
{var inst_14642 = (state_14774[7]);var inst_14642__$1 = (state_14774[2]);var inst_14643 = (inst_14642__$1 == null);var state_14774__$1 = (function (){var statearr_14782 = state_14774;(statearr_14782[7] = inst_14642__$1);
return statearr_14782;
})();if(cljs.core.truth_(inst_14643))
{var statearr_14783_14867 = state_14774__$1;(statearr_14783_14867[1] = 5);
} else
{var statearr_14784_14868 = state_14774__$1;(statearr_14784_14868[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 36))
{var inst_14731 = (state_14774[9]);var inst_14735 = cljs.core.chunk_first.call(null,inst_14731);var inst_14736 = cljs.core.chunk_rest.call(null,inst_14731);var inst_14737 = cljs.core.count.call(null,inst_14735);var inst_14710 = inst_14736;var inst_14711 = inst_14735;var inst_14712 = inst_14737;var inst_14713 = 0;var state_14774__$1 = (function (){var statearr_14785 = state_14774;(statearr_14785[10] = inst_14712);
(statearr_14785[11] = inst_14713);
(statearr_14785[12] = inst_14711);
(statearr_14785[13] = inst_14710);
return statearr_14785;
})();var statearr_14786_14869 = state_14774__$1;(statearr_14786_14869[2] = null);
(statearr_14786_14869[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 5))
{var inst_14649 = cljs.core.deref.call(null,cs);var inst_14650 = cljs.core.seq.call(null,inst_14649);var inst_14651 = inst_14650;var inst_14652 = null;var inst_14653 = 0;var inst_14654 = 0;var state_14774__$1 = (function (){var statearr_14787 = state_14774;(statearr_14787[14] = inst_14654);
(statearr_14787[15] = inst_14653);
(statearr_14787[16] = inst_14651);
(statearr_14787[17] = inst_14652);
return statearr_14787;
})();var statearr_14788_14870 = state_14774__$1;(statearr_14788_14870[2] = null);
(statearr_14788_14870[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 37))
{var inst_14731 = (state_14774[9]);var inst_14740 = cljs.core.first.call(null,inst_14731);var state_14774__$1 = (function (){var statearr_14789 = state_14774;(statearr_14789[18] = inst_14740);
return statearr_14789;
})();var statearr_14790_14871 = state_14774__$1;(statearr_14790_14871[2] = null);
(statearr_14790_14871[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 6))
{var inst_14702 = (state_14774[19]);var inst_14701 = cljs.core.deref.call(null,cs);var inst_14702__$1 = cljs.core.keys.call(null,inst_14701);var inst_14703 = cljs.core.count.call(null,inst_14702__$1);var inst_14704 = cljs.core.reset_BANG_.call(null,dctr,inst_14703);var inst_14709 = cljs.core.seq.call(null,inst_14702__$1);var inst_14710 = inst_14709;var inst_14711 = null;var inst_14712 = 0;var inst_14713 = 0;var state_14774__$1 = (function (){var statearr_14791 = state_14774;(statearr_14791[10] = inst_14712);
(statearr_14791[11] = inst_14713);
(statearr_14791[12] = inst_14711);
(statearr_14791[13] = inst_14710);
(statearr_14791[19] = inst_14702__$1);
(statearr_14791[20] = inst_14704);
return statearr_14791;
})();var statearr_14792_14872 = state_14774__$1;(statearr_14792_14872[2] = null);
(statearr_14792_14872[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 38))
{var inst_14753 = (state_14774[2]);var state_14774__$1 = state_14774;var statearr_14793_14873 = state_14774__$1;(statearr_14793_14873[2] = inst_14753);
(statearr_14793_14873[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 7))
{var inst_14770 = (state_14774[2]);var state_14774__$1 = state_14774;var statearr_14794_14874 = state_14774__$1;(statearr_14794_14874[2] = inst_14770);
(statearr_14794_14874[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 39))
{var inst_14731 = (state_14774[9]);var inst_14749 = (state_14774[2]);var inst_14750 = cljs.core.next.call(null,inst_14731);var inst_14710 = inst_14750;var inst_14711 = null;var inst_14712 = 0;var inst_14713 = 0;var state_14774__$1 = (function (){var statearr_14795 = state_14774;(statearr_14795[21] = inst_14749);
(statearr_14795[10] = inst_14712);
(statearr_14795[11] = inst_14713);
(statearr_14795[12] = inst_14711);
(statearr_14795[13] = inst_14710);
return statearr_14795;
})();var statearr_14796_14875 = state_14774__$1;(statearr_14796_14875[2] = null);
(statearr_14796_14875[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 8))
{var inst_14654 = (state_14774[14]);var inst_14653 = (state_14774[15]);var inst_14656 = (inst_14654 < inst_14653);var inst_14657 = inst_14656;var state_14774__$1 = state_14774;if(cljs.core.truth_(inst_14657))
{var statearr_14797_14876 = state_14774__$1;(statearr_14797_14876[1] = 10);
} else
{var statearr_14798_14877 = state_14774__$1;(statearr_14798_14877[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 40))
{var inst_14740 = (state_14774[18]);var inst_14741 = (state_14774[2]);var inst_14742 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14743 = cljs.core.async.untap_STAR_.call(null,m,inst_14740);var state_14774__$1 = (function (){var statearr_14799 = state_14774;(statearr_14799[22] = inst_14742);
(statearr_14799[23] = inst_14741);
return statearr_14799;
})();var statearr_14800_14878 = state_14774__$1;(statearr_14800_14878[2] = inst_14743);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14774__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 9))
{var inst_14699 = (state_14774[2]);var state_14774__$1 = state_14774;var statearr_14801_14879 = state_14774__$1;(statearr_14801_14879[2] = inst_14699);
(statearr_14801_14879[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 41))
{var inst_14642 = (state_14774[7]);var inst_14740 = (state_14774[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14774,40,Object,null,39);var inst_14747 = cljs.core.async.put_BANG_.call(null,inst_14740,inst_14642,done);var state_14774__$1 = state_14774;var statearr_14802_14880 = state_14774__$1;(statearr_14802_14880[2] = inst_14747);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14774__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 10))
{var inst_14654 = (state_14774[14]);var inst_14652 = (state_14774[17]);var inst_14660 = cljs.core._nth.call(null,inst_14652,inst_14654);var inst_14661 = cljs.core.nth.call(null,inst_14660,0,null);var inst_14662 = cljs.core.nth.call(null,inst_14660,1,null);var state_14774__$1 = (function (){var statearr_14803 = state_14774;(statearr_14803[24] = inst_14661);
return statearr_14803;
})();if(cljs.core.truth_(inst_14662))
{var statearr_14804_14881 = state_14774__$1;(statearr_14804_14881[1] = 13);
} else
{var statearr_14805_14882 = state_14774__$1;(statearr_14805_14882[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 42))
{var state_14774__$1 = state_14774;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14774__$1,45,dchan);
} else
{if((state_val_14775 === 11))
{var inst_14651 = (state_14774[16]);var inst_14671 = (state_14774[25]);var inst_14671__$1 = cljs.core.seq.call(null,inst_14651);var state_14774__$1 = (function (){var statearr_14806 = state_14774;(statearr_14806[25] = inst_14671__$1);
return statearr_14806;
})();if(inst_14671__$1)
{var statearr_14807_14883 = state_14774__$1;(statearr_14807_14883[1] = 16);
} else
{var statearr_14808_14884 = state_14774__$1;(statearr_14808_14884[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 43))
{var state_14774__$1 = state_14774;var statearr_14809_14885 = state_14774__$1;(statearr_14809_14885[2] = null);
(statearr_14809_14885[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 12))
{var inst_14697 = (state_14774[2]);var state_14774__$1 = state_14774;var statearr_14810_14886 = state_14774__$1;(statearr_14810_14886[2] = inst_14697);
(statearr_14810_14886[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 44))
{var inst_14767 = (state_14774[2]);var state_14774__$1 = (function (){var statearr_14811 = state_14774;(statearr_14811[26] = inst_14767);
return statearr_14811;
})();var statearr_14812_14887 = state_14774__$1;(statearr_14812_14887[2] = null);
(statearr_14812_14887[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 13))
{var inst_14661 = (state_14774[24]);var inst_14664 = cljs.core.async.close_BANG_.call(null,inst_14661);var state_14774__$1 = state_14774;var statearr_14813_14888 = state_14774__$1;(statearr_14813_14888[2] = inst_14664);
(statearr_14813_14888[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 45))
{var inst_14764 = (state_14774[2]);var state_14774__$1 = state_14774;var statearr_14817_14889 = state_14774__$1;(statearr_14817_14889[2] = inst_14764);
(statearr_14817_14889[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 14))
{var state_14774__$1 = state_14774;var statearr_14818_14890 = state_14774__$1;(statearr_14818_14890[2] = null);
(statearr_14818_14890[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 15))
{var inst_14654 = (state_14774[14]);var inst_14653 = (state_14774[15]);var inst_14651 = (state_14774[16]);var inst_14652 = (state_14774[17]);var inst_14667 = (state_14774[2]);var inst_14668 = (inst_14654 + 1);var tmp14814 = inst_14653;var tmp14815 = inst_14651;var tmp14816 = inst_14652;var inst_14651__$1 = tmp14815;var inst_14652__$1 = tmp14816;var inst_14653__$1 = tmp14814;var inst_14654__$1 = inst_14668;var state_14774__$1 = (function (){var statearr_14819 = state_14774;(statearr_14819[14] = inst_14654__$1);
(statearr_14819[15] = inst_14653__$1);
(statearr_14819[16] = inst_14651__$1);
(statearr_14819[17] = inst_14652__$1);
(statearr_14819[27] = inst_14667);
return statearr_14819;
})();var statearr_14820_14891 = state_14774__$1;(statearr_14820_14891[2] = null);
(statearr_14820_14891[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 16))
{var inst_14671 = (state_14774[25]);var inst_14673 = cljs.core.chunked_seq_QMARK_.call(null,inst_14671);var state_14774__$1 = state_14774;if(inst_14673)
{var statearr_14821_14892 = state_14774__$1;(statearr_14821_14892[1] = 19);
} else
{var statearr_14822_14893 = state_14774__$1;(statearr_14822_14893[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 17))
{var state_14774__$1 = state_14774;var statearr_14823_14894 = state_14774__$1;(statearr_14823_14894[2] = null);
(statearr_14823_14894[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 18))
{var inst_14695 = (state_14774[2]);var state_14774__$1 = state_14774;var statearr_14824_14895 = state_14774__$1;(statearr_14824_14895[2] = inst_14695);
(statearr_14824_14895[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 19))
{var inst_14671 = (state_14774[25]);var inst_14675 = cljs.core.chunk_first.call(null,inst_14671);var inst_14676 = cljs.core.chunk_rest.call(null,inst_14671);var inst_14677 = cljs.core.count.call(null,inst_14675);var inst_14651 = inst_14676;var inst_14652 = inst_14675;var inst_14653 = inst_14677;var inst_14654 = 0;var state_14774__$1 = (function (){var statearr_14825 = state_14774;(statearr_14825[14] = inst_14654);
(statearr_14825[15] = inst_14653);
(statearr_14825[16] = inst_14651);
(statearr_14825[17] = inst_14652);
return statearr_14825;
})();var statearr_14826_14896 = state_14774__$1;(statearr_14826_14896[2] = null);
(statearr_14826_14896[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 20))
{var inst_14671 = (state_14774[25]);var inst_14681 = cljs.core.first.call(null,inst_14671);var inst_14682 = cljs.core.nth.call(null,inst_14681,0,null);var inst_14683 = cljs.core.nth.call(null,inst_14681,1,null);var state_14774__$1 = (function (){var statearr_14827 = state_14774;(statearr_14827[28] = inst_14682);
return statearr_14827;
})();if(cljs.core.truth_(inst_14683))
{var statearr_14828_14897 = state_14774__$1;(statearr_14828_14897[1] = 22);
} else
{var statearr_14829_14898 = state_14774__$1;(statearr_14829_14898[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 21))
{var inst_14692 = (state_14774[2]);var state_14774__$1 = state_14774;var statearr_14830_14899 = state_14774__$1;(statearr_14830_14899[2] = inst_14692);
(statearr_14830_14899[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 22))
{var inst_14682 = (state_14774[28]);var inst_14685 = cljs.core.async.close_BANG_.call(null,inst_14682);var state_14774__$1 = state_14774;var statearr_14831_14900 = state_14774__$1;(statearr_14831_14900[2] = inst_14685);
(statearr_14831_14900[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 23))
{var state_14774__$1 = state_14774;var statearr_14832_14901 = state_14774__$1;(statearr_14832_14901[2] = null);
(statearr_14832_14901[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 24))
{var inst_14671 = (state_14774[25]);var inst_14688 = (state_14774[2]);var inst_14689 = cljs.core.next.call(null,inst_14671);var inst_14651 = inst_14689;var inst_14652 = null;var inst_14653 = 0;var inst_14654 = 0;var state_14774__$1 = (function (){var statearr_14833 = state_14774;(statearr_14833[14] = inst_14654);
(statearr_14833[15] = inst_14653);
(statearr_14833[16] = inst_14651);
(statearr_14833[17] = inst_14652);
(statearr_14833[29] = inst_14688);
return statearr_14833;
})();var statearr_14834_14902 = state_14774__$1;(statearr_14834_14902[2] = null);
(statearr_14834_14902[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 25))
{var inst_14712 = (state_14774[10]);var inst_14713 = (state_14774[11]);var inst_14715 = (inst_14713 < inst_14712);var inst_14716 = inst_14715;var state_14774__$1 = state_14774;if(cljs.core.truth_(inst_14716))
{var statearr_14835_14903 = state_14774__$1;(statearr_14835_14903[1] = 27);
} else
{var statearr_14836_14904 = state_14774__$1;(statearr_14836_14904[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 26))
{var inst_14702 = (state_14774[19]);var inst_14760 = (state_14774[2]);var inst_14761 = cljs.core.seq.call(null,inst_14702);var state_14774__$1 = (function (){var statearr_14837 = state_14774;(statearr_14837[30] = inst_14760);
return statearr_14837;
})();if(inst_14761)
{var statearr_14838_14905 = state_14774__$1;(statearr_14838_14905[1] = 42);
} else
{var statearr_14839_14906 = state_14774__$1;(statearr_14839_14906[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 27))
{var inst_14713 = (state_14774[11]);var inst_14711 = (state_14774[12]);var inst_14718 = cljs.core._nth.call(null,inst_14711,inst_14713);var state_14774__$1 = (function (){var statearr_14840 = state_14774;(statearr_14840[8] = inst_14718);
return statearr_14840;
})();var statearr_14841_14907 = state_14774__$1;(statearr_14841_14907[2] = null);
(statearr_14841_14907[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 28))
{var inst_14731 = (state_14774[9]);var inst_14710 = (state_14774[13]);var inst_14731__$1 = cljs.core.seq.call(null,inst_14710);var state_14774__$1 = (function (){var statearr_14845 = state_14774;(statearr_14845[9] = inst_14731__$1);
return statearr_14845;
})();if(inst_14731__$1)
{var statearr_14846_14908 = state_14774__$1;(statearr_14846_14908[1] = 33);
} else
{var statearr_14847_14909 = state_14774__$1;(statearr_14847_14909[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 29))
{var inst_14758 = (state_14774[2]);var state_14774__$1 = state_14774;var statearr_14848_14910 = state_14774__$1;(statearr_14848_14910[2] = inst_14758);
(statearr_14848_14910[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 30))
{var inst_14712 = (state_14774[10]);var inst_14713 = (state_14774[11]);var inst_14711 = (state_14774[12]);var inst_14710 = (state_14774[13]);var inst_14727 = (state_14774[2]);var inst_14728 = (inst_14713 + 1);var tmp14842 = inst_14712;var tmp14843 = inst_14711;var tmp14844 = inst_14710;var inst_14710__$1 = tmp14844;var inst_14711__$1 = tmp14843;var inst_14712__$1 = tmp14842;var inst_14713__$1 = inst_14728;var state_14774__$1 = (function (){var statearr_14849 = state_14774;(statearr_14849[10] = inst_14712__$1);
(statearr_14849[11] = inst_14713__$1);
(statearr_14849[12] = inst_14711__$1);
(statearr_14849[13] = inst_14710__$1);
(statearr_14849[31] = inst_14727);
return statearr_14849;
})();var statearr_14850_14911 = state_14774__$1;(statearr_14850_14911[2] = null);
(statearr_14850_14911[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 31))
{var inst_14718 = (state_14774[8]);var inst_14719 = (state_14774[2]);var inst_14720 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14721 = cljs.core.async.untap_STAR_.call(null,m,inst_14718);var state_14774__$1 = (function (){var statearr_14851 = state_14774;(statearr_14851[32] = inst_14720);
(statearr_14851[33] = inst_14719);
return statearr_14851;
})();var statearr_14852_14912 = state_14774__$1;(statearr_14852_14912[2] = inst_14721);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14774__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_14856 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14856[0] = state_machine__5507__auto__);
(statearr_14856[1] = 1);
return statearr_14856;
});
var state_machine__5507__auto____1 = (function (state_14774){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14774);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14857){if((e14857 instanceof Object))
{var ex__5510__auto__ = e14857;var statearr_14858_14913 = state_14774;(statearr_14858_14913[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14774);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14857;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14914 = state_14774;
state_14774 = G__14914;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14774){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14859 = f__5522__auto__.call(null);(statearr_14859[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14860);
return statearr_14859;
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
cljs.core.async.Mix = (function (){var obj14916 = {};return obj14916;
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
;var m = (function (){if(typeof cljs.core.async.t15026 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15026 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta15027){
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
this.meta15027 = meta15027;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15026.cljs$lang$type = true;
cljs.core.async.t15026.cljs$lang$ctorStr = "cljs.core.async/t15026";
cljs.core.async.t15026.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t15026");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15026.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t15026.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15026.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15026.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15026.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15026.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15026.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15026.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15026.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15028){var self__ = this;
var _15028__$1 = this;return self__.meta15027;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15026.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15028,meta15027__$1){var self__ = this;
var _15028__$1 = this;return (new cljs.core.async.t15026(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta15027__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t15026 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t15026(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta15027){return (new cljs.core.async.t15026(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta15027));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t15026(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___15135 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15093){var state_val_15094 = (state_15093[1]);if((state_val_15094 === 1))
{var inst_15032 = (state_15093[7]);var inst_15032__$1 = calc_state.call(null);var inst_15033 = cljs.core.seq_QMARK_.call(null,inst_15032__$1);var state_15093__$1 = (function (){var statearr_15095 = state_15093;(statearr_15095[7] = inst_15032__$1);
return statearr_15095;
})();if(inst_15033)
{var statearr_15096_15136 = state_15093__$1;(statearr_15096_15136[1] = 2);
} else
{var statearr_15097_15137 = state_15093__$1;(statearr_15097_15137[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15094 === 2))
{var inst_15032 = (state_15093[7]);var inst_15035 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15032);var state_15093__$1 = state_15093;var statearr_15098_15138 = state_15093__$1;(statearr_15098_15138[2] = inst_15035);
(statearr_15098_15138[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15094 === 3))
{var inst_15032 = (state_15093[7]);var state_15093__$1 = state_15093;var statearr_15099_15139 = state_15093__$1;(statearr_15099_15139[2] = inst_15032);
(statearr_15099_15139[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15094 === 4))
{var inst_15032 = (state_15093[7]);var inst_15038 = (state_15093[2]);var inst_15039 = cljs.core.get.call(null,inst_15038,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15040 = cljs.core.get.call(null,inst_15038,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15041 = cljs.core.get.call(null,inst_15038,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_15042 = inst_15032;var state_15093__$1 = (function (){var statearr_15100 = state_15093;(statearr_15100[8] = inst_15040);
(statearr_15100[9] = inst_15042);
(statearr_15100[10] = inst_15041);
(statearr_15100[11] = inst_15039);
return statearr_15100;
})();var statearr_15101_15140 = state_15093__$1;(statearr_15101_15140[2] = null);
(statearr_15101_15140[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15094 === 5))
{var inst_15042 = (state_15093[9]);var inst_15045 = cljs.core.seq_QMARK_.call(null,inst_15042);var state_15093__$1 = state_15093;if(inst_15045)
{var statearr_15102_15141 = state_15093__$1;(statearr_15102_15141[1] = 7);
} else
{var statearr_15103_15142 = state_15093__$1;(statearr_15103_15142[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15094 === 6))
{var inst_15091 = (state_15093[2]);var state_15093__$1 = state_15093;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15093__$1,inst_15091);
} else
{if((state_val_15094 === 7))
{var inst_15042 = (state_15093[9]);var inst_15047 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15042);var state_15093__$1 = state_15093;var statearr_15104_15143 = state_15093__$1;(statearr_15104_15143[2] = inst_15047);
(statearr_15104_15143[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15094 === 8))
{var inst_15042 = (state_15093[9]);var state_15093__$1 = state_15093;var statearr_15105_15144 = state_15093__$1;(statearr_15105_15144[2] = inst_15042);
(statearr_15105_15144[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15094 === 9))
{var inst_15050 = (state_15093[12]);var inst_15050__$1 = (state_15093[2]);var inst_15051 = cljs.core.get.call(null,inst_15050__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15052 = cljs.core.get.call(null,inst_15050__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15053 = cljs.core.get.call(null,inst_15050__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_15093__$1 = (function (){var statearr_15106 = state_15093;(statearr_15106[13] = inst_15053);
(statearr_15106[14] = inst_15052);
(statearr_15106[12] = inst_15050__$1);
return statearr_15106;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15093__$1,10,inst_15051);
} else
{if((state_val_15094 === 10))
{var inst_15058 = (state_15093[15]);var inst_15057 = (state_15093[16]);var inst_15056 = (state_15093[2]);var inst_15057__$1 = cljs.core.nth.call(null,inst_15056,0,null);var inst_15058__$1 = cljs.core.nth.call(null,inst_15056,1,null);var inst_15059 = (inst_15057__$1 == null);var inst_15060 = cljs.core._EQ_.call(null,inst_15058__$1,change);var inst_15061 = (inst_15059) || (inst_15060);var state_15093__$1 = (function (){var statearr_15107 = state_15093;(statearr_15107[15] = inst_15058__$1);
(statearr_15107[16] = inst_15057__$1);
return statearr_15107;
})();if(cljs.core.truth_(inst_15061))
{var statearr_15108_15145 = state_15093__$1;(statearr_15108_15145[1] = 11);
} else
{var statearr_15109_15146 = state_15093__$1;(statearr_15109_15146[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15094 === 11))
{var inst_15057 = (state_15093[16]);var inst_15063 = (inst_15057 == null);var state_15093__$1 = state_15093;if(cljs.core.truth_(inst_15063))
{var statearr_15110_15147 = state_15093__$1;(statearr_15110_15147[1] = 14);
} else
{var statearr_15111_15148 = state_15093__$1;(statearr_15111_15148[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15094 === 12))
{var inst_15058 = (state_15093[15]);var inst_15053 = (state_15093[13]);var inst_15072 = (state_15093[17]);var inst_15072__$1 = inst_15053.call(null,inst_15058);var state_15093__$1 = (function (){var statearr_15112 = state_15093;(statearr_15112[17] = inst_15072__$1);
return statearr_15112;
})();if(cljs.core.truth_(inst_15072__$1))
{var statearr_15113_15149 = state_15093__$1;(statearr_15113_15149[1] = 17);
} else
{var statearr_15114_15150 = state_15093__$1;(statearr_15114_15150[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15094 === 13))
{var inst_15089 = (state_15093[2]);var state_15093__$1 = state_15093;var statearr_15115_15151 = state_15093__$1;(statearr_15115_15151[2] = inst_15089);
(statearr_15115_15151[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15094 === 14))
{var inst_15058 = (state_15093[15]);var inst_15065 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15058);var state_15093__$1 = state_15093;var statearr_15116_15152 = state_15093__$1;(statearr_15116_15152[2] = inst_15065);
(statearr_15116_15152[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15094 === 15))
{var state_15093__$1 = state_15093;var statearr_15117_15153 = state_15093__$1;(statearr_15117_15153[2] = null);
(statearr_15117_15153[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15094 === 16))
{var inst_15068 = (state_15093[2]);var inst_15069 = calc_state.call(null);var inst_15042 = inst_15069;var state_15093__$1 = (function (){var statearr_15118 = state_15093;(statearr_15118[18] = inst_15068);
(statearr_15118[9] = inst_15042);
return statearr_15118;
})();var statearr_15119_15154 = state_15093__$1;(statearr_15119_15154[2] = null);
(statearr_15119_15154[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15094 === 17))
{var inst_15072 = (state_15093[17]);var state_15093__$1 = state_15093;var statearr_15120_15155 = state_15093__$1;(statearr_15120_15155[2] = inst_15072);
(statearr_15120_15155[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15094 === 18))
{var inst_15058 = (state_15093[15]);var inst_15053 = (state_15093[13]);var inst_15052 = (state_15093[14]);var inst_15075 = cljs.core.empty_QMARK_.call(null,inst_15053);var inst_15076 = inst_15052.call(null,inst_15058);var inst_15077 = cljs.core.not.call(null,inst_15076);var inst_15078 = (inst_15075) && (inst_15077);var state_15093__$1 = state_15093;var statearr_15121_15156 = state_15093__$1;(statearr_15121_15156[2] = inst_15078);
(statearr_15121_15156[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15094 === 19))
{var inst_15080 = (state_15093[2]);var state_15093__$1 = state_15093;if(cljs.core.truth_(inst_15080))
{var statearr_15122_15157 = state_15093__$1;(statearr_15122_15157[1] = 20);
} else
{var statearr_15123_15158 = state_15093__$1;(statearr_15123_15158[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15094 === 20))
{var inst_15057 = (state_15093[16]);var state_15093__$1 = state_15093;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15093__$1,23,out,inst_15057);
} else
{if((state_val_15094 === 21))
{var state_15093__$1 = state_15093;var statearr_15124_15159 = state_15093__$1;(statearr_15124_15159[2] = null);
(statearr_15124_15159[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15094 === 22))
{var inst_15050 = (state_15093[12]);var inst_15086 = (state_15093[2]);var inst_15042 = inst_15050;var state_15093__$1 = (function (){var statearr_15125 = state_15093;(statearr_15125[19] = inst_15086);
(statearr_15125[9] = inst_15042);
return statearr_15125;
})();var statearr_15126_15160 = state_15093__$1;(statearr_15126_15160[2] = null);
(statearr_15126_15160[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15094 === 23))
{var inst_15083 = (state_15093[2]);var state_15093__$1 = state_15093;var statearr_15127_15161 = state_15093__$1;(statearr_15127_15161[2] = inst_15083);
(statearr_15127_15161[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_15131 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15131[0] = state_machine__5507__auto__);
(statearr_15131[1] = 1);
return statearr_15131;
});
var state_machine__5507__auto____1 = (function (state_15093){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15093);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15132){if((e15132 instanceof Object))
{var ex__5510__auto__ = e15132;var statearr_15133_15162 = state_15093;(statearr_15133_15162[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15093);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15132;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15163 = state_15093;
state_15093 = G__15163;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15093){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15134 = f__5522__auto__.call(null);(statearr_15134[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15135);
return statearr_15134;
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
cljs.core.async.Pub = (function (){var obj15165 = {};return obj15165;
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
return (function (p1__15166_SHARP_){if(cljs.core.truth_(p1__15166_SHARP_.call(null,topic)))
{return p1__15166_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__15166_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t15291 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15291 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta15292){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta15292 = meta15292;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15291.cljs$lang$type = true;
cljs.core.async.t15291.cljs$lang$ctorStr = "cljs.core.async/t15291";
cljs.core.async.t15291.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t15291");
});})(mults,ensure_mult))
;
cljs.core.async.t15291.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t15291.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t15291.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t15291.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t15291.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t15291.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15291.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t15291.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15293){var self__ = this;
var _15293__$1 = this;return self__.meta15292;
});})(mults,ensure_mult))
;
cljs.core.async.t15291.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15293,meta15292__$1){var self__ = this;
var _15293__$1 = this;return (new cljs.core.async.t15291(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta15292__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t15291 = ((function (mults,ensure_mult){
return (function __GT_t15291(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15292){return (new cljs.core.async.t15291(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15292));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t15291(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___15415 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15367){var state_val_15368 = (state_15367[1]);if((state_val_15368 === 1))
{var state_15367__$1 = state_15367;var statearr_15369_15416 = state_15367__$1;(statearr_15369_15416[2] = null);
(statearr_15369_15416[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15368 === 2))
{var state_15367__$1 = state_15367;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15367__$1,4,ch);
} else
{if((state_val_15368 === 3))
{var inst_15365 = (state_15367[2]);var state_15367__$1 = state_15367;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15367__$1,inst_15365);
} else
{if((state_val_15368 === 4))
{var inst_15296 = (state_15367[7]);var inst_15296__$1 = (state_15367[2]);var inst_15297 = (inst_15296__$1 == null);var state_15367__$1 = (function (){var statearr_15370 = state_15367;(statearr_15370[7] = inst_15296__$1);
return statearr_15370;
})();if(cljs.core.truth_(inst_15297))
{var statearr_15371_15417 = state_15367__$1;(statearr_15371_15417[1] = 5);
} else
{var statearr_15372_15418 = state_15367__$1;(statearr_15372_15418[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15368 === 5))
{var inst_15303 = cljs.core.deref.call(null,mults);var inst_15304 = cljs.core.vals.call(null,inst_15303);var inst_15305 = cljs.core.seq.call(null,inst_15304);var inst_15306 = inst_15305;var inst_15307 = null;var inst_15308 = 0;var inst_15309 = 0;var state_15367__$1 = (function (){var statearr_15373 = state_15367;(statearr_15373[8] = inst_15306);
(statearr_15373[9] = inst_15307);
(statearr_15373[10] = inst_15308);
(statearr_15373[11] = inst_15309);
return statearr_15373;
})();var statearr_15374_15419 = state_15367__$1;(statearr_15374_15419[2] = null);
(statearr_15374_15419[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15368 === 6))
{var inst_15346 = (state_15367[12]);var inst_15296 = (state_15367[7]);var inst_15344 = (state_15367[13]);var inst_15344__$1 = topic_fn.call(null,inst_15296);var inst_15345 = cljs.core.deref.call(null,mults);var inst_15346__$1 = cljs.core.get.call(null,inst_15345,inst_15344__$1);var state_15367__$1 = (function (){var statearr_15375 = state_15367;(statearr_15375[12] = inst_15346__$1);
(statearr_15375[13] = inst_15344__$1);
return statearr_15375;
})();if(cljs.core.truth_(inst_15346__$1))
{var statearr_15376_15420 = state_15367__$1;(statearr_15376_15420[1] = 19);
} else
{var statearr_15377_15421 = state_15367__$1;(statearr_15377_15421[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15368 === 7))
{var inst_15363 = (state_15367[2]);var state_15367__$1 = state_15367;var statearr_15378_15422 = state_15367__$1;(statearr_15378_15422[2] = inst_15363);
(statearr_15378_15422[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15368 === 8))
{var inst_15308 = (state_15367[10]);var inst_15309 = (state_15367[11]);var inst_15311 = (inst_15309 < inst_15308);var inst_15312 = inst_15311;var state_15367__$1 = state_15367;if(cljs.core.truth_(inst_15312))
{var statearr_15382_15423 = state_15367__$1;(statearr_15382_15423[1] = 10);
} else
{var statearr_15383_15424 = state_15367__$1;(statearr_15383_15424[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15368 === 9))
{var inst_15342 = (state_15367[2]);var state_15367__$1 = state_15367;var statearr_15384_15425 = state_15367__$1;(statearr_15384_15425[2] = inst_15342);
(statearr_15384_15425[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15368 === 10))
{var inst_15306 = (state_15367[8]);var inst_15307 = (state_15367[9]);var inst_15308 = (state_15367[10]);var inst_15309 = (state_15367[11]);var inst_15314 = cljs.core._nth.call(null,inst_15307,inst_15309);var inst_15315 = cljs.core.async.muxch_STAR_.call(null,inst_15314);var inst_15316 = cljs.core.async.close_BANG_.call(null,inst_15315);var inst_15317 = (inst_15309 + 1);var tmp15379 = inst_15306;var tmp15380 = inst_15307;var tmp15381 = inst_15308;var inst_15306__$1 = tmp15379;var inst_15307__$1 = tmp15380;var inst_15308__$1 = tmp15381;var inst_15309__$1 = inst_15317;var state_15367__$1 = (function (){var statearr_15385 = state_15367;(statearr_15385[8] = inst_15306__$1);
(statearr_15385[14] = inst_15316);
(statearr_15385[9] = inst_15307__$1);
(statearr_15385[10] = inst_15308__$1);
(statearr_15385[11] = inst_15309__$1);
return statearr_15385;
})();var statearr_15386_15426 = state_15367__$1;(statearr_15386_15426[2] = null);
(statearr_15386_15426[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15368 === 11))
{var inst_15320 = (state_15367[15]);var inst_15306 = (state_15367[8]);var inst_15320__$1 = cljs.core.seq.call(null,inst_15306);var state_15367__$1 = (function (){var statearr_15387 = state_15367;(statearr_15387[15] = inst_15320__$1);
return statearr_15387;
})();if(inst_15320__$1)
{var statearr_15388_15427 = state_15367__$1;(statearr_15388_15427[1] = 13);
} else
{var statearr_15389_15428 = state_15367__$1;(statearr_15389_15428[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15368 === 12))
{var inst_15340 = (state_15367[2]);var state_15367__$1 = state_15367;var statearr_15390_15429 = state_15367__$1;(statearr_15390_15429[2] = inst_15340);
(statearr_15390_15429[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15368 === 13))
{var inst_15320 = (state_15367[15]);var inst_15322 = cljs.core.chunked_seq_QMARK_.call(null,inst_15320);var state_15367__$1 = state_15367;if(inst_15322)
{var statearr_15391_15430 = state_15367__$1;(statearr_15391_15430[1] = 16);
} else
{var statearr_15392_15431 = state_15367__$1;(statearr_15392_15431[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15368 === 14))
{var state_15367__$1 = state_15367;var statearr_15393_15432 = state_15367__$1;(statearr_15393_15432[2] = null);
(statearr_15393_15432[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15368 === 15))
{var inst_15338 = (state_15367[2]);var state_15367__$1 = state_15367;var statearr_15394_15433 = state_15367__$1;(statearr_15394_15433[2] = inst_15338);
(statearr_15394_15433[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15368 === 16))
{var inst_15320 = (state_15367[15]);var inst_15324 = cljs.core.chunk_first.call(null,inst_15320);var inst_15325 = cljs.core.chunk_rest.call(null,inst_15320);var inst_15326 = cljs.core.count.call(null,inst_15324);var inst_15306 = inst_15325;var inst_15307 = inst_15324;var inst_15308 = inst_15326;var inst_15309 = 0;var state_15367__$1 = (function (){var statearr_15395 = state_15367;(statearr_15395[8] = inst_15306);
(statearr_15395[9] = inst_15307);
(statearr_15395[10] = inst_15308);
(statearr_15395[11] = inst_15309);
return statearr_15395;
})();var statearr_15396_15434 = state_15367__$1;(statearr_15396_15434[2] = null);
(statearr_15396_15434[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15368 === 17))
{var inst_15320 = (state_15367[15]);var inst_15329 = cljs.core.first.call(null,inst_15320);var inst_15330 = cljs.core.async.muxch_STAR_.call(null,inst_15329);var inst_15331 = cljs.core.async.close_BANG_.call(null,inst_15330);var inst_15332 = cljs.core.next.call(null,inst_15320);var inst_15306 = inst_15332;var inst_15307 = null;var inst_15308 = 0;var inst_15309 = 0;var state_15367__$1 = (function (){var statearr_15397 = state_15367;(statearr_15397[16] = inst_15331);
(statearr_15397[8] = inst_15306);
(statearr_15397[9] = inst_15307);
(statearr_15397[10] = inst_15308);
(statearr_15397[11] = inst_15309);
return statearr_15397;
})();var statearr_15398_15435 = state_15367__$1;(statearr_15398_15435[2] = null);
(statearr_15398_15435[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15368 === 18))
{var inst_15335 = (state_15367[2]);var state_15367__$1 = state_15367;var statearr_15399_15436 = state_15367__$1;(statearr_15399_15436[2] = inst_15335);
(statearr_15399_15436[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15368 === 19))
{var state_15367__$1 = state_15367;var statearr_15400_15437 = state_15367__$1;(statearr_15400_15437[2] = null);
(statearr_15400_15437[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15368 === 20))
{var state_15367__$1 = state_15367;var statearr_15401_15438 = state_15367__$1;(statearr_15401_15438[2] = null);
(statearr_15401_15438[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15368 === 21))
{var inst_15360 = (state_15367[2]);var state_15367__$1 = (function (){var statearr_15402 = state_15367;(statearr_15402[17] = inst_15360);
return statearr_15402;
})();var statearr_15403_15439 = state_15367__$1;(statearr_15403_15439[2] = null);
(statearr_15403_15439[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15368 === 22))
{var inst_15357 = (state_15367[2]);var state_15367__$1 = state_15367;var statearr_15404_15440 = state_15367__$1;(statearr_15404_15440[2] = inst_15357);
(statearr_15404_15440[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15368 === 23))
{var inst_15344 = (state_15367[13]);var inst_15348 = (state_15367[2]);var inst_15349 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15344);var state_15367__$1 = (function (){var statearr_15405 = state_15367;(statearr_15405[18] = inst_15348);
return statearr_15405;
})();var statearr_15406_15441 = state_15367__$1;(statearr_15406_15441[2] = inst_15349);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15367__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15368 === 24))
{var inst_15346 = (state_15367[12]);var inst_15296 = (state_15367[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15367,23,Object,null,22);var inst_15353 = cljs.core.async.muxch_STAR_.call(null,inst_15346);var state_15367__$1 = state_15367;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15367__$1,25,inst_15353,inst_15296);
} else
{if((state_val_15368 === 25))
{var inst_15355 = (state_15367[2]);var state_15367__$1 = state_15367;var statearr_15407_15442 = state_15367__$1;(statearr_15407_15442[2] = inst_15355);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15367__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_15411 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15411[0] = state_machine__5507__auto__);
(statearr_15411[1] = 1);
return statearr_15411;
});
var state_machine__5507__auto____1 = (function (state_15367){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15367);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15412){if((e15412 instanceof Object))
{var ex__5510__auto__ = e15412;var statearr_15413_15443 = state_15367;(statearr_15413_15443[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15367);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15412;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15444 = state_15367;
state_15367 = G__15444;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15367){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15414 = f__5522__auto__.call(null);(statearr_15414[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15415);
return statearr_15414;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___15581 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15551){var state_val_15552 = (state_15551[1]);if((state_val_15552 === 1))
{var state_15551__$1 = state_15551;var statearr_15553_15582 = state_15551__$1;(statearr_15553_15582[2] = null);
(statearr_15553_15582[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15552 === 2))
{var inst_15514 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_15515 = 0;var state_15551__$1 = (function (){var statearr_15554 = state_15551;(statearr_15554[7] = inst_15515);
(statearr_15554[8] = inst_15514);
return statearr_15554;
})();var statearr_15555_15583 = state_15551__$1;(statearr_15555_15583[2] = null);
(statearr_15555_15583[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15552 === 3))
{var inst_15549 = (state_15551[2]);var state_15551__$1 = state_15551;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15551__$1,inst_15549);
} else
{if((state_val_15552 === 4))
{var inst_15515 = (state_15551[7]);var inst_15517 = (inst_15515 < cnt);var state_15551__$1 = state_15551;if(cljs.core.truth_(inst_15517))
{var statearr_15556_15584 = state_15551__$1;(statearr_15556_15584[1] = 6);
} else
{var statearr_15557_15585 = state_15551__$1;(statearr_15557_15585[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15552 === 5))
{var inst_15535 = (state_15551[2]);var state_15551__$1 = (function (){var statearr_15558 = state_15551;(statearr_15558[9] = inst_15535);
return statearr_15558;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15551__$1,12,dchan);
} else
{if((state_val_15552 === 6))
{var state_15551__$1 = state_15551;var statearr_15559_15586 = state_15551__$1;(statearr_15559_15586[2] = null);
(statearr_15559_15586[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15552 === 7))
{var state_15551__$1 = state_15551;var statearr_15560_15587 = state_15551__$1;(statearr_15560_15587[2] = null);
(statearr_15560_15587[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15552 === 8))
{var inst_15533 = (state_15551[2]);var state_15551__$1 = state_15551;var statearr_15561_15588 = state_15551__$1;(statearr_15561_15588[2] = inst_15533);
(statearr_15561_15588[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15552 === 9))
{var inst_15515 = (state_15551[7]);var inst_15528 = (state_15551[2]);var inst_15529 = (inst_15515 + 1);var inst_15515__$1 = inst_15529;var state_15551__$1 = (function (){var statearr_15562 = state_15551;(statearr_15562[10] = inst_15528);
(statearr_15562[7] = inst_15515__$1);
return statearr_15562;
})();var statearr_15563_15589 = state_15551__$1;(statearr_15563_15589[2] = null);
(statearr_15563_15589[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15552 === 10))
{var inst_15519 = (state_15551[2]);var inst_15520 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_15551__$1 = (function (){var statearr_15564 = state_15551;(statearr_15564[11] = inst_15519);
return statearr_15564;
})();var statearr_15565_15590 = state_15551__$1;(statearr_15565_15590[2] = inst_15520);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15551__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15552 === 11))
{var inst_15515 = (state_15551[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15551,10,Object,null,9);var inst_15524 = chs__$1.call(null,inst_15515);var inst_15525 = done.call(null,inst_15515);var inst_15526 = cljs.core.async.take_BANG_.call(null,inst_15524,inst_15525);var state_15551__$1 = state_15551;var statearr_15566_15591 = state_15551__$1;(statearr_15566_15591[2] = inst_15526);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15551__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15552 === 12))
{var inst_15537 = (state_15551[12]);var inst_15537__$1 = (state_15551[2]);var inst_15538 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15537__$1);var state_15551__$1 = (function (){var statearr_15567 = state_15551;(statearr_15567[12] = inst_15537__$1);
return statearr_15567;
})();if(cljs.core.truth_(inst_15538))
{var statearr_15568_15592 = state_15551__$1;(statearr_15568_15592[1] = 13);
} else
{var statearr_15569_15593 = state_15551__$1;(statearr_15569_15593[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15552 === 13))
{var inst_15540 = cljs.core.async.close_BANG_.call(null,out);var state_15551__$1 = state_15551;var statearr_15570_15594 = state_15551__$1;(statearr_15570_15594[2] = inst_15540);
(statearr_15570_15594[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15552 === 14))
{var inst_15537 = (state_15551[12]);var inst_15542 = cljs.core.apply.call(null,f,inst_15537);var state_15551__$1 = state_15551;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15551__$1,16,out,inst_15542);
} else
{if((state_val_15552 === 15))
{var inst_15547 = (state_15551[2]);var state_15551__$1 = state_15551;var statearr_15571_15595 = state_15551__$1;(statearr_15571_15595[2] = inst_15547);
(statearr_15571_15595[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15552 === 16))
{var inst_15544 = (state_15551[2]);var state_15551__$1 = (function (){var statearr_15572 = state_15551;(statearr_15572[13] = inst_15544);
return statearr_15572;
})();var statearr_15573_15596 = state_15551__$1;(statearr_15573_15596[2] = null);
(statearr_15573_15596[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15577 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15577[0] = state_machine__5507__auto__);
(statearr_15577[1] = 1);
return statearr_15577;
});
var state_machine__5507__auto____1 = (function (state_15551){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15551);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15578){if((e15578 instanceof Object))
{var ex__5510__auto__ = e15578;var statearr_15579_15597 = state_15551;(statearr_15579_15597[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15551);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15578;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15598 = state_15551;
state_15551 = G__15598;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15551){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15580 = f__5522__auto__.call(null);(statearr_15580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15581);
return statearr_15580;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15706 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15682){var state_val_15683 = (state_15682[1]);if((state_val_15683 === 1))
{var inst_15653 = cljs.core.vec.call(null,chs);var inst_15654 = inst_15653;var state_15682__$1 = (function (){var statearr_15684 = state_15682;(statearr_15684[7] = inst_15654);
return statearr_15684;
})();var statearr_15685_15707 = state_15682__$1;(statearr_15685_15707[2] = null);
(statearr_15685_15707[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15683 === 2))
{var inst_15654 = (state_15682[7]);var inst_15656 = cljs.core.count.call(null,inst_15654);var inst_15657 = (inst_15656 > 0);var state_15682__$1 = state_15682;if(cljs.core.truth_(inst_15657))
{var statearr_15686_15708 = state_15682__$1;(statearr_15686_15708[1] = 4);
} else
{var statearr_15687_15709 = state_15682__$1;(statearr_15687_15709[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15683 === 3))
{var inst_15680 = (state_15682[2]);var state_15682__$1 = state_15682;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15682__$1,inst_15680);
} else
{if((state_val_15683 === 4))
{var inst_15654 = (state_15682[7]);var state_15682__$1 = state_15682;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15682__$1,7,inst_15654);
} else
{if((state_val_15683 === 5))
{var inst_15676 = cljs.core.async.close_BANG_.call(null,out);var state_15682__$1 = state_15682;var statearr_15688_15710 = state_15682__$1;(statearr_15688_15710[2] = inst_15676);
(statearr_15688_15710[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15683 === 6))
{var inst_15678 = (state_15682[2]);var state_15682__$1 = state_15682;var statearr_15689_15711 = state_15682__$1;(statearr_15689_15711[2] = inst_15678);
(statearr_15689_15711[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15683 === 7))
{var inst_15661 = (state_15682[8]);var inst_15662 = (state_15682[9]);var inst_15661__$1 = (state_15682[2]);var inst_15662__$1 = cljs.core.nth.call(null,inst_15661__$1,0,null);var inst_15663 = cljs.core.nth.call(null,inst_15661__$1,1,null);var inst_15664 = (inst_15662__$1 == null);var state_15682__$1 = (function (){var statearr_15690 = state_15682;(statearr_15690[10] = inst_15663);
(statearr_15690[8] = inst_15661__$1);
(statearr_15690[9] = inst_15662__$1);
return statearr_15690;
})();if(cljs.core.truth_(inst_15664))
{var statearr_15691_15712 = state_15682__$1;(statearr_15691_15712[1] = 8);
} else
{var statearr_15692_15713 = state_15682__$1;(statearr_15692_15713[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15683 === 8))
{var inst_15663 = (state_15682[10]);var inst_15661 = (state_15682[8]);var inst_15662 = (state_15682[9]);var inst_15654 = (state_15682[7]);var inst_15666 = (function (){var c = inst_15663;var v = inst_15662;var vec__15659 = inst_15661;var cs = inst_15654;return ((function (c,v,vec__15659,cs,inst_15663,inst_15661,inst_15662,inst_15654,state_val_15683){
return (function (p1__15599_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__15599_SHARP_);
});
;})(c,v,vec__15659,cs,inst_15663,inst_15661,inst_15662,inst_15654,state_val_15683))
})();var inst_15667 = cljs.core.filterv.call(null,inst_15666,inst_15654);var inst_15654__$1 = inst_15667;var state_15682__$1 = (function (){var statearr_15693 = state_15682;(statearr_15693[7] = inst_15654__$1);
return statearr_15693;
})();var statearr_15694_15714 = state_15682__$1;(statearr_15694_15714[2] = null);
(statearr_15694_15714[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15683 === 9))
{var inst_15662 = (state_15682[9]);var state_15682__$1 = state_15682;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15682__$1,11,out,inst_15662);
} else
{if((state_val_15683 === 10))
{var inst_15674 = (state_15682[2]);var state_15682__$1 = state_15682;var statearr_15696_15715 = state_15682__$1;(statearr_15696_15715[2] = inst_15674);
(statearr_15696_15715[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15683 === 11))
{var inst_15654 = (state_15682[7]);var inst_15671 = (state_15682[2]);var tmp15695 = inst_15654;var inst_15654__$1 = tmp15695;var state_15682__$1 = (function (){var statearr_15697 = state_15682;(statearr_15697[7] = inst_15654__$1);
(statearr_15697[11] = inst_15671);
return statearr_15697;
})();var statearr_15698_15716 = state_15682__$1;(statearr_15698_15716[2] = null);
(statearr_15698_15716[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15702 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15702[0] = state_machine__5507__auto__);
(statearr_15702[1] = 1);
return statearr_15702;
});
var state_machine__5507__auto____1 = (function (state_15682){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15682);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15703){if((e15703 instanceof Object))
{var ex__5510__auto__ = e15703;var statearr_15704_15717 = state_15682;(statearr_15704_15717[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15682);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15703;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15718 = state_15682;
state_15682 = G__15718;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15682){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15705 = f__5522__auto__.call(null);(statearr_15705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15706);
return statearr_15705;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15811 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15788){var state_val_15789 = (state_15788[1]);if((state_val_15789 === 1))
{var inst_15765 = 0;var state_15788__$1 = (function (){var statearr_15790 = state_15788;(statearr_15790[7] = inst_15765);
return statearr_15790;
})();var statearr_15791_15812 = state_15788__$1;(statearr_15791_15812[2] = null);
(statearr_15791_15812[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15789 === 2))
{var inst_15765 = (state_15788[7]);var inst_15767 = (inst_15765 < n);var state_15788__$1 = state_15788;if(cljs.core.truth_(inst_15767))
{var statearr_15792_15813 = state_15788__$1;(statearr_15792_15813[1] = 4);
} else
{var statearr_15793_15814 = state_15788__$1;(statearr_15793_15814[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15789 === 3))
{var inst_15785 = (state_15788[2]);var inst_15786 = cljs.core.async.close_BANG_.call(null,out);var state_15788__$1 = (function (){var statearr_15794 = state_15788;(statearr_15794[8] = inst_15785);
return statearr_15794;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15788__$1,inst_15786);
} else
{if((state_val_15789 === 4))
{var state_15788__$1 = state_15788;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15788__$1,7,ch);
} else
{if((state_val_15789 === 5))
{var state_15788__$1 = state_15788;var statearr_15795_15815 = state_15788__$1;(statearr_15795_15815[2] = null);
(statearr_15795_15815[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15789 === 6))
{var inst_15783 = (state_15788[2]);var state_15788__$1 = state_15788;var statearr_15796_15816 = state_15788__$1;(statearr_15796_15816[2] = inst_15783);
(statearr_15796_15816[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15789 === 7))
{var inst_15770 = (state_15788[9]);var inst_15770__$1 = (state_15788[2]);var inst_15771 = (inst_15770__$1 == null);var inst_15772 = cljs.core.not.call(null,inst_15771);var state_15788__$1 = (function (){var statearr_15797 = state_15788;(statearr_15797[9] = inst_15770__$1);
return statearr_15797;
})();if(inst_15772)
{var statearr_15798_15817 = state_15788__$1;(statearr_15798_15817[1] = 8);
} else
{var statearr_15799_15818 = state_15788__$1;(statearr_15799_15818[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15789 === 8))
{var inst_15770 = (state_15788[9]);var state_15788__$1 = state_15788;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15788__$1,11,out,inst_15770);
} else
{if((state_val_15789 === 9))
{var state_15788__$1 = state_15788;var statearr_15800_15819 = state_15788__$1;(statearr_15800_15819[2] = null);
(statearr_15800_15819[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15789 === 10))
{var inst_15780 = (state_15788[2]);var state_15788__$1 = state_15788;var statearr_15801_15820 = state_15788__$1;(statearr_15801_15820[2] = inst_15780);
(statearr_15801_15820[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15789 === 11))
{var inst_15765 = (state_15788[7]);var inst_15775 = (state_15788[2]);var inst_15776 = (inst_15765 + 1);var inst_15765__$1 = inst_15776;var state_15788__$1 = (function (){var statearr_15802 = state_15788;(statearr_15802[10] = inst_15775);
(statearr_15802[7] = inst_15765__$1);
return statearr_15802;
})();var statearr_15803_15821 = state_15788__$1;(statearr_15803_15821[2] = null);
(statearr_15803_15821[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15807 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15807[0] = state_machine__5507__auto__);
(statearr_15807[1] = 1);
return statearr_15807;
});
var state_machine__5507__auto____1 = (function (state_15788){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15788);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15808){if((e15808 instanceof Object))
{var ex__5510__auto__ = e15808;var statearr_15809_15822 = state_15788;(statearr_15809_15822[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15788);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15808;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15823 = state_15788;
state_15788 = G__15823;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15788){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15810 = f__5522__auto__.call(null);(statearr_15810[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15811);
return statearr_15810;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15920 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15895){var state_val_15896 = (state_15895[1]);if((state_val_15896 === 1))
{var inst_15872 = null;var state_15895__$1 = (function (){var statearr_15897 = state_15895;(statearr_15897[7] = inst_15872);
return statearr_15897;
})();var statearr_15898_15921 = state_15895__$1;(statearr_15898_15921[2] = null);
(statearr_15898_15921[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15896 === 2))
{var state_15895__$1 = state_15895;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15895__$1,4,ch);
} else
{if((state_val_15896 === 3))
{var inst_15892 = (state_15895[2]);var inst_15893 = cljs.core.async.close_BANG_.call(null,out);var state_15895__$1 = (function (){var statearr_15899 = state_15895;(statearr_15899[8] = inst_15892);
return statearr_15899;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15895__$1,inst_15893);
} else
{if((state_val_15896 === 4))
{var inst_15875 = (state_15895[9]);var inst_15875__$1 = (state_15895[2]);var inst_15876 = (inst_15875__$1 == null);var inst_15877 = cljs.core.not.call(null,inst_15876);var state_15895__$1 = (function (){var statearr_15900 = state_15895;(statearr_15900[9] = inst_15875__$1);
return statearr_15900;
})();if(inst_15877)
{var statearr_15901_15922 = state_15895__$1;(statearr_15901_15922[1] = 5);
} else
{var statearr_15902_15923 = state_15895__$1;(statearr_15902_15923[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15896 === 5))
{var inst_15872 = (state_15895[7]);var inst_15875 = (state_15895[9]);var inst_15879 = cljs.core._EQ_.call(null,inst_15875,inst_15872);var state_15895__$1 = state_15895;if(inst_15879)
{var statearr_15903_15924 = state_15895__$1;(statearr_15903_15924[1] = 8);
} else
{var statearr_15904_15925 = state_15895__$1;(statearr_15904_15925[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15896 === 6))
{var state_15895__$1 = state_15895;var statearr_15906_15926 = state_15895__$1;(statearr_15906_15926[2] = null);
(statearr_15906_15926[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15896 === 7))
{var inst_15890 = (state_15895[2]);var state_15895__$1 = state_15895;var statearr_15907_15927 = state_15895__$1;(statearr_15907_15927[2] = inst_15890);
(statearr_15907_15927[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15896 === 8))
{var inst_15872 = (state_15895[7]);var tmp15905 = inst_15872;var inst_15872__$1 = tmp15905;var state_15895__$1 = (function (){var statearr_15908 = state_15895;(statearr_15908[7] = inst_15872__$1);
return statearr_15908;
})();var statearr_15909_15928 = state_15895__$1;(statearr_15909_15928[2] = null);
(statearr_15909_15928[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15896 === 9))
{var inst_15875 = (state_15895[9]);var state_15895__$1 = state_15895;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15895__$1,11,out,inst_15875);
} else
{if((state_val_15896 === 10))
{var inst_15887 = (state_15895[2]);var state_15895__$1 = state_15895;var statearr_15910_15929 = state_15895__$1;(statearr_15910_15929[2] = inst_15887);
(statearr_15910_15929[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15896 === 11))
{var inst_15875 = (state_15895[9]);var inst_15884 = (state_15895[2]);var inst_15872 = inst_15875;var state_15895__$1 = (function (){var statearr_15911 = state_15895;(statearr_15911[7] = inst_15872);
(statearr_15911[10] = inst_15884);
return statearr_15911;
})();var statearr_15912_15930 = state_15895__$1;(statearr_15912_15930[2] = null);
(statearr_15912_15930[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15916 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15916[0] = state_machine__5507__auto__);
(statearr_15916[1] = 1);
return statearr_15916;
});
var state_machine__5507__auto____1 = (function (state_15895){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15895);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15917){if((e15917 instanceof Object))
{var ex__5510__auto__ = e15917;var statearr_15918_15931 = state_15895;(statearr_15918_15931[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15895);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15917;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15932 = state_15895;
state_15895 = G__15932;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15895){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15919 = f__5522__auto__.call(null);(statearr_15919[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15920);
return statearr_15919;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___16067 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_16037){var state_val_16038 = (state_16037[1]);if((state_val_16038 === 1))
{var inst_16000 = (new Array(n));var inst_16001 = inst_16000;var inst_16002 = 0;var state_16037__$1 = (function (){var statearr_16039 = state_16037;(statearr_16039[7] = inst_16002);
(statearr_16039[8] = inst_16001);
return statearr_16039;
})();var statearr_16040_16068 = state_16037__$1;(statearr_16040_16068[2] = null);
(statearr_16040_16068[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16038 === 2))
{var state_16037__$1 = state_16037;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16037__$1,4,ch);
} else
{if((state_val_16038 === 3))
{var inst_16035 = (state_16037[2]);var state_16037__$1 = state_16037;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16037__$1,inst_16035);
} else
{if((state_val_16038 === 4))
{var inst_16005 = (state_16037[9]);var inst_16005__$1 = (state_16037[2]);var inst_16006 = (inst_16005__$1 == null);var inst_16007 = cljs.core.not.call(null,inst_16006);var state_16037__$1 = (function (){var statearr_16041 = state_16037;(statearr_16041[9] = inst_16005__$1);
return statearr_16041;
})();if(inst_16007)
{var statearr_16042_16069 = state_16037__$1;(statearr_16042_16069[1] = 5);
} else
{var statearr_16043_16070 = state_16037__$1;(statearr_16043_16070[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16038 === 5))
{var inst_16005 = (state_16037[9]);var inst_16002 = (state_16037[7]);var inst_16001 = (state_16037[8]);var inst_16010 = (state_16037[10]);var inst_16009 = (inst_16001[inst_16002] = inst_16005);var inst_16010__$1 = (inst_16002 + 1);var inst_16011 = (inst_16010__$1 < n);var state_16037__$1 = (function (){var statearr_16044 = state_16037;(statearr_16044[10] = inst_16010__$1);
(statearr_16044[11] = inst_16009);
return statearr_16044;
})();if(cljs.core.truth_(inst_16011))
{var statearr_16045_16071 = state_16037__$1;(statearr_16045_16071[1] = 8);
} else
{var statearr_16046_16072 = state_16037__$1;(statearr_16046_16072[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16038 === 6))
{var inst_16002 = (state_16037[7]);var inst_16023 = (inst_16002 > 0);var state_16037__$1 = state_16037;if(cljs.core.truth_(inst_16023))
{var statearr_16048_16073 = state_16037__$1;(statearr_16048_16073[1] = 12);
} else
{var statearr_16049_16074 = state_16037__$1;(statearr_16049_16074[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16038 === 7))
{var inst_16033 = (state_16037[2]);var state_16037__$1 = state_16037;var statearr_16050_16075 = state_16037__$1;(statearr_16050_16075[2] = inst_16033);
(statearr_16050_16075[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16038 === 8))
{var inst_16001 = (state_16037[8]);var inst_16010 = (state_16037[10]);var tmp16047 = inst_16001;var inst_16001__$1 = tmp16047;var inst_16002 = inst_16010;var state_16037__$1 = (function (){var statearr_16051 = state_16037;(statearr_16051[7] = inst_16002);
(statearr_16051[8] = inst_16001__$1);
return statearr_16051;
})();var statearr_16052_16076 = state_16037__$1;(statearr_16052_16076[2] = null);
(statearr_16052_16076[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16038 === 9))
{var inst_16001 = (state_16037[8]);var inst_16015 = cljs.core.vec.call(null,inst_16001);var state_16037__$1 = state_16037;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16037__$1,11,out,inst_16015);
} else
{if((state_val_16038 === 10))
{var inst_16021 = (state_16037[2]);var state_16037__$1 = state_16037;var statearr_16053_16077 = state_16037__$1;(statearr_16053_16077[2] = inst_16021);
(statearr_16053_16077[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16038 === 11))
{var inst_16017 = (state_16037[2]);var inst_16018 = (new Array(n));var inst_16001 = inst_16018;var inst_16002 = 0;var state_16037__$1 = (function (){var statearr_16054 = state_16037;(statearr_16054[7] = inst_16002);
(statearr_16054[8] = inst_16001);
(statearr_16054[12] = inst_16017);
return statearr_16054;
})();var statearr_16055_16078 = state_16037__$1;(statearr_16055_16078[2] = null);
(statearr_16055_16078[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16038 === 12))
{var inst_16001 = (state_16037[8]);var inst_16025 = cljs.core.vec.call(null,inst_16001);var state_16037__$1 = state_16037;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16037__$1,15,out,inst_16025);
} else
{if((state_val_16038 === 13))
{var state_16037__$1 = state_16037;var statearr_16056_16079 = state_16037__$1;(statearr_16056_16079[2] = null);
(statearr_16056_16079[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16038 === 14))
{var inst_16030 = (state_16037[2]);var inst_16031 = cljs.core.async.close_BANG_.call(null,out);var state_16037__$1 = (function (){var statearr_16057 = state_16037;(statearr_16057[13] = inst_16030);
return statearr_16057;
})();var statearr_16058_16080 = state_16037__$1;(statearr_16058_16080[2] = inst_16031);
(statearr_16058_16080[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16038 === 15))
{var inst_16027 = (state_16037[2]);var state_16037__$1 = state_16037;var statearr_16059_16081 = state_16037__$1;(statearr_16059_16081[2] = inst_16027);
(statearr_16059_16081[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_16063 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16063[0] = state_machine__5507__auto__);
(statearr_16063[1] = 1);
return statearr_16063;
});
var state_machine__5507__auto____1 = (function (state_16037){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_16037);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e16064){if((e16064 instanceof Object))
{var ex__5510__auto__ = e16064;var statearr_16065_16082 = state_16037;(statearr_16065_16082[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16037);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16064;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16083 = state_16037;
state_16037 = G__16083;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_16037){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_16037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_16066 = f__5522__auto__.call(null);(statearr_16066[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___16067);
return statearr_16066;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___16226 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_16196){var state_val_16197 = (state_16196[1]);if((state_val_16197 === 1))
{var inst_16155 = [];var inst_16156 = inst_16155;var inst_16157 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_16196__$1 = (function (){var statearr_16198 = state_16196;(statearr_16198[7] = inst_16156);
(statearr_16198[8] = inst_16157);
return statearr_16198;
})();var statearr_16199_16227 = state_16196__$1;(statearr_16199_16227[2] = null);
(statearr_16199_16227[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16197 === 2))
{var state_16196__$1 = state_16196;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16196__$1,4,ch);
} else
{if((state_val_16197 === 3))
{var inst_16194 = (state_16196[2]);var state_16196__$1 = state_16196;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16196__$1,inst_16194);
} else
{if((state_val_16197 === 4))
{var inst_16160 = (state_16196[9]);var inst_16160__$1 = (state_16196[2]);var inst_16161 = (inst_16160__$1 == null);var inst_16162 = cljs.core.not.call(null,inst_16161);var state_16196__$1 = (function (){var statearr_16200 = state_16196;(statearr_16200[9] = inst_16160__$1);
return statearr_16200;
})();if(inst_16162)
{var statearr_16201_16228 = state_16196__$1;(statearr_16201_16228[1] = 5);
} else
{var statearr_16202_16229 = state_16196__$1;(statearr_16202_16229[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16197 === 5))
{var inst_16160 = (state_16196[9]);var inst_16157 = (state_16196[8]);var inst_16164 = (state_16196[10]);var inst_16164__$1 = f.call(null,inst_16160);var inst_16165 = cljs.core._EQ_.call(null,inst_16164__$1,inst_16157);var inst_16166 = cljs.core.keyword_identical_QMARK_.call(null,inst_16157,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_16167 = (inst_16165) || (inst_16166);var state_16196__$1 = (function (){var statearr_16203 = state_16196;(statearr_16203[10] = inst_16164__$1);
return statearr_16203;
})();if(cljs.core.truth_(inst_16167))
{var statearr_16204_16230 = state_16196__$1;(statearr_16204_16230[1] = 8);
} else
{var statearr_16205_16231 = state_16196__$1;(statearr_16205_16231[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16197 === 6))
{var inst_16156 = (state_16196[7]);var inst_16181 = inst_16156.length;var inst_16182 = (inst_16181 > 0);var state_16196__$1 = state_16196;if(cljs.core.truth_(inst_16182))
{var statearr_16207_16232 = state_16196__$1;(statearr_16207_16232[1] = 12);
} else
{var statearr_16208_16233 = state_16196__$1;(statearr_16208_16233[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16197 === 7))
{var inst_16192 = (state_16196[2]);var state_16196__$1 = state_16196;var statearr_16209_16234 = state_16196__$1;(statearr_16209_16234[2] = inst_16192);
(statearr_16209_16234[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16197 === 8))
{var inst_16160 = (state_16196[9]);var inst_16156 = (state_16196[7]);var inst_16164 = (state_16196[10]);var inst_16169 = inst_16156.push(inst_16160);var tmp16206 = inst_16156;var inst_16156__$1 = tmp16206;var inst_16157 = inst_16164;var state_16196__$1 = (function (){var statearr_16210 = state_16196;(statearr_16210[7] = inst_16156__$1);
(statearr_16210[8] = inst_16157);
(statearr_16210[11] = inst_16169);
return statearr_16210;
})();var statearr_16211_16235 = state_16196__$1;(statearr_16211_16235[2] = null);
(statearr_16211_16235[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16197 === 9))
{var inst_16156 = (state_16196[7]);var inst_16172 = cljs.core.vec.call(null,inst_16156);var state_16196__$1 = state_16196;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16196__$1,11,out,inst_16172);
} else
{if((state_val_16197 === 10))
{var inst_16179 = (state_16196[2]);var state_16196__$1 = state_16196;var statearr_16212_16236 = state_16196__$1;(statearr_16212_16236[2] = inst_16179);
(statearr_16212_16236[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16197 === 11))
{var inst_16160 = (state_16196[9]);var inst_16164 = (state_16196[10]);var inst_16174 = (state_16196[2]);var inst_16175 = [];var inst_16176 = inst_16175.push(inst_16160);var inst_16156 = inst_16175;var inst_16157 = inst_16164;var state_16196__$1 = (function (){var statearr_16213 = state_16196;(statearr_16213[7] = inst_16156);
(statearr_16213[8] = inst_16157);
(statearr_16213[12] = inst_16174);
(statearr_16213[13] = inst_16176);
return statearr_16213;
})();var statearr_16214_16237 = state_16196__$1;(statearr_16214_16237[2] = null);
(statearr_16214_16237[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16197 === 12))
{var inst_16156 = (state_16196[7]);var inst_16184 = cljs.core.vec.call(null,inst_16156);var state_16196__$1 = state_16196;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16196__$1,15,out,inst_16184);
} else
{if((state_val_16197 === 13))
{var state_16196__$1 = state_16196;var statearr_16215_16238 = state_16196__$1;(statearr_16215_16238[2] = null);
(statearr_16215_16238[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16197 === 14))
{var inst_16189 = (state_16196[2]);var inst_16190 = cljs.core.async.close_BANG_.call(null,out);var state_16196__$1 = (function (){var statearr_16216 = state_16196;(statearr_16216[14] = inst_16189);
return statearr_16216;
})();var statearr_16217_16239 = state_16196__$1;(statearr_16217_16239[2] = inst_16190);
(statearr_16217_16239[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16197 === 15))
{var inst_16186 = (state_16196[2]);var state_16196__$1 = state_16196;var statearr_16218_16240 = state_16196__$1;(statearr_16218_16240[2] = inst_16186);
(statearr_16218_16240[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_16222 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16222[0] = state_machine__5507__auto__);
(statearr_16222[1] = 1);
return statearr_16222;
});
var state_machine__5507__auto____1 = (function (state_16196){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_16196);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e16223){if((e16223 instanceof Object))
{var ex__5510__auto__ = e16223;var statearr_16224_16241 = state_16196;(statearr_16224_16241[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16196);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16223;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16242 = state_16196;
state_16196 = G__16242;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_16196){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_16196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_16225 = f__5522__auto__.call(null);(statearr_16225[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___16226);
return statearr_16225;
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

//# sourceMappingURL=async.js.map