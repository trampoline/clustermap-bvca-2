// Compiled by ClojureScript 0.0-2322
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t23393 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23393 = (function (f,fn_handler,meta23394){
this.f = f;
this.fn_handler = fn_handler;
this.meta23394 = meta23394;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23393.cljs$lang$type = true;
cljs.core.async.t23393.cljs$lang$ctorStr = "cljs.core.async/t23393";
cljs.core.async.t23393.cljs$lang$ctorPrWriter = (function (this__8467__auto__,writer__8468__auto__,opt__8469__auto__){return cljs.core._write.call(null,writer__8468__auto__,"cljs.core.async/t23393");
});
cljs.core.async.t23393.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23393.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t23393.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t23393.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23395){var self__ = this;
var _23395__$1 = this;return self__.meta23394;
});
cljs.core.async.t23393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23395,meta23394__$1){var self__ = this;
var _23395__$1 = this;return (new cljs.core.async.t23393(self__.f,self__.fn_handler,meta23394__$1));
});
cljs.core.async.__GT_t23393 = (function __GT_t23393(f__$1,fn_handler__$1,meta23394){return (new cljs.core.async.t23393(f__$1,fn_handler__$1,meta23394));
});
}
return (new cljs.core.async.t23393(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__23397 = buff;if(G__23397)
{var bit__8550__auto__ = null;if(cljs.core.truth_((function (){var or__7900__auto__ = bit__8550__auto__;if(cljs.core.truth_(or__7900__auto__))
{return or__7900__auto__;
} else
{return G__23397.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__23397.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__23397);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__23397);
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
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
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
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

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
{var val_23398 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_23398);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_23398,ret){
return (function (){return fn1.call(null,val_23398);
});})(val_23398,ret))
);
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
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__7888__auto__ = ret;if(cljs.core.truth_(and__7888__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__7888__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8756__auto___23399 = n;var x_23400 = (0);while(true){
if((x_23400 < n__8756__auto___23399))
{(a[x_23400] = (0));
{
var G__23401 = (x_23400 + (1));
x_23400 = G__23401;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__23402 = (i + (1));
i = G__23402;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t23406 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23406 = (function (flag,alt_flag,meta23407){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta23407 = meta23407;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23406.cljs$lang$type = true;
cljs.core.async.t23406.cljs$lang$ctorStr = "cljs.core.async/t23406";
cljs.core.async.t23406.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8467__auto__,writer__8468__auto__,opt__8469__auto__){return cljs.core._write.call(null,writer__8468__auto__,"cljs.core.async/t23406");
});})(flag))
;
cljs.core.async.t23406.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23406.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t23406.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t23406.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23408){var self__ = this;
var _23408__$1 = this;return self__.meta23407;
});})(flag))
;
cljs.core.async.t23406.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23408,meta23407__$1){var self__ = this;
var _23408__$1 = this;return (new cljs.core.async.t23406(self__.flag,self__.alt_flag,meta23407__$1));
});})(flag))
;
cljs.core.async.__GT_t23406 = ((function (flag){
return (function __GT_t23406(flag__$1,alt_flag__$1,meta23407){return (new cljs.core.async.t23406(flag__$1,alt_flag__$1,meta23407));
});})(flag))
;
}
return (new cljs.core.async.t23406(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t23412 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23412 = (function (cb,flag,alt_handler,meta23413){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta23413 = meta23413;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23412.cljs$lang$type = true;
cljs.core.async.t23412.cljs$lang$ctorStr = "cljs.core.async/t23412";
cljs.core.async.t23412.cljs$lang$ctorPrWriter = (function (this__8467__auto__,writer__8468__auto__,opt__8469__auto__){return cljs.core._write.call(null,writer__8468__auto__,"cljs.core.async/t23412");
});
cljs.core.async.t23412.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23412.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t23412.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t23412.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23414){var self__ = this;
var _23414__$1 = this;return self__.meta23413;
});
cljs.core.async.t23412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23414,meta23413__$1){var self__ = this;
var _23414__$1 = this;return (new cljs.core.async.t23412(self__.cb,self__.flag,self__.alt_handler,meta23413__$1));
});
cljs.core.async.__GT_t23412 = (function __GT_t23412(cb__$1,flag__$1,alt_handler__$1,meta23413){return (new cljs.core.async.t23412(cb__$1,flag__$1,alt_handler__$1,meta23413));
});
}
return (new cljs.core.async.t23412(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23415_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23415_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__7900__auto__ = wport;if(cljs.core.truth_(or__7900__auto__))
{return or__7900__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__23416 = (i + (1));
i = G__23416;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__7900__auto__ = ret;if(cljs.core.truth_(or__7900__auto__))
{return or__7900__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__7888__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__7888__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__7888__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var alts_BANG___delegate = function (ports,p__23417){var map__23419 = p__23417;var map__23419__$1 = ((cljs.core.seq_QMARK_.call(null,map__23419))?cljs.core.apply.call(null,cljs.core.hash_map,map__23419):map__23419);var opts = map__23419__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__23417 = null;if (arguments.length > 1) {
  p__23417 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__23417);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__23420){
var ports = cljs.core.first(arglist__23420);
var p__23417 = cljs.core.rest(arglist__23420);
return alts_BANG___delegate(ports,p__23417);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t23428 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23428 = (function (ch,f,map_LT_,meta23429){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23429 = meta23429;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23428.cljs$lang$type = true;
cljs.core.async.t23428.cljs$lang$ctorStr = "cljs.core.async/t23428";
cljs.core.async.t23428.cljs$lang$ctorPrWriter = (function (this__8467__auto__,writer__8468__auto__,opt__8469__auto__){return cljs.core._write.call(null,writer__8468__auto__,"cljs.core.async/t23428");
});
cljs.core.async.t23428.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23428.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t23428.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23428.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t23431 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23431 = (function (fn1,_,meta23429,ch,f,map_LT_,meta23432){
this.fn1 = fn1;
this._ = _;
this.meta23429 = meta23429;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23432 = meta23432;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23431.cljs$lang$type = true;
cljs.core.async.t23431.cljs$lang$ctorStr = "cljs.core.async/t23431";
cljs.core.async.t23431.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8467__auto__,writer__8468__auto__,opt__8469__auto__){return cljs.core._write.call(null,writer__8468__auto__,"cljs.core.async/t23431");
});})(___$1))
;
cljs.core.async.t23431.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23431.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t23431.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t23431.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__23421_SHARP_){return f1.call(null,(((p1__23421_SHARP_ == null))?null:self__.f.call(null,p1__23421_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t23431.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23433){var self__ = this;
var _23433__$1 = this;return self__.meta23432;
});})(___$1))
;
cljs.core.async.t23431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23433,meta23432__$1){var self__ = this;
var _23433__$1 = this;return (new cljs.core.async.t23431(self__.fn1,self__._,self__.meta23429,self__.ch,self__.f,self__.map_LT_,meta23432__$1));
});})(___$1))
;
cljs.core.async.__GT_t23431 = ((function (___$1){
return (function __GT_t23431(fn1__$1,___$2,meta23429__$1,ch__$2,f__$2,map_LT___$2,meta23432){return (new cljs.core.async.t23431(fn1__$1,___$2,meta23429__$1,ch__$2,f__$2,map_LT___$2,meta23432));
});})(___$1))
;
}
return (new cljs.core.async.t23431(fn1,___$1,self__.meta23429,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__7888__auto__ = ret;if(cljs.core.truth_(and__7888__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__7888__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t23428.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23428.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t23428.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23430){var self__ = this;
var _23430__$1 = this;return self__.meta23429;
});
cljs.core.async.t23428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23430,meta23429__$1){var self__ = this;
var _23430__$1 = this;return (new cljs.core.async.t23428(self__.ch,self__.f,self__.map_LT_,meta23429__$1));
});
cljs.core.async.__GT_t23428 = (function __GT_t23428(ch__$1,f__$1,map_LT___$1,meta23429){return (new cljs.core.async.t23428(ch__$1,f__$1,map_LT___$1,meta23429));
});
}
return (new cljs.core.async.t23428(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t23437 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23437 = (function (ch,f,map_GT_,meta23438){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta23438 = meta23438;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23437.cljs$lang$type = true;
cljs.core.async.t23437.cljs$lang$ctorStr = "cljs.core.async/t23437";
cljs.core.async.t23437.cljs$lang$ctorPrWriter = (function (this__8467__auto__,writer__8468__auto__,opt__8469__auto__){return cljs.core._write.call(null,writer__8468__auto__,"cljs.core.async/t23437");
});
cljs.core.async.t23437.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23437.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t23437.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23437.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t23437.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23437.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t23437.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23439){var self__ = this;
var _23439__$1 = this;return self__.meta23438;
});
cljs.core.async.t23437.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23439,meta23438__$1){var self__ = this;
var _23439__$1 = this;return (new cljs.core.async.t23437(self__.ch,self__.f,self__.map_GT_,meta23438__$1));
});
cljs.core.async.__GT_t23437 = (function __GT_t23437(ch__$1,f__$1,map_GT___$1,meta23438){return (new cljs.core.async.t23437(ch__$1,f__$1,map_GT___$1,meta23438));
});
}
return (new cljs.core.async.t23437(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t23443 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23443 = (function (ch,p,filter_GT_,meta23444){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta23444 = meta23444;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23443.cljs$lang$type = true;
cljs.core.async.t23443.cljs$lang$ctorStr = "cljs.core.async/t23443";
cljs.core.async.t23443.cljs$lang$ctorPrWriter = (function (this__8467__auto__,writer__8468__auto__,opt__8469__auto__){return cljs.core._write.call(null,writer__8468__auto__,"cljs.core.async/t23443");
});
cljs.core.async.t23443.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23443.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t23443.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23443.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t23443.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23443.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t23443.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23445){var self__ = this;
var _23445__$1 = this;return self__.meta23444;
});
cljs.core.async.t23443.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23445,meta23444__$1){var self__ = this;
var _23445__$1 = this;return (new cljs.core.async.t23443(self__.ch,self__.p,self__.filter_GT_,meta23444__$1));
});
cljs.core.async.__GT_t23443 = (function __GT_t23443(ch__$1,p__$1,filter_GT___$1,meta23444){return (new cljs.core.async.t23443(ch__$1,p__$1,filter_GT___$1,meta23444));
});
}
return (new cljs.core.async.t23443(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9759__auto___23528 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9759__auto___23528,out){
return (function (){var f__9760__auto__ = (function (){var switch__9744__auto__ = ((function (c__9759__auto___23528,out){
return (function (state_23507){var state_val_23508 = (state_23507[(1)]);if((state_val_23508 === (7)))
{var inst_23503 = (state_23507[(2)]);var state_23507__$1 = state_23507;var statearr_23509_23529 = state_23507__$1;(statearr_23509_23529[(2)] = inst_23503);
(statearr_23509_23529[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23508 === (1)))
{var state_23507__$1 = state_23507;var statearr_23510_23530 = state_23507__$1;(statearr_23510_23530[(2)] = null);
(statearr_23510_23530[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23508 === (4)))
{var inst_23489 = (state_23507[(7)]);var inst_23489__$1 = (state_23507[(2)]);var inst_23490 = (inst_23489__$1 == null);var state_23507__$1 = (function (){var statearr_23511 = state_23507;(statearr_23511[(7)] = inst_23489__$1);
return statearr_23511;
})();if(cljs.core.truth_(inst_23490))
{var statearr_23512_23531 = state_23507__$1;(statearr_23512_23531[(1)] = (5));
} else
{var statearr_23513_23532 = state_23507__$1;(statearr_23513_23532[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23508 === (6)))
{var inst_23489 = (state_23507[(7)]);var inst_23494 = p.call(null,inst_23489);var state_23507__$1 = state_23507;if(cljs.core.truth_(inst_23494))
{var statearr_23514_23533 = state_23507__$1;(statearr_23514_23533[(1)] = (8));
} else
{var statearr_23515_23534 = state_23507__$1;(statearr_23515_23534[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23508 === (3)))
{var inst_23505 = (state_23507[(2)]);var state_23507__$1 = state_23507;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23507__$1,inst_23505);
} else
{if((state_val_23508 === (2)))
{var state_23507__$1 = state_23507;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23507__$1,(4),ch);
} else
{if((state_val_23508 === (11)))
{var inst_23497 = (state_23507[(2)]);var state_23507__$1 = state_23507;var statearr_23516_23535 = state_23507__$1;(statearr_23516_23535[(2)] = inst_23497);
(statearr_23516_23535[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23508 === (9)))
{var state_23507__$1 = state_23507;var statearr_23517_23536 = state_23507__$1;(statearr_23517_23536[(2)] = null);
(statearr_23517_23536[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23508 === (5)))
{var inst_23492 = cljs.core.async.close_BANG_.call(null,out);var state_23507__$1 = state_23507;var statearr_23518_23537 = state_23507__$1;(statearr_23518_23537[(2)] = inst_23492);
(statearr_23518_23537[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23508 === (10)))
{var inst_23500 = (state_23507[(2)]);var state_23507__$1 = (function (){var statearr_23519 = state_23507;(statearr_23519[(8)] = inst_23500);
return statearr_23519;
})();var statearr_23520_23538 = state_23507__$1;(statearr_23520_23538[(2)] = null);
(statearr_23520_23538[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23508 === (8)))
{var inst_23489 = (state_23507[(7)]);var state_23507__$1 = state_23507;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23507__$1,(11),out,inst_23489);
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
});})(c__9759__auto___23528,out))
;return ((function (switch__9744__auto__,c__9759__auto___23528,out){
return (function() {
var state_machine__9745__auto__ = null;
var state_machine__9745__auto____0 = (function (){var statearr_23524 = [null,null,null,null,null,null,null,null,null];(statearr_23524[(0)] = state_machine__9745__auto__);
(statearr_23524[(1)] = (1));
return statearr_23524;
});
var state_machine__9745__auto____1 = (function (state_23507){while(true){
var ret_value__9746__auto__ = (function (){try{while(true){
var result__9747__auto__ = switch__9744__auto__.call(null,state_23507);if(cljs.core.keyword_identical_QMARK_.call(null,result__9747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9747__auto__;
}
break;
}
}catch (e23525){if((e23525 instanceof Object))
{var ex__9748__auto__ = e23525;var statearr_23526_23539 = state_23507;(statearr_23526_23539[(5)] = ex__9748__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23507);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23525;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23540 = state_23507;
state_23507 = G__23540;
continue;
}
} else
{return ret_value__9746__auto__;
}
break;
}
});
state_machine__9745__auto__ = function(state_23507){
switch(arguments.length){
case 0:
return state_machine__9745__auto____0.call(this);
case 1:
return state_machine__9745__auto____1.call(this,state_23507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9745__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9745__auto____0;
state_machine__9745__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9745__auto____1;
return state_machine__9745__auto__;
})()
;})(switch__9744__auto__,c__9759__auto___23528,out))
})();var state__9761__auto__ = (function (){var statearr_23527 = f__9760__auto__.call(null);(statearr_23527[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9759__auto___23528);
return statearr_23527;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9761__auto__);
});})(c__9759__auto___23528,out))
);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__9759__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9759__auto__){
return (function (){var f__9760__auto__ = (function (){var switch__9744__auto__ = ((function (c__9759__auto__){
return (function (state_23692){var state_val_23693 = (state_23692[(1)]);if((state_val_23693 === (7)))
{var inst_23688 = (state_23692[(2)]);var state_23692__$1 = state_23692;var statearr_23694_23731 = state_23692__$1;(statearr_23694_23731[(2)] = inst_23688);
(statearr_23694_23731[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23693 === (20)))
{var inst_23663 = (state_23692[(7)]);var inst_23674 = (state_23692[(2)]);var inst_23675 = cljs.core.next.call(null,inst_23663);var inst_23649 = inst_23675;var inst_23650 = null;var inst_23651 = (0);var inst_23652 = (0);var state_23692__$1 = (function (){var statearr_23695 = state_23692;(statearr_23695[(8)] = inst_23652);
(statearr_23695[(9)] = inst_23651);
(statearr_23695[(10)] = inst_23649);
(statearr_23695[(11)] = inst_23650);
(statearr_23695[(12)] = inst_23674);
return statearr_23695;
})();var statearr_23696_23732 = state_23692__$1;(statearr_23696_23732[(2)] = null);
(statearr_23696_23732[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23693 === (1)))
{var state_23692__$1 = state_23692;var statearr_23697_23733 = state_23692__$1;(statearr_23697_23733[(2)] = null);
(statearr_23697_23733[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23693 === (4)))
{var inst_23638 = (state_23692[(13)]);var inst_23638__$1 = (state_23692[(2)]);var inst_23639 = (inst_23638__$1 == null);var state_23692__$1 = (function (){var statearr_23701 = state_23692;(statearr_23701[(13)] = inst_23638__$1);
return statearr_23701;
})();if(cljs.core.truth_(inst_23639))
{var statearr_23702_23734 = state_23692__$1;(statearr_23702_23734[(1)] = (5));
} else
{var statearr_23703_23735 = state_23692__$1;(statearr_23703_23735[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23693 === (15)))
{var state_23692__$1 = state_23692;var statearr_23704_23736 = state_23692__$1;(statearr_23704_23736[(2)] = null);
(statearr_23704_23736[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23693 === (13)))
{var inst_23652 = (state_23692[(8)]);var inst_23651 = (state_23692[(9)]);var inst_23649 = (state_23692[(10)]);var inst_23650 = (state_23692[(11)]);var inst_23659 = (state_23692[(2)]);var inst_23660 = (inst_23652 + (1));var tmp23698 = inst_23651;var tmp23699 = inst_23649;var tmp23700 = inst_23650;var inst_23649__$1 = tmp23699;var inst_23650__$1 = tmp23700;var inst_23651__$1 = tmp23698;var inst_23652__$1 = inst_23660;var state_23692__$1 = (function (){var statearr_23705 = state_23692;(statearr_23705[(8)] = inst_23652__$1);
(statearr_23705[(9)] = inst_23651__$1);
(statearr_23705[(14)] = inst_23659);
(statearr_23705[(10)] = inst_23649__$1);
(statearr_23705[(11)] = inst_23650__$1);
return statearr_23705;
})();var statearr_23706_23737 = state_23692__$1;(statearr_23706_23737[(2)] = null);
(statearr_23706_23737[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23693 === (6)))
{var inst_23638 = (state_23692[(13)]);var inst_23643 = f.call(null,inst_23638);var inst_23648 = cljs.core.seq.call(null,inst_23643);var inst_23649 = inst_23648;var inst_23650 = null;var inst_23651 = (0);var inst_23652 = (0);var state_23692__$1 = (function (){var statearr_23707 = state_23692;(statearr_23707[(8)] = inst_23652);
(statearr_23707[(9)] = inst_23651);
(statearr_23707[(10)] = inst_23649);
(statearr_23707[(11)] = inst_23650);
return statearr_23707;
})();var statearr_23708_23738 = state_23692__$1;(statearr_23708_23738[(2)] = null);
(statearr_23708_23738[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23693 === (17)))
{var inst_23663 = (state_23692[(7)]);var inst_23667 = cljs.core.chunk_first.call(null,inst_23663);var inst_23668 = cljs.core.chunk_rest.call(null,inst_23663);var inst_23669 = cljs.core.count.call(null,inst_23667);var inst_23649 = inst_23668;var inst_23650 = inst_23667;var inst_23651 = inst_23669;var inst_23652 = (0);var state_23692__$1 = (function (){var statearr_23709 = state_23692;(statearr_23709[(8)] = inst_23652);
(statearr_23709[(9)] = inst_23651);
(statearr_23709[(10)] = inst_23649);
(statearr_23709[(11)] = inst_23650);
return statearr_23709;
})();var statearr_23710_23739 = state_23692__$1;(statearr_23710_23739[(2)] = null);
(statearr_23710_23739[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23693 === (3)))
{var inst_23690 = (state_23692[(2)]);var state_23692__$1 = state_23692;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23692__$1,inst_23690);
} else
{if((state_val_23693 === (12)))
{var inst_23683 = (state_23692[(2)]);var state_23692__$1 = state_23692;var statearr_23711_23740 = state_23692__$1;(statearr_23711_23740[(2)] = inst_23683);
(statearr_23711_23740[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23693 === (2)))
{var state_23692__$1 = state_23692;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23692__$1,(4),in$);
} else
{if((state_val_23693 === (19)))
{var inst_23678 = (state_23692[(2)]);var state_23692__$1 = state_23692;var statearr_23712_23741 = state_23692__$1;(statearr_23712_23741[(2)] = inst_23678);
(statearr_23712_23741[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23693 === (11)))
{var inst_23663 = (state_23692[(7)]);var inst_23649 = (state_23692[(10)]);var inst_23663__$1 = cljs.core.seq.call(null,inst_23649);var state_23692__$1 = (function (){var statearr_23713 = state_23692;(statearr_23713[(7)] = inst_23663__$1);
return statearr_23713;
})();if(inst_23663__$1)
{var statearr_23714_23742 = state_23692__$1;(statearr_23714_23742[(1)] = (14));
} else
{var statearr_23715_23743 = state_23692__$1;(statearr_23715_23743[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23693 === (9)))
{var inst_23685 = (state_23692[(2)]);var state_23692__$1 = (function (){var statearr_23716 = state_23692;(statearr_23716[(15)] = inst_23685);
return statearr_23716;
})();var statearr_23717_23744 = state_23692__$1;(statearr_23717_23744[(2)] = null);
(statearr_23717_23744[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23693 === (5)))
{var inst_23641 = cljs.core.async.close_BANG_.call(null,out);var state_23692__$1 = state_23692;var statearr_23718_23745 = state_23692__$1;(statearr_23718_23745[(2)] = inst_23641);
(statearr_23718_23745[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23693 === (14)))
{var inst_23663 = (state_23692[(7)]);var inst_23665 = cljs.core.chunked_seq_QMARK_.call(null,inst_23663);var state_23692__$1 = state_23692;if(inst_23665)
{var statearr_23719_23746 = state_23692__$1;(statearr_23719_23746[(1)] = (17));
} else
{var statearr_23720_23747 = state_23692__$1;(statearr_23720_23747[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23693 === (16)))
{var inst_23681 = (state_23692[(2)]);var state_23692__$1 = state_23692;var statearr_23721_23748 = state_23692__$1;(statearr_23721_23748[(2)] = inst_23681);
(statearr_23721_23748[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23693 === (10)))
{var inst_23652 = (state_23692[(8)]);var inst_23650 = (state_23692[(11)]);var inst_23657 = cljs.core._nth.call(null,inst_23650,inst_23652);var state_23692__$1 = state_23692;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23692__$1,(13),out,inst_23657);
} else
{if((state_val_23693 === (18)))
{var inst_23663 = (state_23692[(7)]);var inst_23672 = cljs.core.first.call(null,inst_23663);var state_23692__$1 = state_23692;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23692__$1,(20),out,inst_23672);
} else
{if((state_val_23693 === (8)))
{var inst_23652 = (state_23692[(8)]);var inst_23651 = (state_23692[(9)]);var inst_23654 = (inst_23652 < inst_23651);var inst_23655 = inst_23654;var state_23692__$1 = state_23692;if(cljs.core.truth_(inst_23655))
{var statearr_23722_23749 = state_23692__$1;(statearr_23722_23749[(1)] = (10));
} else
{var statearr_23723_23750 = state_23692__$1;(statearr_23723_23750[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__9759__auto__))
;return ((function (switch__9744__auto__,c__9759__auto__){
return (function() {
var state_machine__9745__auto__ = null;
var state_machine__9745__auto____0 = (function (){var statearr_23727 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23727[(0)] = state_machine__9745__auto__);
(statearr_23727[(1)] = (1));
return statearr_23727;
});
var state_machine__9745__auto____1 = (function (state_23692){while(true){
var ret_value__9746__auto__ = (function (){try{while(true){
var result__9747__auto__ = switch__9744__auto__.call(null,state_23692);if(cljs.core.keyword_identical_QMARK_.call(null,result__9747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9747__auto__;
}
break;
}
}catch (e23728){if((e23728 instanceof Object))
{var ex__9748__auto__ = e23728;var statearr_23729_23751 = state_23692;(statearr_23729_23751[(5)] = ex__9748__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23692);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23728;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23752 = state_23692;
state_23692 = G__23752;
continue;
}
} else
{return ret_value__9746__auto__;
}
break;
}
});
state_machine__9745__auto__ = function(state_23692){
switch(arguments.length){
case 0:
return state_machine__9745__auto____0.call(this);
case 1:
return state_machine__9745__auto____1.call(this,state_23692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9745__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9745__auto____0;
state_machine__9745__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9745__auto____1;
return state_machine__9745__auto__;
})()
;})(switch__9744__auto__,c__9759__auto__))
})();var state__9761__auto__ = (function (){var statearr_23730 = f__9760__auto__.call(null);(statearr_23730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9759__auto__);
return statearr_23730;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9761__auto__);
});})(c__9759__auto__))
);
return c__9759__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__9759__auto___23833 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9759__auto___23833){
return (function (){var f__9760__auto__ = (function (){var switch__9744__auto__ = ((function (c__9759__auto___23833){
return (function (state_23812){var state_val_23813 = (state_23812[(1)]);if((state_val_23813 === (7)))
{var inst_23808 = (state_23812[(2)]);var state_23812__$1 = state_23812;var statearr_23814_23834 = state_23812__$1;(statearr_23814_23834[(2)] = inst_23808);
(statearr_23814_23834[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23813 === (1)))
{var state_23812__$1 = state_23812;var statearr_23815_23835 = state_23812__$1;(statearr_23815_23835[(2)] = null);
(statearr_23815_23835[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23813 === (4)))
{var inst_23795 = (state_23812[(7)]);var inst_23795__$1 = (state_23812[(2)]);var inst_23796 = (inst_23795__$1 == null);var state_23812__$1 = (function (){var statearr_23816 = state_23812;(statearr_23816[(7)] = inst_23795__$1);
return statearr_23816;
})();if(cljs.core.truth_(inst_23796))
{var statearr_23817_23836 = state_23812__$1;(statearr_23817_23836[(1)] = (5));
} else
{var statearr_23818_23837 = state_23812__$1;(statearr_23818_23837[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23813 === (6)))
{var inst_23795 = (state_23812[(7)]);var state_23812__$1 = state_23812;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23812__$1,(11),to,inst_23795);
} else
{if((state_val_23813 === (3)))
{var inst_23810 = (state_23812[(2)]);var state_23812__$1 = state_23812;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23812__$1,inst_23810);
} else
{if((state_val_23813 === (2)))
{var state_23812__$1 = state_23812;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23812__$1,(4),from);
} else
{if((state_val_23813 === (11)))
{var inst_23805 = (state_23812[(2)]);var state_23812__$1 = (function (){var statearr_23819 = state_23812;(statearr_23819[(8)] = inst_23805);
return statearr_23819;
})();var statearr_23820_23838 = state_23812__$1;(statearr_23820_23838[(2)] = null);
(statearr_23820_23838[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23813 === (9)))
{var state_23812__$1 = state_23812;var statearr_23821_23839 = state_23812__$1;(statearr_23821_23839[(2)] = null);
(statearr_23821_23839[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23813 === (5)))
{var state_23812__$1 = state_23812;if(cljs.core.truth_(close_QMARK_))
{var statearr_23822_23840 = state_23812__$1;(statearr_23822_23840[(1)] = (8));
} else
{var statearr_23823_23841 = state_23812__$1;(statearr_23823_23841[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23813 === (10)))
{var inst_23802 = (state_23812[(2)]);var state_23812__$1 = state_23812;var statearr_23824_23842 = state_23812__$1;(statearr_23824_23842[(2)] = inst_23802);
(statearr_23824_23842[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23813 === (8)))
{var inst_23799 = cljs.core.async.close_BANG_.call(null,to);var state_23812__$1 = state_23812;var statearr_23825_23843 = state_23812__$1;(statearr_23825_23843[(2)] = inst_23799);
(statearr_23825_23843[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__9759__auto___23833))
;return ((function (switch__9744__auto__,c__9759__auto___23833){
return (function() {
var state_machine__9745__auto__ = null;
var state_machine__9745__auto____0 = (function (){var statearr_23829 = [null,null,null,null,null,null,null,null,null];(statearr_23829[(0)] = state_machine__9745__auto__);
(statearr_23829[(1)] = (1));
return statearr_23829;
});
var state_machine__9745__auto____1 = (function (state_23812){while(true){
var ret_value__9746__auto__ = (function (){try{while(true){
var result__9747__auto__ = switch__9744__auto__.call(null,state_23812);if(cljs.core.keyword_identical_QMARK_.call(null,result__9747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9747__auto__;
}
break;
}
}catch (e23830){if((e23830 instanceof Object))
{var ex__9748__auto__ = e23830;var statearr_23831_23844 = state_23812;(statearr_23831_23844[(5)] = ex__9748__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23812);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23830;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23845 = state_23812;
state_23812 = G__23845;
continue;
}
} else
{return ret_value__9746__auto__;
}
break;
}
});
state_machine__9745__auto__ = function(state_23812){
switch(arguments.length){
case 0:
return state_machine__9745__auto____0.call(this);
case 1:
return state_machine__9745__auto____1.call(this,state_23812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9745__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9745__auto____0;
state_machine__9745__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9745__auto____1;
return state_machine__9745__auto__;
})()
;})(switch__9744__auto__,c__9759__auto___23833))
})();var state__9761__auto__ = (function (){var statearr_23832 = f__9760__auto__.call(null);(statearr_23832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9759__auto___23833);
return statearr_23832;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9761__auto__);
});})(c__9759__auto___23833))
);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__9759__auto___23932 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9759__auto___23932,tc,fc){
return (function (){var f__9760__auto__ = (function (){var switch__9744__auto__ = ((function (c__9759__auto___23932,tc,fc){
return (function (state_23910){var state_val_23911 = (state_23910[(1)]);if((state_val_23911 === (7)))
{var inst_23906 = (state_23910[(2)]);var state_23910__$1 = state_23910;var statearr_23912_23933 = state_23910__$1;(statearr_23912_23933[(2)] = inst_23906);
(statearr_23912_23933[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23911 === (1)))
{var state_23910__$1 = state_23910;var statearr_23913_23934 = state_23910__$1;(statearr_23913_23934[(2)] = null);
(statearr_23913_23934[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23911 === (4)))
{var inst_23891 = (state_23910[(7)]);var inst_23891__$1 = (state_23910[(2)]);var inst_23892 = (inst_23891__$1 == null);var state_23910__$1 = (function (){var statearr_23914 = state_23910;(statearr_23914[(7)] = inst_23891__$1);
return statearr_23914;
})();if(cljs.core.truth_(inst_23892))
{var statearr_23915_23935 = state_23910__$1;(statearr_23915_23935[(1)] = (5));
} else
{var statearr_23916_23936 = state_23910__$1;(statearr_23916_23936[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23911 === (6)))
{var inst_23891 = (state_23910[(7)]);var inst_23897 = p.call(null,inst_23891);var state_23910__$1 = state_23910;if(cljs.core.truth_(inst_23897))
{var statearr_23917_23937 = state_23910__$1;(statearr_23917_23937[(1)] = (9));
} else
{var statearr_23918_23938 = state_23910__$1;(statearr_23918_23938[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23911 === (3)))
{var inst_23908 = (state_23910[(2)]);var state_23910__$1 = state_23910;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23910__$1,inst_23908);
} else
{if((state_val_23911 === (2)))
{var state_23910__$1 = state_23910;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23910__$1,(4),ch);
} else
{if((state_val_23911 === (11)))
{var inst_23891 = (state_23910[(7)]);var inst_23901 = (state_23910[(2)]);var state_23910__$1 = state_23910;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23910__$1,(8),inst_23901,inst_23891);
} else
{if((state_val_23911 === (9)))
{var state_23910__$1 = state_23910;var statearr_23919_23939 = state_23910__$1;(statearr_23919_23939[(2)] = tc);
(statearr_23919_23939[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23911 === (5)))
{var inst_23894 = cljs.core.async.close_BANG_.call(null,tc);var inst_23895 = cljs.core.async.close_BANG_.call(null,fc);var state_23910__$1 = (function (){var statearr_23920 = state_23910;(statearr_23920[(8)] = inst_23894);
return statearr_23920;
})();var statearr_23921_23940 = state_23910__$1;(statearr_23921_23940[(2)] = inst_23895);
(statearr_23921_23940[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23911 === (10)))
{var state_23910__$1 = state_23910;var statearr_23922_23941 = state_23910__$1;(statearr_23922_23941[(2)] = fc);
(statearr_23922_23941[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23911 === (8)))
{var inst_23903 = (state_23910[(2)]);var state_23910__$1 = (function (){var statearr_23923 = state_23910;(statearr_23923[(9)] = inst_23903);
return statearr_23923;
})();var statearr_23924_23942 = state_23910__$1;(statearr_23924_23942[(2)] = null);
(statearr_23924_23942[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__9759__auto___23932,tc,fc))
;return ((function (switch__9744__auto__,c__9759__auto___23932,tc,fc){
return (function() {
var state_machine__9745__auto__ = null;
var state_machine__9745__auto____0 = (function (){var statearr_23928 = [null,null,null,null,null,null,null,null,null,null];(statearr_23928[(0)] = state_machine__9745__auto__);
(statearr_23928[(1)] = (1));
return statearr_23928;
});
var state_machine__9745__auto____1 = (function (state_23910){while(true){
var ret_value__9746__auto__ = (function (){try{while(true){
var result__9747__auto__ = switch__9744__auto__.call(null,state_23910);if(cljs.core.keyword_identical_QMARK_.call(null,result__9747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9747__auto__;
}
break;
}
}catch (e23929){if((e23929 instanceof Object))
{var ex__9748__auto__ = e23929;var statearr_23930_23943 = state_23910;(statearr_23930_23943[(5)] = ex__9748__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23910);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23929;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23944 = state_23910;
state_23910 = G__23944;
continue;
}
} else
{return ret_value__9746__auto__;
}
break;
}
});
state_machine__9745__auto__ = function(state_23910){
switch(arguments.length){
case 0:
return state_machine__9745__auto____0.call(this);
case 1:
return state_machine__9745__auto____1.call(this,state_23910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9745__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9745__auto____0;
state_machine__9745__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9745__auto____1;
return state_machine__9745__auto__;
})()
;})(switch__9744__auto__,c__9759__auto___23932,tc,fc))
})();var state__9761__auto__ = (function (){var statearr_23931 = f__9760__auto__.call(null);(statearr_23931[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9759__auto___23932);
return statearr_23931;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9761__auto__);
});})(c__9759__auto___23932,tc,fc))
);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__9759__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9759__auto__){
return (function (){var f__9760__auto__ = (function (){var switch__9744__auto__ = ((function (c__9759__auto__){
return (function (state_23991){var state_val_23992 = (state_23991[(1)]);if((state_val_23992 === (7)))
{var inst_23987 = (state_23991[(2)]);var state_23991__$1 = state_23991;var statearr_23993_24009 = state_23991__$1;(statearr_23993_24009[(2)] = inst_23987);
(statearr_23993_24009[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23992 === (6)))
{var inst_23980 = (state_23991[(7)]);var inst_23977 = (state_23991[(8)]);var inst_23984 = f.call(null,inst_23977,inst_23980);var inst_23977__$1 = inst_23984;var state_23991__$1 = (function (){var statearr_23994 = state_23991;(statearr_23994[(8)] = inst_23977__$1);
return statearr_23994;
})();var statearr_23995_24010 = state_23991__$1;(statearr_23995_24010[(2)] = null);
(statearr_23995_24010[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23992 === (5)))
{var inst_23977 = (state_23991[(8)]);var state_23991__$1 = state_23991;var statearr_23996_24011 = state_23991__$1;(statearr_23996_24011[(2)] = inst_23977);
(statearr_23996_24011[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23992 === (4)))
{var inst_23980 = (state_23991[(7)]);var inst_23980__$1 = (state_23991[(2)]);var inst_23981 = (inst_23980__$1 == null);var state_23991__$1 = (function (){var statearr_23997 = state_23991;(statearr_23997[(7)] = inst_23980__$1);
return statearr_23997;
})();if(cljs.core.truth_(inst_23981))
{var statearr_23998_24012 = state_23991__$1;(statearr_23998_24012[(1)] = (5));
} else
{var statearr_23999_24013 = state_23991__$1;(statearr_23999_24013[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23992 === (3)))
{var inst_23989 = (state_23991[(2)]);var state_23991__$1 = state_23991;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23991__$1,inst_23989);
} else
{if((state_val_23992 === (2)))
{var state_23991__$1 = state_23991;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23991__$1,(4),ch);
} else
{if((state_val_23992 === (1)))
{var inst_23977 = init;var state_23991__$1 = (function (){var statearr_24000 = state_23991;(statearr_24000[(8)] = inst_23977);
return statearr_24000;
})();var statearr_24001_24014 = state_23991__$1;(statearr_24001_24014[(2)] = null);
(statearr_24001_24014[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__9759__auto__))
;return ((function (switch__9744__auto__,c__9759__auto__){
return (function() {
var state_machine__9745__auto__ = null;
var state_machine__9745__auto____0 = (function (){var statearr_24005 = [null,null,null,null,null,null,null,null,null];(statearr_24005[(0)] = state_machine__9745__auto__);
(statearr_24005[(1)] = (1));
return statearr_24005;
});
var state_machine__9745__auto____1 = (function (state_23991){while(true){
var ret_value__9746__auto__ = (function (){try{while(true){
var result__9747__auto__ = switch__9744__auto__.call(null,state_23991);if(cljs.core.keyword_identical_QMARK_.call(null,result__9747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9747__auto__;
}
break;
}
}catch (e24006){if((e24006 instanceof Object))
{var ex__9748__auto__ = e24006;var statearr_24007_24015 = state_23991;(statearr_24007_24015[(5)] = ex__9748__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23991);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24006;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24016 = state_23991;
state_23991 = G__24016;
continue;
}
} else
{return ret_value__9746__auto__;
}
break;
}
});
state_machine__9745__auto__ = function(state_23991){
switch(arguments.length){
case 0:
return state_machine__9745__auto____0.call(this);
case 1:
return state_machine__9745__auto____1.call(this,state_23991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9745__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9745__auto____0;
state_machine__9745__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9745__auto____1;
return state_machine__9745__auto__;
})()
;})(switch__9744__auto__,c__9759__auto__))
})();var state__9761__auto__ = (function (){var statearr_24008 = f__9760__auto__.call(null);(statearr_24008[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9759__auto__);
return statearr_24008;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9761__auto__);
});})(c__9759__auto__))
);
return c__9759__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__9759__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9759__auto__){
return (function (){var f__9760__auto__ = (function (){var switch__9744__auto__ = ((function (c__9759__auto__){
return (function (state_24078){var state_val_24079 = (state_24078[(1)]);if((state_val_24079 === (7)))
{var inst_24059 = (state_24078[(7)]);var inst_24064 = (state_24078[(2)]);var inst_24065 = cljs.core.next.call(null,inst_24059);var inst_24059__$1 = inst_24065;var state_24078__$1 = (function (){var statearr_24080 = state_24078;(statearr_24080[(8)] = inst_24064);
(statearr_24080[(7)] = inst_24059__$1);
return statearr_24080;
})();var statearr_24081_24099 = state_24078__$1;(statearr_24081_24099[(2)] = null);
(statearr_24081_24099[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24079 === (1)))
{var inst_24058 = cljs.core.seq.call(null,coll);var inst_24059 = inst_24058;var state_24078__$1 = (function (){var statearr_24082 = state_24078;(statearr_24082[(7)] = inst_24059);
return statearr_24082;
})();var statearr_24083_24100 = state_24078__$1;(statearr_24083_24100[(2)] = null);
(statearr_24083_24100[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24079 === (4)))
{var inst_24059 = (state_24078[(7)]);var inst_24062 = cljs.core.first.call(null,inst_24059);var state_24078__$1 = state_24078;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24078__$1,(7),ch,inst_24062);
} else
{if((state_val_24079 === (6)))
{var inst_24074 = (state_24078[(2)]);var state_24078__$1 = state_24078;var statearr_24084_24101 = state_24078__$1;(statearr_24084_24101[(2)] = inst_24074);
(statearr_24084_24101[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24079 === (3)))
{var inst_24076 = (state_24078[(2)]);var state_24078__$1 = state_24078;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24078__$1,inst_24076);
} else
{if((state_val_24079 === (2)))
{var inst_24059 = (state_24078[(7)]);var state_24078__$1 = state_24078;if(cljs.core.truth_(inst_24059))
{var statearr_24085_24102 = state_24078__$1;(statearr_24085_24102[(1)] = (4));
} else
{var statearr_24086_24103 = state_24078__$1;(statearr_24086_24103[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24079 === (9)))
{var state_24078__$1 = state_24078;var statearr_24087_24104 = state_24078__$1;(statearr_24087_24104[(2)] = null);
(statearr_24087_24104[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24079 === (5)))
{var state_24078__$1 = state_24078;if(cljs.core.truth_(close_QMARK_))
{var statearr_24088_24105 = state_24078__$1;(statearr_24088_24105[(1)] = (8));
} else
{var statearr_24089_24106 = state_24078__$1;(statearr_24089_24106[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24079 === (10)))
{var inst_24072 = (state_24078[(2)]);var state_24078__$1 = state_24078;var statearr_24090_24107 = state_24078__$1;(statearr_24090_24107[(2)] = inst_24072);
(statearr_24090_24107[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24079 === (8)))
{var inst_24069 = cljs.core.async.close_BANG_.call(null,ch);var state_24078__$1 = state_24078;var statearr_24091_24108 = state_24078__$1;(statearr_24091_24108[(2)] = inst_24069);
(statearr_24091_24108[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__9759__auto__))
;return ((function (switch__9744__auto__,c__9759__auto__){
return (function() {
var state_machine__9745__auto__ = null;
var state_machine__9745__auto____0 = (function (){var statearr_24095 = [null,null,null,null,null,null,null,null,null];(statearr_24095[(0)] = state_machine__9745__auto__);
(statearr_24095[(1)] = (1));
return statearr_24095;
});
var state_machine__9745__auto____1 = (function (state_24078){while(true){
var ret_value__9746__auto__ = (function (){try{while(true){
var result__9747__auto__ = switch__9744__auto__.call(null,state_24078);if(cljs.core.keyword_identical_QMARK_.call(null,result__9747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9747__auto__;
}
break;
}
}catch (e24096){if((e24096 instanceof Object))
{var ex__9748__auto__ = e24096;var statearr_24097_24109 = state_24078;(statearr_24097_24109[(5)] = ex__9748__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24078);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24096;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24110 = state_24078;
state_24078 = G__24110;
continue;
}
} else
{return ret_value__9746__auto__;
}
break;
}
});
state_machine__9745__auto__ = function(state_24078){
switch(arguments.length){
case 0:
return state_machine__9745__auto____0.call(this);
case 1:
return state_machine__9745__auto____1.call(this,state_24078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9745__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9745__auto____0;
state_machine__9745__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9745__auto____1;
return state_machine__9745__auto__;
})()
;})(switch__9744__auto__,c__9759__auto__))
})();var state__9761__auto__ = (function (){var statearr_24098 = f__9760__auto__.call(null);(statearr_24098[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9759__auto__);
return statearr_24098;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9761__auto__);
});})(c__9759__auto__))
);
return c__9759__auto__;
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
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj24112 = {};return obj24112;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__7888__auto__ = _;if(and__7888__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__7888__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__8527__auto__ = (((_ == null))?null:_);return (function (){var or__7900__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8527__auto__)]);if(or__7900__auto__)
{return or__7900__auto__;
} else
{var or__7900__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__7900__auto____$1)
{return or__7900__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj24114 = {};return obj24114;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__7888__auto__ = m;if(and__7888__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__7888__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__8527__auto__ = (((m == null))?null:m);return (function (){var or__7900__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8527__auto__)]);if(or__7900__auto__)
{return or__7900__auto__;
} else
{var or__7900__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__7900__auto____$1)
{return or__7900__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__7888__auto__ = m;if(and__7888__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__7888__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__8527__auto__ = (((m == null))?null:m);return (function (){var or__7900__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8527__auto__)]);if(or__7900__auto__)
{return or__7900__auto__;
} else
{var or__7900__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__7900__auto____$1)
{return or__7900__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__7888__auto__ = m;if(and__7888__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__7888__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__8527__auto__ = (((m == null))?null:m);return (function (){var or__7900__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8527__auto__)]);if(or__7900__auto__)
{return or__7900__auto__;
} else
{var or__7900__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__7900__auto____$1)
{return or__7900__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t24338 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24338 = (function (cs,ch,mult,meta24339){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta24339 = meta24339;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24338.cljs$lang$type = true;
cljs.core.async.t24338.cljs$lang$ctorStr = "cljs.core.async/t24338";
cljs.core.async.t24338.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8467__auto__,writer__8468__auto__,opt__8469__auto__){return cljs.core._write.call(null,writer__8468__auto__,"cljs.core.async/t24338");
});})(cs))
;
cljs.core.async.t24338.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t24338.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t24338.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t24338.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t24338.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24338.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t24338.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24340){var self__ = this;
var _24340__$1 = this;return self__.meta24339;
});})(cs))
;
cljs.core.async.t24338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24340,meta24339__$1){var self__ = this;
var _24340__$1 = this;return (new cljs.core.async.t24338(self__.cs,self__.ch,self__.mult,meta24339__$1));
});})(cs))
;
cljs.core.async.__GT_t24338 = ((function (cs){
return (function __GT_t24338(cs__$1,ch__$1,mult__$1,meta24339){return (new cljs.core.async.t24338(cs__$1,ch__$1,mult__$1,meta24339));
});})(cs))
;
}
return (new cljs.core.async.t24338(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__9759__auto___24561 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9759__auto___24561,cs,m,dchan,dctr,done){
return (function (){var f__9760__auto__ = (function (){var switch__9744__auto__ = ((function (c__9759__auto___24561,cs,m,dchan,dctr,done){
return (function (state_24475){var state_val_24476 = (state_24475[(1)]);if((state_val_24476 === (7)))
{var inst_24471 = (state_24475[(2)]);var state_24475__$1 = state_24475;var statearr_24477_24562 = state_24475__$1;(statearr_24477_24562[(2)] = inst_24471);
(statearr_24477_24562[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24476 === (20)))
{var inst_24372 = (state_24475[(7)]);var inst_24382 = cljs.core.first.call(null,inst_24372);var inst_24383 = cljs.core.nth.call(null,inst_24382,(0),null);var inst_24384 = cljs.core.nth.call(null,inst_24382,(1),null);var state_24475__$1 = (function (){var statearr_24478 = state_24475;(statearr_24478[(8)] = inst_24383);
return statearr_24478;
})();if(cljs.core.truth_(inst_24384))
{var statearr_24479_24563 = state_24475__$1;(statearr_24479_24563[(1)] = (22));
} else
{var statearr_24480_24564 = state_24475__$1;(statearr_24480_24564[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24476 === (27)))
{var inst_24414 = (state_24475[(9)]);var inst_24412 = (state_24475[(10)]);var inst_24419 = cljs.core._nth.call(null,inst_24412,inst_24414);var state_24475__$1 = (function (){var statearr_24481 = state_24475;(statearr_24481[(11)] = inst_24419);
return statearr_24481;
})();var statearr_24482_24565 = state_24475__$1;(statearr_24482_24565[(2)] = null);
(statearr_24482_24565[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24476 === (1)))
{var state_24475__$1 = state_24475;var statearr_24483_24566 = state_24475__$1;(statearr_24483_24566[(2)] = null);
(statearr_24483_24566[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24476 === (24)))
{var inst_24372 = (state_24475[(7)]);var inst_24389 = (state_24475[(2)]);var inst_24390 = cljs.core.next.call(null,inst_24372);var inst_24352 = inst_24390;var inst_24353 = null;var inst_24354 = (0);var inst_24355 = (0);var state_24475__$1 = (function (){var statearr_24484 = state_24475;(statearr_24484[(12)] = inst_24389);
(statearr_24484[(13)] = inst_24353);
(statearr_24484[(14)] = inst_24355);
(statearr_24484[(15)] = inst_24354);
(statearr_24484[(16)] = inst_24352);
return statearr_24484;
})();var statearr_24485_24567 = state_24475__$1;(statearr_24485_24567[(2)] = null);
(statearr_24485_24567[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24476 === (39)))
{var inst_24432 = (state_24475[(17)]);var inst_24450 = (state_24475[(2)]);var inst_24451 = cljs.core.next.call(null,inst_24432);var inst_24411 = inst_24451;var inst_24412 = null;var inst_24413 = (0);var inst_24414 = (0);var state_24475__$1 = (function (){var statearr_24489 = state_24475;(statearr_24489[(18)] = inst_24411);
(statearr_24489[(9)] = inst_24414);
(statearr_24489[(19)] = inst_24413);
(statearr_24489[(10)] = inst_24412);
(statearr_24489[(20)] = inst_24450);
return statearr_24489;
})();var statearr_24490_24568 = state_24475__$1;(statearr_24490_24568[(2)] = null);
(statearr_24490_24568[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24476 === (4)))
{var inst_24343 = (state_24475[(21)]);var inst_24343__$1 = (state_24475[(2)]);var inst_24344 = (inst_24343__$1 == null);var state_24475__$1 = (function (){var statearr_24491 = state_24475;(statearr_24491[(21)] = inst_24343__$1);
return statearr_24491;
})();if(cljs.core.truth_(inst_24344))
{var statearr_24492_24569 = state_24475__$1;(statearr_24492_24569[(1)] = (5));
} else
{var statearr_24493_24570 = state_24475__$1;(statearr_24493_24570[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24476 === (15)))
{var inst_24353 = (state_24475[(13)]);var inst_24355 = (state_24475[(14)]);var inst_24354 = (state_24475[(15)]);var inst_24352 = (state_24475[(16)]);var inst_24368 = (state_24475[(2)]);var inst_24369 = (inst_24355 + (1));var tmp24486 = inst_24353;var tmp24487 = inst_24354;var tmp24488 = inst_24352;var inst_24352__$1 = tmp24488;var inst_24353__$1 = tmp24486;var inst_24354__$1 = tmp24487;var inst_24355__$1 = inst_24369;var state_24475__$1 = (function (){var statearr_24494 = state_24475;(statearr_24494[(13)] = inst_24353__$1);
(statearr_24494[(14)] = inst_24355__$1);
(statearr_24494[(15)] = inst_24354__$1);
(statearr_24494[(16)] = inst_24352__$1);
(statearr_24494[(22)] = inst_24368);
return statearr_24494;
})();var statearr_24495_24571 = state_24475__$1;(statearr_24495_24571[(2)] = null);
(statearr_24495_24571[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24476 === (21)))
{var inst_24393 = (state_24475[(2)]);var state_24475__$1 = state_24475;var statearr_24496_24572 = state_24475__$1;(statearr_24496_24572[(2)] = inst_24393);
(statearr_24496_24572[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24476 === (31)))
{var inst_24419 = (state_24475[(11)]);var inst_24420 = (state_24475[(2)]);var inst_24421 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_24422 = cljs.core.async.untap_STAR_.call(null,m,inst_24419);var state_24475__$1 = (function (){var statearr_24497 = state_24475;(statearr_24497[(23)] = inst_24420);
(statearr_24497[(24)] = inst_24421);
return statearr_24497;
})();var statearr_24498_24573 = state_24475__$1;(statearr_24498_24573[(2)] = inst_24422);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24475__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24476 === (32)))
{var inst_24343 = (state_24475[(21)]);var inst_24419 = (state_24475[(11)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24475,(31),Object,null,(30));var inst_24426 = cljs.core.async.put_BANG_.call(null,inst_24419,inst_24343,done);var state_24475__$1 = state_24475;var statearr_24499_24574 = state_24475__$1;(statearr_24499_24574[(2)] = inst_24426);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24475__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24476 === (40)))
{var inst_24441 = (state_24475[(25)]);var inst_24442 = (state_24475[(2)]);var inst_24443 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_24444 = cljs.core.async.untap_STAR_.call(null,m,inst_24441);var state_24475__$1 = (function (){var statearr_24500 = state_24475;(statearr_24500[(26)] = inst_24443);
(statearr_24500[(27)] = inst_24442);
return statearr_24500;
})();var statearr_24501_24575 = state_24475__$1;(statearr_24501_24575[(2)] = inst_24444);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24475__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24476 === (33)))
{var inst_24432 = (state_24475[(17)]);var inst_24434 = cljs.core.chunked_seq_QMARK_.call(null,inst_24432);var state_24475__$1 = state_24475;if(inst_24434)
{var statearr_24502_24576 = state_24475__$1;(statearr_24502_24576[(1)] = (36));
} else
{var statearr_24503_24577 = state_24475__$1;(statearr_24503_24577[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24476 === (13)))
{var inst_24362 = (state_24475[(28)]);var inst_24365 = cljs.core.async.close_BANG_.call(null,inst_24362);var state_24475__$1 = state_24475;var statearr_24504_24578 = state_24475__$1;(statearr_24504_24578[(2)] = inst_24365);
(statearr_24504_24578[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24476 === (22)))
{var inst_24383 = (state_24475[(8)]);var inst_24386 = cljs.core.async.close_BANG_.call(null,inst_24383);var state_24475__$1 = state_24475;var statearr_24505_24579 = state_24475__$1;(statearr_24505_24579[(2)] = inst_24386);
(statearr_24505_24579[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24476 === (36)))
{var inst_24432 = (state_24475[(17)]);var inst_24436 = cljs.core.chunk_first.call(null,inst_24432);var inst_24437 = cljs.core.chunk_rest.call(null,inst_24432);var inst_24438 = cljs.core.count.call(null,inst_24436);var inst_24411 = inst_24437;var inst_24412 = inst_24436;var inst_24413 = inst_24438;var inst_24414 = (0);var state_24475__$1 = (function (){var statearr_24506 = state_24475;(statearr_24506[(18)] = inst_24411);
(statearr_24506[(9)] = inst_24414);
(statearr_24506[(19)] = inst_24413);
(statearr_24506[(10)] = inst_24412);
return statearr_24506;
})();var statearr_24507_24580 = state_24475__$1;(statearr_24507_24580[(2)] = null);
(statearr_24507_24580[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24476 === (41)))
{var inst_24441 = (state_24475[(25)]);var inst_24343 = (state_24475[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24475,(40),Object,null,(39));var inst_24448 = cljs.core.async.put_BANG_.call(null,inst_24441,inst_24343,done);var state_24475__$1 = state_24475;var statearr_24508_24581 = state_24475__$1;(statearr_24508_24581[(2)] = inst_24448);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24475__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24476 === (43)))
{var state_24475__$1 = state_24475;var statearr_24509_24582 = state_24475__$1;(statearr_24509_24582[(2)] = null);
(statearr_24509_24582[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24476 === (29)))
{var inst_24459 = (state_24475[(2)]);var state_24475__$1 = state_24475;var statearr_24510_24583 = state_24475__$1;(statearr_24510_24583[(2)] = inst_24459);
(statearr_24510_24583[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24476 === (44)))
{var inst_24468 = (state_24475[(2)]);var state_24475__$1 = (function (){var statearr_24511 = state_24475;(statearr_24511[(29)] = inst_24468);
return statearr_24511;
})();var statearr_24512_24584 = state_24475__$1;(statearr_24512_24584[(2)] = null);
(statearr_24512_24584[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24476 === (6)))
{var inst_24403 = (state_24475[(30)]);var inst_24402 = cljs.core.deref.call(null,cs);var inst_24403__$1 = cljs.core.keys.call(null,inst_24402);var inst_24404 = cljs.core.count.call(null,inst_24403__$1);var inst_24405 = cljs.core.reset_BANG_.call(null,dctr,inst_24404);var inst_24410 = cljs.core.seq.call(null,inst_24403__$1);var inst_24411 = inst_24410;var inst_24412 = null;var inst_24413 = (0);var inst_24414 = (0);var state_24475__$1 = (function (){var statearr_24513 = state_24475;(statearr_24513[(18)] = inst_24411);
(statearr_24513[(9)] = inst_24414);
(statearr_24513[(19)] = inst_24413);
(statearr_24513[(10)] = inst_24412);
(statearr_24513[(30)] = inst_24403__$1);
(statearr_24513[(31)] = inst_24405);
return statearr_24513;
})();var statearr_24514_24585 = state_24475__$1;(statearr_24514_24585[(2)] = null);
(statearr_24514_24585[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24476 === (28)))
{var inst_24411 = (state_24475[(18)]);var inst_24432 = (state_24475[(17)]);var inst_24432__$1 = cljs.core.seq.call(null,inst_24411);var state_24475__$1 = (function (){var statearr_24515 = state_24475;(statearr_24515[(17)] = inst_24432__$1);
return statearr_24515;
})();if(inst_24432__$1)
{var statearr_24516_24586 = state_24475__$1;(statearr_24516_24586[(1)] = (33));
} else
{var statearr_24517_24587 = state_24475__$1;(statearr_24517_24587[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24476 === (25)))
{var inst_24414 = (state_24475[(9)]);var inst_24413 = (state_24475[(19)]);var inst_24416 = (inst_24414 < inst_24413);var inst_24417 = inst_24416;var state_24475__$1 = state_24475;if(cljs.core.truth_(inst_24417))
{var statearr_24518_24588 = state_24475__$1;(statearr_24518_24588[(1)] = (27));
} else
{var statearr_24519_24589 = state_24475__$1;(statearr_24519_24589[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24476 === (34)))
{var state_24475__$1 = state_24475;var statearr_24520_24590 = state_24475__$1;(statearr_24520_24590[(2)] = null);
(statearr_24520_24590[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24476 === (17)))
{var state_24475__$1 = state_24475;var statearr_24521_24591 = state_24475__$1;(statearr_24521_24591[(2)] = null);
(statearr_24521_24591[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24476 === (3)))
{var inst_24473 = (state_24475[(2)]);var state_24475__$1 = state_24475;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24475__$1,inst_24473);
} else
{if((state_val_24476 === (12)))
{var inst_24398 = (state_24475[(2)]);var state_24475__$1 = state_24475;var statearr_24522_24592 = state_24475__$1;(statearr_24522_24592[(2)] = inst_24398);
(statearr_24522_24592[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24476 === (2)))
{var state_24475__$1 = state_24475;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24475__$1,(4),ch);
} else
{if((state_val_24476 === (23)))
{var state_24475__$1 = state_24475;var statearr_24523_24593 = state_24475__$1;(statearr_24523_24593[(2)] = null);
(statearr_24523_24593[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24476 === (35)))
{var inst_24457 = (state_24475[(2)]);var state_24475__$1 = state_24475;var statearr_24524_24594 = state_24475__$1;(statearr_24524_24594[(2)] = inst_24457);
(statearr_24524_24594[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24476 === (19)))
{var inst_24372 = (state_24475[(7)]);var inst_24376 = cljs.core.chunk_first.call(null,inst_24372);var inst_24377 = cljs.core.chunk_rest.call(null,inst_24372);var inst_24378 = cljs.core.count.call(null,inst_24376);var inst_24352 = inst_24377;var inst_24353 = inst_24376;var inst_24354 = inst_24378;var inst_24355 = (0);var state_24475__$1 = (function (){var statearr_24525 = state_24475;(statearr_24525[(13)] = inst_24353);
(statearr_24525[(14)] = inst_24355);
(statearr_24525[(15)] = inst_24354);
(statearr_24525[(16)] = inst_24352);
return statearr_24525;
})();var statearr_24526_24595 = state_24475__$1;(statearr_24526_24595[(2)] = null);
(statearr_24526_24595[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24476 === (11)))
{var inst_24372 = (state_24475[(7)]);var inst_24352 = (state_24475[(16)]);var inst_24372__$1 = cljs.core.seq.call(null,inst_24352);var state_24475__$1 = (function (){var statearr_24527 = state_24475;(statearr_24527[(7)] = inst_24372__$1);
return statearr_24527;
})();if(inst_24372__$1)
{var statearr_24528_24596 = state_24475__$1;(statearr_24528_24596[(1)] = (16));
} else
{var statearr_24529_24597 = state_24475__$1;(statearr_24529_24597[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24476 === (9)))
{var inst_24400 = (state_24475[(2)]);var state_24475__$1 = state_24475;var statearr_24530_24598 = state_24475__$1;(statearr_24530_24598[(2)] = inst_24400);
(statearr_24530_24598[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24476 === (5)))
{var inst_24350 = cljs.core.deref.call(null,cs);var inst_24351 = cljs.core.seq.call(null,inst_24350);var inst_24352 = inst_24351;var inst_24353 = null;var inst_24354 = (0);var inst_24355 = (0);var state_24475__$1 = (function (){var statearr_24531 = state_24475;(statearr_24531[(13)] = inst_24353);
(statearr_24531[(14)] = inst_24355);
(statearr_24531[(15)] = inst_24354);
(statearr_24531[(16)] = inst_24352);
return statearr_24531;
})();var statearr_24532_24599 = state_24475__$1;(statearr_24532_24599[(2)] = null);
(statearr_24532_24599[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24476 === (14)))
{var state_24475__$1 = state_24475;var statearr_24533_24600 = state_24475__$1;(statearr_24533_24600[(2)] = null);
(statearr_24533_24600[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24476 === (45)))
{var inst_24465 = (state_24475[(2)]);var state_24475__$1 = state_24475;var statearr_24534_24601 = state_24475__$1;(statearr_24534_24601[(2)] = inst_24465);
(statearr_24534_24601[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24476 === (26)))
{var inst_24403 = (state_24475[(30)]);var inst_24461 = (state_24475[(2)]);var inst_24462 = cljs.core.seq.call(null,inst_24403);var state_24475__$1 = (function (){var statearr_24535 = state_24475;(statearr_24535[(32)] = inst_24461);
return statearr_24535;
})();if(inst_24462)
{var statearr_24536_24602 = state_24475__$1;(statearr_24536_24602[(1)] = (42));
} else
{var statearr_24537_24603 = state_24475__$1;(statearr_24537_24603[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24476 === (16)))
{var inst_24372 = (state_24475[(7)]);var inst_24374 = cljs.core.chunked_seq_QMARK_.call(null,inst_24372);var state_24475__$1 = state_24475;if(inst_24374)
{var statearr_24541_24604 = state_24475__$1;(statearr_24541_24604[(1)] = (19));
} else
{var statearr_24542_24605 = state_24475__$1;(statearr_24542_24605[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24476 === (38)))
{var inst_24454 = (state_24475[(2)]);var state_24475__$1 = state_24475;var statearr_24543_24606 = state_24475__$1;(statearr_24543_24606[(2)] = inst_24454);
(statearr_24543_24606[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24476 === (30)))
{var inst_24411 = (state_24475[(18)]);var inst_24414 = (state_24475[(9)]);var inst_24413 = (state_24475[(19)]);var inst_24412 = (state_24475[(10)]);var inst_24428 = (state_24475[(2)]);var inst_24429 = (inst_24414 + (1));var tmp24538 = inst_24411;var tmp24539 = inst_24413;var tmp24540 = inst_24412;var inst_24411__$1 = tmp24538;var inst_24412__$1 = tmp24540;var inst_24413__$1 = tmp24539;var inst_24414__$1 = inst_24429;var state_24475__$1 = (function (){var statearr_24544 = state_24475;(statearr_24544[(18)] = inst_24411__$1);
(statearr_24544[(33)] = inst_24428);
(statearr_24544[(9)] = inst_24414__$1);
(statearr_24544[(19)] = inst_24413__$1);
(statearr_24544[(10)] = inst_24412__$1);
return statearr_24544;
})();var statearr_24545_24607 = state_24475__$1;(statearr_24545_24607[(2)] = null);
(statearr_24545_24607[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24476 === (10)))
{var inst_24353 = (state_24475[(13)]);var inst_24355 = (state_24475[(14)]);var inst_24361 = cljs.core._nth.call(null,inst_24353,inst_24355);var inst_24362 = cljs.core.nth.call(null,inst_24361,(0),null);var inst_24363 = cljs.core.nth.call(null,inst_24361,(1),null);var state_24475__$1 = (function (){var statearr_24546 = state_24475;(statearr_24546[(28)] = inst_24362);
return statearr_24546;
})();if(cljs.core.truth_(inst_24363))
{var statearr_24547_24608 = state_24475__$1;(statearr_24547_24608[(1)] = (13));
} else
{var statearr_24548_24609 = state_24475__$1;(statearr_24548_24609[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24476 === (18)))
{var inst_24396 = (state_24475[(2)]);var state_24475__$1 = state_24475;var statearr_24549_24610 = state_24475__$1;(statearr_24549_24610[(2)] = inst_24396);
(statearr_24549_24610[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24476 === (42)))
{var state_24475__$1 = state_24475;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24475__$1,(45),dchan);
} else
{if((state_val_24476 === (37)))
{var inst_24432 = (state_24475[(17)]);var inst_24441 = cljs.core.first.call(null,inst_24432);var state_24475__$1 = (function (){var statearr_24550 = state_24475;(statearr_24550[(25)] = inst_24441);
return statearr_24550;
})();var statearr_24551_24611 = state_24475__$1;(statearr_24551_24611[(2)] = null);
(statearr_24551_24611[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24476 === (8)))
{var inst_24355 = (state_24475[(14)]);var inst_24354 = (state_24475[(15)]);var inst_24357 = (inst_24355 < inst_24354);var inst_24358 = inst_24357;var state_24475__$1 = state_24475;if(cljs.core.truth_(inst_24358))
{var statearr_24552_24612 = state_24475__$1;(statearr_24552_24612[(1)] = (10));
} else
{var statearr_24553_24613 = state_24475__$1;(statearr_24553_24613[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__9759__auto___24561,cs,m,dchan,dctr,done))
;return ((function (switch__9744__auto__,c__9759__auto___24561,cs,m,dchan,dctr,done){
return (function() {
var state_machine__9745__auto__ = null;
var state_machine__9745__auto____0 = (function (){var statearr_24557 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24557[(0)] = state_machine__9745__auto__);
(statearr_24557[(1)] = (1));
return statearr_24557;
});
var state_machine__9745__auto____1 = (function (state_24475){while(true){
var ret_value__9746__auto__ = (function (){try{while(true){
var result__9747__auto__ = switch__9744__auto__.call(null,state_24475);if(cljs.core.keyword_identical_QMARK_.call(null,result__9747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9747__auto__;
}
break;
}
}catch (e24558){if((e24558 instanceof Object))
{var ex__9748__auto__ = e24558;var statearr_24559_24614 = state_24475;(statearr_24559_24614[(5)] = ex__9748__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24475);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24558;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24615 = state_24475;
state_24475 = G__24615;
continue;
}
} else
{return ret_value__9746__auto__;
}
break;
}
});
state_machine__9745__auto__ = function(state_24475){
switch(arguments.length){
case 0:
return state_machine__9745__auto____0.call(this);
case 1:
return state_machine__9745__auto____1.call(this,state_24475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9745__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9745__auto____0;
state_machine__9745__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9745__auto____1;
return state_machine__9745__auto__;
})()
;})(switch__9744__auto__,c__9759__auto___24561,cs,m,dchan,dctr,done))
})();var state__9761__auto__ = (function (){var statearr_24560 = f__9760__auto__.call(null);(statearr_24560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9759__auto___24561);
return statearr_24560;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9761__auto__);
});})(c__9759__auto___24561,cs,m,dchan,dctr,done))
);
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
cljs.core.async.Mix = (function (){var obj24617 = {};return obj24617;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__7888__auto__ = m;if(and__7888__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__7888__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__8527__auto__ = (((m == null))?null:m);return (function (){var or__7900__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8527__auto__)]);if(or__7900__auto__)
{return or__7900__auto__;
} else
{var or__7900__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__7900__auto____$1)
{return or__7900__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__7888__auto__ = m;if(and__7888__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__7888__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__8527__auto__ = (((m == null))?null:m);return (function (){var or__7900__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8527__auto__)]);if(or__7900__auto__)
{return or__7900__auto__;
} else
{var or__7900__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__7900__auto____$1)
{return or__7900__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__7888__auto__ = m;if(and__7888__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__7888__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__8527__auto__ = (((m == null))?null:m);return (function (){var or__7900__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8527__auto__)]);if(or__7900__auto__)
{return or__7900__auto__;
} else
{var or__7900__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__7900__auto____$1)
{return or__7900__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__7888__auto__ = m;if(and__7888__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__7888__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__8527__auto__ = (((m == null))?null:m);return (function (){var or__7900__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8527__auto__)]);if(or__7900__auto__)
{return or__7900__auto__;
} else
{var or__7900__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__7900__auto____$1)
{return or__7900__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__7888__auto__ = m;if(and__7888__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__7888__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__8527__auto__ = (((m == null))?null:m);return (function (){var or__7900__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8527__auto__)]);if(or__7900__auto__)
{return or__7900__auto__;
} else
{var or__7900__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__7900__auto____$1)
{return or__7900__auto____$1;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t24727 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24727 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24728){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta24728 = meta24728;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24727.cljs$lang$type = true;
cljs.core.async.t24727.cljs$lang$ctorStr = "cljs.core.async/t24727";
cljs.core.async.t24727.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8467__auto__,writer__8468__auto__,opt__8469__auto__){return cljs.core._write.call(null,writer__8468__auto__,"cljs.core.async/t24727");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24727.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t24727.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24727.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24727.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24727.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24727.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24727.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24727.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24727.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24729){var self__ = this;
var _24729__$1 = this;return self__.meta24728;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24727.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24729,meta24728__$1){var self__ = this;
var _24729__$1 = this;return (new cljs.core.async.t24727(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24728__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t24727 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t24727(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24728){return (new cljs.core.async.t24727(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24728));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t24727(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__9759__auto___24836 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9759__auto___24836,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__9760__auto__ = (function (){var switch__9744__auto__ = ((function (c__9759__auto___24836,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24794){var state_val_24795 = (state_24794[(1)]);if((state_val_24795 === (7)))
{var inst_24743 = (state_24794[(7)]);var inst_24748 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24743);var state_24794__$1 = state_24794;var statearr_24796_24837 = state_24794__$1;(statearr_24796_24837[(2)] = inst_24748);
(statearr_24796_24837[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24795 === (20)))
{var inst_24758 = (state_24794[(8)]);var state_24794__$1 = state_24794;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24794__$1,(23),out,inst_24758);
} else
{if((state_val_24795 === (1)))
{var inst_24733 = (state_24794[(9)]);var inst_24733__$1 = calc_state.call(null);var inst_24734 = cljs.core.seq_QMARK_.call(null,inst_24733__$1);var state_24794__$1 = (function (){var statearr_24797 = state_24794;(statearr_24797[(9)] = inst_24733__$1);
return statearr_24797;
})();if(inst_24734)
{var statearr_24798_24838 = state_24794__$1;(statearr_24798_24838[(1)] = (2));
} else
{var statearr_24799_24839 = state_24794__$1;(statearr_24799_24839[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24795 === (4)))
{var inst_24733 = (state_24794[(9)]);var inst_24739 = (state_24794[(2)]);var inst_24740 = cljs.core.get.call(null,inst_24739,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_24741 = cljs.core.get.call(null,inst_24739,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_24742 = cljs.core.get.call(null,inst_24739,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_24743 = inst_24733;var state_24794__$1 = (function (){var statearr_24800 = state_24794;(statearr_24800[(10)] = inst_24741);
(statearr_24800[(11)] = inst_24742);
(statearr_24800[(7)] = inst_24743);
(statearr_24800[(12)] = inst_24740);
return statearr_24800;
})();var statearr_24801_24840 = state_24794__$1;(statearr_24801_24840[(2)] = null);
(statearr_24801_24840[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24795 === (15)))
{var state_24794__$1 = state_24794;var statearr_24802_24841 = state_24794__$1;(statearr_24802_24841[(2)] = null);
(statearr_24802_24841[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24795 === (21)))
{var state_24794__$1 = state_24794;var statearr_24803_24842 = state_24794__$1;(statearr_24803_24842[(2)] = null);
(statearr_24803_24842[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24795 === (13)))
{var inst_24790 = (state_24794[(2)]);var state_24794__$1 = state_24794;var statearr_24804_24843 = state_24794__$1;(statearr_24804_24843[(2)] = inst_24790);
(statearr_24804_24843[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24795 === (22)))
{var inst_24751 = (state_24794[(13)]);var inst_24787 = (state_24794[(2)]);var inst_24743 = inst_24751;var state_24794__$1 = (function (){var statearr_24805 = state_24794;(statearr_24805[(7)] = inst_24743);
(statearr_24805[(14)] = inst_24787);
return statearr_24805;
})();var statearr_24806_24844 = state_24794__$1;(statearr_24806_24844[(2)] = null);
(statearr_24806_24844[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24795 === (6)))
{var inst_24792 = (state_24794[(2)]);var state_24794__$1 = state_24794;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24794__$1,inst_24792);
} else
{if((state_val_24795 === (17)))
{var inst_24773 = (state_24794[(15)]);var state_24794__$1 = state_24794;var statearr_24807_24845 = state_24794__$1;(statearr_24807_24845[(2)] = inst_24773);
(statearr_24807_24845[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24795 === (3)))
{var inst_24733 = (state_24794[(9)]);var state_24794__$1 = state_24794;var statearr_24808_24846 = state_24794__$1;(statearr_24808_24846[(2)] = inst_24733);
(statearr_24808_24846[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24795 === (12)))
{var inst_24759 = (state_24794[(16)]);var inst_24754 = (state_24794[(17)]);var inst_24773 = (state_24794[(15)]);var inst_24773__$1 = inst_24754.call(null,inst_24759);var state_24794__$1 = (function (){var statearr_24809 = state_24794;(statearr_24809[(15)] = inst_24773__$1);
return statearr_24809;
})();if(cljs.core.truth_(inst_24773__$1))
{var statearr_24810_24847 = state_24794__$1;(statearr_24810_24847[(1)] = (17));
} else
{var statearr_24811_24848 = state_24794__$1;(statearr_24811_24848[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24795 === (2)))
{var inst_24733 = (state_24794[(9)]);var inst_24736 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24733);var state_24794__$1 = state_24794;var statearr_24812_24849 = state_24794__$1;(statearr_24812_24849[(2)] = inst_24736);
(statearr_24812_24849[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24795 === (23)))
{var inst_24784 = (state_24794[(2)]);var state_24794__$1 = state_24794;var statearr_24813_24850 = state_24794__$1;(statearr_24813_24850[(2)] = inst_24784);
(statearr_24813_24850[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24795 === (19)))
{var inst_24781 = (state_24794[(2)]);var state_24794__$1 = state_24794;if(cljs.core.truth_(inst_24781))
{var statearr_24814_24851 = state_24794__$1;(statearr_24814_24851[(1)] = (20));
} else
{var statearr_24815_24852 = state_24794__$1;(statearr_24815_24852[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24795 === (11)))
{var inst_24758 = (state_24794[(8)]);var inst_24764 = (inst_24758 == null);var state_24794__$1 = state_24794;if(cljs.core.truth_(inst_24764))
{var statearr_24816_24853 = state_24794__$1;(statearr_24816_24853[(1)] = (14));
} else
{var statearr_24817_24854 = state_24794__$1;(statearr_24817_24854[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24795 === (9)))
{var inst_24751 = (state_24794[(13)]);var inst_24751__$1 = (state_24794[(2)]);var inst_24752 = cljs.core.get.call(null,inst_24751__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_24753 = cljs.core.get.call(null,inst_24751__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_24754 = cljs.core.get.call(null,inst_24751__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_24794__$1 = (function (){var statearr_24818 = state_24794;(statearr_24818[(13)] = inst_24751__$1);
(statearr_24818[(17)] = inst_24754);
(statearr_24818[(18)] = inst_24753);
return statearr_24818;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_24794__$1,(10),inst_24752);
} else
{if((state_val_24795 === (5)))
{var inst_24743 = (state_24794[(7)]);var inst_24746 = cljs.core.seq_QMARK_.call(null,inst_24743);var state_24794__$1 = state_24794;if(inst_24746)
{var statearr_24819_24855 = state_24794__$1;(statearr_24819_24855[(1)] = (7));
} else
{var statearr_24820_24856 = state_24794__$1;(statearr_24820_24856[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24795 === (14)))
{var inst_24759 = (state_24794[(16)]);var inst_24766 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24759);var state_24794__$1 = state_24794;var statearr_24821_24857 = state_24794__$1;(statearr_24821_24857[(2)] = inst_24766);
(statearr_24821_24857[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24795 === (16)))
{var inst_24769 = (state_24794[(2)]);var inst_24770 = calc_state.call(null);var inst_24743 = inst_24770;var state_24794__$1 = (function (){var statearr_24822 = state_24794;(statearr_24822[(7)] = inst_24743);
(statearr_24822[(19)] = inst_24769);
return statearr_24822;
})();var statearr_24823_24858 = state_24794__$1;(statearr_24823_24858[(2)] = null);
(statearr_24823_24858[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24795 === (10)))
{var inst_24758 = (state_24794[(8)]);var inst_24759 = (state_24794[(16)]);var inst_24757 = (state_24794[(2)]);var inst_24758__$1 = cljs.core.nth.call(null,inst_24757,(0),null);var inst_24759__$1 = cljs.core.nth.call(null,inst_24757,(1),null);var inst_24760 = (inst_24758__$1 == null);var inst_24761 = cljs.core._EQ_.call(null,inst_24759__$1,change);var inst_24762 = (inst_24760) || (inst_24761);var state_24794__$1 = (function (){var statearr_24824 = state_24794;(statearr_24824[(8)] = inst_24758__$1);
(statearr_24824[(16)] = inst_24759__$1);
return statearr_24824;
})();if(cljs.core.truth_(inst_24762))
{var statearr_24825_24859 = state_24794__$1;(statearr_24825_24859[(1)] = (11));
} else
{var statearr_24826_24860 = state_24794__$1;(statearr_24826_24860[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24795 === (18)))
{var inst_24759 = (state_24794[(16)]);var inst_24754 = (state_24794[(17)]);var inst_24753 = (state_24794[(18)]);var inst_24776 = cljs.core.empty_QMARK_.call(null,inst_24754);var inst_24777 = inst_24753.call(null,inst_24759);var inst_24778 = cljs.core.not.call(null,inst_24777);var inst_24779 = (inst_24776) && (inst_24778);var state_24794__$1 = state_24794;var statearr_24827_24861 = state_24794__$1;(statearr_24827_24861[(2)] = inst_24779);
(statearr_24827_24861[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24795 === (8)))
{var inst_24743 = (state_24794[(7)]);var state_24794__$1 = state_24794;var statearr_24828_24862 = state_24794__$1;(statearr_24828_24862[(2)] = inst_24743);
(statearr_24828_24862[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__9759__auto___24836,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__9744__auto__,c__9759__auto___24836,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__9745__auto__ = null;
var state_machine__9745__auto____0 = (function (){var statearr_24832 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24832[(0)] = state_machine__9745__auto__);
(statearr_24832[(1)] = (1));
return statearr_24832;
});
var state_machine__9745__auto____1 = (function (state_24794){while(true){
var ret_value__9746__auto__ = (function (){try{while(true){
var result__9747__auto__ = switch__9744__auto__.call(null,state_24794);if(cljs.core.keyword_identical_QMARK_.call(null,result__9747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9747__auto__;
}
break;
}
}catch (e24833){if((e24833 instanceof Object))
{var ex__9748__auto__ = e24833;var statearr_24834_24863 = state_24794;(statearr_24834_24863[(5)] = ex__9748__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24794);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24833;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24864 = state_24794;
state_24794 = G__24864;
continue;
}
} else
{return ret_value__9746__auto__;
}
break;
}
});
state_machine__9745__auto__ = function(state_24794){
switch(arguments.length){
case 0:
return state_machine__9745__auto____0.call(this);
case 1:
return state_machine__9745__auto____1.call(this,state_24794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9745__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9745__auto____0;
state_machine__9745__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9745__auto____1;
return state_machine__9745__auto__;
})()
;})(switch__9744__auto__,c__9759__auto___24836,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__9761__auto__ = (function (){var statearr_24835 = f__9760__auto__.call(null);(statearr_24835[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9759__auto___24836);
return statearr_24835;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9761__auto__);
});})(c__9759__auto___24836,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
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
cljs.core.async.Pub = (function (){var obj24866 = {};return obj24866;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__7888__auto__ = p;if(and__7888__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__7888__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__8527__auto__ = (((p == null))?null:p);return (function (){var or__7900__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8527__auto__)]);if(or__7900__auto__)
{return or__7900__auto__;
} else
{var or__7900__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__7900__auto____$1)
{return or__7900__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__7888__auto__ = p;if(and__7888__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__7888__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__8527__auto__ = (((p == null))?null:p);return (function (){var or__7900__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8527__auto__)]);if(or__7900__auto__)
{return or__7900__auto__;
} else
{var or__7900__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__7900__auto____$1)
{return or__7900__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__7888__auto__ = p;if(and__7888__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__7888__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__8527__auto__ = (((p == null))?null:p);return (function (){var or__7900__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8527__auto__)]);if(or__7900__auto__)
{return or__7900__auto__;
} else
{var or__7900__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7900__auto____$1)
{return or__7900__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__7888__auto__ = p;if(and__7888__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__7888__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__8527__auto__ = (((p == null))?null:p);return (function (){var or__7900__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8527__auto__)]);if(or__7900__auto__)
{return or__7900__auto__;
} else
{var or__7900__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7900__auto____$1)
{return or__7900__auto____$1;
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
return (function (topic){var or__7900__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__7900__auto__))
{return or__7900__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__7900__auto__,mults){
return (function (p1__24867_SHARP_){if(cljs.core.truth_(p1__24867_SHARP_.call(null,topic)))
{return p1__24867_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__24867_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7900__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t24992 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24992 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta24993){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta24993 = meta24993;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24992.cljs$lang$type = true;
cljs.core.async.t24992.cljs$lang$ctorStr = "cljs.core.async/t24992";
cljs.core.async.t24992.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8467__auto__,writer__8468__auto__,opt__8469__auto__){return cljs.core._write.call(null,writer__8468__auto__,"cljs.core.async/t24992");
});})(mults,ensure_mult))
;
cljs.core.async.t24992.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t24992.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t24992.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t24992.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t24992.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t24992.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24992.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t24992.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24994){var self__ = this;
var _24994__$1 = this;return self__.meta24993;
});})(mults,ensure_mult))
;
cljs.core.async.t24992.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24994,meta24993__$1){var self__ = this;
var _24994__$1 = this;return (new cljs.core.async.t24992(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta24993__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t24992 = ((function (mults,ensure_mult){
return (function __GT_t24992(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24993){return (new cljs.core.async.t24992(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24993));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t24992(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__9759__auto___25116 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9759__auto___25116,mults,ensure_mult,p){
return (function (){var f__9760__auto__ = (function (){var switch__9744__auto__ = ((function (c__9759__auto___25116,mults,ensure_mult,p){
return (function (state_25068){var state_val_25069 = (state_25068[(1)]);if((state_val_25069 === (7)))
{var inst_25064 = (state_25068[(2)]);var state_25068__$1 = state_25068;var statearr_25070_25117 = state_25068__$1;(statearr_25070_25117[(2)] = inst_25064);
(statearr_25070_25117[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25069 === (20)))
{var state_25068__$1 = state_25068;var statearr_25071_25118 = state_25068__$1;(statearr_25071_25118[(2)] = null);
(statearr_25071_25118[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25069 === (1)))
{var state_25068__$1 = state_25068;var statearr_25072_25119 = state_25068__$1;(statearr_25072_25119[(2)] = null);
(statearr_25072_25119[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25069 === (24)))
{var inst_24997 = (state_25068[(7)]);var inst_25047 = (state_25068[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25068,(23),Object,null,(22));var inst_25054 = cljs.core.async.muxch_STAR_.call(null,inst_25047);var state_25068__$1 = state_25068;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25068__$1,(25),inst_25054,inst_24997);
} else
{if((state_val_25069 === (4)))
{var inst_24997 = (state_25068[(7)]);var inst_24997__$1 = (state_25068[(2)]);var inst_24998 = (inst_24997__$1 == null);var state_25068__$1 = (function (){var statearr_25073 = state_25068;(statearr_25073[(7)] = inst_24997__$1);
return statearr_25073;
})();if(cljs.core.truth_(inst_24998))
{var statearr_25074_25120 = state_25068__$1;(statearr_25074_25120[(1)] = (5));
} else
{var statearr_25075_25121 = state_25068__$1;(statearr_25075_25121[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25069 === (15)))
{var inst_25039 = (state_25068[(2)]);var state_25068__$1 = state_25068;var statearr_25076_25122 = state_25068__$1;(statearr_25076_25122[(2)] = inst_25039);
(statearr_25076_25122[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25069 === (21)))
{var inst_25061 = (state_25068[(2)]);var state_25068__$1 = (function (){var statearr_25077 = state_25068;(statearr_25077[(9)] = inst_25061);
return statearr_25077;
})();var statearr_25078_25123 = state_25068__$1;(statearr_25078_25123[(2)] = null);
(statearr_25078_25123[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25069 === (13)))
{var inst_25021 = (state_25068[(10)]);var inst_25023 = cljs.core.chunked_seq_QMARK_.call(null,inst_25021);var state_25068__$1 = state_25068;if(inst_25023)
{var statearr_25079_25124 = state_25068__$1;(statearr_25079_25124[(1)] = (16));
} else
{var statearr_25080_25125 = state_25068__$1;(statearr_25080_25125[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25069 === (22)))
{var inst_25058 = (state_25068[(2)]);var state_25068__$1 = state_25068;var statearr_25081_25126 = state_25068__$1;(statearr_25081_25126[(2)] = inst_25058);
(statearr_25081_25126[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25069 === (6)))
{var inst_24997 = (state_25068[(7)]);var inst_25047 = (state_25068[(8)]);var inst_25045 = (state_25068[(11)]);var inst_25045__$1 = topic_fn.call(null,inst_24997);var inst_25046 = cljs.core.deref.call(null,mults);var inst_25047__$1 = cljs.core.get.call(null,inst_25046,inst_25045__$1);var state_25068__$1 = (function (){var statearr_25082 = state_25068;(statearr_25082[(8)] = inst_25047__$1);
(statearr_25082[(11)] = inst_25045__$1);
return statearr_25082;
})();if(cljs.core.truth_(inst_25047__$1))
{var statearr_25083_25127 = state_25068__$1;(statearr_25083_25127[(1)] = (19));
} else
{var statearr_25084_25128 = state_25068__$1;(statearr_25084_25128[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25069 === (25)))
{var inst_25056 = (state_25068[(2)]);var state_25068__$1 = state_25068;var statearr_25085_25129 = state_25068__$1;(statearr_25085_25129[(2)] = inst_25056);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25068__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25069 === (17)))
{var inst_25021 = (state_25068[(10)]);var inst_25030 = cljs.core.first.call(null,inst_25021);var inst_25031 = cljs.core.async.muxch_STAR_.call(null,inst_25030);var inst_25032 = cljs.core.async.close_BANG_.call(null,inst_25031);var inst_25033 = cljs.core.next.call(null,inst_25021);var inst_25007 = inst_25033;var inst_25008 = null;var inst_25009 = (0);var inst_25010 = (0);var state_25068__$1 = (function (){var statearr_25086 = state_25068;(statearr_25086[(12)] = inst_25008);
(statearr_25086[(13)] = inst_25009);
(statearr_25086[(14)] = inst_25010);
(statearr_25086[(15)] = inst_25007);
(statearr_25086[(16)] = inst_25032);
return statearr_25086;
})();var statearr_25087_25130 = state_25068__$1;(statearr_25087_25130[(2)] = null);
(statearr_25087_25130[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25069 === (3)))
{var inst_25066 = (state_25068[(2)]);var state_25068__$1 = state_25068;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25068__$1,inst_25066);
} else
{if((state_val_25069 === (12)))
{var inst_25041 = (state_25068[(2)]);var state_25068__$1 = state_25068;var statearr_25088_25131 = state_25068__$1;(statearr_25088_25131[(2)] = inst_25041);
(statearr_25088_25131[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25069 === (2)))
{var state_25068__$1 = state_25068;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25068__$1,(4),ch);
} else
{if((state_val_25069 === (23)))
{var inst_25045 = (state_25068[(11)]);var inst_25049 = (state_25068[(2)]);var inst_25050 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25045);var state_25068__$1 = (function (){var statearr_25089 = state_25068;(statearr_25089[(17)] = inst_25049);
return statearr_25089;
})();var statearr_25090_25132 = state_25068__$1;(statearr_25090_25132[(2)] = inst_25050);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25068__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25069 === (19)))
{var state_25068__$1 = state_25068;var statearr_25091_25133 = state_25068__$1;(statearr_25091_25133[(2)] = null);
(statearr_25091_25133[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25069 === (11)))
{var inst_25021 = (state_25068[(10)]);var inst_25007 = (state_25068[(15)]);var inst_25021__$1 = cljs.core.seq.call(null,inst_25007);var state_25068__$1 = (function (){var statearr_25092 = state_25068;(statearr_25092[(10)] = inst_25021__$1);
return statearr_25092;
})();if(inst_25021__$1)
{var statearr_25093_25134 = state_25068__$1;(statearr_25093_25134[(1)] = (13));
} else
{var statearr_25094_25135 = state_25068__$1;(statearr_25094_25135[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25069 === (9)))
{var inst_25043 = (state_25068[(2)]);var state_25068__$1 = state_25068;var statearr_25095_25136 = state_25068__$1;(statearr_25095_25136[(2)] = inst_25043);
(statearr_25095_25136[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25069 === (5)))
{var inst_25004 = cljs.core.deref.call(null,mults);var inst_25005 = cljs.core.vals.call(null,inst_25004);var inst_25006 = cljs.core.seq.call(null,inst_25005);var inst_25007 = inst_25006;var inst_25008 = null;var inst_25009 = (0);var inst_25010 = (0);var state_25068__$1 = (function (){var statearr_25096 = state_25068;(statearr_25096[(12)] = inst_25008);
(statearr_25096[(13)] = inst_25009);
(statearr_25096[(14)] = inst_25010);
(statearr_25096[(15)] = inst_25007);
return statearr_25096;
})();var statearr_25097_25137 = state_25068__$1;(statearr_25097_25137[(2)] = null);
(statearr_25097_25137[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25069 === (14)))
{var state_25068__$1 = state_25068;var statearr_25101_25138 = state_25068__$1;(statearr_25101_25138[(2)] = null);
(statearr_25101_25138[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25069 === (16)))
{var inst_25021 = (state_25068[(10)]);var inst_25025 = cljs.core.chunk_first.call(null,inst_25021);var inst_25026 = cljs.core.chunk_rest.call(null,inst_25021);var inst_25027 = cljs.core.count.call(null,inst_25025);var inst_25007 = inst_25026;var inst_25008 = inst_25025;var inst_25009 = inst_25027;var inst_25010 = (0);var state_25068__$1 = (function (){var statearr_25102 = state_25068;(statearr_25102[(12)] = inst_25008);
(statearr_25102[(13)] = inst_25009);
(statearr_25102[(14)] = inst_25010);
(statearr_25102[(15)] = inst_25007);
return statearr_25102;
})();var statearr_25103_25139 = state_25068__$1;(statearr_25103_25139[(2)] = null);
(statearr_25103_25139[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25069 === (10)))
{var inst_25008 = (state_25068[(12)]);var inst_25009 = (state_25068[(13)]);var inst_25010 = (state_25068[(14)]);var inst_25007 = (state_25068[(15)]);var inst_25015 = cljs.core._nth.call(null,inst_25008,inst_25010);var inst_25016 = cljs.core.async.muxch_STAR_.call(null,inst_25015);var inst_25017 = cljs.core.async.close_BANG_.call(null,inst_25016);var inst_25018 = (inst_25010 + (1));var tmp25098 = inst_25008;var tmp25099 = inst_25009;var tmp25100 = inst_25007;var inst_25007__$1 = tmp25100;var inst_25008__$1 = tmp25098;var inst_25009__$1 = tmp25099;var inst_25010__$1 = inst_25018;var state_25068__$1 = (function (){var statearr_25104 = state_25068;(statearr_25104[(12)] = inst_25008__$1);
(statearr_25104[(18)] = inst_25017);
(statearr_25104[(13)] = inst_25009__$1);
(statearr_25104[(14)] = inst_25010__$1);
(statearr_25104[(15)] = inst_25007__$1);
return statearr_25104;
})();var statearr_25105_25140 = state_25068__$1;(statearr_25105_25140[(2)] = null);
(statearr_25105_25140[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25069 === (18)))
{var inst_25036 = (state_25068[(2)]);var state_25068__$1 = state_25068;var statearr_25106_25141 = state_25068__$1;(statearr_25106_25141[(2)] = inst_25036);
(statearr_25106_25141[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25069 === (8)))
{var inst_25009 = (state_25068[(13)]);var inst_25010 = (state_25068[(14)]);var inst_25012 = (inst_25010 < inst_25009);var inst_25013 = inst_25012;var state_25068__$1 = state_25068;if(cljs.core.truth_(inst_25013))
{var statearr_25107_25142 = state_25068__$1;(statearr_25107_25142[(1)] = (10));
} else
{var statearr_25108_25143 = state_25068__$1;(statearr_25108_25143[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__9759__auto___25116,mults,ensure_mult,p))
;return ((function (switch__9744__auto__,c__9759__auto___25116,mults,ensure_mult,p){
return (function() {
var state_machine__9745__auto__ = null;
var state_machine__9745__auto____0 = (function (){var statearr_25112 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25112[(0)] = state_machine__9745__auto__);
(statearr_25112[(1)] = (1));
return statearr_25112;
});
var state_machine__9745__auto____1 = (function (state_25068){while(true){
var ret_value__9746__auto__ = (function (){try{while(true){
var result__9747__auto__ = switch__9744__auto__.call(null,state_25068);if(cljs.core.keyword_identical_QMARK_.call(null,result__9747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9747__auto__;
}
break;
}
}catch (e25113){if((e25113 instanceof Object))
{var ex__9748__auto__ = e25113;var statearr_25114_25144 = state_25068;(statearr_25114_25144[(5)] = ex__9748__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25068);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25113;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25145 = state_25068;
state_25068 = G__25145;
continue;
}
} else
{return ret_value__9746__auto__;
}
break;
}
});
state_machine__9745__auto__ = function(state_25068){
switch(arguments.length){
case 0:
return state_machine__9745__auto____0.call(this);
case 1:
return state_machine__9745__auto____1.call(this,state_25068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9745__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9745__auto____0;
state_machine__9745__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9745__auto____1;
return state_machine__9745__auto__;
})()
;})(switch__9744__auto__,c__9759__auto___25116,mults,ensure_mult,p))
})();var state__9761__auto__ = (function (){var statearr_25115 = f__9760__auto__.call(null);(statearr_25115[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9759__auto___25116);
return statearr_25115;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9761__auto__);
});})(c__9759__auto___25116,mults,ensure_mult,p))
);
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
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__9759__auto___25282 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9759__auto___25282,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__9760__auto__ = (function (){var switch__9744__auto__ = ((function (c__9759__auto___25282,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25252){var state_val_25253 = (state_25252[(1)]);if((state_val_25253 === (7)))
{var state_25252__$1 = state_25252;var statearr_25254_25283 = state_25252__$1;(statearr_25254_25283[(2)] = null);
(statearr_25254_25283[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25253 === (1)))
{var state_25252__$1 = state_25252;var statearr_25255_25284 = state_25252__$1;(statearr_25255_25284[(2)] = null);
(statearr_25255_25284[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25253 === (4)))
{var inst_25216 = (state_25252[(7)]);var inst_25218 = (inst_25216 < cnt);var state_25252__$1 = state_25252;if(cljs.core.truth_(inst_25218))
{var statearr_25256_25285 = state_25252__$1;(statearr_25256_25285[(1)] = (6));
} else
{var statearr_25257_25286 = state_25252__$1;(statearr_25257_25286[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25253 === (15)))
{var inst_25248 = (state_25252[(2)]);var state_25252__$1 = state_25252;var statearr_25258_25287 = state_25252__$1;(statearr_25258_25287[(2)] = inst_25248);
(statearr_25258_25287[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25253 === (13)))
{var inst_25241 = cljs.core.async.close_BANG_.call(null,out);var state_25252__$1 = state_25252;var statearr_25259_25288 = state_25252__$1;(statearr_25259_25288[(2)] = inst_25241);
(statearr_25259_25288[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25253 === (6)))
{var state_25252__$1 = state_25252;var statearr_25260_25289 = state_25252__$1;(statearr_25260_25289[(2)] = null);
(statearr_25260_25289[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25253 === (3)))
{var inst_25250 = (state_25252[(2)]);var state_25252__$1 = state_25252;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25252__$1,inst_25250);
} else
{if((state_val_25253 === (12)))
{var inst_25238 = (state_25252[(8)]);var inst_25238__$1 = (state_25252[(2)]);var inst_25239 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25238__$1);var state_25252__$1 = (function (){var statearr_25261 = state_25252;(statearr_25261[(8)] = inst_25238__$1);
return statearr_25261;
})();if(cljs.core.truth_(inst_25239))
{var statearr_25262_25290 = state_25252__$1;(statearr_25262_25290[(1)] = (13));
} else
{var statearr_25263_25291 = state_25252__$1;(statearr_25263_25291[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25253 === (2)))
{var inst_25215 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_25216 = (0);var state_25252__$1 = (function (){var statearr_25264 = state_25252;(statearr_25264[(7)] = inst_25216);
(statearr_25264[(9)] = inst_25215);
return statearr_25264;
})();var statearr_25265_25292 = state_25252__$1;(statearr_25265_25292[(2)] = null);
(statearr_25265_25292[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25253 === (11)))
{var inst_25216 = (state_25252[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25252,(10),Object,null,(9));var inst_25225 = chs__$1.call(null,inst_25216);var inst_25226 = done.call(null,inst_25216);var inst_25227 = cljs.core.async.take_BANG_.call(null,inst_25225,inst_25226);var state_25252__$1 = state_25252;var statearr_25266_25293 = state_25252__$1;(statearr_25266_25293[(2)] = inst_25227);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25252__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25253 === (9)))
{var inst_25216 = (state_25252[(7)]);var inst_25229 = (state_25252[(2)]);var inst_25230 = (inst_25216 + (1));var inst_25216__$1 = inst_25230;var state_25252__$1 = (function (){var statearr_25267 = state_25252;(statearr_25267[(7)] = inst_25216__$1);
(statearr_25267[(10)] = inst_25229);
return statearr_25267;
})();var statearr_25268_25294 = state_25252__$1;(statearr_25268_25294[(2)] = null);
(statearr_25268_25294[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25253 === (5)))
{var inst_25236 = (state_25252[(2)]);var state_25252__$1 = (function (){var statearr_25269 = state_25252;(statearr_25269[(11)] = inst_25236);
return statearr_25269;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25252__$1,(12),dchan);
} else
{if((state_val_25253 === (14)))
{var inst_25238 = (state_25252[(8)]);var inst_25243 = cljs.core.apply.call(null,f,inst_25238);var state_25252__$1 = state_25252;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25252__$1,(16),out,inst_25243);
} else
{if((state_val_25253 === (16)))
{var inst_25245 = (state_25252[(2)]);var state_25252__$1 = (function (){var statearr_25270 = state_25252;(statearr_25270[(12)] = inst_25245);
return statearr_25270;
})();var statearr_25271_25295 = state_25252__$1;(statearr_25271_25295[(2)] = null);
(statearr_25271_25295[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25253 === (10)))
{var inst_25220 = (state_25252[(2)]);var inst_25221 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_25252__$1 = (function (){var statearr_25272 = state_25252;(statearr_25272[(13)] = inst_25220);
return statearr_25272;
})();var statearr_25273_25296 = state_25252__$1;(statearr_25273_25296[(2)] = inst_25221);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25252__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25253 === (8)))
{var inst_25234 = (state_25252[(2)]);var state_25252__$1 = state_25252;var statearr_25274_25297 = state_25252__$1;(statearr_25274_25297[(2)] = inst_25234);
(statearr_25274_25297[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__9759__auto___25282,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__9744__auto__,c__9759__auto___25282,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__9745__auto__ = null;
var state_machine__9745__auto____0 = (function (){var statearr_25278 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25278[(0)] = state_machine__9745__auto__);
(statearr_25278[(1)] = (1));
return statearr_25278;
});
var state_machine__9745__auto____1 = (function (state_25252){while(true){
var ret_value__9746__auto__ = (function (){try{while(true){
var result__9747__auto__ = switch__9744__auto__.call(null,state_25252);if(cljs.core.keyword_identical_QMARK_.call(null,result__9747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9747__auto__;
}
break;
}
}catch (e25279){if((e25279 instanceof Object))
{var ex__9748__auto__ = e25279;var statearr_25280_25298 = state_25252;(statearr_25280_25298[(5)] = ex__9748__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25252);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25279;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25299 = state_25252;
state_25252 = G__25299;
continue;
}
} else
{return ret_value__9746__auto__;
}
break;
}
});
state_machine__9745__auto__ = function(state_25252){
switch(arguments.length){
case 0:
return state_machine__9745__auto____0.call(this);
case 1:
return state_machine__9745__auto____1.call(this,state_25252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9745__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9745__auto____0;
state_machine__9745__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9745__auto____1;
return state_machine__9745__auto__;
})()
;})(switch__9744__auto__,c__9759__auto___25282,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__9761__auto__ = (function (){var statearr_25281 = f__9760__auto__.call(null);(statearr_25281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9759__auto___25282);
return statearr_25281;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9761__auto__);
});})(c__9759__auto___25282,chs__$1,out,cnt,rets,dchan,dctr,done))
);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9759__auto___25407 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9759__auto___25407,out){
return (function (){var f__9760__auto__ = (function (){var switch__9744__auto__ = ((function (c__9759__auto___25407,out){
return (function (state_25383){var state_val_25384 = (state_25383[(1)]);if((state_val_25384 === (7)))
{var inst_25362 = (state_25383[(7)]);var inst_25363 = (state_25383[(8)]);var inst_25362__$1 = (state_25383[(2)]);var inst_25363__$1 = cljs.core.nth.call(null,inst_25362__$1,(0),null);var inst_25364 = cljs.core.nth.call(null,inst_25362__$1,(1),null);var inst_25365 = (inst_25363__$1 == null);var state_25383__$1 = (function (){var statearr_25385 = state_25383;(statearr_25385[(9)] = inst_25364);
(statearr_25385[(7)] = inst_25362__$1);
(statearr_25385[(8)] = inst_25363__$1);
return statearr_25385;
})();if(cljs.core.truth_(inst_25365))
{var statearr_25386_25408 = state_25383__$1;(statearr_25386_25408[(1)] = (8));
} else
{var statearr_25387_25409 = state_25383__$1;(statearr_25387_25409[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25384 === (1)))
{var inst_25354 = cljs.core.vec.call(null,chs);var inst_25355 = inst_25354;var state_25383__$1 = (function (){var statearr_25388 = state_25383;(statearr_25388[(10)] = inst_25355);
return statearr_25388;
})();var statearr_25389_25410 = state_25383__$1;(statearr_25389_25410[(2)] = null);
(statearr_25389_25410[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25384 === (4)))
{var inst_25355 = (state_25383[(10)]);var state_25383__$1 = state_25383;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_25383__$1,(7),inst_25355);
} else
{if((state_val_25384 === (6)))
{var inst_25379 = (state_25383[(2)]);var state_25383__$1 = state_25383;var statearr_25390_25411 = state_25383__$1;(statearr_25390_25411[(2)] = inst_25379);
(statearr_25390_25411[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25384 === (3)))
{var inst_25381 = (state_25383[(2)]);var state_25383__$1 = state_25383;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25383__$1,inst_25381);
} else
{if((state_val_25384 === (2)))
{var inst_25355 = (state_25383[(10)]);var inst_25357 = cljs.core.count.call(null,inst_25355);var inst_25358 = (inst_25357 > (0));var state_25383__$1 = state_25383;if(cljs.core.truth_(inst_25358))
{var statearr_25392_25412 = state_25383__$1;(statearr_25392_25412[(1)] = (4));
} else
{var statearr_25393_25413 = state_25383__$1;(statearr_25393_25413[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25384 === (11)))
{var inst_25355 = (state_25383[(10)]);var inst_25372 = (state_25383[(2)]);var tmp25391 = inst_25355;var inst_25355__$1 = tmp25391;var state_25383__$1 = (function (){var statearr_25394 = state_25383;(statearr_25394[(11)] = inst_25372);
(statearr_25394[(10)] = inst_25355__$1);
return statearr_25394;
})();var statearr_25395_25414 = state_25383__$1;(statearr_25395_25414[(2)] = null);
(statearr_25395_25414[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25384 === (9)))
{var inst_25363 = (state_25383[(8)]);var state_25383__$1 = state_25383;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25383__$1,(11),out,inst_25363);
} else
{if((state_val_25384 === (5)))
{var inst_25377 = cljs.core.async.close_BANG_.call(null,out);var state_25383__$1 = state_25383;var statearr_25396_25415 = state_25383__$1;(statearr_25396_25415[(2)] = inst_25377);
(statearr_25396_25415[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25384 === (10)))
{var inst_25375 = (state_25383[(2)]);var state_25383__$1 = state_25383;var statearr_25397_25416 = state_25383__$1;(statearr_25397_25416[(2)] = inst_25375);
(statearr_25397_25416[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25384 === (8)))
{var inst_25364 = (state_25383[(9)]);var inst_25362 = (state_25383[(7)]);var inst_25363 = (state_25383[(8)]);var inst_25355 = (state_25383[(10)]);var inst_25367 = (function (){var c = inst_25364;var v = inst_25363;var vec__25360 = inst_25362;var cs = inst_25355;return ((function (c,v,vec__25360,cs,inst_25364,inst_25362,inst_25363,inst_25355,state_val_25384,c__9759__auto___25407,out){
return (function (p1__25300_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__25300_SHARP_);
});
;})(c,v,vec__25360,cs,inst_25364,inst_25362,inst_25363,inst_25355,state_val_25384,c__9759__auto___25407,out))
})();var inst_25368 = cljs.core.filterv.call(null,inst_25367,inst_25355);var inst_25355__$1 = inst_25368;var state_25383__$1 = (function (){var statearr_25398 = state_25383;(statearr_25398[(10)] = inst_25355__$1);
return statearr_25398;
})();var statearr_25399_25417 = state_25383__$1;(statearr_25399_25417[(2)] = null);
(statearr_25399_25417[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__9759__auto___25407,out))
;return ((function (switch__9744__auto__,c__9759__auto___25407,out){
return (function() {
var state_machine__9745__auto__ = null;
var state_machine__9745__auto____0 = (function (){var statearr_25403 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25403[(0)] = state_machine__9745__auto__);
(statearr_25403[(1)] = (1));
return statearr_25403;
});
var state_machine__9745__auto____1 = (function (state_25383){while(true){
var ret_value__9746__auto__ = (function (){try{while(true){
var result__9747__auto__ = switch__9744__auto__.call(null,state_25383);if(cljs.core.keyword_identical_QMARK_.call(null,result__9747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9747__auto__;
}
break;
}
}catch (e25404){if((e25404 instanceof Object))
{var ex__9748__auto__ = e25404;var statearr_25405_25418 = state_25383;(statearr_25405_25418[(5)] = ex__9748__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25383);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25404;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25419 = state_25383;
state_25383 = G__25419;
continue;
}
} else
{return ret_value__9746__auto__;
}
break;
}
});
state_machine__9745__auto__ = function(state_25383){
switch(arguments.length){
case 0:
return state_machine__9745__auto____0.call(this);
case 1:
return state_machine__9745__auto____1.call(this,state_25383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9745__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9745__auto____0;
state_machine__9745__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9745__auto____1;
return state_machine__9745__auto__;
})()
;})(switch__9744__auto__,c__9759__auto___25407,out))
})();var state__9761__auto__ = (function (){var statearr_25406 = f__9760__auto__.call(null);(statearr_25406[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9759__auto___25407);
return statearr_25406;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9761__auto__);
});})(c__9759__auto___25407,out))
);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9759__auto___25512 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9759__auto___25512,out){
return (function (){var f__9760__auto__ = (function (){var switch__9744__auto__ = ((function (c__9759__auto___25512,out){
return (function (state_25489){var state_val_25490 = (state_25489[(1)]);if((state_val_25490 === (7)))
{var inst_25471 = (state_25489[(7)]);var inst_25471__$1 = (state_25489[(2)]);var inst_25472 = (inst_25471__$1 == null);var inst_25473 = cljs.core.not.call(null,inst_25472);var state_25489__$1 = (function (){var statearr_25491 = state_25489;(statearr_25491[(7)] = inst_25471__$1);
return statearr_25491;
})();if(inst_25473)
{var statearr_25492_25513 = state_25489__$1;(statearr_25492_25513[(1)] = (8));
} else
{var statearr_25493_25514 = state_25489__$1;(statearr_25493_25514[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25490 === (1)))
{var inst_25466 = (0);var state_25489__$1 = (function (){var statearr_25494 = state_25489;(statearr_25494[(8)] = inst_25466);
return statearr_25494;
})();var statearr_25495_25515 = state_25489__$1;(statearr_25495_25515[(2)] = null);
(statearr_25495_25515[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25490 === (4)))
{var state_25489__$1 = state_25489;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25489__$1,(7),ch);
} else
{if((state_val_25490 === (6)))
{var inst_25484 = (state_25489[(2)]);var state_25489__$1 = state_25489;var statearr_25496_25516 = state_25489__$1;(statearr_25496_25516[(2)] = inst_25484);
(statearr_25496_25516[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25490 === (3)))
{var inst_25486 = (state_25489[(2)]);var inst_25487 = cljs.core.async.close_BANG_.call(null,out);var state_25489__$1 = (function (){var statearr_25497 = state_25489;(statearr_25497[(9)] = inst_25486);
return statearr_25497;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25489__$1,inst_25487);
} else
{if((state_val_25490 === (2)))
{var inst_25466 = (state_25489[(8)]);var inst_25468 = (inst_25466 < n);var state_25489__$1 = state_25489;if(cljs.core.truth_(inst_25468))
{var statearr_25498_25517 = state_25489__$1;(statearr_25498_25517[(1)] = (4));
} else
{var statearr_25499_25518 = state_25489__$1;(statearr_25499_25518[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25490 === (11)))
{var inst_25466 = (state_25489[(8)]);var inst_25476 = (state_25489[(2)]);var inst_25477 = (inst_25466 + (1));var inst_25466__$1 = inst_25477;var state_25489__$1 = (function (){var statearr_25500 = state_25489;(statearr_25500[(8)] = inst_25466__$1);
(statearr_25500[(10)] = inst_25476);
return statearr_25500;
})();var statearr_25501_25519 = state_25489__$1;(statearr_25501_25519[(2)] = null);
(statearr_25501_25519[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25490 === (9)))
{var state_25489__$1 = state_25489;var statearr_25502_25520 = state_25489__$1;(statearr_25502_25520[(2)] = null);
(statearr_25502_25520[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25490 === (5)))
{var state_25489__$1 = state_25489;var statearr_25503_25521 = state_25489__$1;(statearr_25503_25521[(2)] = null);
(statearr_25503_25521[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25490 === (10)))
{var inst_25481 = (state_25489[(2)]);var state_25489__$1 = state_25489;var statearr_25504_25522 = state_25489__$1;(statearr_25504_25522[(2)] = inst_25481);
(statearr_25504_25522[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25490 === (8)))
{var inst_25471 = (state_25489[(7)]);var state_25489__$1 = state_25489;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25489__$1,(11),out,inst_25471);
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
});})(c__9759__auto___25512,out))
;return ((function (switch__9744__auto__,c__9759__auto___25512,out){
return (function() {
var state_machine__9745__auto__ = null;
var state_machine__9745__auto____0 = (function (){var statearr_25508 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25508[(0)] = state_machine__9745__auto__);
(statearr_25508[(1)] = (1));
return statearr_25508;
});
var state_machine__9745__auto____1 = (function (state_25489){while(true){
var ret_value__9746__auto__ = (function (){try{while(true){
var result__9747__auto__ = switch__9744__auto__.call(null,state_25489);if(cljs.core.keyword_identical_QMARK_.call(null,result__9747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9747__auto__;
}
break;
}
}catch (e25509){if((e25509 instanceof Object))
{var ex__9748__auto__ = e25509;var statearr_25510_25523 = state_25489;(statearr_25510_25523[(5)] = ex__9748__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25489);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25509;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25524 = state_25489;
state_25489 = G__25524;
continue;
}
} else
{return ret_value__9746__auto__;
}
break;
}
});
state_machine__9745__auto__ = function(state_25489){
switch(arguments.length){
case 0:
return state_machine__9745__auto____0.call(this);
case 1:
return state_machine__9745__auto____1.call(this,state_25489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9745__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9745__auto____0;
state_machine__9745__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9745__auto____1;
return state_machine__9745__auto__;
})()
;})(switch__9744__auto__,c__9759__auto___25512,out))
})();var state__9761__auto__ = (function (){var statearr_25511 = f__9760__auto__.call(null);(statearr_25511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9759__auto___25512);
return statearr_25511;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9761__auto__);
});})(c__9759__auto___25512,out))
);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9759__auto___25621 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9759__auto___25621,out){
return (function (){var f__9760__auto__ = (function (){var switch__9744__auto__ = ((function (c__9759__auto___25621,out){
return (function (state_25596){var state_val_25597 = (state_25596[(1)]);if((state_val_25597 === (7)))
{var inst_25591 = (state_25596[(2)]);var state_25596__$1 = state_25596;var statearr_25598_25622 = state_25596__$1;(statearr_25598_25622[(2)] = inst_25591);
(statearr_25598_25622[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25597 === (1)))
{var inst_25573 = null;var state_25596__$1 = (function (){var statearr_25599 = state_25596;(statearr_25599[(7)] = inst_25573);
return statearr_25599;
})();var statearr_25600_25623 = state_25596__$1;(statearr_25600_25623[(2)] = null);
(statearr_25600_25623[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25597 === (4)))
{var inst_25576 = (state_25596[(8)]);var inst_25576__$1 = (state_25596[(2)]);var inst_25577 = (inst_25576__$1 == null);var inst_25578 = cljs.core.not.call(null,inst_25577);var state_25596__$1 = (function (){var statearr_25601 = state_25596;(statearr_25601[(8)] = inst_25576__$1);
return statearr_25601;
})();if(inst_25578)
{var statearr_25602_25624 = state_25596__$1;(statearr_25602_25624[(1)] = (5));
} else
{var statearr_25603_25625 = state_25596__$1;(statearr_25603_25625[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25597 === (6)))
{var state_25596__$1 = state_25596;var statearr_25604_25626 = state_25596__$1;(statearr_25604_25626[(2)] = null);
(statearr_25604_25626[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25597 === (3)))
{var inst_25593 = (state_25596[(2)]);var inst_25594 = cljs.core.async.close_BANG_.call(null,out);var state_25596__$1 = (function (){var statearr_25605 = state_25596;(statearr_25605[(9)] = inst_25593);
return statearr_25605;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25596__$1,inst_25594);
} else
{if((state_val_25597 === (2)))
{var state_25596__$1 = state_25596;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25596__$1,(4),ch);
} else
{if((state_val_25597 === (11)))
{var inst_25576 = (state_25596[(8)]);var inst_25585 = (state_25596[(2)]);var inst_25573 = inst_25576;var state_25596__$1 = (function (){var statearr_25606 = state_25596;(statearr_25606[(7)] = inst_25573);
(statearr_25606[(10)] = inst_25585);
return statearr_25606;
})();var statearr_25607_25627 = state_25596__$1;(statearr_25607_25627[(2)] = null);
(statearr_25607_25627[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25597 === (9)))
{var inst_25576 = (state_25596[(8)]);var state_25596__$1 = state_25596;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25596__$1,(11),out,inst_25576);
} else
{if((state_val_25597 === (5)))
{var inst_25573 = (state_25596[(7)]);var inst_25576 = (state_25596[(8)]);var inst_25580 = cljs.core._EQ_.call(null,inst_25576,inst_25573);var state_25596__$1 = state_25596;if(inst_25580)
{var statearr_25609_25628 = state_25596__$1;(statearr_25609_25628[(1)] = (8));
} else
{var statearr_25610_25629 = state_25596__$1;(statearr_25610_25629[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25597 === (10)))
{var inst_25588 = (state_25596[(2)]);var state_25596__$1 = state_25596;var statearr_25611_25630 = state_25596__$1;(statearr_25611_25630[(2)] = inst_25588);
(statearr_25611_25630[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25597 === (8)))
{var inst_25573 = (state_25596[(7)]);var tmp25608 = inst_25573;var inst_25573__$1 = tmp25608;var state_25596__$1 = (function (){var statearr_25612 = state_25596;(statearr_25612[(7)] = inst_25573__$1);
return statearr_25612;
})();var statearr_25613_25631 = state_25596__$1;(statearr_25613_25631[(2)] = null);
(statearr_25613_25631[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__9759__auto___25621,out))
;return ((function (switch__9744__auto__,c__9759__auto___25621,out){
return (function() {
var state_machine__9745__auto__ = null;
var state_machine__9745__auto____0 = (function (){var statearr_25617 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25617[(0)] = state_machine__9745__auto__);
(statearr_25617[(1)] = (1));
return statearr_25617;
});
var state_machine__9745__auto____1 = (function (state_25596){while(true){
var ret_value__9746__auto__ = (function (){try{while(true){
var result__9747__auto__ = switch__9744__auto__.call(null,state_25596);if(cljs.core.keyword_identical_QMARK_.call(null,result__9747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9747__auto__;
}
break;
}
}catch (e25618){if((e25618 instanceof Object))
{var ex__9748__auto__ = e25618;var statearr_25619_25632 = state_25596;(statearr_25619_25632[(5)] = ex__9748__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25596);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25618;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25633 = state_25596;
state_25596 = G__25633;
continue;
}
} else
{return ret_value__9746__auto__;
}
break;
}
});
state_machine__9745__auto__ = function(state_25596){
switch(arguments.length){
case 0:
return state_machine__9745__auto____0.call(this);
case 1:
return state_machine__9745__auto____1.call(this,state_25596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9745__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9745__auto____0;
state_machine__9745__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9745__auto____1;
return state_machine__9745__auto__;
})()
;})(switch__9744__auto__,c__9759__auto___25621,out))
})();var state__9761__auto__ = (function (){var statearr_25620 = f__9760__auto__.call(null);(statearr_25620[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9759__auto___25621);
return statearr_25620;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9761__auto__);
});})(c__9759__auto___25621,out))
);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9759__auto___25768 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9759__auto___25768,out){
return (function (){var f__9760__auto__ = (function (){var switch__9744__auto__ = ((function (c__9759__auto___25768,out){
return (function (state_25738){var state_val_25739 = (state_25738[(1)]);if((state_val_25739 === (7)))
{var inst_25734 = (state_25738[(2)]);var state_25738__$1 = state_25738;var statearr_25740_25769 = state_25738__$1;(statearr_25740_25769[(2)] = inst_25734);
(statearr_25740_25769[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25739 === (1)))
{var inst_25701 = (new Array(n));var inst_25702 = inst_25701;var inst_25703 = (0);var state_25738__$1 = (function (){var statearr_25741 = state_25738;(statearr_25741[(7)] = inst_25702);
(statearr_25741[(8)] = inst_25703);
return statearr_25741;
})();var statearr_25742_25770 = state_25738__$1;(statearr_25742_25770[(2)] = null);
(statearr_25742_25770[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25739 === (4)))
{var inst_25706 = (state_25738[(9)]);var inst_25706__$1 = (state_25738[(2)]);var inst_25707 = (inst_25706__$1 == null);var inst_25708 = cljs.core.not.call(null,inst_25707);var state_25738__$1 = (function (){var statearr_25743 = state_25738;(statearr_25743[(9)] = inst_25706__$1);
return statearr_25743;
})();if(inst_25708)
{var statearr_25744_25771 = state_25738__$1;(statearr_25744_25771[(1)] = (5));
} else
{var statearr_25745_25772 = state_25738__$1;(statearr_25745_25772[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25739 === (15)))
{var inst_25728 = (state_25738[(2)]);var state_25738__$1 = state_25738;var statearr_25746_25773 = state_25738__$1;(statearr_25746_25773[(2)] = inst_25728);
(statearr_25746_25773[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25739 === (13)))
{var state_25738__$1 = state_25738;var statearr_25747_25774 = state_25738__$1;(statearr_25747_25774[(2)] = null);
(statearr_25747_25774[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25739 === (6)))
{var inst_25703 = (state_25738[(8)]);var inst_25724 = (inst_25703 > (0));var state_25738__$1 = state_25738;if(cljs.core.truth_(inst_25724))
{var statearr_25748_25775 = state_25738__$1;(statearr_25748_25775[(1)] = (12));
} else
{var statearr_25749_25776 = state_25738__$1;(statearr_25749_25776[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25739 === (3)))
{var inst_25736 = (state_25738[(2)]);var state_25738__$1 = state_25738;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25738__$1,inst_25736);
} else
{if((state_val_25739 === (12)))
{var inst_25702 = (state_25738[(7)]);var inst_25726 = cljs.core.vec.call(null,inst_25702);var state_25738__$1 = state_25738;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25738__$1,(15),out,inst_25726);
} else
{if((state_val_25739 === (2)))
{var state_25738__$1 = state_25738;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25738__$1,(4),ch);
} else
{if((state_val_25739 === (11)))
{var inst_25718 = (state_25738[(2)]);var inst_25719 = (new Array(n));var inst_25702 = inst_25719;var inst_25703 = (0);var state_25738__$1 = (function (){var statearr_25750 = state_25738;(statearr_25750[(10)] = inst_25718);
(statearr_25750[(7)] = inst_25702);
(statearr_25750[(8)] = inst_25703);
return statearr_25750;
})();var statearr_25751_25777 = state_25738__$1;(statearr_25751_25777[(2)] = null);
(statearr_25751_25777[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25739 === (9)))
{var inst_25702 = (state_25738[(7)]);var inst_25716 = cljs.core.vec.call(null,inst_25702);var state_25738__$1 = state_25738;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25738__$1,(11),out,inst_25716);
} else
{if((state_val_25739 === (5)))
{var inst_25711 = (state_25738[(11)]);var inst_25702 = (state_25738[(7)]);var inst_25703 = (state_25738[(8)]);var inst_25706 = (state_25738[(9)]);var inst_25710 = (inst_25702[inst_25703] = inst_25706);var inst_25711__$1 = (inst_25703 + (1));var inst_25712 = (inst_25711__$1 < n);var state_25738__$1 = (function (){var statearr_25752 = state_25738;(statearr_25752[(11)] = inst_25711__$1);
(statearr_25752[(12)] = inst_25710);
return statearr_25752;
})();if(cljs.core.truth_(inst_25712))
{var statearr_25753_25778 = state_25738__$1;(statearr_25753_25778[(1)] = (8));
} else
{var statearr_25754_25779 = state_25738__$1;(statearr_25754_25779[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25739 === (14)))
{var inst_25731 = (state_25738[(2)]);var inst_25732 = cljs.core.async.close_BANG_.call(null,out);var state_25738__$1 = (function (){var statearr_25756 = state_25738;(statearr_25756[(13)] = inst_25731);
return statearr_25756;
})();var statearr_25757_25780 = state_25738__$1;(statearr_25757_25780[(2)] = inst_25732);
(statearr_25757_25780[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25739 === (10)))
{var inst_25722 = (state_25738[(2)]);var state_25738__$1 = state_25738;var statearr_25758_25781 = state_25738__$1;(statearr_25758_25781[(2)] = inst_25722);
(statearr_25758_25781[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25739 === (8)))
{var inst_25711 = (state_25738[(11)]);var inst_25702 = (state_25738[(7)]);var tmp25755 = inst_25702;var inst_25702__$1 = tmp25755;var inst_25703 = inst_25711;var state_25738__$1 = (function (){var statearr_25759 = state_25738;(statearr_25759[(7)] = inst_25702__$1);
(statearr_25759[(8)] = inst_25703);
return statearr_25759;
})();var statearr_25760_25782 = state_25738__$1;(statearr_25760_25782[(2)] = null);
(statearr_25760_25782[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__9759__auto___25768,out))
;return ((function (switch__9744__auto__,c__9759__auto___25768,out){
return (function() {
var state_machine__9745__auto__ = null;
var state_machine__9745__auto____0 = (function (){var statearr_25764 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25764[(0)] = state_machine__9745__auto__);
(statearr_25764[(1)] = (1));
return statearr_25764;
});
var state_machine__9745__auto____1 = (function (state_25738){while(true){
var ret_value__9746__auto__ = (function (){try{while(true){
var result__9747__auto__ = switch__9744__auto__.call(null,state_25738);if(cljs.core.keyword_identical_QMARK_.call(null,result__9747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9747__auto__;
}
break;
}
}catch (e25765){if((e25765 instanceof Object))
{var ex__9748__auto__ = e25765;var statearr_25766_25783 = state_25738;(statearr_25766_25783[(5)] = ex__9748__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25738);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25765;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25784 = state_25738;
state_25738 = G__25784;
continue;
}
} else
{return ret_value__9746__auto__;
}
break;
}
});
state_machine__9745__auto__ = function(state_25738){
switch(arguments.length){
case 0:
return state_machine__9745__auto____0.call(this);
case 1:
return state_machine__9745__auto____1.call(this,state_25738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9745__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9745__auto____0;
state_machine__9745__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9745__auto____1;
return state_machine__9745__auto__;
})()
;})(switch__9744__auto__,c__9759__auto___25768,out))
})();var state__9761__auto__ = (function (){var statearr_25767 = f__9760__auto__.call(null);(statearr_25767[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9759__auto___25768);
return statearr_25767;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9761__auto__);
});})(c__9759__auto___25768,out))
);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9759__auto___25927 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9759__auto___25927,out){
return (function (){var f__9760__auto__ = (function (){var switch__9744__auto__ = ((function (c__9759__auto___25927,out){
return (function (state_25897){var state_val_25898 = (state_25897[(1)]);if((state_val_25898 === (7)))
{var inst_25893 = (state_25897[(2)]);var state_25897__$1 = state_25897;var statearr_25899_25928 = state_25897__$1;(statearr_25899_25928[(2)] = inst_25893);
(statearr_25899_25928[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25898 === (1)))
{var inst_25856 = [];var inst_25857 = inst_25856;var inst_25858 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_25897__$1 = (function (){var statearr_25900 = state_25897;(statearr_25900[(7)] = inst_25858);
(statearr_25900[(8)] = inst_25857);
return statearr_25900;
})();var statearr_25901_25929 = state_25897__$1;(statearr_25901_25929[(2)] = null);
(statearr_25901_25929[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25898 === (4)))
{var inst_25861 = (state_25897[(9)]);var inst_25861__$1 = (state_25897[(2)]);var inst_25862 = (inst_25861__$1 == null);var inst_25863 = cljs.core.not.call(null,inst_25862);var state_25897__$1 = (function (){var statearr_25902 = state_25897;(statearr_25902[(9)] = inst_25861__$1);
return statearr_25902;
})();if(inst_25863)
{var statearr_25903_25930 = state_25897__$1;(statearr_25903_25930[(1)] = (5));
} else
{var statearr_25904_25931 = state_25897__$1;(statearr_25904_25931[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25898 === (15)))
{var inst_25887 = (state_25897[(2)]);var state_25897__$1 = state_25897;var statearr_25905_25932 = state_25897__$1;(statearr_25905_25932[(2)] = inst_25887);
(statearr_25905_25932[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25898 === (13)))
{var state_25897__$1 = state_25897;var statearr_25906_25933 = state_25897__$1;(statearr_25906_25933[(2)] = null);
(statearr_25906_25933[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25898 === (6)))
{var inst_25857 = (state_25897[(8)]);var inst_25882 = inst_25857.length;var inst_25883 = (inst_25882 > (0));var state_25897__$1 = state_25897;if(cljs.core.truth_(inst_25883))
{var statearr_25907_25934 = state_25897__$1;(statearr_25907_25934[(1)] = (12));
} else
{var statearr_25908_25935 = state_25897__$1;(statearr_25908_25935[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25898 === (3)))
{var inst_25895 = (state_25897[(2)]);var state_25897__$1 = state_25897;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25897__$1,inst_25895);
} else
{if((state_val_25898 === (12)))
{var inst_25857 = (state_25897[(8)]);var inst_25885 = cljs.core.vec.call(null,inst_25857);var state_25897__$1 = state_25897;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25897__$1,(15),out,inst_25885);
} else
{if((state_val_25898 === (2)))
{var state_25897__$1 = state_25897;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25897__$1,(4),ch);
} else
{if((state_val_25898 === (11)))
{var inst_25865 = (state_25897[(10)]);var inst_25861 = (state_25897[(9)]);var inst_25875 = (state_25897[(2)]);var inst_25876 = [];var inst_25877 = inst_25876.push(inst_25861);var inst_25857 = inst_25876;var inst_25858 = inst_25865;var state_25897__$1 = (function (){var statearr_25909 = state_25897;(statearr_25909[(11)] = inst_25875);
(statearr_25909[(7)] = inst_25858);
(statearr_25909[(8)] = inst_25857);
(statearr_25909[(12)] = inst_25877);
return statearr_25909;
})();var statearr_25910_25936 = state_25897__$1;(statearr_25910_25936[(2)] = null);
(statearr_25910_25936[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25898 === (9)))
{var inst_25857 = (state_25897[(8)]);var inst_25873 = cljs.core.vec.call(null,inst_25857);var state_25897__$1 = state_25897;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25897__$1,(11),out,inst_25873);
} else
{if((state_val_25898 === (5)))
{var inst_25865 = (state_25897[(10)]);var inst_25858 = (state_25897[(7)]);var inst_25861 = (state_25897[(9)]);var inst_25865__$1 = f.call(null,inst_25861);var inst_25866 = cljs.core._EQ_.call(null,inst_25865__$1,inst_25858);var inst_25867 = cljs.core.keyword_identical_QMARK_.call(null,inst_25858,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_25868 = (inst_25866) || (inst_25867);var state_25897__$1 = (function (){var statearr_25911 = state_25897;(statearr_25911[(10)] = inst_25865__$1);
return statearr_25911;
})();if(cljs.core.truth_(inst_25868))
{var statearr_25912_25937 = state_25897__$1;(statearr_25912_25937[(1)] = (8));
} else
{var statearr_25913_25938 = state_25897__$1;(statearr_25913_25938[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25898 === (14)))
{var inst_25890 = (state_25897[(2)]);var inst_25891 = cljs.core.async.close_BANG_.call(null,out);var state_25897__$1 = (function (){var statearr_25915 = state_25897;(statearr_25915[(13)] = inst_25890);
return statearr_25915;
})();var statearr_25916_25939 = state_25897__$1;(statearr_25916_25939[(2)] = inst_25891);
(statearr_25916_25939[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25898 === (10)))
{var inst_25880 = (state_25897[(2)]);var state_25897__$1 = state_25897;var statearr_25917_25940 = state_25897__$1;(statearr_25917_25940[(2)] = inst_25880);
(statearr_25917_25940[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25898 === (8)))
{var inst_25865 = (state_25897[(10)]);var inst_25857 = (state_25897[(8)]);var inst_25861 = (state_25897[(9)]);var inst_25870 = inst_25857.push(inst_25861);var tmp25914 = inst_25857;var inst_25857__$1 = tmp25914;var inst_25858 = inst_25865;var state_25897__$1 = (function (){var statearr_25918 = state_25897;(statearr_25918[(7)] = inst_25858);
(statearr_25918[(8)] = inst_25857__$1);
(statearr_25918[(14)] = inst_25870);
return statearr_25918;
})();var statearr_25919_25941 = state_25897__$1;(statearr_25919_25941[(2)] = null);
(statearr_25919_25941[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__9759__auto___25927,out))
;return ((function (switch__9744__auto__,c__9759__auto___25927,out){
return (function() {
var state_machine__9745__auto__ = null;
var state_machine__9745__auto____0 = (function (){var statearr_25923 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25923[(0)] = state_machine__9745__auto__);
(statearr_25923[(1)] = (1));
return statearr_25923;
});
var state_machine__9745__auto____1 = (function (state_25897){while(true){
var ret_value__9746__auto__ = (function (){try{while(true){
var result__9747__auto__ = switch__9744__auto__.call(null,state_25897);if(cljs.core.keyword_identical_QMARK_.call(null,result__9747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9747__auto__;
}
break;
}
}catch (e25924){if((e25924 instanceof Object))
{var ex__9748__auto__ = e25924;var statearr_25925_25942 = state_25897;(statearr_25925_25942[(5)] = ex__9748__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25897);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25924;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25943 = state_25897;
state_25897 = G__25943;
continue;
}
} else
{return ret_value__9746__auto__;
}
break;
}
});
state_machine__9745__auto__ = function(state_25897){
switch(arguments.length){
case 0:
return state_machine__9745__auto____0.call(this);
case 1:
return state_machine__9745__auto____1.call(this,state_25897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9745__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9745__auto____0;
state_machine__9745__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9745__auto____1;
return state_machine__9745__auto__;
})()
;})(switch__9744__auto__,c__9759__auto___25927,out))
})();var state__9761__auto__ = (function (){var statearr_25926 = f__9760__auto__.call(null);(statearr_25926[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9759__auto___25927);
return statearr_25926;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9761__auto__);
});})(c__9759__auto___25927,out))
);
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