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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t54868 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t54868 = (function (f,fn_handler,meta54869){
this.f = f;
this.fn_handler = fn_handler;
this.meta54869 = meta54869;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t54868.cljs$lang$type = true;
cljs.core.async.t54868.cljs$lang$ctorStr = "cljs.core.async/t54868";
cljs.core.async.t54868.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t54868");
});
cljs.core.async.t54868.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t54868.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t54868.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t54868.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54870){var self__ = this;
var _54870__$1 = this;return self__.meta54869;
});
cljs.core.async.t54868.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54870,meta54869__$1){var self__ = this;
var _54870__$1 = this;return (new cljs.core.async.t54868(self__.f,self__.fn_handler,meta54869__$1));
});
cljs.core.async.__GT_t54868 = (function __GT_t54868(f__$1,fn_handler__$1,meta54869){return (new cljs.core.async.t54868(f__$1,fn_handler__$1,meta54869));
});
}
return (new cljs.core.async.t54868(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__54872 = buff;if(G__54872)
{var bit__4208__auto__ = null;if(cljs.core.truth_((function (){var or__3558__auto__ = bit__4208__auto__;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return G__54872.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__54872.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__54872);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__54872);
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
{var val_54873 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_54873);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_54873,ret){
return (function (){return fn1.call(null,val_54873);
});})(val_54873,ret))
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3546__auto__ = ret;if(cljs.core.truth_(and__3546__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3546__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4414__auto___54874 = n;var x_54875 = (0);while(true){
if((x_54875 < n__4414__auto___54874))
{(a[x_54875] = (0));
{
var G__54876 = (x_54875 + (1));
x_54875 = G__54876;
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
var G__54877 = (i + (1));
i = G__54877;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t54881 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t54881 = (function (flag,alt_flag,meta54882){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta54882 = meta54882;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t54881.cljs$lang$type = true;
cljs.core.async.t54881.cljs$lang$ctorStr = "cljs.core.async/t54881";
cljs.core.async.t54881.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t54881");
});})(flag))
;
cljs.core.async.t54881.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t54881.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t54881.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t54881.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_54883){var self__ = this;
var _54883__$1 = this;return self__.meta54882;
});})(flag))
;
cljs.core.async.t54881.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_54883,meta54882__$1){var self__ = this;
var _54883__$1 = this;return (new cljs.core.async.t54881(self__.flag,self__.alt_flag,meta54882__$1));
});})(flag))
;
cljs.core.async.__GT_t54881 = ((function (flag){
return (function __GT_t54881(flag__$1,alt_flag__$1,meta54882){return (new cljs.core.async.t54881(flag__$1,alt_flag__$1,meta54882));
});})(flag))
;
}
return (new cljs.core.async.t54881(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t54887 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t54887 = (function (cb,flag,alt_handler,meta54888){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta54888 = meta54888;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t54887.cljs$lang$type = true;
cljs.core.async.t54887.cljs$lang$ctorStr = "cljs.core.async/t54887";
cljs.core.async.t54887.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t54887");
});
cljs.core.async.t54887.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t54887.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t54887.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t54887.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54889){var self__ = this;
var _54889__$1 = this;return self__.meta54888;
});
cljs.core.async.t54887.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54889,meta54888__$1){var self__ = this;
var _54889__$1 = this;return (new cljs.core.async.t54887(self__.cb,self__.flag,self__.alt_handler,meta54888__$1));
});
cljs.core.async.__GT_t54887 = (function __GT_t54887(cb__$1,flag__$1,alt_handler__$1,meta54888){return (new cljs.core.async.t54887(cb__$1,flag__$1,alt_handler__$1,meta54888));
});
}
return (new cljs.core.async.t54887(cb,flag,alt_handler,null));
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
return (function (p1__54890_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__54890_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3558__auto__ = wport;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__54891 = (i + (1));
i = G__54891;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3558__auto__ = ret;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3546__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3546__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3546__auto__;
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
var alts_BANG___delegate = function (ports,p__54892){var map__54894 = p__54892;var map__54894__$1 = ((cljs.core.seq_QMARK_.call(null,map__54894))?cljs.core.apply.call(null,cljs.core.hash_map,map__54894):map__54894);var opts = map__54894__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__54892 = null;if (arguments.length > 1) {
  p__54892 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__54892);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__54895){
var ports = cljs.core.first(arglist__54895);
var p__54892 = cljs.core.rest(arglist__54895);
return alts_BANG___delegate(ports,p__54892);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t54903 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t54903 = (function (ch,f,map_LT_,meta54904){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta54904 = meta54904;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t54903.cljs$lang$type = true;
cljs.core.async.t54903.cljs$lang$ctorStr = "cljs.core.async/t54903";
cljs.core.async.t54903.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t54903");
});
cljs.core.async.t54903.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t54903.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t54903.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t54903.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t54906 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t54906 = (function (fn1,_,meta54904,ch,f,map_LT_,meta54907){
this.fn1 = fn1;
this._ = _;
this.meta54904 = meta54904;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta54907 = meta54907;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t54906.cljs$lang$type = true;
cljs.core.async.t54906.cljs$lang$ctorStr = "cljs.core.async/t54906";
cljs.core.async.t54906.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t54906");
});})(___$1))
;
cljs.core.async.t54906.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t54906.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t54906.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t54906.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__54896_SHARP_){return f1.call(null,(((p1__54896_SHARP_ == null))?null:self__.f.call(null,p1__54896_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t54906.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_54908){var self__ = this;
var _54908__$1 = this;return self__.meta54907;
});})(___$1))
;
cljs.core.async.t54906.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_54908,meta54907__$1){var self__ = this;
var _54908__$1 = this;return (new cljs.core.async.t54906(self__.fn1,self__._,self__.meta54904,self__.ch,self__.f,self__.map_LT_,meta54907__$1));
});})(___$1))
;
cljs.core.async.__GT_t54906 = ((function (___$1){
return (function __GT_t54906(fn1__$1,___$2,meta54904__$1,ch__$2,f__$2,map_LT___$2,meta54907){return (new cljs.core.async.t54906(fn1__$1,___$2,meta54904__$1,ch__$2,f__$2,map_LT___$2,meta54907));
});})(___$1))
;
}
return (new cljs.core.async.t54906(fn1,___$1,self__.meta54904,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3546__auto__ = ret;if(cljs.core.truth_(and__3546__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3546__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t54903.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t54903.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t54903.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54905){var self__ = this;
var _54905__$1 = this;return self__.meta54904;
});
cljs.core.async.t54903.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54905,meta54904__$1){var self__ = this;
var _54905__$1 = this;return (new cljs.core.async.t54903(self__.ch,self__.f,self__.map_LT_,meta54904__$1));
});
cljs.core.async.__GT_t54903 = (function __GT_t54903(ch__$1,f__$1,map_LT___$1,meta54904){return (new cljs.core.async.t54903(ch__$1,f__$1,map_LT___$1,meta54904));
});
}
return (new cljs.core.async.t54903(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t54912 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t54912 = (function (ch,f,map_GT_,meta54913){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta54913 = meta54913;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t54912.cljs$lang$type = true;
cljs.core.async.t54912.cljs$lang$ctorStr = "cljs.core.async/t54912";
cljs.core.async.t54912.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t54912");
});
cljs.core.async.t54912.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t54912.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t54912.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t54912.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t54912.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t54912.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t54912.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54914){var self__ = this;
var _54914__$1 = this;return self__.meta54913;
});
cljs.core.async.t54912.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54914,meta54913__$1){var self__ = this;
var _54914__$1 = this;return (new cljs.core.async.t54912(self__.ch,self__.f,self__.map_GT_,meta54913__$1));
});
cljs.core.async.__GT_t54912 = (function __GT_t54912(ch__$1,f__$1,map_GT___$1,meta54913){return (new cljs.core.async.t54912(ch__$1,f__$1,map_GT___$1,meta54913));
});
}
return (new cljs.core.async.t54912(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t54918 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t54918 = (function (ch,p,filter_GT_,meta54919){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta54919 = meta54919;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t54918.cljs$lang$type = true;
cljs.core.async.t54918.cljs$lang$ctorStr = "cljs.core.async/t54918";
cljs.core.async.t54918.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t54918");
});
cljs.core.async.t54918.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t54918.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t54918.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t54918.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t54918.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t54918.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t54918.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54920){var self__ = this;
var _54920__$1 = this;return self__.meta54919;
});
cljs.core.async.t54918.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54920,meta54919__$1){var self__ = this;
var _54920__$1 = this;return (new cljs.core.async.t54918(self__.ch,self__.p,self__.filter_GT_,meta54919__$1));
});
cljs.core.async.__GT_t54918 = (function __GT_t54918(ch__$1,p__$1,filter_GT___$1,meta54919){return (new cljs.core.async.t54918(ch__$1,p__$1,filter_GT___$1,meta54919));
});
}
return (new cljs.core.async.t54918(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___55003 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___55003,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___55003,out){
return (function (state_54982){var state_val_54983 = (state_54982[(1)]);if((state_val_54983 === (7)))
{var inst_54978 = (state_54982[(2)]);var state_54982__$1 = state_54982;var statearr_54984_55004 = state_54982__$1;(statearr_54984_55004[(2)] = inst_54978);
(statearr_54984_55004[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54983 === (1)))
{var state_54982__$1 = state_54982;var statearr_54985_55005 = state_54982__$1;(statearr_54985_55005[(2)] = null);
(statearr_54985_55005[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54983 === (4)))
{var inst_54964 = (state_54982[(7)]);var inst_54964__$1 = (state_54982[(2)]);var inst_54965 = (inst_54964__$1 == null);var state_54982__$1 = (function (){var statearr_54986 = state_54982;(statearr_54986[(7)] = inst_54964__$1);
return statearr_54986;
})();if(cljs.core.truth_(inst_54965))
{var statearr_54987_55006 = state_54982__$1;(statearr_54987_55006[(1)] = (5));
} else
{var statearr_54988_55007 = state_54982__$1;(statearr_54988_55007[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54983 === (6)))
{var inst_54964 = (state_54982[(7)]);var inst_54969 = p.call(null,inst_54964);var state_54982__$1 = state_54982;if(cljs.core.truth_(inst_54969))
{var statearr_54989_55008 = state_54982__$1;(statearr_54989_55008[(1)] = (8));
} else
{var statearr_54990_55009 = state_54982__$1;(statearr_54990_55009[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54983 === (3)))
{var inst_54980 = (state_54982[(2)]);var state_54982__$1 = state_54982;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54982__$1,inst_54980);
} else
{if((state_val_54983 === (2)))
{var state_54982__$1 = state_54982;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54982__$1,(4),ch);
} else
{if((state_val_54983 === (11)))
{var inst_54972 = (state_54982[(2)]);var state_54982__$1 = state_54982;var statearr_54991_55010 = state_54982__$1;(statearr_54991_55010[(2)] = inst_54972);
(statearr_54991_55010[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54983 === (9)))
{var state_54982__$1 = state_54982;var statearr_54992_55011 = state_54982__$1;(statearr_54992_55011[(2)] = null);
(statearr_54992_55011[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54983 === (5)))
{var inst_54967 = cljs.core.async.close_BANG_.call(null,out);var state_54982__$1 = state_54982;var statearr_54993_55012 = state_54982__$1;(statearr_54993_55012[(2)] = inst_54967);
(statearr_54993_55012[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54983 === (10)))
{var inst_54975 = (state_54982[(2)]);var state_54982__$1 = (function (){var statearr_54994 = state_54982;(statearr_54994[(8)] = inst_54975);
return statearr_54994;
})();var statearr_54995_55013 = state_54982__$1;(statearr_54995_55013[(2)] = null);
(statearr_54995_55013[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54983 === (8)))
{var inst_54964 = (state_54982[(7)]);var state_54982__$1 = state_54982;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54982__$1,(11),out,inst_54964);
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
});})(c__5708__auto___55003,out))
;return ((function (switch__5693__auto__,c__5708__auto___55003,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_54999 = [null,null,null,null,null,null,null,null,null];(statearr_54999[(0)] = state_machine__5694__auto__);
(statearr_54999[(1)] = (1));
return statearr_54999;
});
var state_machine__5694__auto____1 = (function (state_54982){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_54982);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e55000){if((e55000 instanceof Object))
{var ex__5697__auto__ = e55000;var statearr_55001_55014 = state_54982;(statearr_55001_55014[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54982);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e55000;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__55015 = state_54982;
state_54982 = G__55015;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_54982){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_54982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___55003,out))
})();var state__5710__auto__ = (function (){var statearr_55002 = f__5709__auto__.call(null);(statearr_55002[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___55003);
return statearr_55002;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___55003,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_55167){var state_val_55168 = (state_55167[(1)]);if((state_val_55168 === (7)))
{var inst_55163 = (state_55167[(2)]);var state_55167__$1 = state_55167;var statearr_55169_55206 = state_55167__$1;(statearr_55169_55206[(2)] = inst_55163);
(statearr_55169_55206[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55168 === (20)))
{var inst_55138 = (state_55167[(7)]);var inst_55149 = (state_55167[(2)]);var inst_55150 = cljs.core.next.call(null,inst_55138);var inst_55124 = inst_55150;var inst_55125 = null;var inst_55126 = (0);var inst_55127 = (0);var state_55167__$1 = (function (){var statearr_55170 = state_55167;(statearr_55170[(8)] = inst_55125);
(statearr_55170[(9)] = inst_55124);
(statearr_55170[(10)] = inst_55127);
(statearr_55170[(11)] = inst_55126);
(statearr_55170[(12)] = inst_55149);
return statearr_55170;
})();var statearr_55171_55207 = state_55167__$1;(statearr_55171_55207[(2)] = null);
(statearr_55171_55207[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55168 === (1)))
{var state_55167__$1 = state_55167;var statearr_55172_55208 = state_55167__$1;(statearr_55172_55208[(2)] = null);
(statearr_55172_55208[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55168 === (4)))
{var inst_55113 = (state_55167[(13)]);var inst_55113__$1 = (state_55167[(2)]);var inst_55114 = (inst_55113__$1 == null);var state_55167__$1 = (function (){var statearr_55176 = state_55167;(statearr_55176[(13)] = inst_55113__$1);
return statearr_55176;
})();if(cljs.core.truth_(inst_55114))
{var statearr_55177_55209 = state_55167__$1;(statearr_55177_55209[(1)] = (5));
} else
{var statearr_55178_55210 = state_55167__$1;(statearr_55178_55210[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55168 === (15)))
{var state_55167__$1 = state_55167;var statearr_55179_55211 = state_55167__$1;(statearr_55179_55211[(2)] = null);
(statearr_55179_55211[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55168 === (13)))
{var inst_55125 = (state_55167[(8)]);var inst_55124 = (state_55167[(9)]);var inst_55127 = (state_55167[(10)]);var inst_55126 = (state_55167[(11)]);var inst_55134 = (state_55167[(2)]);var inst_55135 = (inst_55127 + (1));var tmp55173 = inst_55125;var tmp55174 = inst_55124;var tmp55175 = inst_55126;var inst_55124__$1 = tmp55174;var inst_55125__$1 = tmp55173;var inst_55126__$1 = tmp55175;var inst_55127__$1 = inst_55135;var state_55167__$1 = (function (){var statearr_55180 = state_55167;(statearr_55180[(8)] = inst_55125__$1);
(statearr_55180[(9)] = inst_55124__$1);
(statearr_55180[(14)] = inst_55134);
(statearr_55180[(10)] = inst_55127__$1);
(statearr_55180[(11)] = inst_55126__$1);
return statearr_55180;
})();var statearr_55181_55212 = state_55167__$1;(statearr_55181_55212[(2)] = null);
(statearr_55181_55212[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55168 === (6)))
{var inst_55113 = (state_55167[(13)]);var inst_55118 = f.call(null,inst_55113);var inst_55123 = cljs.core.seq.call(null,inst_55118);var inst_55124 = inst_55123;var inst_55125 = null;var inst_55126 = (0);var inst_55127 = (0);var state_55167__$1 = (function (){var statearr_55182 = state_55167;(statearr_55182[(8)] = inst_55125);
(statearr_55182[(9)] = inst_55124);
(statearr_55182[(10)] = inst_55127);
(statearr_55182[(11)] = inst_55126);
return statearr_55182;
})();var statearr_55183_55213 = state_55167__$1;(statearr_55183_55213[(2)] = null);
(statearr_55183_55213[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55168 === (17)))
{var inst_55138 = (state_55167[(7)]);var inst_55142 = cljs.core.chunk_first.call(null,inst_55138);var inst_55143 = cljs.core.chunk_rest.call(null,inst_55138);var inst_55144 = cljs.core.count.call(null,inst_55142);var inst_55124 = inst_55143;var inst_55125 = inst_55142;var inst_55126 = inst_55144;var inst_55127 = (0);var state_55167__$1 = (function (){var statearr_55184 = state_55167;(statearr_55184[(8)] = inst_55125);
(statearr_55184[(9)] = inst_55124);
(statearr_55184[(10)] = inst_55127);
(statearr_55184[(11)] = inst_55126);
return statearr_55184;
})();var statearr_55185_55214 = state_55167__$1;(statearr_55185_55214[(2)] = null);
(statearr_55185_55214[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55168 === (3)))
{var inst_55165 = (state_55167[(2)]);var state_55167__$1 = state_55167;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55167__$1,inst_55165);
} else
{if((state_val_55168 === (12)))
{var inst_55158 = (state_55167[(2)]);var state_55167__$1 = state_55167;var statearr_55186_55215 = state_55167__$1;(statearr_55186_55215[(2)] = inst_55158);
(statearr_55186_55215[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55168 === (2)))
{var state_55167__$1 = state_55167;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55167__$1,(4),in$);
} else
{if((state_val_55168 === (19)))
{var inst_55153 = (state_55167[(2)]);var state_55167__$1 = state_55167;var statearr_55187_55216 = state_55167__$1;(statearr_55187_55216[(2)] = inst_55153);
(statearr_55187_55216[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55168 === (11)))
{var inst_55124 = (state_55167[(9)]);var inst_55138 = (state_55167[(7)]);var inst_55138__$1 = cljs.core.seq.call(null,inst_55124);var state_55167__$1 = (function (){var statearr_55188 = state_55167;(statearr_55188[(7)] = inst_55138__$1);
return statearr_55188;
})();if(inst_55138__$1)
{var statearr_55189_55217 = state_55167__$1;(statearr_55189_55217[(1)] = (14));
} else
{var statearr_55190_55218 = state_55167__$1;(statearr_55190_55218[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55168 === (9)))
{var inst_55160 = (state_55167[(2)]);var state_55167__$1 = (function (){var statearr_55191 = state_55167;(statearr_55191[(15)] = inst_55160);
return statearr_55191;
})();var statearr_55192_55219 = state_55167__$1;(statearr_55192_55219[(2)] = null);
(statearr_55192_55219[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55168 === (5)))
{var inst_55116 = cljs.core.async.close_BANG_.call(null,out);var state_55167__$1 = state_55167;var statearr_55193_55220 = state_55167__$1;(statearr_55193_55220[(2)] = inst_55116);
(statearr_55193_55220[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55168 === (14)))
{var inst_55138 = (state_55167[(7)]);var inst_55140 = cljs.core.chunked_seq_QMARK_.call(null,inst_55138);var state_55167__$1 = state_55167;if(inst_55140)
{var statearr_55194_55221 = state_55167__$1;(statearr_55194_55221[(1)] = (17));
} else
{var statearr_55195_55222 = state_55167__$1;(statearr_55195_55222[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55168 === (16)))
{var inst_55156 = (state_55167[(2)]);var state_55167__$1 = state_55167;var statearr_55196_55223 = state_55167__$1;(statearr_55196_55223[(2)] = inst_55156);
(statearr_55196_55223[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55168 === (10)))
{var inst_55125 = (state_55167[(8)]);var inst_55127 = (state_55167[(10)]);var inst_55132 = cljs.core._nth.call(null,inst_55125,inst_55127);var state_55167__$1 = state_55167;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55167__$1,(13),out,inst_55132);
} else
{if((state_val_55168 === (18)))
{var inst_55138 = (state_55167[(7)]);var inst_55147 = cljs.core.first.call(null,inst_55138);var state_55167__$1 = state_55167;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55167__$1,(20),out,inst_55147);
} else
{if((state_val_55168 === (8)))
{var inst_55127 = (state_55167[(10)]);var inst_55126 = (state_55167[(11)]);var inst_55129 = (inst_55127 < inst_55126);var inst_55130 = inst_55129;var state_55167__$1 = state_55167;if(cljs.core.truth_(inst_55130))
{var statearr_55197_55224 = state_55167__$1;(statearr_55197_55224[(1)] = (10));
} else
{var statearr_55198_55225 = state_55167__$1;(statearr_55198_55225[(1)] = (11));
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
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_55202 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_55202[(0)] = state_machine__5694__auto__);
(statearr_55202[(1)] = (1));
return statearr_55202;
});
var state_machine__5694__auto____1 = (function (state_55167){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_55167);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e55203){if((e55203 instanceof Object))
{var ex__5697__auto__ = e55203;var statearr_55204_55226 = state_55167;(statearr_55204_55226[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55167);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e55203;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__55227 = state_55167;
state_55167 = G__55227;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_55167){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_55167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_55205 = f__5709__auto__.call(null);(statearr_55205[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_55205;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5708__auto___55308 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___55308){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___55308){
return (function (state_55287){var state_val_55288 = (state_55287[(1)]);if((state_val_55288 === (7)))
{var inst_55283 = (state_55287[(2)]);var state_55287__$1 = state_55287;var statearr_55289_55309 = state_55287__$1;(statearr_55289_55309[(2)] = inst_55283);
(statearr_55289_55309[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55288 === (1)))
{var state_55287__$1 = state_55287;var statearr_55290_55310 = state_55287__$1;(statearr_55290_55310[(2)] = null);
(statearr_55290_55310[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55288 === (4)))
{var inst_55270 = (state_55287[(7)]);var inst_55270__$1 = (state_55287[(2)]);var inst_55271 = (inst_55270__$1 == null);var state_55287__$1 = (function (){var statearr_55291 = state_55287;(statearr_55291[(7)] = inst_55270__$1);
return statearr_55291;
})();if(cljs.core.truth_(inst_55271))
{var statearr_55292_55311 = state_55287__$1;(statearr_55292_55311[(1)] = (5));
} else
{var statearr_55293_55312 = state_55287__$1;(statearr_55293_55312[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55288 === (6)))
{var inst_55270 = (state_55287[(7)]);var state_55287__$1 = state_55287;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55287__$1,(11),to,inst_55270);
} else
{if((state_val_55288 === (3)))
{var inst_55285 = (state_55287[(2)]);var state_55287__$1 = state_55287;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55287__$1,inst_55285);
} else
{if((state_val_55288 === (2)))
{var state_55287__$1 = state_55287;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55287__$1,(4),from);
} else
{if((state_val_55288 === (11)))
{var inst_55280 = (state_55287[(2)]);var state_55287__$1 = (function (){var statearr_55294 = state_55287;(statearr_55294[(8)] = inst_55280);
return statearr_55294;
})();var statearr_55295_55313 = state_55287__$1;(statearr_55295_55313[(2)] = null);
(statearr_55295_55313[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55288 === (9)))
{var state_55287__$1 = state_55287;var statearr_55296_55314 = state_55287__$1;(statearr_55296_55314[(2)] = null);
(statearr_55296_55314[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55288 === (5)))
{var state_55287__$1 = state_55287;if(cljs.core.truth_(close_QMARK_))
{var statearr_55297_55315 = state_55287__$1;(statearr_55297_55315[(1)] = (8));
} else
{var statearr_55298_55316 = state_55287__$1;(statearr_55298_55316[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55288 === (10)))
{var inst_55277 = (state_55287[(2)]);var state_55287__$1 = state_55287;var statearr_55299_55317 = state_55287__$1;(statearr_55299_55317[(2)] = inst_55277);
(statearr_55299_55317[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55288 === (8)))
{var inst_55274 = cljs.core.async.close_BANG_.call(null,to);var state_55287__$1 = state_55287;var statearr_55300_55318 = state_55287__$1;(statearr_55300_55318[(2)] = inst_55274);
(statearr_55300_55318[(1)] = (10));
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
});})(c__5708__auto___55308))
;return ((function (switch__5693__auto__,c__5708__auto___55308){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_55304 = [null,null,null,null,null,null,null,null,null];(statearr_55304[(0)] = state_machine__5694__auto__);
(statearr_55304[(1)] = (1));
return statearr_55304;
});
var state_machine__5694__auto____1 = (function (state_55287){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_55287);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e55305){if((e55305 instanceof Object))
{var ex__5697__auto__ = e55305;var statearr_55306_55319 = state_55287;(statearr_55306_55319[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55287);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e55305;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__55320 = state_55287;
state_55287 = G__55320;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_55287){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_55287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___55308))
})();var state__5710__auto__ = (function (){var statearr_55307 = f__5709__auto__.call(null);(statearr_55307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___55308);
return statearr_55307;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___55308))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5708__auto___55407 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___55407,tc,fc){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___55407,tc,fc){
return (function (state_55385){var state_val_55386 = (state_55385[(1)]);if((state_val_55386 === (7)))
{var inst_55381 = (state_55385[(2)]);var state_55385__$1 = state_55385;var statearr_55387_55408 = state_55385__$1;(statearr_55387_55408[(2)] = inst_55381);
(statearr_55387_55408[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55386 === (1)))
{var state_55385__$1 = state_55385;var statearr_55388_55409 = state_55385__$1;(statearr_55388_55409[(2)] = null);
(statearr_55388_55409[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55386 === (4)))
{var inst_55366 = (state_55385[(7)]);var inst_55366__$1 = (state_55385[(2)]);var inst_55367 = (inst_55366__$1 == null);var state_55385__$1 = (function (){var statearr_55389 = state_55385;(statearr_55389[(7)] = inst_55366__$1);
return statearr_55389;
})();if(cljs.core.truth_(inst_55367))
{var statearr_55390_55410 = state_55385__$1;(statearr_55390_55410[(1)] = (5));
} else
{var statearr_55391_55411 = state_55385__$1;(statearr_55391_55411[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55386 === (6)))
{var inst_55366 = (state_55385[(7)]);var inst_55372 = p.call(null,inst_55366);var state_55385__$1 = state_55385;if(cljs.core.truth_(inst_55372))
{var statearr_55392_55412 = state_55385__$1;(statearr_55392_55412[(1)] = (9));
} else
{var statearr_55393_55413 = state_55385__$1;(statearr_55393_55413[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55386 === (3)))
{var inst_55383 = (state_55385[(2)]);var state_55385__$1 = state_55385;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55385__$1,inst_55383);
} else
{if((state_val_55386 === (2)))
{var state_55385__$1 = state_55385;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55385__$1,(4),ch);
} else
{if((state_val_55386 === (11)))
{var inst_55366 = (state_55385[(7)]);var inst_55376 = (state_55385[(2)]);var state_55385__$1 = state_55385;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55385__$1,(8),inst_55376,inst_55366);
} else
{if((state_val_55386 === (9)))
{var state_55385__$1 = state_55385;var statearr_55394_55414 = state_55385__$1;(statearr_55394_55414[(2)] = tc);
(statearr_55394_55414[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55386 === (5)))
{var inst_55369 = cljs.core.async.close_BANG_.call(null,tc);var inst_55370 = cljs.core.async.close_BANG_.call(null,fc);var state_55385__$1 = (function (){var statearr_55395 = state_55385;(statearr_55395[(8)] = inst_55369);
return statearr_55395;
})();var statearr_55396_55415 = state_55385__$1;(statearr_55396_55415[(2)] = inst_55370);
(statearr_55396_55415[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55386 === (10)))
{var state_55385__$1 = state_55385;var statearr_55397_55416 = state_55385__$1;(statearr_55397_55416[(2)] = fc);
(statearr_55397_55416[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55386 === (8)))
{var inst_55378 = (state_55385[(2)]);var state_55385__$1 = (function (){var statearr_55398 = state_55385;(statearr_55398[(9)] = inst_55378);
return statearr_55398;
})();var statearr_55399_55417 = state_55385__$1;(statearr_55399_55417[(2)] = null);
(statearr_55399_55417[(1)] = (2));
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
});})(c__5708__auto___55407,tc,fc))
;return ((function (switch__5693__auto__,c__5708__auto___55407,tc,fc){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_55403 = [null,null,null,null,null,null,null,null,null,null];(statearr_55403[(0)] = state_machine__5694__auto__);
(statearr_55403[(1)] = (1));
return statearr_55403;
});
var state_machine__5694__auto____1 = (function (state_55385){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_55385);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e55404){if((e55404 instanceof Object))
{var ex__5697__auto__ = e55404;var statearr_55405_55418 = state_55385;(statearr_55405_55418[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55385);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e55404;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__55419 = state_55385;
state_55385 = G__55419;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_55385){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_55385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___55407,tc,fc))
})();var state__5710__auto__ = (function (){var statearr_55406 = f__5709__auto__.call(null);(statearr_55406[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___55407);
return statearr_55406;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___55407,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_55466){var state_val_55467 = (state_55466[(1)]);if((state_val_55467 === (7)))
{var inst_55462 = (state_55466[(2)]);var state_55466__$1 = state_55466;var statearr_55468_55484 = state_55466__$1;(statearr_55468_55484[(2)] = inst_55462);
(statearr_55468_55484[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55467 === (6)))
{var inst_55455 = (state_55466[(7)]);var inst_55452 = (state_55466[(8)]);var inst_55459 = f.call(null,inst_55452,inst_55455);var inst_55452__$1 = inst_55459;var state_55466__$1 = (function (){var statearr_55469 = state_55466;(statearr_55469[(8)] = inst_55452__$1);
return statearr_55469;
})();var statearr_55470_55485 = state_55466__$1;(statearr_55470_55485[(2)] = null);
(statearr_55470_55485[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55467 === (5)))
{var inst_55452 = (state_55466[(8)]);var state_55466__$1 = state_55466;var statearr_55471_55486 = state_55466__$1;(statearr_55471_55486[(2)] = inst_55452);
(statearr_55471_55486[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55467 === (4)))
{var inst_55455 = (state_55466[(7)]);var inst_55455__$1 = (state_55466[(2)]);var inst_55456 = (inst_55455__$1 == null);var state_55466__$1 = (function (){var statearr_55472 = state_55466;(statearr_55472[(7)] = inst_55455__$1);
return statearr_55472;
})();if(cljs.core.truth_(inst_55456))
{var statearr_55473_55487 = state_55466__$1;(statearr_55473_55487[(1)] = (5));
} else
{var statearr_55474_55488 = state_55466__$1;(statearr_55474_55488[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55467 === (3)))
{var inst_55464 = (state_55466[(2)]);var state_55466__$1 = state_55466;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55466__$1,inst_55464);
} else
{if((state_val_55467 === (2)))
{var state_55466__$1 = state_55466;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55466__$1,(4),ch);
} else
{if((state_val_55467 === (1)))
{var inst_55452 = init;var state_55466__$1 = (function (){var statearr_55475 = state_55466;(statearr_55475[(8)] = inst_55452);
return statearr_55475;
})();var statearr_55476_55489 = state_55466__$1;(statearr_55476_55489[(2)] = null);
(statearr_55476_55489[(1)] = (2));
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
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_55480 = [null,null,null,null,null,null,null,null,null];(statearr_55480[(0)] = state_machine__5694__auto__);
(statearr_55480[(1)] = (1));
return statearr_55480;
});
var state_machine__5694__auto____1 = (function (state_55466){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_55466);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e55481){if((e55481 instanceof Object))
{var ex__5697__auto__ = e55481;var statearr_55482_55490 = state_55466;(statearr_55482_55490[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55466);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e55481;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__55491 = state_55466;
state_55466 = G__55491;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_55466){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_55466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_55483 = f__5709__auto__.call(null);(statearr_55483[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_55483;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_55553){var state_val_55554 = (state_55553[(1)]);if((state_val_55554 === (7)))
{var inst_55534 = (state_55553[(7)]);var inst_55539 = (state_55553[(2)]);var inst_55540 = cljs.core.next.call(null,inst_55534);var inst_55534__$1 = inst_55540;var state_55553__$1 = (function (){var statearr_55555 = state_55553;(statearr_55555[(8)] = inst_55539);
(statearr_55555[(7)] = inst_55534__$1);
return statearr_55555;
})();var statearr_55556_55574 = state_55553__$1;(statearr_55556_55574[(2)] = null);
(statearr_55556_55574[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55554 === (1)))
{var inst_55533 = cljs.core.seq.call(null,coll);var inst_55534 = inst_55533;var state_55553__$1 = (function (){var statearr_55557 = state_55553;(statearr_55557[(7)] = inst_55534);
return statearr_55557;
})();var statearr_55558_55575 = state_55553__$1;(statearr_55558_55575[(2)] = null);
(statearr_55558_55575[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55554 === (4)))
{var inst_55534 = (state_55553[(7)]);var inst_55537 = cljs.core.first.call(null,inst_55534);var state_55553__$1 = state_55553;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55553__$1,(7),ch,inst_55537);
} else
{if((state_val_55554 === (6)))
{var inst_55549 = (state_55553[(2)]);var state_55553__$1 = state_55553;var statearr_55559_55576 = state_55553__$1;(statearr_55559_55576[(2)] = inst_55549);
(statearr_55559_55576[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55554 === (3)))
{var inst_55551 = (state_55553[(2)]);var state_55553__$1 = state_55553;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55553__$1,inst_55551);
} else
{if((state_val_55554 === (2)))
{var inst_55534 = (state_55553[(7)]);var state_55553__$1 = state_55553;if(cljs.core.truth_(inst_55534))
{var statearr_55560_55577 = state_55553__$1;(statearr_55560_55577[(1)] = (4));
} else
{var statearr_55561_55578 = state_55553__$1;(statearr_55561_55578[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55554 === (9)))
{var state_55553__$1 = state_55553;var statearr_55562_55579 = state_55553__$1;(statearr_55562_55579[(2)] = null);
(statearr_55562_55579[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55554 === (5)))
{var state_55553__$1 = state_55553;if(cljs.core.truth_(close_QMARK_))
{var statearr_55563_55580 = state_55553__$1;(statearr_55563_55580[(1)] = (8));
} else
{var statearr_55564_55581 = state_55553__$1;(statearr_55564_55581[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55554 === (10)))
{var inst_55547 = (state_55553[(2)]);var state_55553__$1 = state_55553;var statearr_55565_55582 = state_55553__$1;(statearr_55565_55582[(2)] = inst_55547);
(statearr_55565_55582[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55554 === (8)))
{var inst_55544 = cljs.core.async.close_BANG_.call(null,ch);var state_55553__$1 = state_55553;var statearr_55566_55583 = state_55553__$1;(statearr_55566_55583[(2)] = inst_55544);
(statearr_55566_55583[(1)] = (10));
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
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_55570 = [null,null,null,null,null,null,null,null,null];(statearr_55570[(0)] = state_machine__5694__auto__);
(statearr_55570[(1)] = (1));
return statearr_55570;
});
var state_machine__5694__auto____1 = (function (state_55553){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_55553);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e55571){if((e55571 instanceof Object))
{var ex__5697__auto__ = e55571;var statearr_55572_55584 = state_55553;(statearr_55572_55584[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55553);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e55571;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__55585 = state_55553;
state_55553 = G__55585;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_55553){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_55553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_55573 = f__5709__auto__.call(null);(statearr_55573[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_55573;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
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
cljs.core.async.Mux = (function (){var obj55587 = {};return obj55587;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3546__auto__ = _;if(and__3546__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3546__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4185__auto__ = (((_ == null))?null:_);return (function (){var or__3558__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj55589 = {};return obj55589;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t55813 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t55813 = (function (cs,ch,mult,meta55814){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta55814 = meta55814;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t55813.cljs$lang$type = true;
cljs.core.async.t55813.cljs$lang$ctorStr = "cljs.core.async/t55813";
cljs.core.async.t55813.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t55813");
});})(cs))
;
cljs.core.async.t55813.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t55813.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t55813.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t55813.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t55813.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t55813.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t55813.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_55815){var self__ = this;
var _55815__$1 = this;return self__.meta55814;
});})(cs))
;
cljs.core.async.t55813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_55815,meta55814__$1){var self__ = this;
var _55815__$1 = this;return (new cljs.core.async.t55813(self__.cs,self__.ch,self__.mult,meta55814__$1));
});})(cs))
;
cljs.core.async.__GT_t55813 = ((function (cs){
return (function __GT_t55813(cs__$1,ch__$1,mult__$1,meta55814){return (new cljs.core.async.t55813(cs__$1,ch__$1,mult__$1,meta55814));
});})(cs))
;
}
return (new cljs.core.async.t55813(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5708__auto___56036 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___56036,cs,m,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___56036,cs,m,dchan,dctr,done){
return (function (state_55950){var state_val_55951 = (state_55950[(1)]);if((state_val_55951 === (7)))
{var inst_55946 = (state_55950[(2)]);var state_55950__$1 = state_55950;var statearr_55952_56037 = state_55950__$1;(statearr_55952_56037[(2)] = inst_55946);
(statearr_55952_56037[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55951 === (20)))
{var inst_55847 = (state_55950[(7)]);var inst_55857 = cljs.core.first.call(null,inst_55847);var inst_55858 = cljs.core.nth.call(null,inst_55857,(0),null);var inst_55859 = cljs.core.nth.call(null,inst_55857,(1),null);var state_55950__$1 = (function (){var statearr_55953 = state_55950;(statearr_55953[(8)] = inst_55858);
return statearr_55953;
})();if(cljs.core.truth_(inst_55859))
{var statearr_55954_56038 = state_55950__$1;(statearr_55954_56038[(1)] = (22));
} else
{var statearr_55955_56039 = state_55950__$1;(statearr_55955_56039[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55951 === (27)))
{var inst_55887 = (state_55950[(9)]);var inst_55889 = (state_55950[(10)]);var inst_55894 = cljs.core._nth.call(null,inst_55887,inst_55889);var state_55950__$1 = (function (){var statearr_55956 = state_55950;(statearr_55956[(11)] = inst_55894);
return statearr_55956;
})();var statearr_55957_56040 = state_55950__$1;(statearr_55957_56040[(2)] = null);
(statearr_55957_56040[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55951 === (1)))
{var state_55950__$1 = state_55950;var statearr_55958_56041 = state_55950__$1;(statearr_55958_56041[(2)] = null);
(statearr_55958_56041[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55951 === (24)))
{var inst_55847 = (state_55950[(7)]);var inst_55864 = (state_55950[(2)]);var inst_55865 = cljs.core.next.call(null,inst_55847);var inst_55827 = inst_55865;var inst_55828 = null;var inst_55829 = (0);var inst_55830 = (0);var state_55950__$1 = (function (){var statearr_55959 = state_55950;(statearr_55959[(12)] = inst_55830);
(statearr_55959[(13)] = inst_55829);
(statearr_55959[(14)] = inst_55864);
(statearr_55959[(15)] = inst_55827);
(statearr_55959[(16)] = inst_55828);
return statearr_55959;
})();var statearr_55960_56042 = state_55950__$1;(statearr_55960_56042[(2)] = null);
(statearr_55960_56042[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55951 === (39)))
{var inst_55907 = (state_55950[(17)]);var inst_55925 = (state_55950[(2)]);var inst_55926 = cljs.core.next.call(null,inst_55907);var inst_55886 = inst_55926;var inst_55887 = null;var inst_55888 = (0);var inst_55889 = (0);var state_55950__$1 = (function (){var statearr_55964 = state_55950;(statearr_55964[(18)] = inst_55888);
(statearr_55964[(19)] = inst_55886);
(statearr_55964[(20)] = inst_55925);
(statearr_55964[(9)] = inst_55887);
(statearr_55964[(10)] = inst_55889);
return statearr_55964;
})();var statearr_55965_56043 = state_55950__$1;(statearr_55965_56043[(2)] = null);
(statearr_55965_56043[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55951 === (4)))
{var inst_55818 = (state_55950[(21)]);var inst_55818__$1 = (state_55950[(2)]);var inst_55819 = (inst_55818__$1 == null);var state_55950__$1 = (function (){var statearr_55966 = state_55950;(statearr_55966[(21)] = inst_55818__$1);
return statearr_55966;
})();if(cljs.core.truth_(inst_55819))
{var statearr_55967_56044 = state_55950__$1;(statearr_55967_56044[(1)] = (5));
} else
{var statearr_55968_56045 = state_55950__$1;(statearr_55968_56045[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55951 === (15)))
{var inst_55830 = (state_55950[(12)]);var inst_55829 = (state_55950[(13)]);var inst_55827 = (state_55950[(15)]);var inst_55828 = (state_55950[(16)]);var inst_55843 = (state_55950[(2)]);var inst_55844 = (inst_55830 + (1));var tmp55961 = inst_55829;var tmp55962 = inst_55827;var tmp55963 = inst_55828;var inst_55827__$1 = tmp55962;var inst_55828__$1 = tmp55963;var inst_55829__$1 = tmp55961;var inst_55830__$1 = inst_55844;var state_55950__$1 = (function (){var statearr_55969 = state_55950;(statearr_55969[(22)] = inst_55843);
(statearr_55969[(12)] = inst_55830__$1);
(statearr_55969[(13)] = inst_55829__$1);
(statearr_55969[(15)] = inst_55827__$1);
(statearr_55969[(16)] = inst_55828__$1);
return statearr_55969;
})();var statearr_55970_56046 = state_55950__$1;(statearr_55970_56046[(2)] = null);
(statearr_55970_56046[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55951 === (21)))
{var inst_55868 = (state_55950[(2)]);var state_55950__$1 = state_55950;var statearr_55971_56047 = state_55950__$1;(statearr_55971_56047[(2)] = inst_55868);
(statearr_55971_56047[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55951 === (31)))
{var inst_55894 = (state_55950[(11)]);var inst_55895 = (state_55950[(2)]);var inst_55896 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_55897 = cljs.core.async.untap_STAR_.call(null,m,inst_55894);var state_55950__$1 = (function (){var statearr_55972 = state_55950;(statearr_55972[(23)] = inst_55896);
(statearr_55972[(24)] = inst_55895);
return statearr_55972;
})();var statearr_55973_56048 = state_55950__$1;(statearr_55973_56048[(2)] = inst_55897);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55950__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55951 === (32)))
{var inst_55818 = (state_55950[(21)]);var inst_55894 = (state_55950[(11)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_55950,(31),Object,null,(30));var inst_55901 = cljs.core.async.put_BANG_.call(null,inst_55894,inst_55818,done);var state_55950__$1 = state_55950;var statearr_55974_56049 = state_55950__$1;(statearr_55974_56049[(2)] = inst_55901);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55950__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55951 === (40)))
{var inst_55916 = (state_55950[(25)]);var inst_55917 = (state_55950[(2)]);var inst_55918 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_55919 = cljs.core.async.untap_STAR_.call(null,m,inst_55916);var state_55950__$1 = (function (){var statearr_55975 = state_55950;(statearr_55975[(26)] = inst_55918);
(statearr_55975[(27)] = inst_55917);
return statearr_55975;
})();var statearr_55976_56050 = state_55950__$1;(statearr_55976_56050[(2)] = inst_55919);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55950__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55951 === (33)))
{var inst_55907 = (state_55950[(17)]);var inst_55909 = cljs.core.chunked_seq_QMARK_.call(null,inst_55907);var state_55950__$1 = state_55950;if(inst_55909)
{var statearr_55977_56051 = state_55950__$1;(statearr_55977_56051[(1)] = (36));
} else
{var statearr_55978_56052 = state_55950__$1;(statearr_55978_56052[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55951 === (13)))
{var inst_55837 = (state_55950[(28)]);var inst_55840 = cljs.core.async.close_BANG_.call(null,inst_55837);var state_55950__$1 = state_55950;var statearr_55979_56053 = state_55950__$1;(statearr_55979_56053[(2)] = inst_55840);
(statearr_55979_56053[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55951 === (22)))
{var inst_55858 = (state_55950[(8)]);var inst_55861 = cljs.core.async.close_BANG_.call(null,inst_55858);var state_55950__$1 = state_55950;var statearr_55980_56054 = state_55950__$1;(statearr_55980_56054[(2)] = inst_55861);
(statearr_55980_56054[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55951 === (36)))
{var inst_55907 = (state_55950[(17)]);var inst_55911 = cljs.core.chunk_first.call(null,inst_55907);var inst_55912 = cljs.core.chunk_rest.call(null,inst_55907);var inst_55913 = cljs.core.count.call(null,inst_55911);var inst_55886 = inst_55912;var inst_55887 = inst_55911;var inst_55888 = inst_55913;var inst_55889 = (0);var state_55950__$1 = (function (){var statearr_55981 = state_55950;(statearr_55981[(18)] = inst_55888);
(statearr_55981[(19)] = inst_55886);
(statearr_55981[(9)] = inst_55887);
(statearr_55981[(10)] = inst_55889);
return statearr_55981;
})();var statearr_55982_56055 = state_55950__$1;(statearr_55982_56055[(2)] = null);
(statearr_55982_56055[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55951 === (41)))
{var inst_55818 = (state_55950[(21)]);var inst_55916 = (state_55950[(25)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_55950,(40),Object,null,(39));var inst_55923 = cljs.core.async.put_BANG_.call(null,inst_55916,inst_55818,done);var state_55950__$1 = state_55950;var statearr_55983_56056 = state_55950__$1;(statearr_55983_56056[(2)] = inst_55923);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55950__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55951 === (43)))
{var state_55950__$1 = state_55950;var statearr_55984_56057 = state_55950__$1;(statearr_55984_56057[(2)] = null);
(statearr_55984_56057[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55951 === (29)))
{var inst_55934 = (state_55950[(2)]);var state_55950__$1 = state_55950;var statearr_55985_56058 = state_55950__$1;(statearr_55985_56058[(2)] = inst_55934);
(statearr_55985_56058[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55951 === (44)))
{var inst_55943 = (state_55950[(2)]);var state_55950__$1 = (function (){var statearr_55986 = state_55950;(statearr_55986[(29)] = inst_55943);
return statearr_55986;
})();var statearr_55987_56059 = state_55950__$1;(statearr_55987_56059[(2)] = null);
(statearr_55987_56059[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55951 === (6)))
{var inst_55878 = (state_55950[(30)]);var inst_55877 = cljs.core.deref.call(null,cs);var inst_55878__$1 = cljs.core.keys.call(null,inst_55877);var inst_55879 = cljs.core.count.call(null,inst_55878__$1);var inst_55880 = cljs.core.reset_BANG_.call(null,dctr,inst_55879);var inst_55885 = cljs.core.seq.call(null,inst_55878__$1);var inst_55886 = inst_55885;var inst_55887 = null;var inst_55888 = (0);var inst_55889 = (0);var state_55950__$1 = (function (){var statearr_55988 = state_55950;(statearr_55988[(18)] = inst_55888);
(statearr_55988[(19)] = inst_55886);
(statearr_55988[(9)] = inst_55887);
(statearr_55988[(31)] = inst_55880);
(statearr_55988[(30)] = inst_55878__$1);
(statearr_55988[(10)] = inst_55889);
return statearr_55988;
})();var statearr_55989_56060 = state_55950__$1;(statearr_55989_56060[(2)] = null);
(statearr_55989_56060[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55951 === (28)))
{var inst_55907 = (state_55950[(17)]);var inst_55886 = (state_55950[(19)]);var inst_55907__$1 = cljs.core.seq.call(null,inst_55886);var state_55950__$1 = (function (){var statearr_55990 = state_55950;(statearr_55990[(17)] = inst_55907__$1);
return statearr_55990;
})();if(inst_55907__$1)
{var statearr_55991_56061 = state_55950__$1;(statearr_55991_56061[(1)] = (33));
} else
{var statearr_55992_56062 = state_55950__$1;(statearr_55992_56062[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55951 === (25)))
{var inst_55888 = (state_55950[(18)]);var inst_55889 = (state_55950[(10)]);var inst_55891 = (inst_55889 < inst_55888);var inst_55892 = inst_55891;var state_55950__$1 = state_55950;if(cljs.core.truth_(inst_55892))
{var statearr_55993_56063 = state_55950__$1;(statearr_55993_56063[(1)] = (27));
} else
{var statearr_55994_56064 = state_55950__$1;(statearr_55994_56064[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55951 === (34)))
{var state_55950__$1 = state_55950;var statearr_55995_56065 = state_55950__$1;(statearr_55995_56065[(2)] = null);
(statearr_55995_56065[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55951 === (17)))
{var state_55950__$1 = state_55950;var statearr_55996_56066 = state_55950__$1;(statearr_55996_56066[(2)] = null);
(statearr_55996_56066[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55951 === (3)))
{var inst_55948 = (state_55950[(2)]);var state_55950__$1 = state_55950;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55950__$1,inst_55948);
} else
{if((state_val_55951 === (12)))
{var inst_55873 = (state_55950[(2)]);var state_55950__$1 = state_55950;var statearr_55997_56067 = state_55950__$1;(statearr_55997_56067[(2)] = inst_55873);
(statearr_55997_56067[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55951 === (2)))
{var state_55950__$1 = state_55950;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55950__$1,(4),ch);
} else
{if((state_val_55951 === (23)))
{var state_55950__$1 = state_55950;var statearr_55998_56068 = state_55950__$1;(statearr_55998_56068[(2)] = null);
(statearr_55998_56068[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55951 === (35)))
{var inst_55932 = (state_55950[(2)]);var state_55950__$1 = state_55950;var statearr_55999_56069 = state_55950__$1;(statearr_55999_56069[(2)] = inst_55932);
(statearr_55999_56069[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55951 === (19)))
{var inst_55847 = (state_55950[(7)]);var inst_55851 = cljs.core.chunk_first.call(null,inst_55847);var inst_55852 = cljs.core.chunk_rest.call(null,inst_55847);var inst_55853 = cljs.core.count.call(null,inst_55851);var inst_55827 = inst_55852;var inst_55828 = inst_55851;var inst_55829 = inst_55853;var inst_55830 = (0);var state_55950__$1 = (function (){var statearr_56000 = state_55950;(statearr_56000[(12)] = inst_55830);
(statearr_56000[(13)] = inst_55829);
(statearr_56000[(15)] = inst_55827);
(statearr_56000[(16)] = inst_55828);
return statearr_56000;
})();var statearr_56001_56070 = state_55950__$1;(statearr_56001_56070[(2)] = null);
(statearr_56001_56070[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55951 === (11)))
{var inst_55847 = (state_55950[(7)]);var inst_55827 = (state_55950[(15)]);var inst_55847__$1 = cljs.core.seq.call(null,inst_55827);var state_55950__$1 = (function (){var statearr_56002 = state_55950;(statearr_56002[(7)] = inst_55847__$1);
return statearr_56002;
})();if(inst_55847__$1)
{var statearr_56003_56071 = state_55950__$1;(statearr_56003_56071[(1)] = (16));
} else
{var statearr_56004_56072 = state_55950__$1;(statearr_56004_56072[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55951 === (9)))
{var inst_55875 = (state_55950[(2)]);var state_55950__$1 = state_55950;var statearr_56005_56073 = state_55950__$1;(statearr_56005_56073[(2)] = inst_55875);
(statearr_56005_56073[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55951 === (5)))
{var inst_55825 = cljs.core.deref.call(null,cs);var inst_55826 = cljs.core.seq.call(null,inst_55825);var inst_55827 = inst_55826;var inst_55828 = null;var inst_55829 = (0);var inst_55830 = (0);var state_55950__$1 = (function (){var statearr_56006 = state_55950;(statearr_56006[(12)] = inst_55830);
(statearr_56006[(13)] = inst_55829);
(statearr_56006[(15)] = inst_55827);
(statearr_56006[(16)] = inst_55828);
return statearr_56006;
})();var statearr_56007_56074 = state_55950__$1;(statearr_56007_56074[(2)] = null);
(statearr_56007_56074[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55951 === (14)))
{var state_55950__$1 = state_55950;var statearr_56008_56075 = state_55950__$1;(statearr_56008_56075[(2)] = null);
(statearr_56008_56075[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55951 === (45)))
{var inst_55940 = (state_55950[(2)]);var state_55950__$1 = state_55950;var statearr_56009_56076 = state_55950__$1;(statearr_56009_56076[(2)] = inst_55940);
(statearr_56009_56076[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55951 === (26)))
{var inst_55878 = (state_55950[(30)]);var inst_55936 = (state_55950[(2)]);var inst_55937 = cljs.core.seq.call(null,inst_55878);var state_55950__$1 = (function (){var statearr_56010 = state_55950;(statearr_56010[(32)] = inst_55936);
return statearr_56010;
})();if(inst_55937)
{var statearr_56011_56077 = state_55950__$1;(statearr_56011_56077[(1)] = (42));
} else
{var statearr_56012_56078 = state_55950__$1;(statearr_56012_56078[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55951 === (16)))
{var inst_55847 = (state_55950[(7)]);var inst_55849 = cljs.core.chunked_seq_QMARK_.call(null,inst_55847);var state_55950__$1 = state_55950;if(inst_55849)
{var statearr_56016_56079 = state_55950__$1;(statearr_56016_56079[(1)] = (19));
} else
{var statearr_56017_56080 = state_55950__$1;(statearr_56017_56080[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55951 === (38)))
{var inst_55929 = (state_55950[(2)]);var state_55950__$1 = state_55950;var statearr_56018_56081 = state_55950__$1;(statearr_56018_56081[(2)] = inst_55929);
(statearr_56018_56081[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55951 === (30)))
{var inst_55888 = (state_55950[(18)]);var inst_55886 = (state_55950[(19)]);var inst_55887 = (state_55950[(9)]);var inst_55889 = (state_55950[(10)]);var inst_55903 = (state_55950[(2)]);var inst_55904 = (inst_55889 + (1));var tmp56013 = inst_55888;var tmp56014 = inst_55886;var tmp56015 = inst_55887;var inst_55886__$1 = tmp56014;var inst_55887__$1 = tmp56015;var inst_55888__$1 = tmp56013;var inst_55889__$1 = inst_55904;var state_55950__$1 = (function (){var statearr_56019 = state_55950;(statearr_56019[(18)] = inst_55888__$1);
(statearr_56019[(19)] = inst_55886__$1);
(statearr_56019[(9)] = inst_55887__$1);
(statearr_56019[(33)] = inst_55903);
(statearr_56019[(10)] = inst_55889__$1);
return statearr_56019;
})();var statearr_56020_56082 = state_55950__$1;(statearr_56020_56082[(2)] = null);
(statearr_56020_56082[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55951 === (10)))
{var inst_55830 = (state_55950[(12)]);var inst_55828 = (state_55950[(16)]);var inst_55836 = cljs.core._nth.call(null,inst_55828,inst_55830);var inst_55837 = cljs.core.nth.call(null,inst_55836,(0),null);var inst_55838 = cljs.core.nth.call(null,inst_55836,(1),null);var state_55950__$1 = (function (){var statearr_56021 = state_55950;(statearr_56021[(28)] = inst_55837);
return statearr_56021;
})();if(cljs.core.truth_(inst_55838))
{var statearr_56022_56083 = state_55950__$1;(statearr_56022_56083[(1)] = (13));
} else
{var statearr_56023_56084 = state_55950__$1;(statearr_56023_56084[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55951 === (18)))
{var inst_55871 = (state_55950[(2)]);var state_55950__$1 = state_55950;var statearr_56024_56085 = state_55950__$1;(statearr_56024_56085[(2)] = inst_55871);
(statearr_56024_56085[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55951 === (42)))
{var state_55950__$1 = state_55950;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55950__$1,(45),dchan);
} else
{if((state_val_55951 === (37)))
{var inst_55907 = (state_55950[(17)]);var inst_55916 = cljs.core.first.call(null,inst_55907);var state_55950__$1 = (function (){var statearr_56025 = state_55950;(statearr_56025[(25)] = inst_55916);
return statearr_56025;
})();var statearr_56026_56086 = state_55950__$1;(statearr_56026_56086[(2)] = null);
(statearr_56026_56086[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55951 === (8)))
{var inst_55830 = (state_55950[(12)]);var inst_55829 = (state_55950[(13)]);var inst_55832 = (inst_55830 < inst_55829);var inst_55833 = inst_55832;var state_55950__$1 = state_55950;if(cljs.core.truth_(inst_55833))
{var statearr_56027_56087 = state_55950__$1;(statearr_56027_56087[(1)] = (10));
} else
{var statearr_56028_56088 = state_55950__$1;(statearr_56028_56088[(1)] = (11));
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
});})(c__5708__auto___56036,cs,m,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___56036,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_56032 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_56032[(0)] = state_machine__5694__auto__);
(statearr_56032[(1)] = (1));
return statearr_56032;
});
var state_machine__5694__auto____1 = (function (state_55950){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_55950);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e56033){if((e56033 instanceof Object))
{var ex__5697__auto__ = e56033;var statearr_56034_56089 = state_55950;(statearr_56034_56089[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55950);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e56033;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__56090 = state_55950;
state_55950 = G__56090;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_55950){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_55950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___56036,cs,m,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_56035 = f__5709__auto__.call(null);(statearr_56035[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___56036);
return statearr_56035;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___56036,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj56092 = {};return obj56092;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t56202 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t56202 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta56203){
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
this.meta56203 = meta56203;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t56202.cljs$lang$type = true;
cljs.core.async.t56202.cljs$lang$ctorStr = "cljs.core.async/t56202";
cljs.core.async.t56202.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t56202");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t56202.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t56202.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t56202.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t56202.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t56202.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t56202.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t56202.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t56202.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t56202.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_56204){var self__ = this;
var _56204__$1 = this;return self__.meta56203;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t56202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_56204,meta56203__$1){var self__ = this;
var _56204__$1 = this;return (new cljs.core.async.t56202(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta56203__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t56202 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t56202(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta56203){return (new cljs.core.async.t56202(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta56203));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t56202(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5708__auto___56311 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___56311,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___56311,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_56269){var state_val_56270 = (state_56269[(1)]);if((state_val_56270 === (7)))
{var inst_56218 = (state_56269[(7)]);var inst_56223 = cljs.core.apply.call(null,cljs.core.hash_map,inst_56218);var state_56269__$1 = state_56269;var statearr_56271_56312 = state_56269__$1;(statearr_56271_56312[(2)] = inst_56223);
(statearr_56271_56312[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56270 === (20)))
{var inst_56233 = (state_56269[(8)]);var state_56269__$1 = state_56269;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56269__$1,(23),out,inst_56233);
} else
{if((state_val_56270 === (1)))
{var inst_56208 = (state_56269[(9)]);var inst_56208__$1 = calc_state.call(null);var inst_56209 = cljs.core.seq_QMARK_.call(null,inst_56208__$1);var state_56269__$1 = (function (){var statearr_56272 = state_56269;(statearr_56272[(9)] = inst_56208__$1);
return statearr_56272;
})();if(inst_56209)
{var statearr_56273_56313 = state_56269__$1;(statearr_56273_56313[(1)] = (2));
} else
{var statearr_56274_56314 = state_56269__$1;(statearr_56274_56314[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56270 === (4)))
{var inst_56208 = (state_56269[(9)]);var inst_56214 = (state_56269[(2)]);var inst_56215 = cljs.core.get.call(null,inst_56214,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_56216 = cljs.core.get.call(null,inst_56214,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_56217 = cljs.core.get.call(null,inst_56214,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_56218 = inst_56208;var state_56269__$1 = (function (){var statearr_56275 = state_56269;(statearr_56275[(10)] = inst_56215);
(statearr_56275[(7)] = inst_56218);
(statearr_56275[(11)] = inst_56216);
(statearr_56275[(12)] = inst_56217);
return statearr_56275;
})();var statearr_56276_56315 = state_56269__$1;(statearr_56276_56315[(2)] = null);
(statearr_56276_56315[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56270 === (15)))
{var state_56269__$1 = state_56269;var statearr_56277_56316 = state_56269__$1;(statearr_56277_56316[(2)] = null);
(statearr_56277_56316[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56270 === (21)))
{var state_56269__$1 = state_56269;var statearr_56278_56317 = state_56269__$1;(statearr_56278_56317[(2)] = null);
(statearr_56278_56317[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56270 === (13)))
{var inst_56265 = (state_56269[(2)]);var state_56269__$1 = state_56269;var statearr_56279_56318 = state_56269__$1;(statearr_56279_56318[(2)] = inst_56265);
(statearr_56279_56318[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56270 === (22)))
{var inst_56226 = (state_56269[(13)]);var inst_56262 = (state_56269[(2)]);var inst_56218 = inst_56226;var state_56269__$1 = (function (){var statearr_56280 = state_56269;(statearr_56280[(7)] = inst_56218);
(statearr_56280[(14)] = inst_56262);
return statearr_56280;
})();var statearr_56281_56319 = state_56269__$1;(statearr_56281_56319[(2)] = null);
(statearr_56281_56319[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56270 === (6)))
{var inst_56267 = (state_56269[(2)]);var state_56269__$1 = state_56269;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56269__$1,inst_56267);
} else
{if((state_val_56270 === (17)))
{var inst_56248 = (state_56269[(15)]);var state_56269__$1 = state_56269;var statearr_56282_56320 = state_56269__$1;(statearr_56282_56320[(2)] = inst_56248);
(statearr_56282_56320[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56270 === (3)))
{var inst_56208 = (state_56269[(9)]);var state_56269__$1 = state_56269;var statearr_56283_56321 = state_56269__$1;(statearr_56283_56321[(2)] = inst_56208);
(statearr_56283_56321[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56270 === (12)))
{var inst_56234 = (state_56269[(16)]);var inst_56229 = (state_56269[(17)]);var inst_56248 = (state_56269[(15)]);var inst_56248__$1 = inst_56229.call(null,inst_56234);var state_56269__$1 = (function (){var statearr_56284 = state_56269;(statearr_56284[(15)] = inst_56248__$1);
return statearr_56284;
})();if(cljs.core.truth_(inst_56248__$1))
{var statearr_56285_56322 = state_56269__$1;(statearr_56285_56322[(1)] = (17));
} else
{var statearr_56286_56323 = state_56269__$1;(statearr_56286_56323[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56270 === (2)))
{var inst_56208 = (state_56269[(9)]);var inst_56211 = cljs.core.apply.call(null,cljs.core.hash_map,inst_56208);var state_56269__$1 = state_56269;var statearr_56287_56324 = state_56269__$1;(statearr_56287_56324[(2)] = inst_56211);
(statearr_56287_56324[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56270 === (23)))
{var inst_56259 = (state_56269[(2)]);var state_56269__$1 = state_56269;var statearr_56288_56325 = state_56269__$1;(statearr_56288_56325[(2)] = inst_56259);
(statearr_56288_56325[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56270 === (19)))
{var inst_56256 = (state_56269[(2)]);var state_56269__$1 = state_56269;if(cljs.core.truth_(inst_56256))
{var statearr_56289_56326 = state_56269__$1;(statearr_56289_56326[(1)] = (20));
} else
{var statearr_56290_56327 = state_56269__$1;(statearr_56290_56327[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56270 === (11)))
{var inst_56233 = (state_56269[(8)]);var inst_56239 = (inst_56233 == null);var state_56269__$1 = state_56269;if(cljs.core.truth_(inst_56239))
{var statearr_56291_56328 = state_56269__$1;(statearr_56291_56328[(1)] = (14));
} else
{var statearr_56292_56329 = state_56269__$1;(statearr_56292_56329[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56270 === (9)))
{var inst_56226 = (state_56269[(13)]);var inst_56226__$1 = (state_56269[(2)]);var inst_56227 = cljs.core.get.call(null,inst_56226__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_56228 = cljs.core.get.call(null,inst_56226__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_56229 = cljs.core.get.call(null,inst_56226__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_56269__$1 = (function (){var statearr_56293 = state_56269;(statearr_56293[(17)] = inst_56229);
(statearr_56293[(13)] = inst_56226__$1);
(statearr_56293[(18)] = inst_56228);
return statearr_56293;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_56269__$1,(10),inst_56227);
} else
{if((state_val_56270 === (5)))
{var inst_56218 = (state_56269[(7)]);var inst_56221 = cljs.core.seq_QMARK_.call(null,inst_56218);var state_56269__$1 = state_56269;if(inst_56221)
{var statearr_56294_56330 = state_56269__$1;(statearr_56294_56330[(1)] = (7));
} else
{var statearr_56295_56331 = state_56269__$1;(statearr_56295_56331[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56270 === (14)))
{var inst_56234 = (state_56269[(16)]);var inst_56241 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_56234);var state_56269__$1 = state_56269;var statearr_56296_56332 = state_56269__$1;(statearr_56296_56332[(2)] = inst_56241);
(statearr_56296_56332[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56270 === (16)))
{var inst_56244 = (state_56269[(2)]);var inst_56245 = calc_state.call(null);var inst_56218 = inst_56245;var state_56269__$1 = (function (){var statearr_56297 = state_56269;(statearr_56297[(7)] = inst_56218);
(statearr_56297[(19)] = inst_56244);
return statearr_56297;
})();var statearr_56298_56333 = state_56269__$1;(statearr_56298_56333[(2)] = null);
(statearr_56298_56333[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56270 === (10)))
{var inst_56233 = (state_56269[(8)]);var inst_56234 = (state_56269[(16)]);var inst_56232 = (state_56269[(2)]);var inst_56233__$1 = cljs.core.nth.call(null,inst_56232,(0),null);var inst_56234__$1 = cljs.core.nth.call(null,inst_56232,(1),null);var inst_56235 = (inst_56233__$1 == null);var inst_56236 = cljs.core._EQ_.call(null,inst_56234__$1,change);var inst_56237 = (inst_56235) || (inst_56236);var state_56269__$1 = (function (){var statearr_56299 = state_56269;(statearr_56299[(8)] = inst_56233__$1);
(statearr_56299[(16)] = inst_56234__$1);
return statearr_56299;
})();if(cljs.core.truth_(inst_56237))
{var statearr_56300_56334 = state_56269__$1;(statearr_56300_56334[(1)] = (11));
} else
{var statearr_56301_56335 = state_56269__$1;(statearr_56301_56335[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56270 === (18)))
{var inst_56234 = (state_56269[(16)]);var inst_56229 = (state_56269[(17)]);var inst_56228 = (state_56269[(18)]);var inst_56251 = cljs.core.empty_QMARK_.call(null,inst_56229);var inst_56252 = inst_56228.call(null,inst_56234);var inst_56253 = cljs.core.not.call(null,inst_56252);var inst_56254 = (inst_56251) && (inst_56253);var state_56269__$1 = state_56269;var statearr_56302_56336 = state_56269__$1;(statearr_56302_56336[(2)] = inst_56254);
(statearr_56302_56336[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56270 === (8)))
{var inst_56218 = (state_56269[(7)]);var state_56269__$1 = state_56269;var statearr_56303_56337 = state_56269__$1;(statearr_56303_56337[(2)] = inst_56218);
(statearr_56303_56337[(1)] = (9));
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
});})(c__5708__auto___56311,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5693__auto__,c__5708__auto___56311,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_56307 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_56307[(0)] = state_machine__5694__auto__);
(statearr_56307[(1)] = (1));
return statearr_56307;
});
var state_machine__5694__auto____1 = (function (state_56269){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_56269);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e56308){if((e56308 instanceof Object))
{var ex__5697__auto__ = e56308;var statearr_56309_56338 = state_56269;(statearr_56309_56338[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56269);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e56308;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__56339 = state_56269;
state_56269 = G__56339;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_56269){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_56269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___56311,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5710__auto__ = (function (){var statearr_56310 = f__5709__auto__.call(null);(statearr_56310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___56311);
return statearr_56310;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___56311,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj56341 = {};return obj56341;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3546__auto__ = p;if(and__3546__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3546__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4185__auto__ = (((p == null))?null:p);return (function (){var or__3558__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3546__auto__ = p;if(and__3546__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3546__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4185__auto__ = (((p == null))?null:p);return (function (){var or__3558__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3546__auto__ = p;if(and__3546__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3546__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4185__auto__ = (((p == null))?null:p);return (function (){var or__3558__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3546__auto__ = p;if(and__3546__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4185__auto__ = (((p == null))?null:p);return (function (){var or__3558__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
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
return (function (topic){var or__3558__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3558__auto__,mults){
return (function (p1__56342_SHARP_){if(cljs.core.truth_(p1__56342_SHARP_.call(null,topic)))
{return p1__56342_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__56342_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3558__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t56467 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t56467 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta56468){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta56468 = meta56468;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t56467.cljs$lang$type = true;
cljs.core.async.t56467.cljs$lang$ctorStr = "cljs.core.async/t56467";
cljs.core.async.t56467.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t56467");
});})(mults,ensure_mult))
;
cljs.core.async.t56467.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t56467.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t56467.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t56467.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t56467.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t56467.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t56467.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t56467.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_56469){var self__ = this;
var _56469__$1 = this;return self__.meta56468;
});})(mults,ensure_mult))
;
cljs.core.async.t56467.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_56469,meta56468__$1){var self__ = this;
var _56469__$1 = this;return (new cljs.core.async.t56467(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta56468__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t56467 = ((function (mults,ensure_mult){
return (function __GT_t56467(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta56468){return (new cljs.core.async.t56467(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta56468));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t56467(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5708__auto___56591 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___56591,mults,ensure_mult,p){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___56591,mults,ensure_mult,p){
return (function (state_56543){var state_val_56544 = (state_56543[(1)]);if((state_val_56544 === (7)))
{var inst_56539 = (state_56543[(2)]);var state_56543__$1 = state_56543;var statearr_56545_56592 = state_56543__$1;(statearr_56545_56592[(2)] = inst_56539);
(statearr_56545_56592[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56544 === (20)))
{var state_56543__$1 = state_56543;var statearr_56546_56593 = state_56543__$1;(statearr_56546_56593[(2)] = null);
(statearr_56546_56593[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56544 === (1)))
{var state_56543__$1 = state_56543;var statearr_56547_56594 = state_56543__$1;(statearr_56547_56594[(2)] = null);
(statearr_56547_56594[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56544 === (24)))
{var inst_56522 = (state_56543[(7)]);var inst_56472 = (state_56543[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_56543,(23),Object,null,(22));var inst_56529 = cljs.core.async.muxch_STAR_.call(null,inst_56522);var state_56543__$1 = state_56543;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56543__$1,(25),inst_56529,inst_56472);
} else
{if((state_val_56544 === (4)))
{var inst_56472 = (state_56543[(8)]);var inst_56472__$1 = (state_56543[(2)]);var inst_56473 = (inst_56472__$1 == null);var state_56543__$1 = (function (){var statearr_56548 = state_56543;(statearr_56548[(8)] = inst_56472__$1);
return statearr_56548;
})();if(cljs.core.truth_(inst_56473))
{var statearr_56549_56595 = state_56543__$1;(statearr_56549_56595[(1)] = (5));
} else
{var statearr_56550_56596 = state_56543__$1;(statearr_56550_56596[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56544 === (15)))
{var inst_56514 = (state_56543[(2)]);var state_56543__$1 = state_56543;var statearr_56551_56597 = state_56543__$1;(statearr_56551_56597[(2)] = inst_56514);
(statearr_56551_56597[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56544 === (21)))
{var inst_56536 = (state_56543[(2)]);var state_56543__$1 = (function (){var statearr_56552 = state_56543;(statearr_56552[(9)] = inst_56536);
return statearr_56552;
})();var statearr_56553_56598 = state_56543__$1;(statearr_56553_56598[(2)] = null);
(statearr_56553_56598[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56544 === (13)))
{var inst_56496 = (state_56543[(10)]);var inst_56498 = cljs.core.chunked_seq_QMARK_.call(null,inst_56496);var state_56543__$1 = state_56543;if(inst_56498)
{var statearr_56554_56599 = state_56543__$1;(statearr_56554_56599[(1)] = (16));
} else
{var statearr_56555_56600 = state_56543__$1;(statearr_56555_56600[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56544 === (22)))
{var inst_56533 = (state_56543[(2)]);var state_56543__$1 = state_56543;var statearr_56556_56601 = state_56543__$1;(statearr_56556_56601[(2)] = inst_56533);
(statearr_56556_56601[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56544 === (6)))
{var inst_56522 = (state_56543[(7)]);var inst_56520 = (state_56543[(11)]);var inst_56472 = (state_56543[(8)]);var inst_56520__$1 = topic_fn.call(null,inst_56472);var inst_56521 = cljs.core.deref.call(null,mults);var inst_56522__$1 = cljs.core.get.call(null,inst_56521,inst_56520__$1);var state_56543__$1 = (function (){var statearr_56557 = state_56543;(statearr_56557[(7)] = inst_56522__$1);
(statearr_56557[(11)] = inst_56520__$1);
return statearr_56557;
})();if(cljs.core.truth_(inst_56522__$1))
{var statearr_56558_56602 = state_56543__$1;(statearr_56558_56602[(1)] = (19));
} else
{var statearr_56559_56603 = state_56543__$1;(statearr_56559_56603[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56544 === (25)))
{var inst_56531 = (state_56543[(2)]);var state_56543__$1 = state_56543;var statearr_56560_56604 = state_56543__$1;(statearr_56560_56604[(2)] = inst_56531);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56543__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56544 === (17)))
{var inst_56496 = (state_56543[(10)]);var inst_56505 = cljs.core.first.call(null,inst_56496);var inst_56506 = cljs.core.async.muxch_STAR_.call(null,inst_56505);var inst_56507 = cljs.core.async.close_BANG_.call(null,inst_56506);var inst_56508 = cljs.core.next.call(null,inst_56496);var inst_56482 = inst_56508;var inst_56483 = null;var inst_56484 = (0);var inst_56485 = (0);var state_56543__$1 = (function (){var statearr_56561 = state_56543;(statearr_56561[(12)] = inst_56483);
(statearr_56561[(13)] = inst_56507);
(statearr_56561[(14)] = inst_56482);
(statearr_56561[(15)] = inst_56484);
(statearr_56561[(16)] = inst_56485);
return statearr_56561;
})();var statearr_56562_56605 = state_56543__$1;(statearr_56562_56605[(2)] = null);
(statearr_56562_56605[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56544 === (3)))
{var inst_56541 = (state_56543[(2)]);var state_56543__$1 = state_56543;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56543__$1,inst_56541);
} else
{if((state_val_56544 === (12)))
{var inst_56516 = (state_56543[(2)]);var state_56543__$1 = state_56543;var statearr_56563_56606 = state_56543__$1;(statearr_56563_56606[(2)] = inst_56516);
(statearr_56563_56606[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56544 === (2)))
{var state_56543__$1 = state_56543;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56543__$1,(4),ch);
} else
{if((state_val_56544 === (23)))
{var inst_56520 = (state_56543[(11)]);var inst_56524 = (state_56543[(2)]);var inst_56525 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_56520);var state_56543__$1 = (function (){var statearr_56564 = state_56543;(statearr_56564[(17)] = inst_56524);
return statearr_56564;
})();var statearr_56565_56607 = state_56543__$1;(statearr_56565_56607[(2)] = inst_56525);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56543__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56544 === (19)))
{var state_56543__$1 = state_56543;var statearr_56566_56608 = state_56543__$1;(statearr_56566_56608[(2)] = null);
(statearr_56566_56608[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56544 === (11)))
{var inst_56482 = (state_56543[(14)]);var inst_56496 = (state_56543[(10)]);var inst_56496__$1 = cljs.core.seq.call(null,inst_56482);var state_56543__$1 = (function (){var statearr_56567 = state_56543;(statearr_56567[(10)] = inst_56496__$1);
return statearr_56567;
})();if(inst_56496__$1)
{var statearr_56568_56609 = state_56543__$1;(statearr_56568_56609[(1)] = (13));
} else
{var statearr_56569_56610 = state_56543__$1;(statearr_56569_56610[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56544 === (9)))
{var inst_56518 = (state_56543[(2)]);var state_56543__$1 = state_56543;var statearr_56570_56611 = state_56543__$1;(statearr_56570_56611[(2)] = inst_56518);
(statearr_56570_56611[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56544 === (5)))
{var inst_56479 = cljs.core.deref.call(null,mults);var inst_56480 = cljs.core.vals.call(null,inst_56479);var inst_56481 = cljs.core.seq.call(null,inst_56480);var inst_56482 = inst_56481;var inst_56483 = null;var inst_56484 = (0);var inst_56485 = (0);var state_56543__$1 = (function (){var statearr_56571 = state_56543;(statearr_56571[(12)] = inst_56483);
(statearr_56571[(14)] = inst_56482);
(statearr_56571[(15)] = inst_56484);
(statearr_56571[(16)] = inst_56485);
return statearr_56571;
})();var statearr_56572_56612 = state_56543__$1;(statearr_56572_56612[(2)] = null);
(statearr_56572_56612[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56544 === (14)))
{var state_56543__$1 = state_56543;var statearr_56576_56613 = state_56543__$1;(statearr_56576_56613[(2)] = null);
(statearr_56576_56613[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56544 === (16)))
{var inst_56496 = (state_56543[(10)]);var inst_56500 = cljs.core.chunk_first.call(null,inst_56496);var inst_56501 = cljs.core.chunk_rest.call(null,inst_56496);var inst_56502 = cljs.core.count.call(null,inst_56500);var inst_56482 = inst_56501;var inst_56483 = inst_56500;var inst_56484 = inst_56502;var inst_56485 = (0);var state_56543__$1 = (function (){var statearr_56577 = state_56543;(statearr_56577[(12)] = inst_56483);
(statearr_56577[(14)] = inst_56482);
(statearr_56577[(15)] = inst_56484);
(statearr_56577[(16)] = inst_56485);
return statearr_56577;
})();var statearr_56578_56614 = state_56543__$1;(statearr_56578_56614[(2)] = null);
(statearr_56578_56614[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56544 === (10)))
{var inst_56483 = (state_56543[(12)]);var inst_56482 = (state_56543[(14)]);var inst_56484 = (state_56543[(15)]);var inst_56485 = (state_56543[(16)]);var inst_56490 = cljs.core._nth.call(null,inst_56483,inst_56485);var inst_56491 = cljs.core.async.muxch_STAR_.call(null,inst_56490);var inst_56492 = cljs.core.async.close_BANG_.call(null,inst_56491);var inst_56493 = (inst_56485 + (1));var tmp56573 = inst_56483;var tmp56574 = inst_56482;var tmp56575 = inst_56484;var inst_56482__$1 = tmp56574;var inst_56483__$1 = tmp56573;var inst_56484__$1 = tmp56575;var inst_56485__$1 = inst_56493;var state_56543__$1 = (function (){var statearr_56579 = state_56543;(statearr_56579[(12)] = inst_56483__$1);
(statearr_56579[(14)] = inst_56482__$1);
(statearr_56579[(18)] = inst_56492);
(statearr_56579[(15)] = inst_56484__$1);
(statearr_56579[(16)] = inst_56485__$1);
return statearr_56579;
})();var statearr_56580_56615 = state_56543__$1;(statearr_56580_56615[(2)] = null);
(statearr_56580_56615[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56544 === (18)))
{var inst_56511 = (state_56543[(2)]);var state_56543__$1 = state_56543;var statearr_56581_56616 = state_56543__$1;(statearr_56581_56616[(2)] = inst_56511);
(statearr_56581_56616[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56544 === (8)))
{var inst_56484 = (state_56543[(15)]);var inst_56485 = (state_56543[(16)]);var inst_56487 = (inst_56485 < inst_56484);var inst_56488 = inst_56487;var state_56543__$1 = state_56543;if(cljs.core.truth_(inst_56488))
{var statearr_56582_56617 = state_56543__$1;(statearr_56582_56617[(1)] = (10));
} else
{var statearr_56583_56618 = state_56543__$1;(statearr_56583_56618[(1)] = (11));
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
});})(c__5708__auto___56591,mults,ensure_mult,p))
;return ((function (switch__5693__auto__,c__5708__auto___56591,mults,ensure_mult,p){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_56587 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_56587[(0)] = state_machine__5694__auto__);
(statearr_56587[(1)] = (1));
return statearr_56587;
});
var state_machine__5694__auto____1 = (function (state_56543){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_56543);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e56588){if((e56588 instanceof Object))
{var ex__5697__auto__ = e56588;var statearr_56589_56619 = state_56543;(statearr_56589_56619[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56543);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e56588;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__56620 = state_56543;
state_56543 = G__56620;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_56543){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_56543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___56591,mults,ensure_mult,p))
})();var state__5710__auto__ = (function (){var statearr_56590 = f__5709__auto__.call(null);(statearr_56590[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___56591);
return statearr_56590;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___56591,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5708__auto___56757 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___56757,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___56757,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_56727){var state_val_56728 = (state_56727[(1)]);if((state_val_56728 === (7)))
{var state_56727__$1 = state_56727;var statearr_56729_56758 = state_56727__$1;(statearr_56729_56758[(2)] = null);
(statearr_56729_56758[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56728 === (1)))
{var state_56727__$1 = state_56727;var statearr_56730_56759 = state_56727__$1;(statearr_56730_56759[(2)] = null);
(statearr_56730_56759[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56728 === (4)))
{var inst_56691 = (state_56727[(7)]);var inst_56693 = (inst_56691 < cnt);var state_56727__$1 = state_56727;if(cljs.core.truth_(inst_56693))
{var statearr_56731_56760 = state_56727__$1;(statearr_56731_56760[(1)] = (6));
} else
{var statearr_56732_56761 = state_56727__$1;(statearr_56732_56761[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56728 === (15)))
{var inst_56723 = (state_56727[(2)]);var state_56727__$1 = state_56727;var statearr_56733_56762 = state_56727__$1;(statearr_56733_56762[(2)] = inst_56723);
(statearr_56733_56762[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56728 === (13)))
{var inst_56716 = cljs.core.async.close_BANG_.call(null,out);var state_56727__$1 = state_56727;var statearr_56734_56763 = state_56727__$1;(statearr_56734_56763[(2)] = inst_56716);
(statearr_56734_56763[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56728 === (6)))
{var state_56727__$1 = state_56727;var statearr_56735_56764 = state_56727__$1;(statearr_56735_56764[(2)] = null);
(statearr_56735_56764[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56728 === (3)))
{var inst_56725 = (state_56727[(2)]);var state_56727__$1 = state_56727;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56727__$1,inst_56725);
} else
{if((state_val_56728 === (12)))
{var inst_56713 = (state_56727[(8)]);var inst_56713__$1 = (state_56727[(2)]);var inst_56714 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_56713__$1);var state_56727__$1 = (function (){var statearr_56736 = state_56727;(statearr_56736[(8)] = inst_56713__$1);
return statearr_56736;
})();if(cljs.core.truth_(inst_56714))
{var statearr_56737_56765 = state_56727__$1;(statearr_56737_56765[(1)] = (13));
} else
{var statearr_56738_56766 = state_56727__$1;(statearr_56738_56766[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56728 === (2)))
{var inst_56690 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_56691 = (0);var state_56727__$1 = (function (){var statearr_56739 = state_56727;(statearr_56739[(9)] = inst_56690);
(statearr_56739[(7)] = inst_56691);
return statearr_56739;
})();var statearr_56740_56767 = state_56727__$1;(statearr_56740_56767[(2)] = null);
(statearr_56740_56767[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56728 === (11)))
{var inst_56691 = (state_56727[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_56727,(10),Object,null,(9));var inst_56700 = chs__$1.call(null,inst_56691);var inst_56701 = done.call(null,inst_56691);var inst_56702 = cljs.core.async.take_BANG_.call(null,inst_56700,inst_56701);var state_56727__$1 = state_56727;var statearr_56741_56768 = state_56727__$1;(statearr_56741_56768[(2)] = inst_56702);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56727__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56728 === (9)))
{var inst_56691 = (state_56727[(7)]);var inst_56704 = (state_56727[(2)]);var inst_56705 = (inst_56691 + (1));var inst_56691__$1 = inst_56705;var state_56727__$1 = (function (){var statearr_56742 = state_56727;(statearr_56742[(10)] = inst_56704);
(statearr_56742[(7)] = inst_56691__$1);
return statearr_56742;
})();var statearr_56743_56769 = state_56727__$1;(statearr_56743_56769[(2)] = null);
(statearr_56743_56769[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56728 === (5)))
{var inst_56711 = (state_56727[(2)]);var state_56727__$1 = (function (){var statearr_56744 = state_56727;(statearr_56744[(11)] = inst_56711);
return statearr_56744;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56727__$1,(12),dchan);
} else
{if((state_val_56728 === (14)))
{var inst_56713 = (state_56727[(8)]);var inst_56718 = cljs.core.apply.call(null,f,inst_56713);var state_56727__$1 = state_56727;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56727__$1,(16),out,inst_56718);
} else
{if((state_val_56728 === (16)))
{var inst_56720 = (state_56727[(2)]);var state_56727__$1 = (function (){var statearr_56745 = state_56727;(statearr_56745[(12)] = inst_56720);
return statearr_56745;
})();var statearr_56746_56770 = state_56727__$1;(statearr_56746_56770[(2)] = null);
(statearr_56746_56770[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56728 === (10)))
{var inst_56695 = (state_56727[(2)]);var inst_56696 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_56727__$1 = (function (){var statearr_56747 = state_56727;(statearr_56747[(13)] = inst_56695);
return statearr_56747;
})();var statearr_56748_56771 = state_56727__$1;(statearr_56748_56771[(2)] = inst_56696);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56727__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56728 === (8)))
{var inst_56709 = (state_56727[(2)]);var state_56727__$1 = state_56727;var statearr_56749_56772 = state_56727__$1;(statearr_56749_56772[(2)] = inst_56709);
(statearr_56749_56772[(1)] = (5));
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
});})(c__5708__auto___56757,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___56757,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_56753 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_56753[(0)] = state_machine__5694__auto__);
(statearr_56753[(1)] = (1));
return statearr_56753;
});
var state_machine__5694__auto____1 = (function (state_56727){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_56727);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e56754){if((e56754 instanceof Object))
{var ex__5697__auto__ = e56754;var statearr_56755_56773 = state_56727;(statearr_56755_56773[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56727);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e56754;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__56774 = state_56727;
state_56727 = G__56774;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_56727){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_56727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___56757,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_56756 = f__5709__auto__.call(null);(statearr_56756[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___56757);
return statearr_56756;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___56757,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___56882 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___56882,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___56882,out){
return (function (state_56858){var state_val_56859 = (state_56858[(1)]);if((state_val_56859 === (7)))
{var inst_56837 = (state_56858[(7)]);var inst_56838 = (state_56858[(8)]);var inst_56837__$1 = (state_56858[(2)]);var inst_56838__$1 = cljs.core.nth.call(null,inst_56837__$1,(0),null);var inst_56839 = cljs.core.nth.call(null,inst_56837__$1,(1),null);var inst_56840 = (inst_56838__$1 == null);var state_56858__$1 = (function (){var statearr_56860 = state_56858;(statearr_56860[(7)] = inst_56837__$1);
(statearr_56860[(8)] = inst_56838__$1);
(statearr_56860[(9)] = inst_56839);
return statearr_56860;
})();if(cljs.core.truth_(inst_56840))
{var statearr_56861_56883 = state_56858__$1;(statearr_56861_56883[(1)] = (8));
} else
{var statearr_56862_56884 = state_56858__$1;(statearr_56862_56884[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56859 === (1)))
{var inst_56829 = cljs.core.vec.call(null,chs);var inst_56830 = inst_56829;var state_56858__$1 = (function (){var statearr_56863 = state_56858;(statearr_56863[(10)] = inst_56830);
return statearr_56863;
})();var statearr_56864_56885 = state_56858__$1;(statearr_56864_56885[(2)] = null);
(statearr_56864_56885[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56859 === (4)))
{var inst_56830 = (state_56858[(10)]);var state_56858__$1 = state_56858;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_56858__$1,(7),inst_56830);
} else
{if((state_val_56859 === (6)))
{var inst_56854 = (state_56858[(2)]);var state_56858__$1 = state_56858;var statearr_56865_56886 = state_56858__$1;(statearr_56865_56886[(2)] = inst_56854);
(statearr_56865_56886[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56859 === (3)))
{var inst_56856 = (state_56858[(2)]);var state_56858__$1 = state_56858;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56858__$1,inst_56856);
} else
{if((state_val_56859 === (2)))
{var inst_56830 = (state_56858[(10)]);var inst_56832 = cljs.core.count.call(null,inst_56830);var inst_56833 = (inst_56832 > (0));var state_56858__$1 = state_56858;if(cljs.core.truth_(inst_56833))
{var statearr_56867_56887 = state_56858__$1;(statearr_56867_56887[(1)] = (4));
} else
{var statearr_56868_56888 = state_56858__$1;(statearr_56868_56888[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56859 === (11)))
{var inst_56830 = (state_56858[(10)]);var inst_56847 = (state_56858[(2)]);var tmp56866 = inst_56830;var inst_56830__$1 = tmp56866;var state_56858__$1 = (function (){var statearr_56869 = state_56858;(statearr_56869[(10)] = inst_56830__$1);
(statearr_56869[(11)] = inst_56847);
return statearr_56869;
})();var statearr_56870_56889 = state_56858__$1;(statearr_56870_56889[(2)] = null);
(statearr_56870_56889[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56859 === (9)))
{var inst_56838 = (state_56858[(8)]);var state_56858__$1 = state_56858;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56858__$1,(11),out,inst_56838);
} else
{if((state_val_56859 === (5)))
{var inst_56852 = cljs.core.async.close_BANG_.call(null,out);var state_56858__$1 = state_56858;var statearr_56871_56890 = state_56858__$1;(statearr_56871_56890[(2)] = inst_56852);
(statearr_56871_56890[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56859 === (10)))
{var inst_56850 = (state_56858[(2)]);var state_56858__$1 = state_56858;var statearr_56872_56891 = state_56858__$1;(statearr_56872_56891[(2)] = inst_56850);
(statearr_56872_56891[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56859 === (8)))
{var inst_56837 = (state_56858[(7)]);var inst_56838 = (state_56858[(8)]);var inst_56839 = (state_56858[(9)]);var inst_56830 = (state_56858[(10)]);var inst_56842 = (function (){var c = inst_56839;var v = inst_56838;var vec__56835 = inst_56837;var cs = inst_56830;return ((function (c,v,vec__56835,cs,inst_56837,inst_56838,inst_56839,inst_56830,state_val_56859,c__5708__auto___56882,out){
return (function (p1__56775_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__56775_SHARP_);
});
;})(c,v,vec__56835,cs,inst_56837,inst_56838,inst_56839,inst_56830,state_val_56859,c__5708__auto___56882,out))
})();var inst_56843 = cljs.core.filterv.call(null,inst_56842,inst_56830);var inst_56830__$1 = inst_56843;var state_56858__$1 = (function (){var statearr_56873 = state_56858;(statearr_56873[(10)] = inst_56830__$1);
return statearr_56873;
})();var statearr_56874_56892 = state_56858__$1;(statearr_56874_56892[(2)] = null);
(statearr_56874_56892[(1)] = (2));
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
});})(c__5708__auto___56882,out))
;return ((function (switch__5693__auto__,c__5708__auto___56882,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_56878 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_56878[(0)] = state_machine__5694__auto__);
(statearr_56878[(1)] = (1));
return statearr_56878;
});
var state_machine__5694__auto____1 = (function (state_56858){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_56858);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e56879){if((e56879 instanceof Object))
{var ex__5697__auto__ = e56879;var statearr_56880_56893 = state_56858;(statearr_56880_56893[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56858);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e56879;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__56894 = state_56858;
state_56858 = G__56894;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_56858){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_56858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___56882,out))
})();var state__5710__auto__ = (function (){var statearr_56881 = f__5709__auto__.call(null);(statearr_56881[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___56882);
return statearr_56881;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___56882,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___56987 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___56987,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___56987,out){
return (function (state_56964){var state_val_56965 = (state_56964[(1)]);if((state_val_56965 === (7)))
{var inst_56946 = (state_56964[(7)]);var inst_56946__$1 = (state_56964[(2)]);var inst_56947 = (inst_56946__$1 == null);var inst_56948 = cljs.core.not.call(null,inst_56947);var state_56964__$1 = (function (){var statearr_56966 = state_56964;(statearr_56966[(7)] = inst_56946__$1);
return statearr_56966;
})();if(inst_56948)
{var statearr_56967_56988 = state_56964__$1;(statearr_56967_56988[(1)] = (8));
} else
{var statearr_56968_56989 = state_56964__$1;(statearr_56968_56989[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56965 === (1)))
{var inst_56941 = (0);var state_56964__$1 = (function (){var statearr_56969 = state_56964;(statearr_56969[(8)] = inst_56941);
return statearr_56969;
})();var statearr_56970_56990 = state_56964__$1;(statearr_56970_56990[(2)] = null);
(statearr_56970_56990[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56965 === (4)))
{var state_56964__$1 = state_56964;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56964__$1,(7),ch);
} else
{if((state_val_56965 === (6)))
{var inst_56959 = (state_56964[(2)]);var state_56964__$1 = state_56964;var statearr_56971_56991 = state_56964__$1;(statearr_56971_56991[(2)] = inst_56959);
(statearr_56971_56991[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56965 === (3)))
{var inst_56961 = (state_56964[(2)]);var inst_56962 = cljs.core.async.close_BANG_.call(null,out);var state_56964__$1 = (function (){var statearr_56972 = state_56964;(statearr_56972[(9)] = inst_56961);
return statearr_56972;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56964__$1,inst_56962);
} else
{if((state_val_56965 === (2)))
{var inst_56941 = (state_56964[(8)]);var inst_56943 = (inst_56941 < n);var state_56964__$1 = state_56964;if(cljs.core.truth_(inst_56943))
{var statearr_56973_56992 = state_56964__$1;(statearr_56973_56992[(1)] = (4));
} else
{var statearr_56974_56993 = state_56964__$1;(statearr_56974_56993[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56965 === (11)))
{var inst_56941 = (state_56964[(8)]);var inst_56951 = (state_56964[(2)]);var inst_56952 = (inst_56941 + (1));var inst_56941__$1 = inst_56952;var state_56964__$1 = (function (){var statearr_56975 = state_56964;(statearr_56975[(8)] = inst_56941__$1);
(statearr_56975[(10)] = inst_56951);
return statearr_56975;
})();var statearr_56976_56994 = state_56964__$1;(statearr_56976_56994[(2)] = null);
(statearr_56976_56994[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56965 === (9)))
{var state_56964__$1 = state_56964;var statearr_56977_56995 = state_56964__$1;(statearr_56977_56995[(2)] = null);
(statearr_56977_56995[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56965 === (5)))
{var state_56964__$1 = state_56964;var statearr_56978_56996 = state_56964__$1;(statearr_56978_56996[(2)] = null);
(statearr_56978_56996[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56965 === (10)))
{var inst_56956 = (state_56964[(2)]);var state_56964__$1 = state_56964;var statearr_56979_56997 = state_56964__$1;(statearr_56979_56997[(2)] = inst_56956);
(statearr_56979_56997[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56965 === (8)))
{var inst_56946 = (state_56964[(7)]);var state_56964__$1 = state_56964;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56964__$1,(11),out,inst_56946);
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
});})(c__5708__auto___56987,out))
;return ((function (switch__5693__auto__,c__5708__auto___56987,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_56983 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_56983[(0)] = state_machine__5694__auto__);
(statearr_56983[(1)] = (1));
return statearr_56983;
});
var state_machine__5694__auto____1 = (function (state_56964){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_56964);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e56984){if((e56984 instanceof Object))
{var ex__5697__auto__ = e56984;var statearr_56985_56998 = state_56964;(statearr_56985_56998[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56964);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e56984;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__56999 = state_56964;
state_56964 = G__56999;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_56964){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_56964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___56987,out))
})();var state__5710__auto__ = (function (){var statearr_56986 = f__5709__auto__.call(null);(statearr_56986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___56987);
return statearr_56986;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___56987,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___57096 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___57096,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___57096,out){
return (function (state_57071){var state_val_57072 = (state_57071[(1)]);if((state_val_57072 === (7)))
{var inst_57066 = (state_57071[(2)]);var state_57071__$1 = state_57071;var statearr_57073_57097 = state_57071__$1;(statearr_57073_57097[(2)] = inst_57066);
(statearr_57073_57097[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57072 === (1)))
{var inst_57048 = null;var state_57071__$1 = (function (){var statearr_57074 = state_57071;(statearr_57074[(7)] = inst_57048);
return statearr_57074;
})();var statearr_57075_57098 = state_57071__$1;(statearr_57075_57098[(2)] = null);
(statearr_57075_57098[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57072 === (4)))
{var inst_57051 = (state_57071[(8)]);var inst_57051__$1 = (state_57071[(2)]);var inst_57052 = (inst_57051__$1 == null);var inst_57053 = cljs.core.not.call(null,inst_57052);var state_57071__$1 = (function (){var statearr_57076 = state_57071;(statearr_57076[(8)] = inst_57051__$1);
return statearr_57076;
})();if(inst_57053)
{var statearr_57077_57099 = state_57071__$1;(statearr_57077_57099[(1)] = (5));
} else
{var statearr_57078_57100 = state_57071__$1;(statearr_57078_57100[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57072 === (6)))
{var state_57071__$1 = state_57071;var statearr_57079_57101 = state_57071__$1;(statearr_57079_57101[(2)] = null);
(statearr_57079_57101[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57072 === (3)))
{var inst_57068 = (state_57071[(2)]);var inst_57069 = cljs.core.async.close_BANG_.call(null,out);var state_57071__$1 = (function (){var statearr_57080 = state_57071;(statearr_57080[(9)] = inst_57068);
return statearr_57080;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57071__$1,inst_57069);
} else
{if((state_val_57072 === (2)))
{var state_57071__$1 = state_57071;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57071__$1,(4),ch);
} else
{if((state_val_57072 === (11)))
{var inst_57051 = (state_57071[(8)]);var inst_57060 = (state_57071[(2)]);var inst_57048 = inst_57051;var state_57071__$1 = (function (){var statearr_57081 = state_57071;(statearr_57081[(7)] = inst_57048);
(statearr_57081[(10)] = inst_57060);
return statearr_57081;
})();var statearr_57082_57102 = state_57071__$1;(statearr_57082_57102[(2)] = null);
(statearr_57082_57102[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57072 === (9)))
{var inst_57051 = (state_57071[(8)]);var state_57071__$1 = state_57071;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57071__$1,(11),out,inst_57051);
} else
{if((state_val_57072 === (5)))
{var inst_57051 = (state_57071[(8)]);var inst_57048 = (state_57071[(7)]);var inst_57055 = cljs.core._EQ_.call(null,inst_57051,inst_57048);var state_57071__$1 = state_57071;if(inst_57055)
{var statearr_57084_57103 = state_57071__$1;(statearr_57084_57103[(1)] = (8));
} else
{var statearr_57085_57104 = state_57071__$1;(statearr_57085_57104[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57072 === (10)))
{var inst_57063 = (state_57071[(2)]);var state_57071__$1 = state_57071;var statearr_57086_57105 = state_57071__$1;(statearr_57086_57105[(2)] = inst_57063);
(statearr_57086_57105[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57072 === (8)))
{var inst_57048 = (state_57071[(7)]);var tmp57083 = inst_57048;var inst_57048__$1 = tmp57083;var state_57071__$1 = (function (){var statearr_57087 = state_57071;(statearr_57087[(7)] = inst_57048__$1);
return statearr_57087;
})();var statearr_57088_57106 = state_57071__$1;(statearr_57088_57106[(2)] = null);
(statearr_57088_57106[(1)] = (2));
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
});})(c__5708__auto___57096,out))
;return ((function (switch__5693__auto__,c__5708__auto___57096,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_57092 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_57092[(0)] = state_machine__5694__auto__);
(statearr_57092[(1)] = (1));
return statearr_57092;
});
var state_machine__5694__auto____1 = (function (state_57071){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_57071);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e57093){if((e57093 instanceof Object))
{var ex__5697__auto__ = e57093;var statearr_57094_57107 = state_57071;(statearr_57094_57107[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57071);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e57093;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__57108 = state_57071;
state_57071 = G__57108;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_57071){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_57071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___57096,out))
})();var state__5710__auto__ = (function (){var statearr_57095 = f__5709__auto__.call(null);(statearr_57095[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___57096);
return statearr_57095;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___57096,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___57243 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___57243,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___57243,out){
return (function (state_57213){var state_val_57214 = (state_57213[(1)]);if((state_val_57214 === (7)))
{var inst_57209 = (state_57213[(2)]);var state_57213__$1 = state_57213;var statearr_57215_57244 = state_57213__$1;(statearr_57215_57244[(2)] = inst_57209);
(statearr_57215_57244[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57214 === (1)))
{var inst_57176 = (new Array(n));var inst_57177 = inst_57176;var inst_57178 = (0);var state_57213__$1 = (function (){var statearr_57216 = state_57213;(statearr_57216[(7)] = inst_57178);
(statearr_57216[(8)] = inst_57177);
return statearr_57216;
})();var statearr_57217_57245 = state_57213__$1;(statearr_57217_57245[(2)] = null);
(statearr_57217_57245[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57214 === (4)))
{var inst_57181 = (state_57213[(9)]);var inst_57181__$1 = (state_57213[(2)]);var inst_57182 = (inst_57181__$1 == null);var inst_57183 = cljs.core.not.call(null,inst_57182);var state_57213__$1 = (function (){var statearr_57218 = state_57213;(statearr_57218[(9)] = inst_57181__$1);
return statearr_57218;
})();if(inst_57183)
{var statearr_57219_57246 = state_57213__$1;(statearr_57219_57246[(1)] = (5));
} else
{var statearr_57220_57247 = state_57213__$1;(statearr_57220_57247[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57214 === (15)))
{var inst_57203 = (state_57213[(2)]);var state_57213__$1 = state_57213;var statearr_57221_57248 = state_57213__$1;(statearr_57221_57248[(2)] = inst_57203);
(statearr_57221_57248[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57214 === (13)))
{var state_57213__$1 = state_57213;var statearr_57222_57249 = state_57213__$1;(statearr_57222_57249[(2)] = null);
(statearr_57222_57249[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57214 === (6)))
{var inst_57178 = (state_57213[(7)]);var inst_57199 = (inst_57178 > (0));var state_57213__$1 = state_57213;if(cljs.core.truth_(inst_57199))
{var statearr_57223_57250 = state_57213__$1;(statearr_57223_57250[(1)] = (12));
} else
{var statearr_57224_57251 = state_57213__$1;(statearr_57224_57251[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57214 === (3)))
{var inst_57211 = (state_57213[(2)]);var state_57213__$1 = state_57213;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57213__$1,inst_57211);
} else
{if((state_val_57214 === (12)))
{var inst_57177 = (state_57213[(8)]);var inst_57201 = cljs.core.vec.call(null,inst_57177);var state_57213__$1 = state_57213;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57213__$1,(15),out,inst_57201);
} else
{if((state_val_57214 === (2)))
{var state_57213__$1 = state_57213;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57213__$1,(4),ch);
} else
{if((state_val_57214 === (11)))
{var inst_57193 = (state_57213[(2)]);var inst_57194 = (new Array(n));var inst_57177 = inst_57194;var inst_57178 = (0);var state_57213__$1 = (function (){var statearr_57225 = state_57213;(statearr_57225[(10)] = inst_57193);
(statearr_57225[(7)] = inst_57178);
(statearr_57225[(8)] = inst_57177);
return statearr_57225;
})();var statearr_57226_57252 = state_57213__$1;(statearr_57226_57252[(2)] = null);
(statearr_57226_57252[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57214 === (9)))
{var inst_57177 = (state_57213[(8)]);var inst_57191 = cljs.core.vec.call(null,inst_57177);var state_57213__$1 = state_57213;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57213__$1,(11),out,inst_57191);
} else
{if((state_val_57214 === (5)))
{var inst_57178 = (state_57213[(7)]);var inst_57177 = (state_57213[(8)]);var inst_57186 = (state_57213[(11)]);var inst_57181 = (state_57213[(9)]);var inst_57185 = (inst_57177[inst_57178] = inst_57181);var inst_57186__$1 = (inst_57178 + (1));var inst_57187 = (inst_57186__$1 < n);var state_57213__$1 = (function (){var statearr_57227 = state_57213;(statearr_57227[(12)] = inst_57185);
(statearr_57227[(11)] = inst_57186__$1);
return statearr_57227;
})();if(cljs.core.truth_(inst_57187))
{var statearr_57228_57253 = state_57213__$1;(statearr_57228_57253[(1)] = (8));
} else
{var statearr_57229_57254 = state_57213__$1;(statearr_57229_57254[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57214 === (14)))
{var inst_57206 = (state_57213[(2)]);var inst_57207 = cljs.core.async.close_BANG_.call(null,out);var state_57213__$1 = (function (){var statearr_57231 = state_57213;(statearr_57231[(13)] = inst_57206);
return statearr_57231;
})();var statearr_57232_57255 = state_57213__$1;(statearr_57232_57255[(2)] = inst_57207);
(statearr_57232_57255[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57214 === (10)))
{var inst_57197 = (state_57213[(2)]);var state_57213__$1 = state_57213;var statearr_57233_57256 = state_57213__$1;(statearr_57233_57256[(2)] = inst_57197);
(statearr_57233_57256[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57214 === (8)))
{var inst_57177 = (state_57213[(8)]);var inst_57186 = (state_57213[(11)]);var tmp57230 = inst_57177;var inst_57177__$1 = tmp57230;var inst_57178 = inst_57186;var state_57213__$1 = (function (){var statearr_57234 = state_57213;(statearr_57234[(7)] = inst_57178);
(statearr_57234[(8)] = inst_57177__$1);
return statearr_57234;
})();var statearr_57235_57257 = state_57213__$1;(statearr_57235_57257[(2)] = null);
(statearr_57235_57257[(1)] = (2));
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
});})(c__5708__auto___57243,out))
;return ((function (switch__5693__auto__,c__5708__auto___57243,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_57239 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_57239[(0)] = state_machine__5694__auto__);
(statearr_57239[(1)] = (1));
return statearr_57239;
});
var state_machine__5694__auto____1 = (function (state_57213){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_57213);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e57240){if((e57240 instanceof Object))
{var ex__5697__auto__ = e57240;var statearr_57241_57258 = state_57213;(statearr_57241_57258[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57213);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e57240;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__57259 = state_57213;
state_57213 = G__57259;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_57213){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_57213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___57243,out))
})();var state__5710__auto__ = (function (){var statearr_57242 = f__5709__auto__.call(null);(statearr_57242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___57243);
return statearr_57242;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___57243,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___57402 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___57402,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___57402,out){
return (function (state_57372){var state_val_57373 = (state_57372[(1)]);if((state_val_57373 === (7)))
{var inst_57368 = (state_57372[(2)]);var state_57372__$1 = state_57372;var statearr_57374_57403 = state_57372__$1;(statearr_57374_57403[(2)] = inst_57368);
(statearr_57374_57403[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57373 === (1)))
{var inst_57331 = [];var inst_57332 = inst_57331;var inst_57333 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_57372__$1 = (function (){var statearr_57375 = state_57372;(statearr_57375[(7)] = inst_57333);
(statearr_57375[(8)] = inst_57332);
return statearr_57375;
})();var statearr_57376_57404 = state_57372__$1;(statearr_57376_57404[(2)] = null);
(statearr_57376_57404[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57373 === (4)))
{var inst_57336 = (state_57372[(9)]);var inst_57336__$1 = (state_57372[(2)]);var inst_57337 = (inst_57336__$1 == null);var inst_57338 = cljs.core.not.call(null,inst_57337);var state_57372__$1 = (function (){var statearr_57377 = state_57372;(statearr_57377[(9)] = inst_57336__$1);
return statearr_57377;
})();if(inst_57338)
{var statearr_57378_57405 = state_57372__$1;(statearr_57378_57405[(1)] = (5));
} else
{var statearr_57379_57406 = state_57372__$1;(statearr_57379_57406[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57373 === (15)))
{var inst_57362 = (state_57372[(2)]);var state_57372__$1 = state_57372;var statearr_57380_57407 = state_57372__$1;(statearr_57380_57407[(2)] = inst_57362);
(statearr_57380_57407[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57373 === (13)))
{var state_57372__$1 = state_57372;var statearr_57381_57408 = state_57372__$1;(statearr_57381_57408[(2)] = null);
(statearr_57381_57408[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57373 === (6)))
{var inst_57332 = (state_57372[(8)]);var inst_57357 = inst_57332.length;var inst_57358 = (inst_57357 > (0));var state_57372__$1 = state_57372;if(cljs.core.truth_(inst_57358))
{var statearr_57382_57409 = state_57372__$1;(statearr_57382_57409[(1)] = (12));
} else
{var statearr_57383_57410 = state_57372__$1;(statearr_57383_57410[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57373 === (3)))
{var inst_57370 = (state_57372[(2)]);var state_57372__$1 = state_57372;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57372__$1,inst_57370);
} else
{if((state_val_57373 === (12)))
{var inst_57332 = (state_57372[(8)]);var inst_57360 = cljs.core.vec.call(null,inst_57332);var state_57372__$1 = state_57372;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57372__$1,(15),out,inst_57360);
} else
{if((state_val_57373 === (2)))
{var state_57372__$1 = state_57372;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57372__$1,(4),ch);
} else
{if((state_val_57373 === (11)))
{var inst_57336 = (state_57372[(9)]);var inst_57340 = (state_57372[(10)]);var inst_57350 = (state_57372[(2)]);var inst_57351 = [];var inst_57352 = inst_57351.push(inst_57336);var inst_57332 = inst_57351;var inst_57333 = inst_57340;var state_57372__$1 = (function (){var statearr_57384 = state_57372;(statearr_57384[(11)] = inst_57350);
(statearr_57384[(7)] = inst_57333);
(statearr_57384[(8)] = inst_57332);
(statearr_57384[(12)] = inst_57352);
return statearr_57384;
})();var statearr_57385_57411 = state_57372__$1;(statearr_57385_57411[(2)] = null);
(statearr_57385_57411[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57373 === (9)))
{var inst_57332 = (state_57372[(8)]);var inst_57348 = cljs.core.vec.call(null,inst_57332);var state_57372__$1 = state_57372;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57372__$1,(11),out,inst_57348);
} else
{if((state_val_57373 === (5)))
{var inst_57336 = (state_57372[(9)]);var inst_57333 = (state_57372[(7)]);var inst_57340 = (state_57372[(10)]);var inst_57340__$1 = f.call(null,inst_57336);var inst_57341 = cljs.core._EQ_.call(null,inst_57340__$1,inst_57333);var inst_57342 = cljs.core.keyword_identical_QMARK_.call(null,inst_57333,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_57343 = (inst_57341) || (inst_57342);var state_57372__$1 = (function (){var statearr_57386 = state_57372;(statearr_57386[(10)] = inst_57340__$1);
return statearr_57386;
})();if(cljs.core.truth_(inst_57343))
{var statearr_57387_57412 = state_57372__$1;(statearr_57387_57412[(1)] = (8));
} else
{var statearr_57388_57413 = state_57372__$1;(statearr_57388_57413[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57373 === (14)))
{var inst_57365 = (state_57372[(2)]);var inst_57366 = cljs.core.async.close_BANG_.call(null,out);var state_57372__$1 = (function (){var statearr_57390 = state_57372;(statearr_57390[(13)] = inst_57365);
return statearr_57390;
})();var statearr_57391_57414 = state_57372__$1;(statearr_57391_57414[(2)] = inst_57366);
(statearr_57391_57414[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57373 === (10)))
{var inst_57355 = (state_57372[(2)]);var state_57372__$1 = state_57372;var statearr_57392_57415 = state_57372__$1;(statearr_57392_57415[(2)] = inst_57355);
(statearr_57392_57415[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57373 === (8)))
{var inst_57336 = (state_57372[(9)]);var inst_57340 = (state_57372[(10)]);var inst_57332 = (state_57372[(8)]);var inst_57345 = inst_57332.push(inst_57336);var tmp57389 = inst_57332;var inst_57332__$1 = tmp57389;var inst_57333 = inst_57340;var state_57372__$1 = (function (){var statearr_57393 = state_57372;(statearr_57393[(14)] = inst_57345);
(statearr_57393[(7)] = inst_57333);
(statearr_57393[(8)] = inst_57332__$1);
return statearr_57393;
})();var statearr_57394_57416 = state_57372__$1;(statearr_57394_57416[(2)] = null);
(statearr_57394_57416[(1)] = (2));
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
});})(c__5708__auto___57402,out))
;return ((function (switch__5693__auto__,c__5708__auto___57402,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_57398 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_57398[(0)] = state_machine__5694__auto__);
(statearr_57398[(1)] = (1));
return statearr_57398;
});
var state_machine__5694__auto____1 = (function (state_57372){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_57372);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e57399){if((e57399 instanceof Object))
{var ex__5697__auto__ = e57399;var statearr_57400_57417 = state_57372;(statearr_57400_57417[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57372);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e57399;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__57418 = state_57372;
state_57372 = G__57418;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_57372){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_57372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___57402,out))
})();var state__5710__auto__ = (function (){var statearr_57401 = f__5709__auto__.call(null);(statearr_57401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___57402);
return statearr_57401;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___57402,out))
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