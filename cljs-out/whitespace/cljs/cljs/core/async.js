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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t34460 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34460 = (function (f,fn_handler,meta34461){
this.f = f;
this.fn_handler = fn_handler;
this.meta34461 = meta34461;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34460.cljs$lang$type = true;
cljs.core.async.t34460.cljs$lang$ctorStr = "cljs.core.async/t34460";
cljs.core.async.t34460.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34460");
});
cljs.core.async.t34460.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34460.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t34460.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t34460.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34462){var self__ = this;
var _34462__$1 = this;return self__.meta34461;
});
cljs.core.async.t34460.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34462,meta34461__$1){var self__ = this;
var _34462__$1 = this;return (new cljs.core.async.t34460(self__.f,self__.fn_handler,meta34461__$1));
});
cljs.core.async.__GT_t34460 = (function __GT_t34460(f__$1,fn_handler__$1,meta34461){return (new cljs.core.async.t34460(f__$1,fn_handler__$1,meta34461));
});
}
return (new cljs.core.async.t34460(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__34464 = buff;if(G__34464)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__34464.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__34464.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__34464);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__34464);
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
{var val_34465 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_34465);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_34465);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___34466 = n;var x_34467 = 0;while(true){
if((x_34467 < n__4248__auto___34466))
{(a[x_34467] = 0);
{
var G__34468 = (x_34467 + 1);
x_34467 = G__34468;
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
var G__34469 = (i + 1);
i = G__34469;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t34473 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34473 = (function (flag,alt_flag,meta34474){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta34474 = meta34474;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34473.cljs$lang$type = true;
cljs.core.async.t34473.cljs$lang$ctorStr = "cljs.core.async/t34473";
cljs.core.async.t34473.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34473");
});
cljs.core.async.t34473.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34473.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t34473.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t34473.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34475){var self__ = this;
var _34475__$1 = this;return self__.meta34474;
});
cljs.core.async.t34473.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34475,meta34474__$1){var self__ = this;
var _34475__$1 = this;return (new cljs.core.async.t34473(self__.flag,self__.alt_flag,meta34474__$1));
});
cljs.core.async.__GT_t34473 = (function __GT_t34473(flag__$1,alt_flag__$1,meta34474){return (new cljs.core.async.t34473(flag__$1,alt_flag__$1,meta34474));
});
}
return (new cljs.core.async.t34473(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t34479 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34479 = (function (cb,flag,alt_handler,meta34480){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta34480 = meta34480;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34479.cljs$lang$type = true;
cljs.core.async.t34479.cljs$lang$ctorStr = "cljs.core.async/t34479";
cljs.core.async.t34479.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34479");
});
cljs.core.async.t34479.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34479.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t34479.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t34479.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34481){var self__ = this;
var _34481__$1 = this;return self__.meta34480;
});
cljs.core.async.t34479.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34481,meta34480__$1){var self__ = this;
var _34481__$1 = this;return (new cljs.core.async.t34479(self__.cb,self__.flag,self__.alt_handler,meta34480__$1));
});
cljs.core.async.__GT_t34479 = (function __GT_t34479(cb__$1,flag__$1,alt_handler__$1,meta34480){return (new cljs.core.async.t34479(cb__$1,flag__$1,alt_handler__$1,meta34480));
});
}
return (new cljs.core.async.t34479(cb,flag,alt_handler,null));
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
return (function (p1__34482_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34482_SHARP_,port], null));
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
var G__34483 = (i + 1);
i = G__34483;
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
var alts_BANG___delegate = function (ports,p__34484){var map__34486 = p__34484;var map__34486__$1 = ((cljs.core.seq_QMARK_.call(null,map__34486))?cljs.core.apply.call(null,cljs.core.hash_map,map__34486):map__34486);var opts = map__34486__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__34484 = null;if (arguments.length > 1) {
  p__34484 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__34484);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__34487){
var ports = cljs.core.first(arglist__34487);
var p__34484 = cljs.core.rest(arglist__34487);
return alts_BANG___delegate(ports,p__34484);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t34495 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34495 = (function (ch,f,map_LT_,meta34496){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta34496 = meta34496;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34495.cljs$lang$type = true;
cljs.core.async.t34495.cljs$lang$ctorStr = "cljs.core.async/t34495";
cljs.core.async.t34495.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34495");
});
cljs.core.async.t34495.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t34495.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t34495.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t34495.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t34498 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34498 = (function (fn1,_,meta34496,ch,f,map_LT_,meta34499){
this.fn1 = fn1;
this._ = _;
this.meta34496 = meta34496;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta34499 = meta34499;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34498.cljs$lang$type = true;
cljs.core.async.t34498.cljs$lang$ctorStr = "cljs.core.async/t34498";
cljs.core.async.t34498.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34498");
});
cljs.core.async.t34498.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34498.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t34498.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t34498.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__34488_SHARP_){return f1.call(null,(((p1__34488_SHARP_ == null))?null:self__.f.call(null,p1__34488_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t34498.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34500){var self__ = this;
var _34500__$1 = this;return self__.meta34499;
});
cljs.core.async.t34498.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34500,meta34499__$1){var self__ = this;
var _34500__$1 = this;return (new cljs.core.async.t34498(self__.fn1,self__._,self__.meta34496,self__.ch,self__.f,self__.map_LT_,meta34499__$1));
});
cljs.core.async.__GT_t34498 = (function __GT_t34498(fn1__$1,___$2,meta34496__$1,ch__$2,f__$2,map_LT___$2,meta34499){return (new cljs.core.async.t34498(fn1__$1,___$2,meta34496__$1,ch__$2,f__$2,map_LT___$2,meta34499));
});
}
return (new cljs.core.async.t34498(fn1,___$1,self__.meta34496,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t34495.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t34495.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t34495.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34497){var self__ = this;
var _34497__$1 = this;return self__.meta34496;
});
cljs.core.async.t34495.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34497,meta34496__$1){var self__ = this;
var _34497__$1 = this;return (new cljs.core.async.t34495(self__.ch,self__.f,self__.map_LT_,meta34496__$1));
});
cljs.core.async.__GT_t34495 = (function __GT_t34495(ch__$1,f__$1,map_LT___$1,meta34496){return (new cljs.core.async.t34495(ch__$1,f__$1,map_LT___$1,meta34496));
});
}
return (new cljs.core.async.t34495(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t34504 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34504 = (function (ch,f,map_GT_,meta34505){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta34505 = meta34505;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34504.cljs$lang$type = true;
cljs.core.async.t34504.cljs$lang$ctorStr = "cljs.core.async/t34504";
cljs.core.async.t34504.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34504");
});
cljs.core.async.t34504.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t34504.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t34504.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t34504.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t34504.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t34504.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t34504.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34506){var self__ = this;
var _34506__$1 = this;return self__.meta34505;
});
cljs.core.async.t34504.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34506,meta34505__$1){var self__ = this;
var _34506__$1 = this;return (new cljs.core.async.t34504(self__.ch,self__.f,self__.map_GT_,meta34505__$1));
});
cljs.core.async.__GT_t34504 = (function __GT_t34504(ch__$1,f__$1,map_GT___$1,meta34505){return (new cljs.core.async.t34504(ch__$1,f__$1,map_GT___$1,meta34505));
});
}
return (new cljs.core.async.t34504(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t34510 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34510 = (function (ch,p,filter_GT_,meta34511){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta34511 = meta34511;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34510.cljs$lang$type = true;
cljs.core.async.t34510.cljs$lang$ctorStr = "cljs.core.async/t34510";
cljs.core.async.t34510.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34510");
});
cljs.core.async.t34510.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t34510.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t34510.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t34510.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t34510.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t34510.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t34510.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34512){var self__ = this;
var _34512__$1 = this;return self__.meta34511;
});
cljs.core.async.t34510.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34512,meta34511__$1){var self__ = this;
var _34512__$1 = this;return (new cljs.core.async.t34510(self__.ch,self__.p,self__.filter_GT_,meta34511__$1));
});
cljs.core.async.__GT_t34510 = (function __GT_t34510(ch__$1,p__$1,filter_GT___$1,meta34511){return (new cljs.core.async.t34510(ch__$1,p__$1,filter_GT___$1,meta34511));
});
}
return (new cljs.core.async.t34510(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___34595 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34574){var state_val_34575 = (state_34574[1]);if((state_val_34575 === 1))
{var state_34574__$1 = state_34574;var statearr_34576_34596 = state_34574__$1;(statearr_34576_34596[2] = null);
(statearr_34576_34596[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34575 === 2))
{var state_34574__$1 = state_34574;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34574__$1,4,ch);
} else
{if((state_val_34575 === 3))
{var inst_34572 = (state_34574[2]);var state_34574__$1 = state_34574;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34574__$1,inst_34572);
} else
{if((state_val_34575 === 4))
{var inst_34556 = (state_34574[7]);var inst_34556__$1 = (state_34574[2]);var inst_34557 = (inst_34556__$1 == null);var state_34574__$1 = (function (){var statearr_34577 = state_34574;(statearr_34577[7] = inst_34556__$1);
return statearr_34577;
})();if(cljs.core.truth_(inst_34557))
{var statearr_34578_34597 = state_34574__$1;(statearr_34578_34597[1] = 5);
} else
{var statearr_34579_34598 = state_34574__$1;(statearr_34579_34598[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34575 === 5))
{var inst_34559 = cljs.core.async.close_BANG_.call(null,out);var state_34574__$1 = state_34574;var statearr_34580_34599 = state_34574__$1;(statearr_34580_34599[2] = inst_34559);
(statearr_34580_34599[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34575 === 6))
{var inst_34556 = (state_34574[7]);var inst_34561 = p.call(null,inst_34556);var state_34574__$1 = state_34574;if(cljs.core.truth_(inst_34561))
{var statearr_34581_34600 = state_34574__$1;(statearr_34581_34600[1] = 8);
} else
{var statearr_34582_34601 = state_34574__$1;(statearr_34582_34601[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34575 === 7))
{var inst_34570 = (state_34574[2]);var state_34574__$1 = state_34574;var statearr_34583_34602 = state_34574__$1;(statearr_34583_34602[2] = inst_34570);
(statearr_34583_34602[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34575 === 8))
{var inst_34556 = (state_34574[7]);var state_34574__$1 = state_34574;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34574__$1,11,out,inst_34556);
} else
{if((state_val_34575 === 9))
{var state_34574__$1 = state_34574;var statearr_34584_34603 = state_34574__$1;(statearr_34584_34603[2] = null);
(statearr_34584_34603[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34575 === 10))
{var inst_34567 = (state_34574[2]);var state_34574__$1 = (function (){var statearr_34585 = state_34574;(statearr_34585[8] = inst_34567);
return statearr_34585;
})();var statearr_34586_34604 = state_34574__$1;(statearr_34586_34604[2] = null);
(statearr_34586_34604[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34575 === 11))
{var inst_34564 = (state_34574[2]);var state_34574__$1 = state_34574;var statearr_34587_34605 = state_34574__$1;(statearr_34587_34605[2] = inst_34564);
(statearr_34587_34605[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_34591 = [null,null,null,null,null,null,null,null,null];(statearr_34591[0] = state_machine__5507__auto__);
(statearr_34591[1] = 1);
return statearr_34591;
});
var state_machine__5507__auto____1 = (function (state_34574){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34574);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34592){if((e34592 instanceof Object))
{var ex__5510__auto__ = e34592;var statearr_34593_34606 = state_34574;(statearr_34593_34606[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34574);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34592;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34607 = state_34574;
state_34574 = G__34607;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34574){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34594 = f__5522__auto__.call(null);(statearr_34594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34595);
return statearr_34594;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34759){var state_val_34760 = (state_34759[1]);if((state_val_34760 === 1))
{var state_34759__$1 = state_34759;var statearr_34761_34798 = state_34759__$1;(statearr_34761_34798[2] = null);
(statearr_34761_34798[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34760 === 2))
{var state_34759__$1 = state_34759;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34759__$1,4,in$);
} else
{if((state_val_34760 === 3))
{var inst_34757 = (state_34759[2]);var state_34759__$1 = state_34759;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34759__$1,inst_34757);
} else
{if((state_val_34760 === 4))
{var inst_34705 = (state_34759[7]);var inst_34705__$1 = (state_34759[2]);var inst_34706 = (inst_34705__$1 == null);var state_34759__$1 = (function (){var statearr_34762 = state_34759;(statearr_34762[7] = inst_34705__$1);
return statearr_34762;
})();if(cljs.core.truth_(inst_34706))
{var statearr_34763_34799 = state_34759__$1;(statearr_34763_34799[1] = 5);
} else
{var statearr_34764_34800 = state_34759__$1;(statearr_34764_34800[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34760 === 5))
{var inst_34708 = cljs.core.async.close_BANG_.call(null,out);var state_34759__$1 = state_34759;var statearr_34765_34801 = state_34759__$1;(statearr_34765_34801[2] = inst_34708);
(statearr_34765_34801[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34760 === 6))
{var inst_34705 = (state_34759[7]);var inst_34710 = f.call(null,inst_34705);var inst_34715 = cljs.core.seq.call(null,inst_34710);var inst_34716 = inst_34715;var inst_34717 = null;var inst_34718 = 0;var inst_34719 = 0;var state_34759__$1 = (function (){var statearr_34766 = state_34759;(statearr_34766[8] = inst_34717);
(statearr_34766[9] = inst_34716);
(statearr_34766[10] = inst_34718);
(statearr_34766[11] = inst_34719);
return statearr_34766;
})();var statearr_34767_34802 = state_34759__$1;(statearr_34767_34802[2] = null);
(statearr_34767_34802[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34760 === 7))
{var inst_34755 = (state_34759[2]);var state_34759__$1 = state_34759;var statearr_34768_34803 = state_34759__$1;(statearr_34768_34803[2] = inst_34755);
(statearr_34768_34803[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34760 === 8))
{var inst_34718 = (state_34759[10]);var inst_34719 = (state_34759[11]);var inst_34721 = (inst_34719 < inst_34718);var inst_34722 = inst_34721;var state_34759__$1 = state_34759;if(cljs.core.truth_(inst_34722))
{var statearr_34769_34804 = state_34759__$1;(statearr_34769_34804[1] = 10);
} else
{var statearr_34770_34805 = state_34759__$1;(statearr_34770_34805[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34760 === 9))
{var inst_34752 = (state_34759[2]);var state_34759__$1 = (function (){var statearr_34771 = state_34759;(statearr_34771[12] = inst_34752);
return statearr_34771;
})();var statearr_34772_34806 = state_34759__$1;(statearr_34772_34806[2] = null);
(statearr_34772_34806[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34760 === 10))
{var inst_34717 = (state_34759[8]);var inst_34719 = (state_34759[11]);var inst_34724 = cljs.core._nth.call(null,inst_34717,inst_34719);var state_34759__$1 = state_34759;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34759__$1,13,out,inst_34724);
} else
{if((state_val_34760 === 11))
{var inst_34730 = (state_34759[13]);var inst_34716 = (state_34759[9]);var inst_34730__$1 = cljs.core.seq.call(null,inst_34716);var state_34759__$1 = (function (){var statearr_34776 = state_34759;(statearr_34776[13] = inst_34730__$1);
return statearr_34776;
})();if(inst_34730__$1)
{var statearr_34777_34807 = state_34759__$1;(statearr_34777_34807[1] = 14);
} else
{var statearr_34778_34808 = state_34759__$1;(statearr_34778_34808[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34760 === 12))
{var inst_34750 = (state_34759[2]);var state_34759__$1 = state_34759;var statearr_34779_34809 = state_34759__$1;(statearr_34779_34809[2] = inst_34750);
(statearr_34779_34809[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34760 === 13))
{var inst_34717 = (state_34759[8]);var inst_34716 = (state_34759[9]);var inst_34718 = (state_34759[10]);var inst_34719 = (state_34759[11]);var inst_34726 = (state_34759[2]);var inst_34727 = (inst_34719 + 1);var tmp34773 = inst_34717;var tmp34774 = inst_34716;var tmp34775 = inst_34718;var inst_34716__$1 = tmp34774;var inst_34717__$1 = tmp34773;var inst_34718__$1 = tmp34775;var inst_34719__$1 = inst_34727;var state_34759__$1 = (function (){var statearr_34780 = state_34759;(statearr_34780[8] = inst_34717__$1);
(statearr_34780[9] = inst_34716__$1);
(statearr_34780[10] = inst_34718__$1);
(statearr_34780[11] = inst_34719__$1);
(statearr_34780[14] = inst_34726);
return statearr_34780;
})();var statearr_34781_34810 = state_34759__$1;(statearr_34781_34810[2] = null);
(statearr_34781_34810[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34760 === 14))
{var inst_34730 = (state_34759[13]);var inst_34732 = cljs.core.chunked_seq_QMARK_.call(null,inst_34730);var state_34759__$1 = state_34759;if(inst_34732)
{var statearr_34782_34811 = state_34759__$1;(statearr_34782_34811[1] = 17);
} else
{var statearr_34783_34812 = state_34759__$1;(statearr_34783_34812[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34760 === 15))
{var state_34759__$1 = state_34759;var statearr_34784_34813 = state_34759__$1;(statearr_34784_34813[2] = null);
(statearr_34784_34813[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34760 === 16))
{var inst_34748 = (state_34759[2]);var state_34759__$1 = state_34759;var statearr_34785_34814 = state_34759__$1;(statearr_34785_34814[2] = inst_34748);
(statearr_34785_34814[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34760 === 17))
{var inst_34730 = (state_34759[13]);var inst_34734 = cljs.core.chunk_first.call(null,inst_34730);var inst_34735 = cljs.core.chunk_rest.call(null,inst_34730);var inst_34736 = cljs.core.count.call(null,inst_34734);var inst_34716 = inst_34735;var inst_34717 = inst_34734;var inst_34718 = inst_34736;var inst_34719 = 0;var state_34759__$1 = (function (){var statearr_34786 = state_34759;(statearr_34786[8] = inst_34717);
(statearr_34786[9] = inst_34716);
(statearr_34786[10] = inst_34718);
(statearr_34786[11] = inst_34719);
return statearr_34786;
})();var statearr_34787_34815 = state_34759__$1;(statearr_34787_34815[2] = null);
(statearr_34787_34815[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34760 === 18))
{var inst_34730 = (state_34759[13]);var inst_34739 = cljs.core.first.call(null,inst_34730);var state_34759__$1 = state_34759;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34759__$1,20,out,inst_34739);
} else
{if((state_val_34760 === 19))
{var inst_34745 = (state_34759[2]);var state_34759__$1 = state_34759;var statearr_34788_34816 = state_34759__$1;(statearr_34788_34816[2] = inst_34745);
(statearr_34788_34816[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34760 === 20))
{var inst_34730 = (state_34759[13]);var inst_34741 = (state_34759[2]);var inst_34742 = cljs.core.next.call(null,inst_34730);var inst_34716 = inst_34742;var inst_34717 = null;var inst_34718 = 0;var inst_34719 = 0;var state_34759__$1 = (function (){var statearr_34789 = state_34759;(statearr_34789[8] = inst_34717);
(statearr_34789[9] = inst_34716);
(statearr_34789[10] = inst_34718);
(statearr_34789[11] = inst_34719);
(statearr_34789[15] = inst_34741);
return statearr_34789;
})();var statearr_34790_34817 = state_34759__$1;(statearr_34790_34817[2] = null);
(statearr_34790_34817[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_34794 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34794[0] = state_machine__5507__auto__);
(statearr_34794[1] = 1);
return statearr_34794;
});
var state_machine__5507__auto____1 = (function (state_34759){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34759);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34795){if((e34795 instanceof Object))
{var ex__5510__auto__ = e34795;var statearr_34796_34818 = state_34759;(statearr_34796_34818[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34759);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34795;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34819 = state_34759;
state_34759 = G__34819;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34759){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34797 = f__5522__auto__.call(null);(statearr_34797[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_34797;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___34900 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34879){var state_val_34880 = (state_34879[1]);if((state_val_34880 === 1))
{var state_34879__$1 = state_34879;var statearr_34881_34901 = state_34879__$1;(statearr_34881_34901[2] = null);
(statearr_34881_34901[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34880 === 2))
{var state_34879__$1 = state_34879;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34879__$1,4,from);
} else
{if((state_val_34880 === 3))
{var inst_34877 = (state_34879[2]);var state_34879__$1 = state_34879;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34879__$1,inst_34877);
} else
{if((state_val_34880 === 4))
{var inst_34862 = (state_34879[7]);var inst_34862__$1 = (state_34879[2]);var inst_34863 = (inst_34862__$1 == null);var state_34879__$1 = (function (){var statearr_34882 = state_34879;(statearr_34882[7] = inst_34862__$1);
return statearr_34882;
})();if(cljs.core.truth_(inst_34863))
{var statearr_34883_34902 = state_34879__$1;(statearr_34883_34902[1] = 5);
} else
{var statearr_34884_34903 = state_34879__$1;(statearr_34884_34903[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34880 === 5))
{var state_34879__$1 = state_34879;if(cljs.core.truth_(close_QMARK_))
{var statearr_34885_34904 = state_34879__$1;(statearr_34885_34904[1] = 8);
} else
{var statearr_34886_34905 = state_34879__$1;(statearr_34886_34905[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34880 === 6))
{var inst_34862 = (state_34879[7]);var state_34879__$1 = state_34879;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34879__$1,11,to,inst_34862);
} else
{if((state_val_34880 === 7))
{var inst_34875 = (state_34879[2]);var state_34879__$1 = state_34879;var statearr_34887_34906 = state_34879__$1;(statearr_34887_34906[2] = inst_34875);
(statearr_34887_34906[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34880 === 8))
{var inst_34866 = cljs.core.async.close_BANG_.call(null,to);var state_34879__$1 = state_34879;var statearr_34888_34907 = state_34879__$1;(statearr_34888_34907[2] = inst_34866);
(statearr_34888_34907[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34880 === 9))
{var state_34879__$1 = state_34879;var statearr_34889_34908 = state_34879__$1;(statearr_34889_34908[2] = null);
(statearr_34889_34908[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34880 === 10))
{var inst_34869 = (state_34879[2]);var state_34879__$1 = state_34879;var statearr_34890_34909 = state_34879__$1;(statearr_34890_34909[2] = inst_34869);
(statearr_34890_34909[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34880 === 11))
{var inst_34872 = (state_34879[2]);var state_34879__$1 = (function (){var statearr_34891 = state_34879;(statearr_34891[8] = inst_34872);
return statearr_34891;
})();var statearr_34892_34910 = state_34879__$1;(statearr_34892_34910[2] = null);
(statearr_34892_34910[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_34896 = [null,null,null,null,null,null,null,null,null];(statearr_34896[0] = state_machine__5507__auto__);
(statearr_34896[1] = 1);
return statearr_34896;
});
var state_machine__5507__auto____1 = (function (state_34879){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34879);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34897){if((e34897 instanceof Object))
{var ex__5510__auto__ = e34897;var statearr_34898_34911 = state_34879;(statearr_34898_34911[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34879);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34897;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34912 = state_34879;
state_34879 = G__34912;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34879){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34899 = f__5522__auto__.call(null);(statearr_34899[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34900);
return statearr_34899;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___34999 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34977){var state_val_34978 = (state_34977[1]);if((state_val_34978 === 1))
{var state_34977__$1 = state_34977;var statearr_34979_35000 = state_34977__$1;(statearr_34979_35000[2] = null);
(statearr_34979_35000[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34978 === 2))
{var state_34977__$1 = state_34977;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34977__$1,4,ch);
} else
{if((state_val_34978 === 3))
{var inst_34975 = (state_34977[2]);var state_34977__$1 = state_34977;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34977__$1,inst_34975);
} else
{if((state_val_34978 === 4))
{var inst_34958 = (state_34977[7]);var inst_34958__$1 = (state_34977[2]);var inst_34959 = (inst_34958__$1 == null);var state_34977__$1 = (function (){var statearr_34980 = state_34977;(statearr_34980[7] = inst_34958__$1);
return statearr_34980;
})();if(cljs.core.truth_(inst_34959))
{var statearr_34981_35001 = state_34977__$1;(statearr_34981_35001[1] = 5);
} else
{var statearr_34982_35002 = state_34977__$1;(statearr_34982_35002[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34978 === 5))
{var inst_34961 = cljs.core.async.close_BANG_.call(null,tc);var inst_34962 = cljs.core.async.close_BANG_.call(null,fc);var state_34977__$1 = (function (){var statearr_34983 = state_34977;(statearr_34983[8] = inst_34961);
return statearr_34983;
})();var statearr_34984_35003 = state_34977__$1;(statearr_34984_35003[2] = inst_34962);
(statearr_34984_35003[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34978 === 6))
{var inst_34958 = (state_34977[7]);var inst_34964 = p.call(null,inst_34958);var state_34977__$1 = state_34977;if(cljs.core.truth_(inst_34964))
{var statearr_34985_35004 = state_34977__$1;(statearr_34985_35004[1] = 9);
} else
{var statearr_34986_35005 = state_34977__$1;(statearr_34986_35005[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34978 === 7))
{var inst_34973 = (state_34977[2]);var state_34977__$1 = state_34977;var statearr_34987_35006 = state_34977__$1;(statearr_34987_35006[2] = inst_34973);
(statearr_34987_35006[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34978 === 8))
{var inst_34970 = (state_34977[2]);var state_34977__$1 = (function (){var statearr_34988 = state_34977;(statearr_34988[9] = inst_34970);
return statearr_34988;
})();var statearr_34989_35007 = state_34977__$1;(statearr_34989_35007[2] = null);
(statearr_34989_35007[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34978 === 9))
{var state_34977__$1 = state_34977;var statearr_34990_35008 = state_34977__$1;(statearr_34990_35008[2] = tc);
(statearr_34990_35008[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34978 === 10))
{var state_34977__$1 = state_34977;var statearr_34991_35009 = state_34977__$1;(statearr_34991_35009[2] = fc);
(statearr_34991_35009[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34978 === 11))
{var inst_34958 = (state_34977[7]);var inst_34968 = (state_34977[2]);var state_34977__$1 = state_34977;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34977__$1,8,inst_34968,inst_34958);
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
var state_machine__5507__auto____0 = (function (){var statearr_34995 = [null,null,null,null,null,null,null,null,null,null];(statearr_34995[0] = state_machine__5507__auto__);
(statearr_34995[1] = 1);
return statearr_34995;
});
var state_machine__5507__auto____1 = (function (state_34977){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34977);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34996){if((e34996 instanceof Object))
{var ex__5510__auto__ = e34996;var statearr_34997_35010 = state_34977;(statearr_34997_35010[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34977);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34996;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35011 = state_34977;
state_34977 = G__35011;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34977){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34998 = f__5522__auto__.call(null);(statearr_34998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34999);
return statearr_34998;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35058){var state_val_35059 = (state_35058[1]);if((state_val_35059 === 7))
{var inst_35054 = (state_35058[2]);var state_35058__$1 = state_35058;var statearr_35060_35076 = state_35058__$1;(statearr_35060_35076[2] = inst_35054);
(statearr_35060_35076[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35059 === 6))
{var inst_35047 = (state_35058[7]);var inst_35044 = (state_35058[8]);var inst_35051 = f.call(null,inst_35044,inst_35047);var inst_35044__$1 = inst_35051;var state_35058__$1 = (function (){var statearr_35061 = state_35058;(statearr_35061[8] = inst_35044__$1);
return statearr_35061;
})();var statearr_35062_35077 = state_35058__$1;(statearr_35062_35077[2] = null);
(statearr_35062_35077[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35059 === 5))
{var inst_35044 = (state_35058[8]);var state_35058__$1 = state_35058;var statearr_35063_35078 = state_35058__$1;(statearr_35063_35078[2] = inst_35044);
(statearr_35063_35078[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35059 === 4))
{var inst_35047 = (state_35058[7]);var inst_35047__$1 = (state_35058[2]);var inst_35048 = (inst_35047__$1 == null);var state_35058__$1 = (function (){var statearr_35064 = state_35058;(statearr_35064[7] = inst_35047__$1);
return statearr_35064;
})();if(cljs.core.truth_(inst_35048))
{var statearr_35065_35079 = state_35058__$1;(statearr_35065_35079[1] = 5);
} else
{var statearr_35066_35080 = state_35058__$1;(statearr_35066_35080[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35059 === 3))
{var inst_35056 = (state_35058[2]);var state_35058__$1 = state_35058;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35058__$1,inst_35056);
} else
{if((state_val_35059 === 2))
{var state_35058__$1 = state_35058;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35058__$1,4,ch);
} else
{if((state_val_35059 === 1))
{var inst_35044 = init;var state_35058__$1 = (function (){var statearr_35067 = state_35058;(statearr_35067[8] = inst_35044);
return statearr_35067;
})();var statearr_35068_35081 = state_35058__$1;(statearr_35068_35081[2] = null);
(statearr_35068_35081[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_35072 = [null,null,null,null,null,null,null,null,null];(statearr_35072[0] = state_machine__5507__auto__);
(statearr_35072[1] = 1);
return statearr_35072;
});
var state_machine__5507__auto____1 = (function (state_35058){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35058);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35073){if((e35073 instanceof Object))
{var ex__5510__auto__ = e35073;var statearr_35074_35082 = state_35058;(statearr_35074_35082[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35058);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35073;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35083 = state_35058;
state_35058 = G__35083;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35058){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35075 = f__5522__auto__.call(null);(statearr_35075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_35075;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35145){var state_val_35146 = (state_35145[1]);if((state_val_35146 === 1))
{var inst_35125 = cljs.core.seq.call(null,coll);var inst_35126 = inst_35125;var state_35145__$1 = (function (){var statearr_35147 = state_35145;(statearr_35147[7] = inst_35126);
return statearr_35147;
})();var statearr_35148_35166 = state_35145__$1;(statearr_35148_35166[2] = null);
(statearr_35148_35166[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35146 === 2))
{var inst_35126 = (state_35145[7]);var state_35145__$1 = state_35145;if(cljs.core.truth_(inst_35126))
{var statearr_35149_35167 = state_35145__$1;(statearr_35149_35167[1] = 4);
} else
{var statearr_35150_35168 = state_35145__$1;(statearr_35150_35168[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35146 === 3))
{var inst_35143 = (state_35145[2]);var state_35145__$1 = state_35145;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35145__$1,inst_35143);
} else
{if((state_val_35146 === 4))
{var inst_35126 = (state_35145[7]);var inst_35129 = cljs.core.first.call(null,inst_35126);var state_35145__$1 = state_35145;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35145__$1,7,ch,inst_35129);
} else
{if((state_val_35146 === 5))
{var state_35145__$1 = state_35145;if(cljs.core.truth_(close_QMARK_))
{var statearr_35151_35169 = state_35145__$1;(statearr_35151_35169[1] = 8);
} else
{var statearr_35152_35170 = state_35145__$1;(statearr_35152_35170[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35146 === 6))
{var inst_35141 = (state_35145[2]);var state_35145__$1 = state_35145;var statearr_35153_35171 = state_35145__$1;(statearr_35153_35171[2] = inst_35141);
(statearr_35153_35171[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35146 === 7))
{var inst_35126 = (state_35145[7]);var inst_35131 = (state_35145[2]);var inst_35132 = cljs.core.next.call(null,inst_35126);var inst_35126__$1 = inst_35132;var state_35145__$1 = (function (){var statearr_35154 = state_35145;(statearr_35154[8] = inst_35131);
(statearr_35154[7] = inst_35126__$1);
return statearr_35154;
})();var statearr_35155_35172 = state_35145__$1;(statearr_35155_35172[2] = null);
(statearr_35155_35172[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35146 === 8))
{var inst_35136 = cljs.core.async.close_BANG_.call(null,ch);var state_35145__$1 = state_35145;var statearr_35156_35173 = state_35145__$1;(statearr_35156_35173[2] = inst_35136);
(statearr_35156_35173[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35146 === 9))
{var state_35145__$1 = state_35145;var statearr_35157_35174 = state_35145__$1;(statearr_35157_35174[2] = null);
(statearr_35157_35174[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35146 === 10))
{var inst_35139 = (state_35145[2]);var state_35145__$1 = state_35145;var statearr_35158_35175 = state_35145__$1;(statearr_35158_35175[2] = inst_35139);
(statearr_35158_35175[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_35162 = [null,null,null,null,null,null,null,null,null];(statearr_35162[0] = state_machine__5507__auto__);
(statearr_35162[1] = 1);
return statearr_35162;
});
var state_machine__5507__auto____1 = (function (state_35145){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35145);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35163){if((e35163 instanceof Object))
{var ex__5510__auto__ = e35163;var statearr_35164_35176 = state_35145;(statearr_35164_35176[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35145);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35163;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35177 = state_35145;
state_35145 = G__35177;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35145){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35165 = f__5522__auto__.call(null);(statearr_35165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_35165;
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
cljs.core.async.Mux = (function (){var obj35179 = {};return obj35179;
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
cljs.core.async.Mult = (function (){var obj35181 = {};return obj35181;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t35405 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35405 = (function (cs,ch,mult,meta35406){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta35406 = meta35406;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35405.cljs$lang$type = true;
cljs.core.async.t35405.cljs$lang$ctorStr = "cljs.core.async/t35405";
cljs.core.async.t35405.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t35405");
});})(cs))
;
cljs.core.async.t35405.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t35405.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t35405.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t35405.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t35405.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t35405.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t35405.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_35407){var self__ = this;
var _35407__$1 = this;return self__.meta35406;
});})(cs))
;
cljs.core.async.t35405.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_35407,meta35406__$1){var self__ = this;
var _35407__$1 = this;return (new cljs.core.async.t35405(self__.cs,self__.ch,self__.mult,meta35406__$1));
});})(cs))
;
cljs.core.async.__GT_t35405 = ((function (cs){
return (function __GT_t35405(cs__$1,ch__$1,mult__$1,meta35406){return (new cljs.core.async.t35405(cs__$1,ch__$1,mult__$1,meta35406));
});})(cs))
;
}
return (new cljs.core.async.t35405(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___35628 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35542){var state_val_35543 = (state_35542[1]);if((state_val_35543 === 32))
{var inst_35410 = (state_35542[7]);var inst_35486 = (state_35542[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35542,31,Object,null,30);var inst_35493 = cljs.core.async.put_BANG_.call(null,inst_35486,inst_35410,done);var state_35542__$1 = state_35542;var statearr_35544_35629 = state_35542__$1;(statearr_35544_35629[2] = inst_35493);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35542__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35543 === 1))
{var state_35542__$1 = state_35542;var statearr_35545_35630 = state_35542__$1;(statearr_35545_35630[2] = null);
(statearr_35545_35630[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35543 === 33))
{var inst_35499 = (state_35542[9]);var inst_35501 = cljs.core.chunked_seq_QMARK_.call(null,inst_35499);var state_35542__$1 = state_35542;if(inst_35501)
{var statearr_35546_35631 = state_35542__$1;(statearr_35546_35631[1] = 36);
} else
{var statearr_35547_35632 = state_35542__$1;(statearr_35547_35632[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35543 === 2))
{var state_35542__$1 = state_35542;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35542__$1,4,ch);
} else
{if((state_val_35543 === 34))
{var state_35542__$1 = state_35542;var statearr_35548_35633 = state_35542__$1;(statearr_35548_35633[2] = null);
(statearr_35548_35633[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35543 === 3))
{var inst_35540 = (state_35542[2]);var state_35542__$1 = state_35542;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35542__$1,inst_35540);
} else
{if((state_val_35543 === 35))
{var inst_35524 = (state_35542[2]);var state_35542__$1 = state_35542;var statearr_35549_35634 = state_35542__$1;(statearr_35549_35634[2] = inst_35524);
(statearr_35549_35634[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35543 === 4))
{var inst_35410 = (state_35542[7]);var inst_35410__$1 = (state_35542[2]);var inst_35411 = (inst_35410__$1 == null);var state_35542__$1 = (function (){var statearr_35550 = state_35542;(statearr_35550[7] = inst_35410__$1);
return statearr_35550;
})();if(cljs.core.truth_(inst_35411))
{var statearr_35551_35635 = state_35542__$1;(statearr_35551_35635[1] = 5);
} else
{var statearr_35552_35636 = state_35542__$1;(statearr_35552_35636[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35543 === 36))
{var inst_35499 = (state_35542[9]);var inst_35503 = cljs.core.chunk_first.call(null,inst_35499);var inst_35504 = cljs.core.chunk_rest.call(null,inst_35499);var inst_35505 = cljs.core.count.call(null,inst_35503);var inst_35478 = inst_35504;var inst_35479 = inst_35503;var inst_35480 = inst_35505;var inst_35481 = 0;var state_35542__$1 = (function (){var statearr_35553 = state_35542;(statearr_35553[10] = inst_35480);
(statearr_35553[11] = inst_35479);
(statearr_35553[12] = inst_35478);
(statearr_35553[13] = inst_35481);
return statearr_35553;
})();var statearr_35554_35637 = state_35542__$1;(statearr_35554_35637[2] = null);
(statearr_35554_35637[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35543 === 5))
{var inst_35417 = cljs.core.deref.call(null,cs);var inst_35418 = cljs.core.seq.call(null,inst_35417);var inst_35419 = inst_35418;var inst_35420 = null;var inst_35421 = 0;var inst_35422 = 0;var state_35542__$1 = (function (){var statearr_35555 = state_35542;(statearr_35555[14] = inst_35422);
(statearr_35555[15] = inst_35421);
(statearr_35555[16] = inst_35420);
(statearr_35555[17] = inst_35419);
return statearr_35555;
})();var statearr_35556_35638 = state_35542__$1;(statearr_35556_35638[2] = null);
(statearr_35556_35638[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35543 === 37))
{var inst_35499 = (state_35542[9]);var inst_35508 = cljs.core.first.call(null,inst_35499);var state_35542__$1 = (function (){var statearr_35557 = state_35542;(statearr_35557[18] = inst_35508);
return statearr_35557;
})();var statearr_35558_35639 = state_35542__$1;(statearr_35558_35639[2] = null);
(statearr_35558_35639[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35543 === 6))
{var inst_35470 = (state_35542[19]);var inst_35469 = cljs.core.deref.call(null,cs);var inst_35470__$1 = cljs.core.keys.call(null,inst_35469);var inst_35471 = cljs.core.count.call(null,inst_35470__$1);var inst_35472 = cljs.core.reset_BANG_.call(null,dctr,inst_35471);var inst_35477 = cljs.core.seq.call(null,inst_35470__$1);var inst_35478 = inst_35477;var inst_35479 = null;var inst_35480 = 0;var inst_35481 = 0;var state_35542__$1 = (function (){var statearr_35559 = state_35542;(statearr_35559[20] = inst_35472);
(statearr_35559[19] = inst_35470__$1);
(statearr_35559[10] = inst_35480);
(statearr_35559[11] = inst_35479);
(statearr_35559[12] = inst_35478);
(statearr_35559[13] = inst_35481);
return statearr_35559;
})();var statearr_35560_35640 = state_35542__$1;(statearr_35560_35640[2] = null);
(statearr_35560_35640[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35543 === 38))
{var inst_35521 = (state_35542[2]);var state_35542__$1 = state_35542;var statearr_35561_35641 = state_35542__$1;(statearr_35561_35641[2] = inst_35521);
(statearr_35561_35641[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35543 === 7))
{var inst_35538 = (state_35542[2]);var state_35542__$1 = state_35542;var statearr_35562_35642 = state_35542__$1;(statearr_35562_35642[2] = inst_35538);
(statearr_35562_35642[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35543 === 39))
{var inst_35499 = (state_35542[9]);var inst_35517 = (state_35542[2]);var inst_35518 = cljs.core.next.call(null,inst_35499);var inst_35478 = inst_35518;var inst_35479 = null;var inst_35480 = 0;var inst_35481 = 0;var state_35542__$1 = (function (){var statearr_35563 = state_35542;(statearr_35563[21] = inst_35517);
(statearr_35563[10] = inst_35480);
(statearr_35563[11] = inst_35479);
(statearr_35563[12] = inst_35478);
(statearr_35563[13] = inst_35481);
return statearr_35563;
})();var statearr_35564_35643 = state_35542__$1;(statearr_35564_35643[2] = null);
(statearr_35564_35643[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35543 === 8))
{var inst_35422 = (state_35542[14]);var inst_35421 = (state_35542[15]);var inst_35424 = (inst_35422 < inst_35421);var inst_35425 = inst_35424;var state_35542__$1 = state_35542;if(cljs.core.truth_(inst_35425))
{var statearr_35565_35644 = state_35542__$1;(statearr_35565_35644[1] = 10);
} else
{var statearr_35566_35645 = state_35542__$1;(statearr_35566_35645[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35543 === 40))
{var inst_35508 = (state_35542[18]);var inst_35509 = (state_35542[2]);var inst_35510 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_35511 = cljs.core.async.untap_STAR_.call(null,m,inst_35508);var state_35542__$1 = (function (){var statearr_35567 = state_35542;(statearr_35567[22] = inst_35509);
(statearr_35567[23] = inst_35510);
return statearr_35567;
})();var statearr_35568_35646 = state_35542__$1;(statearr_35568_35646[2] = inst_35511);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35542__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35543 === 9))
{var inst_35467 = (state_35542[2]);var state_35542__$1 = state_35542;var statearr_35569_35647 = state_35542__$1;(statearr_35569_35647[2] = inst_35467);
(statearr_35569_35647[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35543 === 41))
{var inst_35508 = (state_35542[18]);var inst_35410 = (state_35542[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35542,40,Object,null,39);var inst_35515 = cljs.core.async.put_BANG_.call(null,inst_35508,inst_35410,done);var state_35542__$1 = state_35542;var statearr_35570_35648 = state_35542__$1;(statearr_35570_35648[2] = inst_35515);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35542__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35543 === 10))
{var inst_35422 = (state_35542[14]);var inst_35420 = (state_35542[16]);var inst_35428 = cljs.core._nth.call(null,inst_35420,inst_35422);var inst_35429 = cljs.core.nth.call(null,inst_35428,0,null);var inst_35430 = cljs.core.nth.call(null,inst_35428,1,null);var state_35542__$1 = (function (){var statearr_35571 = state_35542;(statearr_35571[24] = inst_35429);
return statearr_35571;
})();if(cljs.core.truth_(inst_35430))
{var statearr_35572_35649 = state_35542__$1;(statearr_35572_35649[1] = 13);
} else
{var statearr_35573_35650 = state_35542__$1;(statearr_35573_35650[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35543 === 42))
{var state_35542__$1 = state_35542;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35542__$1,45,dchan);
} else
{if((state_val_35543 === 11))
{var inst_35439 = (state_35542[25]);var inst_35419 = (state_35542[17]);var inst_35439__$1 = cljs.core.seq.call(null,inst_35419);var state_35542__$1 = (function (){var statearr_35574 = state_35542;(statearr_35574[25] = inst_35439__$1);
return statearr_35574;
})();if(inst_35439__$1)
{var statearr_35575_35651 = state_35542__$1;(statearr_35575_35651[1] = 16);
} else
{var statearr_35576_35652 = state_35542__$1;(statearr_35576_35652[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35543 === 43))
{var state_35542__$1 = state_35542;var statearr_35577_35653 = state_35542__$1;(statearr_35577_35653[2] = null);
(statearr_35577_35653[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35543 === 12))
{var inst_35465 = (state_35542[2]);var state_35542__$1 = state_35542;var statearr_35578_35654 = state_35542__$1;(statearr_35578_35654[2] = inst_35465);
(statearr_35578_35654[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35543 === 44))
{var inst_35535 = (state_35542[2]);var state_35542__$1 = (function (){var statearr_35579 = state_35542;(statearr_35579[26] = inst_35535);
return statearr_35579;
})();var statearr_35580_35655 = state_35542__$1;(statearr_35580_35655[2] = null);
(statearr_35580_35655[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35543 === 13))
{var inst_35429 = (state_35542[24]);var inst_35432 = cljs.core.async.close_BANG_.call(null,inst_35429);var state_35542__$1 = state_35542;var statearr_35581_35656 = state_35542__$1;(statearr_35581_35656[2] = inst_35432);
(statearr_35581_35656[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35543 === 45))
{var inst_35532 = (state_35542[2]);var state_35542__$1 = state_35542;var statearr_35585_35657 = state_35542__$1;(statearr_35585_35657[2] = inst_35532);
(statearr_35585_35657[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35543 === 14))
{var state_35542__$1 = state_35542;var statearr_35586_35658 = state_35542__$1;(statearr_35586_35658[2] = null);
(statearr_35586_35658[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35543 === 15))
{var inst_35422 = (state_35542[14]);var inst_35421 = (state_35542[15]);var inst_35420 = (state_35542[16]);var inst_35419 = (state_35542[17]);var inst_35435 = (state_35542[2]);var inst_35436 = (inst_35422 + 1);var tmp35582 = inst_35421;var tmp35583 = inst_35420;var tmp35584 = inst_35419;var inst_35419__$1 = tmp35584;var inst_35420__$1 = tmp35583;var inst_35421__$1 = tmp35582;var inst_35422__$1 = inst_35436;var state_35542__$1 = (function (){var statearr_35587 = state_35542;(statearr_35587[14] = inst_35422__$1);
(statearr_35587[15] = inst_35421__$1);
(statearr_35587[16] = inst_35420__$1);
(statearr_35587[17] = inst_35419__$1);
(statearr_35587[27] = inst_35435);
return statearr_35587;
})();var statearr_35588_35659 = state_35542__$1;(statearr_35588_35659[2] = null);
(statearr_35588_35659[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35543 === 16))
{var inst_35439 = (state_35542[25]);var inst_35441 = cljs.core.chunked_seq_QMARK_.call(null,inst_35439);var state_35542__$1 = state_35542;if(inst_35441)
{var statearr_35589_35660 = state_35542__$1;(statearr_35589_35660[1] = 19);
} else
{var statearr_35590_35661 = state_35542__$1;(statearr_35590_35661[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35543 === 17))
{var state_35542__$1 = state_35542;var statearr_35591_35662 = state_35542__$1;(statearr_35591_35662[2] = null);
(statearr_35591_35662[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35543 === 18))
{var inst_35463 = (state_35542[2]);var state_35542__$1 = state_35542;var statearr_35592_35663 = state_35542__$1;(statearr_35592_35663[2] = inst_35463);
(statearr_35592_35663[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35543 === 19))
{var inst_35439 = (state_35542[25]);var inst_35443 = cljs.core.chunk_first.call(null,inst_35439);var inst_35444 = cljs.core.chunk_rest.call(null,inst_35439);var inst_35445 = cljs.core.count.call(null,inst_35443);var inst_35419 = inst_35444;var inst_35420 = inst_35443;var inst_35421 = inst_35445;var inst_35422 = 0;var state_35542__$1 = (function (){var statearr_35593 = state_35542;(statearr_35593[14] = inst_35422);
(statearr_35593[15] = inst_35421);
(statearr_35593[16] = inst_35420);
(statearr_35593[17] = inst_35419);
return statearr_35593;
})();var statearr_35594_35664 = state_35542__$1;(statearr_35594_35664[2] = null);
(statearr_35594_35664[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35543 === 20))
{var inst_35439 = (state_35542[25]);var inst_35449 = cljs.core.first.call(null,inst_35439);var inst_35450 = cljs.core.nth.call(null,inst_35449,0,null);var inst_35451 = cljs.core.nth.call(null,inst_35449,1,null);var state_35542__$1 = (function (){var statearr_35595 = state_35542;(statearr_35595[28] = inst_35450);
return statearr_35595;
})();if(cljs.core.truth_(inst_35451))
{var statearr_35596_35665 = state_35542__$1;(statearr_35596_35665[1] = 22);
} else
{var statearr_35597_35666 = state_35542__$1;(statearr_35597_35666[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35543 === 21))
{var inst_35460 = (state_35542[2]);var state_35542__$1 = state_35542;var statearr_35598_35667 = state_35542__$1;(statearr_35598_35667[2] = inst_35460);
(statearr_35598_35667[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35543 === 22))
{var inst_35450 = (state_35542[28]);var inst_35453 = cljs.core.async.close_BANG_.call(null,inst_35450);var state_35542__$1 = state_35542;var statearr_35599_35668 = state_35542__$1;(statearr_35599_35668[2] = inst_35453);
(statearr_35599_35668[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35543 === 23))
{var state_35542__$1 = state_35542;var statearr_35600_35669 = state_35542__$1;(statearr_35600_35669[2] = null);
(statearr_35600_35669[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35543 === 24))
{var inst_35439 = (state_35542[25]);var inst_35456 = (state_35542[2]);var inst_35457 = cljs.core.next.call(null,inst_35439);var inst_35419 = inst_35457;var inst_35420 = null;var inst_35421 = 0;var inst_35422 = 0;var state_35542__$1 = (function (){var statearr_35601 = state_35542;(statearr_35601[14] = inst_35422);
(statearr_35601[15] = inst_35421);
(statearr_35601[16] = inst_35420);
(statearr_35601[29] = inst_35456);
(statearr_35601[17] = inst_35419);
return statearr_35601;
})();var statearr_35602_35670 = state_35542__$1;(statearr_35602_35670[2] = null);
(statearr_35602_35670[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35543 === 25))
{var inst_35480 = (state_35542[10]);var inst_35481 = (state_35542[13]);var inst_35483 = (inst_35481 < inst_35480);var inst_35484 = inst_35483;var state_35542__$1 = state_35542;if(cljs.core.truth_(inst_35484))
{var statearr_35603_35671 = state_35542__$1;(statearr_35603_35671[1] = 27);
} else
{var statearr_35604_35672 = state_35542__$1;(statearr_35604_35672[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35543 === 26))
{var inst_35470 = (state_35542[19]);var inst_35528 = (state_35542[2]);var inst_35529 = cljs.core.seq.call(null,inst_35470);var state_35542__$1 = (function (){var statearr_35605 = state_35542;(statearr_35605[30] = inst_35528);
return statearr_35605;
})();if(inst_35529)
{var statearr_35606_35673 = state_35542__$1;(statearr_35606_35673[1] = 42);
} else
{var statearr_35607_35674 = state_35542__$1;(statearr_35607_35674[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35543 === 27))
{var inst_35479 = (state_35542[11]);var inst_35481 = (state_35542[13]);var inst_35486 = cljs.core._nth.call(null,inst_35479,inst_35481);var state_35542__$1 = (function (){var statearr_35608 = state_35542;(statearr_35608[8] = inst_35486);
return statearr_35608;
})();var statearr_35609_35675 = state_35542__$1;(statearr_35609_35675[2] = null);
(statearr_35609_35675[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35543 === 28))
{var inst_35499 = (state_35542[9]);var inst_35478 = (state_35542[12]);var inst_35499__$1 = cljs.core.seq.call(null,inst_35478);var state_35542__$1 = (function (){var statearr_35613 = state_35542;(statearr_35613[9] = inst_35499__$1);
return statearr_35613;
})();if(inst_35499__$1)
{var statearr_35614_35676 = state_35542__$1;(statearr_35614_35676[1] = 33);
} else
{var statearr_35615_35677 = state_35542__$1;(statearr_35615_35677[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35543 === 29))
{var inst_35526 = (state_35542[2]);var state_35542__$1 = state_35542;var statearr_35616_35678 = state_35542__$1;(statearr_35616_35678[2] = inst_35526);
(statearr_35616_35678[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35543 === 30))
{var inst_35480 = (state_35542[10]);var inst_35479 = (state_35542[11]);var inst_35478 = (state_35542[12]);var inst_35481 = (state_35542[13]);var inst_35495 = (state_35542[2]);var inst_35496 = (inst_35481 + 1);var tmp35610 = inst_35480;var tmp35611 = inst_35479;var tmp35612 = inst_35478;var inst_35478__$1 = tmp35612;var inst_35479__$1 = tmp35611;var inst_35480__$1 = tmp35610;var inst_35481__$1 = inst_35496;var state_35542__$1 = (function (){var statearr_35617 = state_35542;(statearr_35617[31] = inst_35495);
(statearr_35617[10] = inst_35480__$1);
(statearr_35617[11] = inst_35479__$1);
(statearr_35617[12] = inst_35478__$1);
(statearr_35617[13] = inst_35481__$1);
return statearr_35617;
})();var statearr_35618_35679 = state_35542__$1;(statearr_35618_35679[2] = null);
(statearr_35618_35679[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35543 === 31))
{var inst_35486 = (state_35542[8]);var inst_35487 = (state_35542[2]);var inst_35488 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_35489 = cljs.core.async.untap_STAR_.call(null,m,inst_35486);var state_35542__$1 = (function (){var statearr_35619 = state_35542;(statearr_35619[32] = inst_35488);
(statearr_35619[33] = inst_35487);
return statearr_35619;
})();var statearr_35620_35680 = state_35542__$1;(statearr_35620_35680[2] = inst_35489);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35542__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_35624 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35624[0] = state_machine__5507__auto__);
(statearr_35624[1] = 1);
return statearr_35624;
});
var state_machine__5507__auto____1 = (function (state_35542){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35542);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35625){if((e35625 instanceof Object))
{var ex__5510__auto__ = e35625;var statearr_35626_35681 = state_35542;(statearr_35626_35681[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35542);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35625;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35682 = state_35542;
state_35542 = G__35682;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35542){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35627 = f__5522__auto__.call(null);(statearr_35627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35628);
return statearr_35627;
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
cljs.core.async.Mix = (function (){var obj35684 = {};return obj35684;
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
;var m = (function (){if(typeof cljs.core.async.t35794 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35794 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta35795){
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
this.meta35795 = meta35795;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35794.cljs$lang$type = true;
cljs.core.async.t35794.cljs$lang$ctorStr = "cljs.core.async/t35794";
cljs.core.async.t35794.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t35794");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35794.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t35794.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35794.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35794.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35794.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35794.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35794.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t35794.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35794.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35796){var self__ = this;
var _35796__$1 = this;return self__.meta35795;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35796,meta35795__$1){var self__ = this;
var _35796__$1 = this;return (new cljs.core.async.t35794(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta35795__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t35794 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t35794(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta35795){return (new cljs.core.async.t35794(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta35795));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t35794(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___35903 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35861){var state_val_35862 = (state_35861[1]);if((state_val_35862 === 1))
{var inst_35800 = (state_35861[7]);var inst_35800__$1 = calc_state.call(null);var inst_35801 = cljs.core.seq_QMARK_.call(null,inst_35800__$1);var state_35861__$1 = (function (){var statearr_35863 = state_35861;(statearr_35863[7] = inst_35800__$1);
return statearr_35863;
})();if(inst_35801)
{var statearr_35864_35904 = state_35861__$1;(statearr_35864_35904[1] = 2);
} else
{var statearr_35865_35905 = state_35861__$1;(statearr_35865_35905[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35862 === 2))
{var inst_35800 = (state_35861[7]);var inst_35803 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35800);var state_35861__$1 = state_35861;var statearr_35866_35906 = state_35861__$1;(statearr_35866_35906[2] = inst_35803);
(statearr_35866_35906[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35862 === 3))
{var inst_35800 = (state_35861[7]);var state_35861__$1 = state_35861;var statearr_35867_35907 = state_35861__$1;(statearr_35867_35907[2] = inst_35800);
(statearr_35867_35907[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35862 === 4))
{var inst_35800 = (state_35861[7]);var inst_35806 = (state_35861[2]);var inst_35807 = cljs.core.get.call(null,inst_35806,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_35808 = cljs.core.get.call(null,inst_35806,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_35809 = cljs.core.get.call(null,inst_35806,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_35810 = inst_35800;var state_35861__$1 = (function (){var statearr_35868 = state_35861;(statearr_35868[8] = inst_35810);
(statearr_35868[9] = inst_35809);
(statearr_35868[10] = inst_35807);
(statearr_35868[11] = inst_35808);
return statearr_35868;
})();var statearr_35869_35908 = state_35861__$1;(statearr_35869_35908[2] = null);
(statearr_35869_35908[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35862 === 5))
{var inst_35810 = (state_35861[8]);var inst_35813 = cljs.core.seq_QMARK_.call(null,inst_35810);var state_35861__$1 = state_35861;if(inst_35813)
{var statearr_35870_35909 = state_35861__$1;(statearr_35870_35909[1] = 7);
} else
{var statearr_35871_35910 = state_35861__$1;(statearr_35871_35910[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35862 === 6))
{var inst_35859 = (state_35861[2]);var state_35861__$1 = state_35861;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35861__$1,inst_35859);
} else
{if((state_val_35862 === 7))
{var inst_35810 = (state_35861[8]);var inst_35815 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35810);var state_35861__$1 = state_35861;var statearr_35872_35911 = state_35861__$1;(statearr_35872_35911[2] = inst_35815);
(statearr_35872_35911[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35862 === 8))
{var inst_35810 = (state_35861[8]);var state_35861__$1 = state_35861;var statearr_35873_35912 = state_35861__$1;(statearr_35873_35912[2] = inst_35810);
(statearr_35873_35912[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35862 === 9))
{var inst_35818 = (state_35861[12]);var inst_35818__$1 = (state_35861[2]);var inst_35819 = cljs.core.get.call(null,inst_35818__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_35820 = cljs.core.get.call(null,inst_35818__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_35821 = cljs.core.get.call(null,inst_35818__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_35861__$1 = (function (){var statearr_35874 = state_35861;(statearr_35874[13] = inst_35820);
(statearr_35874[14] = inst_35821);
(statearr_35874[12] = inst_35818__$1);
return statearr_35874;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_35861__$1,10,inst_35819);
} else
{if((state_val_35862 === 10))
{var inst_35826 = (state_35861[15]);var inst_35825 = (state_35861[16]);var inst_35824 = (state_35861[2]);var inst_35825__$1 = cljs.core.nth.call(null,inst_35824,0,null);var inst_35826__$1 = cljs.core.nth.call(null,inst_35824,1,null);var inst_35827 = (inst_35825__$1 == null);var inst_35828 = cljs.core._EQ_.call(null,inst_35826__$1,change);var inst_35829 = (inst_35827) || (inst_35828);var state_35861__$1 = (function (){var statearr_35875 = state_35861;(statearr_35875[15] = inst_35826__$1);
(statearr_35875[16] = inst_35825__$1);
return statearr_35875;
})();if(cljs.core.truth_(inst_35829))
{var statearr_35876_35913 = state_35861__$1;(statearr_35876_35913[1] = 11);
} else
{var statearr_35877_35914 = state_35861__$1;(statearr_35877_35914[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35862 === 11))
{var inst_35825 = (state_35861[16]);var inst_35831 = (inst_35825 == null);var state_35861__$1 = state_35861;if(cljs.core.truth_(inst_35831))
{var statearr_35878_35915 = state_35861__$1;(statearr_35878_35915[1] = 14);
} else
{var statearr_35879_35916 = state_35861__$1;(statearr_35879_35916[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35862 === 12))
{var inst_35826 = (state_35861[15]);var inst_35840 = (state_35861[17]);var inst_35821 = (state_35861[14]);var inst_35840__$1 = inst_35821.call(null,inst_35826);var state_35861__$1 = (function (){var statearr_35880 = state_35861;(statearr_35880[17] = inst_35840__$1);
return statearr_35880;
})();if(cljs.core.truth_(inst_35840__$1))
{var statearr_35881_35917 = state_35861__$1;(statearr_35881_35917[1] = 17);
} else
{var statearr_35882_35918 = state_35861__$1;(statearr_35882_35918[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35862 === 13))
{var inst_35857 = (state_35861[2]);var state_35861__$1 = state_35861;var statearr_35883_35919 = state_35861__$1;(statearr_35883_35919[2] = inst_35857);
(statearr_35883_35919[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35862 === 14))
{var inst_35826 = (state_35861[15]);var inst_35833 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_35826);var state_35861__$1 = state_35861;var statearr_35884_35920 = state_35861__$1;(statearr_35884_35920[2] = inst_35833);
(statearr_35884_35920[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35862 === 15))
{var state_35861__$1 = state_35861;var statearr_35885_35921 = state_35861__$1;(statearr_35885_35921[2] = null);
(statearr_35885_35921[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35862 === 16))
{var inst_35836 = (state_35861[2]);var inst_35837 = calc_state.call(null);var inst_35810 = inst_35837;var state_35861__$1 = (function (){var statearr_35886 = state_35861;(statearr_35886[8] = inst_35810);
(statearr_35886[18] = inst_35836);
return statearr_35886;
})();var statearr_35887_35922 = state_35861__$1;(statearr_35887_35922[2] = null);
(statearr_35887_35922[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35862 === 17))
{var inst_35840 = (state_35861[17]);var state_35861__$1 = state_35861;var statearr_35888_35923 = state_35861__$1;(statearr_35888_35923[2] = inst_35840);
(statearr_35888_35923[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35862 === 18))
{var inst_35826 = (state_35861[15]);var inst_35820 = (state_35861[13]);var inst_35821 = (state_35861[14]);var inst_35843 = cljs.core.empty_QMARK_.call(null,inst_35821);var inst_35844 = inst_35820.call(null,inst_35826);var inst_35845 = cljs.core.not.call(null,inst_35844);var inst_35846 = (inst_35843) && (inst_35845);var state_35861__$1 = state_35861;var statearr_35889_35924 = state_35861__$1;(statearr_35889_35924[2] = inst_35846);
(statearr_35889_35924[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35862 === 19))
{var inst_35848 = (state_35861[2]);var state_35861__$1 = state_35861;if(cljs.core.truth_(inst_35848))
{var statearr_35890_35925 = state_35861__$1;(statearr_35890_35925[1] = 20);
} else
{var statearr_35891_35926 = state_35861__$1;(statearr_35891_35926[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35862 === 20))
{var inst_35825 = (state_35861[16]);var state_35861__$1 = state_35861;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35861__$1,23,out,inst_35825);
} else
{if((state_val_35862 === 21))
{var state_35861__$1 = state_35861;var statearr_35892_35927 = state_35861__$1;(statearr_35892_35927[2] = null);
(statearr_35892_35927[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35862 === 22))
{var inst_35818 = (state_35861[12]);var inst_35854 = (state_35861[2]);var inst_35810 = inst_35818;var state_35861__$1 = (function (){var statearr_35893 = state_35861;(statearr_35893[19] = inst_35854);
(statearr_35893[8] = inst_35810);
return statearr_35893;
})();var statearr_35894_35928 = state_35861__$1;(statearr_35894_35928[2] = null);
(statearr_35894_35928[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35862 === 23))
{var inst_35851 = (state_35861[2]);var state_35861__$1 = state_35861;var statearr_35895_35929 = state_35861__$1;(statearr_35895_35929[2] = inst_35851);
(statearr_35895_35929[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_35899 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35899[0] = state_machine__5507__auto__);
(statearr_35899[1] = 1);
return statearr_35899;
});
var state_machine__5507__auto____1 = (function (state_35861){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35861);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35900){if((e35900 instanceof Object))
{var ex__5510__auto__ = e35900;var statearr_35901_35930 = state_35861;(statearr_35901_35930[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35861);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35900;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35931 = state_35861;
state_35861 = G__35931;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35861){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35902 = f__5522__auto__.call(null);(statearr_35902[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35903);
return statearr_35902;
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
cljs.core.async.Pub = (function (){var obj35933 = {};return obj35933;
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
return (function (p1__35934_SHARP_){if(cljs.core.truth_(p1__35934_SHARP_.call(null,topic)))
{return p1__35934_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__35934_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t36059 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36059 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta36060){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta36060 = meta36060;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36059.cljs$lang$type = true;
cljs.core.async.t36059.cljs$lang$ctorStr = "cljs.core.async/t36059";
cljs.core.async.t36059.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t36059");
});})(mults,ensure_mult))
;
cljs.core.async.t36059.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t36059.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t36059.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t36059.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t36059.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t36059.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t36059.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t36059.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_36061){var self__ = this;
var _36061__$1 = this;return self__.meta36060;
});})(mults,ensure_mult))
;
cljs.core.async.t36059.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_36061,meta36060__$1){var self__ = this;
var _36061__$1 = this;return (new cljs.core.async.t36059(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta36060__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t36059 = ((function (mults,ensure_mult){
return (function __GT_t36059(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta36060){return (new cljs.core.async.t36059(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta36060));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t36059(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___36183 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36135){var state_val_36136 = (state_36135[1]);if((state_val_36136 === 1))
{var state_36135__$1 = state_36135;var statearr_36137_36184 = state_36135__$1;(statearr_36137_36184[2] = null);
(statearr_36137_36184[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36136 === 2))
{var state_36135__$1 = state_36135;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36135__$1,4,ch);
} else
{if((state_val_36136 === 3))
{var inst_36133 = (state_36135[2]);var state_36135__$1 = state_36135;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36135__$1,inst_36133);
} else
{if((state_val_36136 === 4))
{var inst_36064 = (state_36135[7]);var inst_36064__$1 = (state_36135[2]);var inst_36065 = (inst_36064__$1 == null);var state_36135__$1 = (function (){var statearr_36138 = state_36135;(statearr_36138[7] = inst_36064__$1);
return statearr_36138;
})();if(cljs.core.truth_(inst_36065))
{var statearr_36139_36185 = state_36135__$1;(statearr_36139_36185[1] = 5);
} else
{var statearr_36140_36186 = state_36135__$1;(statearr_36140_36186[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36136 === 5))
{var inst_36071 = cljs.core.deref.call(null,mults);var inst_36072 = cljs.core.vals.call(null,inst_36071);var inst_36073 = cljs.core.seq.call(null,inst_36072);var inst_36074 = inst_36073;var inst_36075 = null;var inst_36076 = 0;var inst_36077 = 0;var state_36135__$1 = (function (){var statearr_36141 = state_36135;(statearr_36141[8] = inst_36077);
(statearr_36141[9] = inst_36074);
(statearr_36141[10] = inst_36076);
(statearr_36141[11] = inst_36075);
return statearr_36141;
})();var statearr_36142_36187 = state_36135__$1;(statearr_36142_36187[2] = null);
(statearr_36142_36187[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36136 === 6))
{var inst_36114 = (state_36135[12]);var inst_36064 = (state_36135[7]);var inst_36112 = (state_36135[13]);var inst_36112__$1 = topic_fn.call(null,inst_36064);var inst_36113 = cljs.core.deref.call(null,mults);var inst_36114__$1 = cljs.core.get.call(null,inst_36113,inst_36112__$1);var state_36135__$1 = (function (){var statearr_36143 = state_36135;(statearr_36143[12] = inst_36114__$1);
(statearr_36143[13] = inst_36112__$1);
return statearr_36143;
})();if(cljs.core.truth_(inst_36114__$1))
{var statearr_36144_36188 = state_36135__$1;(statearr_36144_36188[1] = 19);
} else
{var statearr_36145_36189 = state_36135__$1;(statearr_36145_36189[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36136 === 7))
{var inst_36131 = (state_36135[2]);var state_36135__$1 = state_36135;var statearr_36146_36190 = state_36135__$1;(statearr_36146_36190[2] = inst_36131);
(statearr_36146_36190[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36136 === 8))
{var inst_36077 = (state_36135[8]);var inst_36076 = (state_36135[10]);var inst_36079 = (inst_36077 < inst_36076);var inst_36080 = inst_36079;var state_36135__$1 = state_36135;if(cljs.core.truth_(inst_36080))
{var statearr_36150_36191 = state_36135__$1;(statearr_36150_36191[1] = 10);
} else
{var statearr_36151_36192 = state_36135__$1;(statearr_36151_36192[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36136 === 9))
{var inst_36110 = (state_36135[2]);var state_36135__$1 = state_36135;var statearr_36152_36193 = state_36135__$1;(statearr_36152_36193[2] = inst_36110);
(statearr_36152_36193[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36136 === 10))
{var inst_36077 = (state_36135[8]);var inst_36074 = (state_36135[9]);var inst_36076 = (state_36135[10]);var inst_36075 = (state_36135[11]);var inst_36082 = cljs.core._nth.call(null,inst_36075,inst_36077);var inst_36083 = cljs.core.async.muxch_STAR_.call(null,inst_36082);var inst_36084 = cljs.core.async.close_BANG_.call(null,inst_36083);var inst_36085 = (inst_36077 + 1);var tmp36147 = inst_36074;var tmp36148 = inst_36076;var tmp36149 = inst_36075;var inst_36074__$1 = tmp36147;var inst_36075__$1 = tmp36149;var inst_36076__$1 = tmp36148;var inst_36077__$1 = inst_36085;var state_36135__$1 = (function (){var statearr_36153 = state_36135;(statearr_36153[8] = inst_36077__$1);
(statearr_36153[9] = inst_36074__$1);
(statearr_36153[10] = inst_36076__$1);
(statearr_36153[11] = inst_36075__$1);
(statearr_36153[14] = inst_36084);
return statearr_36153;
})();var statearr_36154_36194 = state_36135__$1;(statearr_36154_36194[2] = null);
(statearr_36154_36194[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36136 === 11))
{var inst_36074 = (state_36135[9]);var inst_36088 = (state_36135[15]);var inst_36088__$1 = cljs.core.seq.call(null,inst_36074);var state_36135__$1 = (function (){var statearr_36155 = state_36135;(statearr_36155[15] = inst_36088__$1);
return statearr_36155;
})();if(inst_36088__$1)
{var statearr_36156_36195 = state_36135__$1;(statearr_36156_36195[1] = 13);
} else
{var statearr_36157_36196 = state_36135__$1;(statearr_36157_36196[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36136 === 12))
{var inst_36108 = (state_36135[2]);var state_36135__$1 = state_36135;var statearr_36158_36197 = state_36135__$1;(statearr_36158_36197[2] = inst_36108);
(statearr_36158_36197[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36136 === 13))
{var inst_36088 = (state_36135[15]);var inst_36090 = cljs.core.chunked_seq_QMARK_.call(null,inst_36088);var state_36135__$1 = state_36135;if(inst_36090)
{var statearr_36159_36198 = state_36135__$1;(statearr_36159_36198[1] = 16);
} else
{var statearr_36160_36199 = state_36135__$1;(statearr_36160_36199[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36136 === 14))
{var state_36135__$1 = state_36135;var statearr_36161_36200 = state_36135__$1;(statearr_36161_36200[2] = null);
(statearr_36161_36200[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36136 === 15))
{var inst_36106 = (state_36135[2]);var state_36135__$1 = state_36135;var statearr_36162_36201 = state_36135__$1;(statearr_36162_36201[2] = inst_36106);
(statearr_36162_36201[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36136 === 16))
{var inst_36088 = (state_36135[15]);var inst_36092 = cljs.core.chunk_first.call(null,inst_36088);var inst_36093 = cljs.core.chunk_rest.call(null,inst_36088);var inst_36094 = cljs.core.count.call(null,inst_36092);var inst_36074 = inst_36093;var inst_36075 = inst_36092;var inst_36076 = inst_36094;var inst_36077 = 0;var state_36135__$1 = (function (){var statearr_36163 = state_36135;(statearr_36163[8] = inst_36077);
(statearr_36163[9] = inst_36074);
(statearr_36163[10] = inst_36076);
(statearr_36163[11] = inst_36075);
return statearr_36163;
})();var statearr_36164_36202 = state_36135__$1;(statearr_36164_36202[2] = null);
(statearr_36164_36202[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36136 === 17))
{var inst_36088 = (state_36135[15]);var inst_36097 = cljs.core.first.call(null,inst_36088);var inst_36098 = cljs.core.async.muxch_STAR_.call(null,inst_36097);var inst_36099 = cljs.core.async.close_BANG_.call(null,inst_36098);var inst_36100 = cljs.core.next.call(null,inst_36088);var inst_36074 = inst_36100;var inst_36075 = null;var inst_36076 = 0;var inst_36077 = 0;var state_36135__$1 = (function (){var statearr_36165 = state_36135;(statearr_36165[8] = inst_36077);
(statearr_36165[9] = inst_36074);
(statearr_36165[10] = inst_36076);
(statearr_36165[11] = inst_36075);
(statearr_36165[16] = inst_36099);
return statearr_36165;
})();var statearr_36166_36203 = state_36135__$1;(statearr_36166_36203[2] = null);
(statearr_36166_36203[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36136 === 18))
{var inst_36103 = (state_36135[2]);var state_36135__$1 = state_36135;var statearr_36167_36204 = state_36135__$1;(statearr_36167_36204[2] = inst_36103);
(statearr_36167_36204[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36136 === 19))
{var state_36135__$1 = state_36135;var statearr_36168_36205 = state_36135__$1;(statearr_36168_36205[2] = null);
(statearr_36168_36205[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36136 === 20))
{var state_36135__$1 = state_36135;var statearr_36169_36206 = state_36135__$1;(statearr_36169_36206[2] = null);
(statearr_36169_36206[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36136 === 21))
{var inst_36128 = (state_36135[2]);var state_36135__$1 = (function (){var statearr_36170 = state_36135;(statearr_36170[17] = inst_36128);
return statearr_36170;
})();var statearr_36171_36207 = state_36135__$1;(statearr_36171_36207[2] = null);
(statearr_36171_36207[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36136 === 22))
{var inst_36125 = (state_36135[2]);var state_36135__$1 = state_36135;var statearr_36172_36208 = state_36135__$1;(statearr_36172_36208[2] = inst_36125);
(statearr_36172_36208[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36136 === 23))
{var inst_36112 = (state_36135[13]);var inst_36116 = (state_36135[2]);var inst_36117 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_36112);var state_36135__$1 = (function (){var statearr_36173 = state_36135;(statearr_36173[18] = inst_36116);
return statearr_36173;
})();var statearr_36174_36209 = state_36135__$1;(statearr_36174_36209[2] = inst_36117);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36135__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36136 === 24))
{var inst_36114 = (state_36135[12]);var inst_36064 = (state_36135[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36135,23,Object,null,22);var inst_36121 = cljs.core.async.muxch_STAR_.call(null,inst_36114);var state_36135__$1 = state_36135;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36135__$1,25,inst_36121,inst_36064);
} else
{if((state_val_36136 === 25))
{var inst_36123 = (state_36135[2]);var state_36135__$1 = state_36135;var statearr_36175_36210 = state_36135__$1;(statearr_36175_36210[2] = inst_36123);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36135__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_36179 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36179[0] = state_machine__5507__auto__);
(statearr_36179[1] = 1);
return statearr_36179;
});
var state_machine__5507__auto____1 = (function (state_36135){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36135);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36180){if((e36180 instanceof Object))
{var ex__5510__auto__ = e36180;var statearr_36181_36211 = state_36135;(statearr_36181_36211[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36135);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36180;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36212 = state_36135;
state_36135 = G__36212;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36135){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36182 = f__5522__auto__.call(null);(statearr_36182[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36183);
return statearr_36182;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___36349 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36319){var state_val_36320 = (state_36319[1]);if((state_val_36320 === 1))
{var state_36319__$1 = state_36319;var statearr_36321_36350 = state_36319__$1;(statearr_36321_36350[2] = null);
(statearr_36321_36350[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36320 === 2))
{var inst_36282 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_36283 = 0;var state_36319__$1 = (function (){var statearr_36322 = state_36319;(statearr_36322[7] = inst_36283);
(statearr_36322[8] = inst_36282);
return statearr_36322;
})();var statearr_36323_36351 = state_36319__$1;(statearr_36323_36351[2] = null);
(statearr_36323_36351[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36320 === 3))
{var inst_36317 = (state_36319[2]);var state_36319__$1 = state_36319;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36319__$1,inst_36317);
} else
{if((state_val_36320 === 4))
{var inst_36283 = (state_36319[7]);var inst_36285 = (inst_36283 < cnt);var state_36319__$1 = state_36319;if(cljs.core.truth_(inst_36285))
{var statearr_36324_36352 = state_36319__$1;(statearr_36324_36352[1] = 6);
} else
{var statearr_36325_36353 = state_36319__$1;(statearr_36325_36353[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36320 === 5))
{var inst_36303 = (state_36319[2]);var state_36319__$1 = (function (){var statearr_36326 = state_36319;(statearr_36326[9] = inst_36303);
return statearr_36326;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36319__$1,12,dchan);
} else
{if((state_val_36320 === 6))
{var state_36319__$1 = state_36319;var statearr_36327_36354 = state_36319__$1;(statearr_36327_36354[2] = null);
(statearr_36327_36354[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36320 === 7))
{var state_36319__$1 = state_36319;var statearr_36328_36355 = state_36319__$1;(statearr_36328_36355[2] = null);
(statearr_36328_36355[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36320 === 8))
{var inst_36301 = (state_36319[2]);var state_36319__$1 = state_36319;var statearr_36329_36356 = state_36319__$1;(statearr_36329_36356[2] = inst_36301);
(statearr_36329_36356[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36320 === 9))
{var inst_36283 = (state_36319[7]);var inst_36296 = (state_36319[2]);var inst_36297 = (inst_36283 + 1);var inst_36283__$1 = inst_36297;var state_36319__$1 = (function (){var statearr_36330 = state_36319;(statearr_36330[7] = inst_36283__$1);
(statearr_36330[10] = inst_36296);
return statearr_36330;
})();var statearr_36331_36357 = state_36319__$1;(statearr_36331_36357[2] = null);
(statearr_36331_36357[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36320 === 10))
{var inst_36287 = (state_36319[2]);var inst_36288 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_36319__$1 = (function (){var statearr_36332 = state_36319;(statearr_36332[11] = inst_36287);
return statearr_36332;
})();var statearr_36333_36358 = state_36319__$1;(statearr_36333_36358[2] = inst_36288);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36319__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36320 === 11))
{var inst_36283 = (state_36319[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36319,10,Object,null,9);var inst_36292 = chs__$1.call(null,inst_36283);var inst_36293 = done.call(null,inst_36283);var inst_36294 = cljs.core.async.take_BANG_.call(null,inst_36292,inst_36293);var state_36319__$1 = state_36319;var statearr_36334_36359 = state_36319__$1;(statearr_36334_36359[2] = inst_36294);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36319__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36320 === 12))
{var inst_36305 = (state_36319[12]);var inst_36305__$1 = (state_36319[2]);var inst_36306 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_36305__$1);var state_36319__$1 = (function (){var statearr_36335 = state_36319;(statearr_36335[12] = inst_36305__$1);
return statearr_36335;
})();if(cljs.core.truth_(inst_36306))
{var statearr_36336_36360 = state_36319__$1;(statearr_36336_36360[1] = 13);
} else
{var statearr_36337_36361 = state_36319__$1;(statearr_36337_36361[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36320 === 13))
{var inst_36308 = cljs.core.async.close_BANG_.call(null,out);var state_36319__$1 = state_36319;var statearr_36338_36362 = state_36319__$1;(statearr_36338_36362[2] = inst_36308);
(statearr_36338_36362[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36320 === 14))
{var inst_36305 = (state_36319[12]);var inst_36310 = cljs.core.apply.call(null,f,inst_36305);var state_36319__$1 = state_36319;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36319__$1,16,out,inst_36310);
} else
{if((state_val_36320 === 15))
{var inst_36315 = (state_36319[2]);var state_36319__$1 = state_36319;var statearr_36339_36363 = state_36319__$1;(statearr_36339_36363[2] = inst_36315);
(statearr_36339_36363[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36320 === 16))
{var inst_36312 = (state_36319[2]);var state_36319__$1 = (function (){var statearr_36340 = state_36319;(statearr_36340[13] = inst_36312);
return statearr_36340;
})();var statearr_36341_36364 = state_36319__$1;(statearr_36341_36364[2] = null);
(statearr_36341_36364[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_36345 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36345[0] = state_machine__5507__auto__);
(statearr_36345[1] = 1);
return statearr_36345;
});
var state_machine__5507__auto____1 = (function (state_36319){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36319);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36346){if((e36346 instanceof Object))
{var ex__5510__auto__ = e36346;var statearr_36347_36365 = state_36319;(statearr_36347_36365[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36319);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36346;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36366 = state_36319;
state_36319 = G__36366;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36319){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36348 = f__5522__auto__.call(null);(statearr_36348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36349);
return statearr_36348;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___36474 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36450){var state_val_36451 = (state_36450[1]);if((state_val_36451 === 1))
{var inst_36421 = cljs.core.vec.call(null,chs);var inst_36422 = inst_36421;var state_36450__$1 = (function (){var statearr_36452 = state_36450;(statearr_36452[7] = inst_36422);
return statearr_36452;
})();var statearr_36453_36475 = state_36450__$1;(statearr_36453_36475[2] = null);
(statearr_36453_36475[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36451 === 2))
{var inst_36422 = (state_36450[7]);var inst_36424 = cljs.core.count.call(null,inst_36422);var inst_36425 = (inst_36424 > 0);var state_36450__$1 = state_36450;if(cljs.core.truth_(inst_36425))
{var statearr_36454_36476 = state_36450__$1;(statearr_36454_36476[1] = 4);
} else
{var statearr_36455_36477 = state_36450__$1;(statearr_36455_36477[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36451 === 3))
{var inst_36448 = (state_36450[2]);var state_36450__$1 = state_36450;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36450__$1,inst_36448);
} else
{if((state_val_36451 === 4))
{var inst_36422 = (state_36450[7]);var state_36450__$1 = state_36450;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_36450__$1,7,inst_36422);
} else
{if((state_val_36451 === 5))
{var inst_36444 = cljs.core.async.close_BANG_.call(null,out);var state_36450__$1 = state_36450;var statearr_36456_36478 = state_36450__$1;(statearr_36456_36478[2] = inst_36444);
(statearr_36456_36478[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36451 === 6))
{var inst_36446 = (state_36450[2]);var state_36450__$1 = state_36450;var statearr_36457_36479 = state_36450__$1;(statearr_36457_36479[2] = inst_36446);
(statearr_36457_36479[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36451 === 7))
{var inst_36429 = (state_36450[8]);var inst_36430 = (state_36450[9]);var inst_36429__$1 = (state_36450[2]);var inst_36430__$1 = cljs.core.nth.call(null,inst_36429__$1,0,null);var inst_36431 = cljs.core.nth.call(null,inst_36429__$1,1,null);var inst_36432 = (inst_36430__$1 == null);var state_36450__$1 = (function (){var statearr_36458 = state_36450;(statearr_36458[8] = inst_36429__$1);
(statearr_36458[10] = inst_36431);
(statearr_36458[9] = inst_36430__$1);
return statearr_36458;
})();if(cljs.core.truth_(inst_36432))
{var statearr_36459_36480 = state_36450__$1;(statearr_36459_36480[1] = 8);
} else
{var statearr_36460_36481 = state_36450__$1;(statearr_36460_36481[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36451 === 8))
{var inst_36429 = (state_36450[8]);var inst_36431 = (state_36450[10]);var inst_36430 = (state_36450[9]);var inst_36422 = (state_36450[7]);var inst_36434 = (function (){var c = inst_36431;var v = inst_36430;var vec__36427 = inst_36429;var cs = inst_36422;return ((function (c,v,vec__36427,cs,inst_36429,inst_36431,inst_36430,inst_36422,state_val_36451){
return (function (p1__36367_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__36367_SHARP_);
});
;})(c,v,vec__36427,cs,inst_36429,inst_36431,inst_36430,inst_36422,state_val_36451))
})();var inst_36435 = cljs.core.filterv.call(null,inst_36434,inst_36422);var inst_36422__$1 = inst_36435;var state_36450__$1 = (function (){var statearr_36461 = state_36450;(statearr_36461[7] = inst_36422__$1);
return statearr_36461;
})();var statearr_36462_36482 = state_36450__$1;(statearr_36462_36482[2] = null);
(statearr_36462_36482[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36451 === 9))
{var inst_36430 = (state_36450[9]);var state_36450__$1 = state_36450;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36450__$1,11,out,inst_36430);
} else
{if((state_val_36451 === 10))
{var inst_36442 = (state_36450[2]);var state_36450__$1 = state_36450;var statearr_36464_36483 = state_36450__$1;(statearr_36464_36483[2] = inst_36442);
(statearr_36464_36483[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36451 === 11))
{var inst_36422 = (state_36450[7]);var inst_36439 = (state_36450[2]);var tmp36463 = inst_36422;var inst_36422__$1 = tmp36463;var state_36450__$1 = (function (){var statearr_36465 = state_36450;(statearr_36465[7] = inst_36422__$1);
(statearr_36465[11] = inst_36439);
return statearr_36465;
})();var statearr_36466_36484 = state_36450__$1;(statearr_36466_36484[2] = null);
(statearr_36466_36484[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_36470 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36470[0] = state_machine__5507__auto__);
(statearr_36470[1] = 1);
return statearr_36470;
});
var state_machine__5507__auto____1 = (function (state_36450){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36450);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36471){if((e36471 instanceof Object))
{var ex__5510__auto__ = e36471;var statearr_36472_36485 = state_36450;(statearr_36472_36485[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36450);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36471;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36486 = state_36450;
state_36450 = G__36486;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36450){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36473 = f__5522__auto__.call(null);(statearr_36473[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36474);
return statearr_36473;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___36579 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36556){var state_val_36557 = (state_36556[1]);if((state_val_36557 === 1))
{var inst_36533 = 0;var state_36556__$1 = (function (){var statearr_36558 = state_36556;(statearr_36558[7] = inst_36533);
return statearr_36558;
})();var statearr_36559_36580 = state_36556__$1;(statearr_36559_36580[2] = null);
(statearr_36559_36580[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36557 === 2))
{var inst_36533 = (state_36556[7]);var inst_36535 = (inst_36533 < n);var state_36556__$1 = state_36556;if(cljs.core.truth_(inst_36535))
{var statearr_36560_36581 = state_36556__$1;(statearr_36560_36581[1] = 4);
} else
{var statearr_36561_36582 = state_36556__$1;(statearr_36561_36582[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36557 === 3))
{var inst_36553 = (state_36556[2]);var inst_36554 = cljs.core.async.close_BANG_.call(null,out);var state_36556__$1 = (function (){var statearr_36562 = state_36556;(statearr_36562[8] = inst_36553);
return statearr_36562;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36556__$1,inst_36554);
} else
{if((state_val_36557 === 4))
{var state_36556__$1 = state_36556;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36556__$1,7,ch);
} else
{if((state_val_36557 === 5))
{var state_36556__$1 = state_36556;var statearr_36563_36583 = state_36556__$1;(statearr_36563_36583[2] = null);
(statearr_36563_36583[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36557 === 6))
{var inst_36551 = (state_36556[2]);var state_36556__$1 = state_36556;var statearr_36564_36584 = state_36556__$1;(statearr_36564_36584[2] = inst_36551);
(statearr_36564_36584[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36557 === 7))
{var inst_36538 = (state_36556[9]);var inst_36538__$1 = (state_36556[2]);var inst_36539 = (inst_36538__$1 == null);var inst_36540 = cljs.core.not.call(null,inst_36539);var state_36556__$1 = (function (){var statearr_36565 = state_36556;(statearr_36565[9] = inst_36538__$1);
return statearr_36565;
})();if(inst_36540)
{var statearr_36566_36585 = state_36556__$1;(statearr_36566_36585[1] = 8);
} else
{var statearr_36567_36586 = state_36556__$1;(statearr_36567_36586[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36557 === 8))
{var inst_36538 = (state_36556[9]);var state_36556__$1 = state_36556;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36556__$1,11,out,inst_36538);
} else
{if((state_val_36557 === 9))
{var state_36556__$1 = state_36556;var statearr_36568_36587 = state_36556__$1;(statearr_36568_36587[2] = null);
(statearr_36568_36587[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36557 === 10))
{var inst_36548 = (state_36556[2]);var state_36556__$1 = state_36556;var statearr_36569_36588 = state_36556__$1;(statearr_36569_36588[2] = inst_36548);
(statearr_36569_36588[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36557 === 11))
{var inst_36533 = (state_36556[7]);var inst_36543 = (state_36556[2]);var inst_36544 = (inst_36533 + 1);var inst_36533__$1 = inst_36544;var state_36556__$1 = (function (){var statearr_36570 = state_36556;(statearr_36570[10] = inst_36543);
(statearr_36570[7] = inst_36533__$1);
return statearr_36570;
})();var statearr_36571_36589 = state_36556__$1;(statearr_36571_36589[2] = null);
(statearr_36571_36589[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_36575 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_36575[0] = state_machine__5507__auto__);
(statearr_36575[1] = 1);
return statearr_36575;
});
var state_machine__5507__auto____1 = (function (state_36556){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36556);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36576){if((e36576 instanceof Object))
{var ex__5510__auto__ = e36576;var statearr_36577_36590 = state_36556;(statearr_36577_36590[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36556);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36576;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36591 = state_36556;
state_36556 = G__36591;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36556){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36578 = f__5522__auto__.call(null);(statearr_36578[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36579);
return statearr_36578;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___36688 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36663){var state_val_36664 = (state_36663[1]);if((state_val_36664 === 1))
{var inst_36640 = null;var state_36663__$1 = (function (){var statearr_36665 = state_36663;(statearr_36665[7] = inst_36640);
return statearr_36665;
})();var statearr_36666_36689 = state_36663__$1;(statearr_36666_36689[2] = null);
(statearr_36666_36689[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36664 === 2))
{var state_36663__$1 = state_36663;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36663__$1,4,ch);
} else
{if((state_val_36664 === 3))
{var inst_36660 = (state_36663[2]);var inst_36661 = cljs.core.async.close_BANG_.call(null,out);var state_36663__$1 = (function (){var statearr_36667 = state_36663;(statearr_36667[8] = inst_36660);
return statearr_36667;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36663__$1,inst_36661);
} else
{if((state_val_36664 === 4))
{var inst_36643 = (state_36663[9]);var inst_36643__$1 = (state_36663[2]);var inst_36644 = (inst_36643__$1 == null);var inst_36645 = cljs.core.not.call(null,inst_36644);var state_36663__$1 = (function (){var statearr_36668 = state_36663;(statearr_36668[9] = inst_36643__$1);
return statearr_36668;
})();if(inst_36645)
{var statearr_36669_36690 = state_36663__$1;(statearr_36669_36690[1] = 5);
} else
{var statearr_36670_36691 = state_36663__$1;(statearr_36670_36691[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36664 === 5))
{var inst_36640 = (state_36663[7]);var inst_36643 = (state_36663[9]);var inst_36647 = cljs.core._EQ_.call(null,inst_36643,inst_36640);var state_36663__$1 = state_36663;if(inst_36647)
{var statearr_36671_36692 = state_36663__$1;(statearr_36671_36692[1] = 8);
} else
{var statearr_36672_36693 = state_36663__$1;(statearr_36672_36693[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36664 === 6))
{var state_36663__$1 = state_36663;var statearr_36674_36694 = state_36663__$1;(statearr_36674_36694[2] = null);
(statearr_36674_36694[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36664 === 7))
{var inst_36658 = (state_36663[2]);var state_36663__$1 = state_36663;var statearr_36675_36695 = state_36663__$1;(statearr_36675_36695[2] = inst_36658);
(statearr_36675_36695[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36664 === 8))
{var inst_36640 = (state_36663[7]);var tmp36673 = inst_36640;var inst_36640__$1 = tmp36673;var state_36663__$1 = (function (){var statearr_36676 = state_36663;(statearr_36676[7] = inst_36640__$1);
return statearr_36676;
})();var statearr_36677_36696 = state_36663__$1;(statearr_36677_36696[2] = null);
(statearr_36677_36696[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36664 === 9))
{var inst_36643 = (state_36663[9]);var state_36663__$1 = state_36663;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36663__$1,11,out,inst_36643);
} else
{if((state_val_36664 === 10))
{var inst_36655 = (state_36663[2]);var state_36663__$1 = state_36663;var statearr_36678_36697 = state_36663__$1;(statearr_36678_36697[2] = inst_36655);
(statearr_36678_36697[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36664 === 11))
{var inst_36643 = (state_36663[9]);var inst_36652 = (state_36663[2]);var inst_36640 = inst_36643;var state_36663__$1 = (function (){var statearr_36679 = state_36663;(statearr_36679[7] = inst_36640);
(statearr_36679[10] = inst_36652);
return statearr_36679;
})();var statearr_36680_36698 = state_36663__$1;(statearr_36680_36698[2] = null);
(statearr_36680_36698[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_36684 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_36684[0] = state_machine__5507__auto__);
(statearr_36684[1] = 1);
return statearr_36684;
});
var state_machine__5507__auto____1 = (function (state_36663){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36663);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36685){if((e36685 instanceof Object))
{var ex__5510__auto__ = e36685;var statearr_36686_36699 = state_36663;(statearr_36686_36699[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36663);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36685;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36700 = state_36663;
state_36663 = G__36700;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36663){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36687 = f__5522__auto__.call(null);(statearr_36687[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36688);
return statearr_36687;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___36835 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36805){var state_val_36806 = (state_36805[1]);if((state_val_36806 === 1))
{var inst_36768 = (new Array(n));var inst_36769 = inst_36768;var inst_36770 = 0;var state_36805__$1 = (function (){var statearr_36807 = state_36805;(statearr_36807[7] = inst_36769);
(statearr_36807[8] = inst_36770);
return statearr_36807;
})();var statearr_36808_36836 = state_36805__$1;(statearr_36808_36836[2] = null);
(statearr_36808_36836[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36806 === 2))
{var state_36805__$1 = state_36805;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36805__$1,4,ch);
} else
{if((state_val_36806 === 3))
{var inst_36803 = (state_36805[2]);var state_36805__$1 = state_36805;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36805__$1,inst_36803);
} else
{if((state_val_36806 === 4))
{var inst_36773 = (state_36805[9]);var inst_36773__$1 = (state_36805[2]);var inst_36774 = (inst_36773__$1 == null);var inst_36775 = cljs.core.not.call(null,inst_36774);var state_36805__$1 = (function (){var statearr_36809 = state_36805;(statearr_36809[9] = inst_36773__$1);
return statearr_36809;
})();if(inst_36775)
{var statearr_36810_36837 = state_36805__$1;(statearr_36810_36837[1] = 5);
} else
{var statearr_36811_36838 = state_36805__$1;(statearr_36811_36838[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36806 === 5))
{var inst_36778 = (state_36805[10]);var inst_36769 = (state_36805[7]);var inst_36773 = (state_36805[9]);var inst_36770 = (state_36805[8]);var inst_36777 = (inst_36769[inst_36770] = inst_36773);var inst_36778__$1 = (inst_36770 + 1);var inst_36779 = (inst_36778__$1 < n);var state_36805__$1 = (function (){var statearr_36812 = state_36805;(statearr_36812[10] = inst_36778__$1);
(statearr_36812[11] = inst_36777);
return statearr_36812;
})();if(cljs.core.truth_(inst_36779))
{var statearr_36813_36839 = state_36805__$1;(statearr_36813_36839[1] = 8);
} else
{var statearr_36814_36840 = state_36805__$1;(statearr_36814_36840[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36806 === 6))
{var inst_36770 = (state_36805[8]);var inst_36791 = (inst_36770 > 0);var state_36805__$1 = state_36805;if(cljs.core.truth_(inst_36791))
{var statearr_36816_36841 = state_36805__$1;(statearr_36816_36841[1] = 12);
} else
{var statearr_36817_36842 = state_36805__$1;(statearr_36817_36842[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36806 === 7))
{var inst_36801 = (state_36805[2]);var state_36805__$1 = state_36805;var statearr_36818_36843 = state_36805__$1;(statearr_36818_36843[2] = inst_36801);
(statearr_36818_36843[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36806 === 8))
{var inst_36778 = (state_36805[10]);var inst_36769 = (state_36805[7]);var tmp36815 = inst_36769;var inst_36769__$1 = tmp36815;var inst_36770 = inst_36778;var state_36805__$1 = (function (){var statearr_36819 = state_36805;(statearr_36819[7] = inst_36769__$1);
(statearr_36819[8] = inst_36770);
return statearr_36819;
})();var statearr_36820_36844 = state_36805__$1;(statearr_36820_36844[2] = null);
(statearr_36820_36844[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36806 === 9))
{var inst_36769 = (state_36805[7]);var inst_36783 = cljs.core.vec.call(null,inst_36769);var state_36805__$1 = state_36805;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36805__$1,11,out,inst_36783);
} else
{if((state_val_36806 === 10))
{var inst_36789 = (state_36805[2]);var state_36805__$1 = state_36805;var statearr_36821_36845 = state_36805__$1;(statearr_36821_36845[2] = inst_36789);
(statearr_36821_36845[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36806 === 11))
{var inst_36785 = (state_36805[2]);var inst_36786 = (new Array(n));var inst_36769 = inst_36786;var inst_36770 = 0;var state_36805__$1 = (function (){var statearr_36822 = state_36805;(statearr_36822[12] = inst_36785);
(statearr_36822[7] = inst_36769);
(statearr_36822[8] = inst_36770);
return statearr_36822;
})();var statearr_36823_36846 = state_36805__$1;(statearr_36823_36846[2] = null);
(statearr_36823_36846[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36806 === 12))
{var inst_36769 = (state_36805[7]);var inst_36793 = cljs.core.vec.call(null,inst_36769);var state_36805__$1 = state_36805;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36805__$1,15,out,inst_36793);
} else
{if((state_val_36806 === 13))
{var state_36805__$1 = state_36805;var statearr_36824_36847 = state_36805__$1;(statearr_36824_36847[2] = null);
(statearr_36824_36847[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36806 === 14))
{var inst_36798 = (state_36805[2]);var inst_36799 = cljs.core.async.close_BANG_.call(null,out);var state_36805__$1 = (function (){var statearr_36825 = state_36805;(statearr_36825[13] = inst_36798);
return statearr_36825;
})();var statearr_36826_36848 = state_36805__$1;(statearr_36826_36848[2] = inst_36799);
(statearr_36826_36848[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36806 === 15))
{var inst_36795 = (state_36805[2]);var state_36805__$1 = state_36805;var statearr_36827_36849 = state_36805__$1;(statearr_36827_36849[2] = inst_36795);
(statearr_36827_36849[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_36831 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36831[0] = state_machine__5507__auto__);
(statearr_36831[1] = 1);
return statearr_36831;
});
var state_machine__5507__auto____1 = (function (state_36805){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36805);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36832){if((e36832 instanceof Object))
{var ex__5510__auto__ = e36832;var statearr_36833_36850 = state_36805;(statearr_36833_36850[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36805);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36832;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36851 = state_36805;
state_36805 = G__36851;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36805){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36834 = f__5522__auto__.call(null);(statearr_36834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36835);
return statearr_36834;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___36994 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36964){var state_val_36965 = (state_36964[1]);if((state_val_36965 === 1))
{var inst_36923 = [];var inst_36924 = inst_36923;var inst_36925 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_36964__$1 = (function (){var statearr_36966 = state_36964;(statearr_36966[7] = inst_36925);
(statearr_36966[8] = inst_36924);
return statearr_36966;
})();var statearr_36967_36995 = state_36964__$1;(statearr_36967_36995[2] = null);
(statearr_36967_36995[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36965 === 2))
{var state_36964__$1 = state_36964;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36964__$1,4,ch);
} else
{if((state_val_36965 === 3))
{var inst_36962 = (state_36964[2]);var state_36964__$1 = state_36964;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36964__$1,inst_36962);
} else
{if((state_val_36965 === 4))
{var inst_36928 = (state_36964[9]);var inst_36928__$1 = (state_36964[2]);var inst_36929 = (inst_36928__$1 == null);var inst_36930 = cljs.core.not.call(null,inst_36929);var state_36964__$1 = (function (){var statearr_36968 = state_36964;(statearr_36968[9] = inst_36928__$1);
return statearr_36968;
})();if(inst_36930)
{var statearr_36969_36996 = state_36964__$1;(statearr_36969_36996[1] = 5);
} else
{var statearr_36970_36997 = state_36964__$1;(statearr_36970_36997[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36965 === 5))
{var inst_36925 = (state_36964[7]);var inst_36928 = (state_36964[9]);var inst_36932 = (state_36964[10]);var inst_36932__$1 = f.call(null,inst_36928);var inst_36933 = cljs.core._EQ_.call(null,inst_36932__$1,inst_36925);var inst_36934 = cljs.core.keyword_identical_QMARK_.call(null,inst_36925,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_36935 = (inst_36933) || (inst_36934);var state_36964__$1 = (function (){var statearr_36971 = state_36964;(statearr_36971[10] = inst_36932__$1);
return statearr_36971;
})();if(cljs.core.truth_(inst_36935))
{var statearr_36972_36998 = state_36964__$1;(statearr_36972_36998[1] = 8);
} else
{var statearr_36973_36999 = state_36964__$1;(statearr_36973_36999[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36965 === 6))
{var inst_36924 = (state_36964[8]);var inst_36949 = inst_36924.length;var inst_36950 = (inst_36949 > 0);var state_36964__$1 = state_36964;if(cljs.core.truth_(inst_36950))
{var statearr_36975_37000 = state_36964__$1;(statearr_36975_37000[1] = 12);
} else
{var statearr_36976_37001 = state_36964__$1;(statearr_36976_37001[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36965 === 7))
{var inst_36960 = (state_36964[2]);var state_36964__$1 = state_36964;var statearr_36977_37002 = state_36964__$1;(statearr_36977_37002[2] = inst_36960);
(statearr_36977_37002[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36965 === 8))
{var inst_36928 = (state_36964[9]);var inst_36932 = (state_36964[10]);var inst_36924 = (state_36964[8]);var inst_36937 = inst_36924.push(inst_36928);var tmp36974 = inst_36924;var inst_36924__$1 = tmp36974;var inst_36925 = inst_36932;var state_36964__$1 = (function (){var statearr_36978 = state_36964;(statearr_36978[7] = inst_36925);
(statearr_36978[11] = inst_36937);
(statearr_36978[8] = inst_36924__$1);
return statearr_36978;
})();var statearr_36979_37003 = state_36964__$1;(statearr_36979_37003[2] = null);
(statearr_36979_37003[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36965 === 9))
{var inst_36924 = (state_36964[8]);var inst_36940 = cljs.core.vec.call(null,inst_36924);var state_36964__$1 = state_36964;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36964__$1,11,out,inst_36940);
} else
{if((state_val_36965 === 10))
{var inst_36947 = (state_36964[2]);var state_36964__$1 = state_36964;var statearr_36980_37004 = state_36964__$1;(statearr_36980_37004[2] = inst_36947);
(statearr_36980_37004[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36965 === 11))
{var inst_36928 = (state_36964[9]);var inst_36932 = (state_36964[10]);var inst_36942 = (state_36964[2]);var inst_36943 = [];var inst_36944 = inst_36943.push(inst_36928);var inst_36924 = inst_36943;var inst_36925 = inst_36932;var state_36964__$1 = (function (){var statearr_36981 = state_36964;(statearr_36981[12] = inst_36944);
(statearr_36981[7] = inst_36925);
(statearr_36981[13] = inst_36942);
(statearr_36981[8] = inst_36924);
return statearr_36981;
})();var statearr_36982_37005 = state_36964__$1;(statearr_36982_37005[2] = null);
(statearr_36982_37005[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36965 === 12))
{var inst_36924 = (state_36964[8]);var inst_36952 = cljs.core.vec.call(null,inst_36924);var state_36964__$1 = state_36964;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36964__$1,15,out,inst_36952);
} else
{if((state_val_36965 === 13))
{var state_36964__$1 = state_36964;var statearr_36983_37006 = state_36964__$1;(statearr_36983_37006[2] = null);
(statearr_36983_37006[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36965 === 14))
{var inst_36957 = (state_36964[2]);var inst_36958 = cljs.core.async.close_BANG_.call(null,out);var state_36964__$1 = (function (){var statearr_36984 = state_36964;(statearr_36984[14] = inst_36957);
return statearr_36984;
})();var statearr_36985_37007 = state_36964__$1;(statearr_36985_37007[2] = inst_36958);
(statearr_36985_37007[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36965 === 15))
{var inst_36954 = (state_36964[2]);var state_36964__$1 = state_36964;var statearr_36986_37008 = state_36964__$1;(statearr_36986_37008[2] = inst_36954);
(statearr_36986_37008[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_36990 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36990[0] = state_machine__5507__auto__);
(statearr_36990[1] = 1);
return statearr_36990;
});
var state_machine__5507__auto____1 = (function (state_36964){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36964);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36991){if((e36991 instanceof Object))
{var ex__5510__auto__ = e36991;var statearr_36992_37009 = state_36964;(statearr_36992_37009[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36964);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36991;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37010 = state_36964;
state_36964 = G__37010;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36964){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36993 = f__5522__auto__.call(null);(statearr_36993[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36994);
return statearr_36993;
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
