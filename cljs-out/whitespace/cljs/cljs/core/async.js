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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t34928 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34928 = (function (f,fn_handler,meta34929){
this.f = f;
this.fn_handler = fn_handler;
this.meta34929 = meta34929;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34928.cljs$lang$type = true;
cljs.core.async.t34928.cljs$lang$ctorStr = "cljs.core.async/t34928";
cljs.core.async.t34928.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34928");
});
cljs.core.async.t34928.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34928.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t34928.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t34928.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34930){var self__ = this;
var _34930__$1 = this;return self__.meta34929;
});
cljs.core.async.t34928.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34930,meta34929__$1){var self__ = this;
var _34930__$1 = this;return (new cljs.core.async.t34928(self__.f,self__.fn_handler,meta34929__$1));
});
cljs.core.async.__GT_t34928 = (function __GT_t34928(f__$1,fn_handler__$1,meta34929){return (new cljs.core.async.t34928(f__$1,fn_handler__$1,meta34929));
});
}
return (new cljs.core.async.t34928(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__34932 = buff;if(G__34932)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__34932.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__34932.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__34932);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__34932);
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
{var val_34933 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_34933);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_34933);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___34934 = n;var x_34935 = 0;while(true){
if((x_34935 < n__4248__auto___34934))
{(a[x_34935] = 0);
{
var G__34936 = (x_34935 + 1);
x_34935 = G__34936;
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
var G__34937 = (i + 1);
i = G__34937;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t34941 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34941 = (function (flag,alt_flag,meta34942){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta34942 = meta34942;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34941.cljs$lang$type = true;
cljs.core.async.t34941.cljs$lang$ctorStr = "cljs.core.async/t34941";
cljs.core.async.t34941.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34941");
});
cljs.core.async.t34941.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34941.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t34941.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t34941.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34943){var self__ = this;
var _34943__$1 = this;return self__.meta34942;
});
cljs.core.async.t34941.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34943,meta34942__$1){var self__ = this;
var _34943__$1 = this;return (new cljs.core.async.t34941(self__.flag,self__.alt_flag,meta34942__$1));
});
cljs.core.async.__GT_t34941 = (function __GT_t34941(flag__$1,alt_flag__$1,meta34942){return (new cljs.core.async.t34941(flag__$1,alt_flag__$1,meta34942));
});
}
return (new cljs.core.async.t34941(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t34947 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34947 = (function (cb,flag,alt_handler,meta34948){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta34948 = meta34948;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34947.cljs$lang$type = true;
cljs.core.async.t34947.cljs$lang$ctorStr = "cljs.core.async/t34947";
cljs.core.async.t34947.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34947");
});
cljs.core.async.t34947.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34947.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t34947.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t34947.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34949){var self__ = this;
var _34949__$1 = this;return self__.meta34948;
});
cljs.core.async.t34947.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34949,meta34948__$1){var self__ = this;
var _34949__$1 = this;return (new cljs.core.async.t34947(self__.cb,self__.flag,self__.alt_handler,meta34948__$1));
});
cljs.core.async.__GT_t34947 = (function __GT_t34947(cb__$1,flag__$1,alt_handler__$1,meta34948){return (new cljs.core.async.t34947(cb__$1,flag__$1,alt_handler__$1,meta34948));
});
}
return (new cljs.core.async.t34947(cb,flag,alt_handler,null));
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
return (function (p1__34950_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34950_SHARP_,port], null));
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
var G__34951 = (i + 1);
i = G__34951;
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
var alts_BANG___delegate = function (ports,p__34952){var map__34954 = p__34952;var map__34954__$1 = ((cljs.core.seq_QMARK_.call(null,map__34954))?cljs.core.apply.call(null,cljs.core.hash_map,map__34954):map__34954);var opts = map__34954__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__34952 = null;if (arguments.length > 1) {
  p__34952 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__34952);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__34955){
var ports = cljs.core.first(arglist__34955);
var p__34952 = cljs.core.rest(arglist__34955);
return alts_BANG___delegate(ports,p__34952);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t34963 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34963 = (function (ch,f,map_LT_,meta34964){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta34964 = meta34964;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34963.cljs$lang$type = true;
cljs.core.async.t34963.cljs$lang$ctorStr = "cljs.core.async/t34963";
cljs.core.async.t34963.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34963");
});
cljs.core.async.t34963.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t34963.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t34963.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t34963.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t34966 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34966 = (function (fn1,_,meta34964,ch,f,map_LT_,meta34967){
this.fn1 = fn1;
this._ = _;
this.meta34964 = meta34964;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta34967 = meta34967;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34966.cljs$lang$type = true;
cljs.core.async.t34966.cljs$lang$ctorStr = "cljs.core.async/t34966";
cljs.core.async.t34966.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34966");
});
cljs.core.async.t34966.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34966.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t34966.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t34966.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__34956_SHARP_){return f1.call(null,(((p1__34956_SHARP_ == null))?null:self__.f.call(null,p1__34956_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t34966.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34968){var self__ = this;
var _34968__$1 = this;return self__.meta34967;
});
cljs.core.async.t34966.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34968,meta34967__$1){var self__ = this;
var _34968__$1 = this;return (new cljs.core.async.t34966(self__.fn1,self__._,self__.meta34964,self__.ch,self__.f,self__.map_LT_,meta34967__$1));
});
cljs.core.async.__GT_t34966 = (function __GT_t34966(fn1__$1,___$2,meta34964__$1,ch__$2,f__$2,map_LT___$2,meta34967){return (new cljs.core.async.t34966(fn1__$1,___$2,meta34964__$1,ch__$2,f__$2,map_LT___$2,meta34967));
});
}
return (new cljs.core.async.t34966(fn1,___$1,self__.meta34964,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t34963.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t34963.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t34963.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34965){var self__ = this;
var _34965__$1 = this;return self__.meta34964;
});
cljs.core.async.t34963.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34965,meta34964__$1){var self__ = this;
var _34965__$1 = this;return (new cljs.core.async.t34963(self__.ch,self__.f,self__.map_LT_,meta34964__$1));
});
cljs.core.async.__GT_t34963 = (function __GT_t34963(ch__$1,f__$1,map_LT___$1,meta34964){return (new cljs.core.async.t34963(ch__$1,f__$1,map_LT___$1,meta34964));
});
}
return (new cljs.core.async.t34963(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t34972 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34972 = (function (ch,f,map_GT_,meta34973){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta34973 = meta34973;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34972.cljs$lang$type = true;
cljs.core.async.t34972.cljs$lang$ctorStr = "cljs.core.async/t34972";
cljs.core.async.t34972.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34972");
});
cljs.core.async.t34972.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t34972.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t34972.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t34972.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t34972.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t34972.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t34972.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34974){var self__ = this;
var _34974__$1 = this;return self__.meta34973;
});
cljs.core.async.t34972.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34974,meta34973__$1){var self__ = this;
var _34974__$1 = this;return (new cljs.core.async.t34972(self__.ch,self__.f,self__.map_GT_,meta34973__$1));
});
cljs.core.async.__GT_t34972 = (function __GT_t34972(ch__$1,f__$1,map_GT___$1,meta34973){return (new cljs.core.async.t34972(ch__$1,f__$1,map_GT___$1,meta34973));
});
}
return (new cljs.core.async.t34972(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t34978 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34978 = (function (ch,p,filter_GT_,meta34979){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta34979 = meta34979;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34978.cljs$lang$type = true;
cljs.core.async.t34978.cljs$lang$ctorStr = "cljs.core.async/t34978";
cljs.core.async.t34978.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34978");
});
cljs.core.async.t34978.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t34978.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t34978.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t34978.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t34978.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t34978.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t34978.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34980){var self__ = this;
var _34980__$1 = this;return self__.meta34979;
});
cljs.core.async.t34978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34980,meta34979__$1){var self__ = this;
var _34980__$1 = this;return (new cljs.core.async.t34978(self__.ch,self__.p,self__.filter_GT_,meta34979__$1));
});
cljs.core.async.__GT_t34978 = (function __GT_t34978(ch__$1,p__$1,filter_GT___$1,meta34979){return (new cljs.core.async.t34978(ch__$1,p__$1,filter_GT___$1,meta34979));
});
}
return (new cljs.core.async.t34978(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35063 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35042){var state_val_35043 = (state_35042[1]);if((state_val_35043 === 1))
{var state_35042__$1 = state_35042;var statearr_35044_35064 = state_35042__$1;(statearr_35044_35064[2] = null);
(statearr_35044_35064[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35043 === 2))
{var state_35042__$1 = state_35042;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35042__$1,4,ch);
} else
{if((state_val_35043 === 3))
{var inst_35040 = (state_35042[2]);var state_35042__$1 = state_35042;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35042__$1,inst_35040);
} else
{if((state_val_35043 === 4))
{var inst_35024 = (state_35042[7]);var inst_35024__$1 = (state_35042[2]);var inst_35025 = (inst_35024__$1 == null);var state_35042__$1 = (function (){var statearr_35045 = state_35042;(statearr_35045[7] = inst_35024__$1);
return statearr_35045;
})();if(cljs.core.truth_(inst_35025))
{var statearr_35046_35065 = state_35042__$1;(statearr_35046_35065[1] = 5);
} else
{var statearr_35047_35066 = state_35042__$1;(statearr_35047_35066[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35043 === 5))
{var inst_35027 = cljs.core.async.close_BANG_.call(null,out);var state_35042__$1 = state_35042;var statearr_35048_35067 = state_35042__$1;(statearr_35048_35067[2] = inst_35027);
(statearr_35048_35067[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35043 === 6))
{var inst_35024 = (state_35042[7]);var inst_35029 = p.call(null,inst_35024);var state_35042__$1 = state_35042;if(cljs.core.truth_(inst_35029))
{var statearr_35049_35068 = state_35042__$1;(statearr_35049_35068[1] = 8);
} else
{var statearr_35050_35069 = state_35042__$1;(statearr_35050_35069[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35043 === 7))
{var inst_35038 = (state_35042[2]);var state_35042__$1 = state_35042;var statearr_35051_35070 = state_35042__$1;(statearr_35051_35070[2] = inst_35038);
(statearr_35051_35070[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35043 === 8))
{var inst_35024 = (state_35042[7]);var state_35042__$1 = state_35042;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35042__$1,11,out,inst_35024);
} else
{if((state_val_35043 === 9))
{var state_35042__$1 = state_35042;var statearr_35052_35071 = state_35042__$1;(statearr_35052_35071[2] = null);
(statearr_35052_35071[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35043 === 10))
{var inst_35035 = (state_35042[2]);var state_35042__$1 = (function (){var statearr_35053 = state_35042;(statearr_35053[8] = inst_35035);
return statearr_35053;
})();var statearr_35054_35072 = state_35042__$1;(statearr_35054_35072[2] = null);
(statearr_35054_35072[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35043 === 11))
{var inst_35032 = (state_35042[2]);var state_35042__$1 = state_35042;var statearr_35055_35073 = state_35042__$1;(statearr_35055_35073[2] = inst_35032);
(statearr_35055_35073[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_35059 = [null,null,null,null,null,null,null,null,null];(statearr_35059[0] = state_machine__5507__auto__);
(statearr_35059[1] = 1);
return statearr_35059;
});
var state_machine__5507__auto____1 = (function (state_35042){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35042);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35060){if((e35060 instanceof Object))
{var ex__5510__auto__ = e35060;var statearr_35061_35074 = state_35042;(statearr_35061_35074[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35042);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35060;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35075 = state_35042;
state_35042 = G__35075;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35042){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35062 = f__5522__auto__.call(null);(statearr_35062[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35063);
return statearr_35062;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35227){var state_val_35228 = (state_35227[1]);if((state_val_35228 === 1))
{var state_35227__$1 = state_35227;var statearr_35229_35266 = state_35227__$1;(statearr_35229_35266[2] = null);
(statearr_35229_35266[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35228 === 2))
{var state_35227__$1 = state_35227;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35227__$1,4,in$);
} else
{if((state_val_35228 === 3))
{var inst_35225 = (state_35227[2]);var state_35227__$1 = state_35227;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35227__$1,inst_35225);
} else
{if((state_val_35228 === 4))
{var inst_35173 = (state_35227[7]);var inst_35173__$1 = (state_35227[2]);var inst_35174 = (inst_35173__$1 == null);var state_35227__$1 = (function (){var statearr_35230 = state_35227;(statearr_35230[7] = inst_35173__$1);
return statearr_35230;
})();if(cljs.core.truth_(inst_35174))
{var statearr_35231_35267 = state_35227__$1;(statearr_35231_35267[1] = 5);
} else
{var statearr_35232_35268 = state_35227__$1;(statearr_35232_35268[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35228 === 5))
{var inst_35176 = cljs.core.async.close_BANG_.call(null,out);var state_35227__$1 = state_35227;var statearr_35233_35269 = state_35227__$1;(statearr_35233_35269[2] = inst_35176);
(statearr_35233_35269[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35228 === 6))
{var inst_35173 = (state_35227[7]);var inst_35178 = f.call(null,inst_35173);var inst_35183 = cljs.core.seq.call(null,inst_35178);var inst_35184 = inst_35183;var inst_35185 = null;var inst_35186 = 0;var inst_35187 = 0;var state_35227__$1 = (function (){var statearr_35234 = state_35227;(statearr_35234[8] = inst_35186);
(statearr_35234[9] = inst_35187);
(statearr_35234[10] = inst_35185);
(statearr_35234[11] = inst_35184);
return statearr_35234;
})();var statearr_35235_35270 = state_35227__$1;(statearr_35235_35270[2] = null);
(statearr_35235_35270[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35228 === 7))
{var inst_35223 = (state_35227[2]);var state_35227__$1 = state_35227;var statearr_35236_35271 = state_35227__$1;(statearr_35236_35271[2] = inst_35223);
(statearr_35236_35271[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35228 === 8))
{var inst_35186 = (state_35227[8]);var inst_35187 = (state_35227[9]);var inst_35189 = (inst_35187 < inst_35186);var inst_35190 = inst_35189;var state_35227__$1 = state_35227;if(cljs.core.truth_(inst_35190))
{var statearr_35237_35272 = state_35227__$1;(statearr_35237_35272[1] = 10);
} else
{var statearr_35238_35273 = state_35227__$1;(statearr_35238_35273[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35228 === 9))
{var inst_35220 = (state_35227[2]);var state_35227__$1 = (function (){var statearr_35239 = state_35227;(statearr_35239[12] = inst_35220);
return statearr_35239;
})();var statearr_35240_35274 = state_35227__$1;(statearr_35240_35274[2] = null);
(statearr_35240_35274[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35228 === 10))
{var inst_35187 = (state_35227[9]);var inst_35185 = (state_35227[10]);var inst_35192 = cljs.core._nth.call(null,inst_35185,inst_35187);var state_35227__$1 = state_35227;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35227__$1,13,out,inst_35192);
} else
{if((state_val_35228 === 11))
{var inst_35184 = (state_35227[11]);var inst_35198 = (state_35227[13]);var inst_35198__$1 = cljs.core.seq.call(null,inst_35184);var state_35227__$1 = (function (){var statearr_35244 = state_35227;(statearr_35244[13] = inst_35198__$1);
return statearr_35244;
})();if(inst_35198__$1)
{var statearr_35245_35275 = state_35227__$1;(statearr_35245_35275[1] = 14);
} else
{var statearr_35246_35276 = state_35227__$1;(statearr_35246_35276[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35228 === 12))
{var inst_35218 = (state_35227[2]);var state_35227__$1 = state_35227;var statearr_35247_35277 = state_35227__$1;(statearr_35247_35277[2] = inst_35218);
(statearr_35247_35277[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35228 === 13))
{var inst_35186 = (state_35227[8]);var inst_35187 = (state_35227[9]);var inst_35185 = (state_35227[10]);var inst_35184 = (state_35227[11]);var inst_35194 = (state_35227[2]);var inst_35195 = (inst_35187 + 1);var tmp35241 = inst_35186;var tmp35242 = inst_35185;var tmp35243 = inst_35184;var inst_35184__$1 = tmp35243;var inst_35185__$1 = tmp35242;var inst_35186__$1 = tmp35241;var inst_35187__$1 = inst_35195;var state_35227__$1 = (function (){var statearr_35248 = state_35227;(statearr_35248[8] = inst_35186__$1);
(statearr_35248[9] = inst_35187__$1);
(statearr_35248[10] = inst_35185__$1);
(statearr_35248[11] = inst_35184__$1);
(statearr_35248[14] = inst_35194);
return statearr_35248;
})();var statearr_35249_35278 = state_35227__$1;(statearr_35249_35278[2] = null);
(statearr_35249_35278[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35228 === 14))
{var inst_35198 = (state_35227[13]);var inst_35200 = cljs.core.chunked_seq_QMARK_.call(null,inst_35198);var state_35227__$1 = state_35227;if(inst_35200)
{var statearr_35250_35279 = state_35227__$1;(statearr_35250_35279[1] = 17);
} else
{var statearr_35251_35280 = state_35227__$1;(statearr_35251_35280[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35228 === 15))
{var state_35227__$1 = state_35227;var statearr_35252_35281 = state_35227__$1;(statearr_35252_35281[2] = null);
(statearr_35252_35281[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35228 === 16))
{var inst_35216 = (state_35227[2]);var state_35227__$1 = state_35227;var statearr_35253_35282 = state_35227__$1;(statearr_35253_35282[2] = inst_35216);
(statearr_35253_35282[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35228 === 17))
{var inst_35198 = (state_35227[13]);var inst_35202 = cljs.core.chunk_first.call(null,inst_35198);var inst_35203 = cljs.core.chunk_rest.call(null,inst_35198);var inst_35204 = cljs.core.count.call(null,inst_35202);var inst_35184 = inst_35203;var inst_35185 = inst_35202;var inst_35186 = inst_35204;var inst_35187 = 0;var state_35227__$1 = (function (){var statearr_35254 = state_35227;(statearr_35254[8] = inst_35186);
(statearr_35254[9] = inst_35187);
(statearr_35254[10] = inst_35185);
(statearr_35254[11] = inst_35184);
return statearr_35254;
})();var statearr_35255_35283 = state_35227__$1;(statearr_35255_35283[2] = null);
(statearr_35255_35283[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35228 === 18))
{var inst_35198 = (state_35227[13]);var inst_35207 = cljs.core.first.call(null,inst_35198);var state_35227__$1 = state_35227;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35227__$1,20,out,inst_35207);
} else
{if((state_val_35228 === 19))
{var inst_35213 = (state_35227[2]);var state_35227__$1 = state_35227;var statearr_35256_35284 = state_35227__$1;(statearr_35256_35284[2] = inst_35213);
(statearr_35256_35284[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35228 === 20))
{var inst_35198 = (state_35227[13]);var inst_35209 = (state_35227[2]);var inst_35210 = cljs.core.next.call(null,inst_35198);var inst_35184 = inst_35210;var inst_35185 = null;var inst_35186 = 0;var inst_35187 = 0;var state_35227__$1 = (function (){var statearr_35257 = state_35227;(statearr_35257[8] = inst_35186);
(statearr_35257[9] = inst_35187);
(statearr_35257[10] = inst_35185);
(statearr_35257[11] = inst_35184);
(statearr_35257[15] = inst_35209);
return statearr_35257;
})();var statearr_35258_35285 = state_35227__$1;(statearr_35258_35285[2] = null);
(statearr_35258_35285[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_35262 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35262[0] = state_machine__5507__auto__);
(statearr_35262[1] = 1);
return statearr_35262;
});
var state_machine__5507__auto____1 = (function (state_35227){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35227);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35263){if((e35263 instanceof Object))
{var ex__5510__auto__ = e35263;var statearr_35264_35286 = state_35227;(statearr_35264_35286[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35227);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35263;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35287 = state_35227;
state_35227 = G__35287;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35227){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35265 = f__5522__auto__.call(null);(statearr_35265[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_35265;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___35368 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35347){var state_val_35348 = (state_35347[1]);if((state_val_35348 === 1))
{var state_35347__$1 = state_35347;var statearr_35349_35369 = state_35347__$1;(statearr_35349_35369[2] = null);
(statearr_35349_35369[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35348 === 2))
{var state_35347__$1 = state_35347;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35347__$1,4,from);
} else
{if((state_val_35348 === 3))
{var inst_35345 = (state_35347[2]);var state_35347__$1 = state_35347;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35347__$1,inst_35345);
} else
{if((state_val_35348 === 4))
{var inst_35330 = (state_35347[7]);var inst_35330__$1 = (state_35347[2]);var inst_35331 = (inst_35330__$1 == null);var state_35347__$1 = (function (){var statearr_35350 = state_35347;(statearr_35350[7] = inst_35330__$1);
return statearr_35350;
})();if(cljs.core.truth_(inst_35331))
{var statearr_35351_35370 = state_35347__$1;(statearr_35351_35370[1] = 5);
} else
{var statearr_35352_35371 = state_35347__$1;(statearr_35352_35371[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35348 === 5))
{var state_35347__$1 = state_35347;if(cljs.core.truth_(close_QMARK_))
{var statearr_35353_35372 = state_35347__$1;(statearr_35353_35372[1] = 8);
} else
{var statearr_35354_35373 = state_35347__$1;(statearr_35354_35373[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35348 === 6))
{var inst_35330 = (state_35347[7]);var state_35347__$1 = state_35347;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35347__$1,11,to,inst_35330);
} else
{if((state_val_35348 === 7))
{var inst_35343 = (state_35347[2]);var state_35347__$1 = state_35347;var statearr_35355_35374 = state_35347__$1;(statearr_35355_35374[2] = inst_35343);
(statearr_35355_35374[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35348 === 8))
{var inst_35334 = cljs.core.async.close_BANG_.call(null,to);var state_35347__$1 = state_35347;var statearr_35356_35375 = state_35347__$1;(statearr_35356_35375[2] = inst_35334);
(statearr_35356_35375[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35348 === 9))
{var state_35347__$1 = state_35347;var statearr_35357_35376 = state_35347__$1;(statearr_35357_35376[2] = null);
(statearr_35357_35376[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35348 === 10))
{var inst_35337 = (state_35347[2]);var state_35347__$1 = state_35347;var statearr_35358_35377 = state_35347__$1;(statearr_35358_35377[2] = inst_35337);
(statearr_35358_35377[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35348 === 11))
{var inst_35340 = (state_35347[2]);var state_35347__$1 = (function (){var statearr_35359 = state_35347;(statearr_35359[8] = inst_35340);
return statearr_35359;
})();var statearr_35360_35378 = state_35347__$1;(statearr_35360_35378[2] = null);
(statearr_35360_35378[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_35364 = [null,null,null,null,null,null,null,null,null];(statearr_35364[0] = state_machine__5507__auto__);
(statearr_35364[1] = 1);
return statearr_35364;
});
var state_machine__5507__auto____1 = (function (state_35347){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35347);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35365){if((e35365 instanceof Object))
{var ex__5510__auto__ = e35365;var statearr_35366_35379 = state_35347;(statearr_35366_35379[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35347);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35365;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35380 = state_35347;
state_35347 = G__35380;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35347){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35367 = f__5522__auto__.call(null);(statearr_35367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35368);
return statearr_35367;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___35467 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35445){var state_val_35446 = (state_35445[1]);if((state_val_35446 === 1))
{var state_35445__$1 = state_35445;var statearr_35447_35468 = state_35445__$1;(statearr_35447_35468[2] = null);
(statearr_35447_35468[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35446 === 2))
{var state_35445__$1 = state_35445;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35445__$1,4,ch);
} else
{if((state_val_35446 === 3))
{var inst_35443 = (state_35445[2]);var state_35445__$1 = state_35445;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35445__$1,inst_35443);
} else
{if((state_val_35446 === 4))
{var inst_35426 = (state_35445[7]);var inst_35426__$1 = (state_35445[2]);var inst_35427 = (inst_35426__$1 == null);var state_35445__$1 = (function (){var statearr_35448 = state_35445;(statearr_35448[7] = inst_35426__$1);
return statearr_35448;
})();if(cljs.core.truth_(inst_35427))
{var statearr_35449_35469 = state_35445__$1;(statearr_35449_35469[1] = 5);
} else
{var statearr_35450_35470 = state_35445__$1;(statearr_35450_35470[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35446 === 5))
{var inst_35429 = cljs.core.async.close_BANG_.call(null,tc);var inst_35430 = cljs.core.async.close_BANG_.call(null,fc);var state_35445__$1 = (function (){var statearr_35451 = state_35445;(statearr_35451[8] = inst_35429);
return statearr_35451;
})();var statearr_35452_35471 = state_35445__$1;(statearr_35452_35471[2] = inst_35430);
(statearr_35452_35471[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35446 === 6))
{var inst_35426 = (state_35445[7]);var inst_35432 = p.call(null,inst_35426);var state_35445__$1 = state_35445;if(cljs.core.truth_(inst_35432))
{var statearr_35453_35472 = state_35445__$1;(statearr_35453_35472[1] = 9);
} else
{var statearr_35454_35473 = state_35445__$1;(statearr_35454_35473[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35446 === 7))
{var inst_35441 = (state_35445[2]);var state_35445__$1 = state_35445;var statearr_35455_35474 = state_35445__$1;(statearr_35455_35474[2] = inst_35441);
(statearr_35455_35474[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35446 === 8))
{var inst_35438 = (state_35445[2]);var state_35445__$1 = (function (){var statearr_35456 = state_35445;(statearr_35456[9] = inst_35438);
return statearr_35456;
})();var statearr_35457_35475 = state_35445__$1;(statearr_35457_35475[2] = null);
(statearr_35457_35475[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35446 === 9))
{var state_35445__$1 = state_35445;var statearr_35458_35476 = state_35445__$1;(statearr_35458_35476[2] = tc);
(statearr_35458_35476[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35446 === 10))
{var state_35445__$1 = state_35445;var statearr_35459_35477 = state_35445__$1;(statearr_35459_35477[2] = fc);
(statearr_35459_35477[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35446 === 11))
{var inst_35426 = (state_35445[7]);var inst_35436 = (state_35445[2]);var state_35445__$1 = state_35445;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35445__$1,8,inst_35436,inst_35426);
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
var state_machine__5507__auto____0 = (function (){var statearr_35463 = [null,null,null,null,null,null,null,null,null,null];(statearr_35463[0] = state_machine__5507__auto__);
(statearr_35463[1] = 1);
return statearr_35463;
});
var state_machine__5507__auto____1 = (function (state_35445){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35445);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35464){if((e35464 instanceof Object))
{var ex__5510__auto__ = e35464;var statearr_35465_35478 = state_35445;(statearr_35465_35478[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35445);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35464;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35479 = state_35445;
state_35445 = G__35479;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35445){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35466 = f__5522__auto__.call(null);(statearr_35466[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35467);
return statearr_35466;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35526){var state_val_35527 = (state_35526[1]);if((state_val_35527 === 7))
{var inst_35522 = (state_35526[2]);var state_35526__$1 = state_35526;var statearr_35528_35544 = state_35526__$1;(statearr_35528_35544[2] = inst_35522);
(statearr_35528_35544[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35527 === 6))
{var inst_35515 = (state_35526[7]);var inst_35512 = (state_35526[8]);var inst_35519 = f.call(null,inst_35512,inst_35515);var inst_35512__$1 = inst_35519;var state_35526__$1 = (function (){var statearr_35529 = state_35526;(statearr_35529[8] = inst_35512__$1);
return statearr_35529;
})();var statearr_35530_35545 = state_35526__$1;(statearr_35530_35545[2] = null);
(statearr_35530_35545[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35527 === 5))
{var inst_35512 = (state_35526[8]);var state_35526__$1 = state_35526;var statearr_35531_35546 = state_35526__$1;(statearr_35531_35546[2] = inst_35512);
(statearr_35531_35546[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35527 === 4))
{var inst_35515 = (state_35526[7]);var inst_35515__$1 = (state_35526[2]);var inst_35516 = (inst_35515__$1 == null);var state_35526__$1 = (function (){var statearr_35532 = state_35526;(statearr_35532[7] = inst_35515__$1);
return statearr_35532;
})();if(cljs.core.truth_(inst_35516))
{var statearr_35533_35547 = state_35526__$1;(statearr_35533_35547[1] = 5);
} else
{var statearr_35534_35548 = state_35526__$1;(statearr_35534_35548[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35527 === 3))
{var inst_35524 = (state_35526[2]);var state_35526__$1 = state_35526;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35526__$1,inst_35524);
} else
{if((state_val_35527 === 2))
{var state_35526__$1 = state_35526;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35526__$1,4,ch);
} else
{if((state_val_35527 === 1))
{var inst_35512 = init;var state_35526__$1 = (function (){var statearr_35535 = state_35526;(statearr_35535[8] = inst_35512);
return statearr_35535;
})();var statearr_35536_35549 = state_35526__$1;(statearr_35536_35549[2] = null);
(statearr_35536_35549[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_35540 = [null,null,null,null,null,null,null,null,null];(statearr_35540[0] = state_machine__5507__auto__);
(statearr_35540[1] = 1);
return statearr_35540;
});
var state_machine__5507__auto____1 = (function (state_35526){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35526);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35541){if((e35541 instanceof Object))
{var ex__5510__auto__ = e35541;var statearr_35542_35550 = state_35526;(statearr_35542_35550[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35526);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35541;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35551 = state_35526;
state_35526 = G__35551;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35526){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35543 = f__5522__auto__.call(null);(statearr_35543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_35543;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35613){var state_val_35614 = (state_35613[1]);if((state_val_35614 === 1))
{var inst_35593 = cljs.core.seq.call(null,coll);var inst_35594 = inst_35593;var state_35613__$1 = (function (){var statearr_35615 = state_35613;(statearr_35615[7] = inst_35594);
return statearr_35615;
})();var statearr_35616_35634 = state_35613__$1;(statearr_35616_35634[2] = null);
(statearr_35616_35634[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35614 === 2))
{var inst_35594 = (state_35613[7]);var state_35613__$1 = state_35613;if(cljs.core.truth_(inst_35594))
{var statearr_35617_35635 = state_35613__$1;(statearr_35617_35635[1] = 4);
} else
{var statearr_35618_35636 = state_35613__$1;(statearr_35618_35636[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35614 === 3))
{var inst_35611 = (state_35613[2]);var state_35613__$1 = state_35613;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35613__$1,inst_35611);
} else
{if((state_val_35614 === 4))
{var inst_35594 = (state_35613[7]);var inst_35597 = cljs.core.first.call(null,inst_35594);var state_35613__$1 = state_35613;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35613__$1,7,ch,inst_35597);
} else
{if((state_val_35614 === 5))
{var state_35613__$1 = state_35613;if(cljs.core.truth_(close_QMARK_))
{var statearr_35619_35637 = state_35613__$1;(statearr_35619_35637[1] = 8);
} else
{var statearr_35620_35638 = state_35613__$1;(statearr_35620_35638[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35614 === 6))
{var inst_35609 = (state_35613[2]);var state_35613__$1 = state_35613;var statearr_35621_35639 = state_35613__$1;(statearr_35621_35639[2] = inst_35609);
(statearr_35621_35639[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35614 === 7))
{var inst_35594 = (state_35613[7]);var inst_35599 = (state_35613[2]);var inst_35600 = cljs.core.next.call(null,inst_35594);var inst_35594__$1 = inst_35600;var state_35613__$1 = (function (){var statearr_35622 = state_35613;(statearr_35622[7] = inst_35594__$1);
(statearr_35622[8] = inst_35599);
return statearr_35622;
})();var statearr_35623_35640 = state_35613__$1;(statearr_35623_35640[2] = null);
(statearr_35623_35640[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35614 === 8))
{var inst_35604 = cljs.core.async.close_BANG_.call(null,ch);var state_35613__$1 = state_35613;var statearr_35624_35641 = state_35613__$1;(statearr_35624_35641[2] = inst_35604);
(statearr_35624_35641[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35614 === 9))
{var state_35613__$1 = state_35613;var statearr_35625_35642 = state_35613__$1;(statearr_35625_35642[2] = null);
(statearr_35625_35642[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35614 === 10))
{var inst_35607 = (state_35613[2]);var state_35613__$1 = state_35613;var statearr_35626_35643 = state_35613__$1;(statearr_35626_35643[2] = inst_35607);
(statearr_35626_35643[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_35630 = [null,null,null,null,null,null,null,null,null];(statearr_35630[0] = state_machine__5507__auto__);
(statearr_35630[1] = 1);
return statearr_35630;
});
var state_machine__5507__auto____1 = (function (state_35613){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35613);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35631){if((e35631 instanceof Object))
{var ex__5510__auto__ = e35631;var statearr_35632_35644 = state_35613;(statearr_35632_35644[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35613);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35631;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35645 = state_35613;
state_35613 = G__35645;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35613){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35633 = f__5522__auto__.call(null);(statearr_35633[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_35633;
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
cljs.core.async.Mux = (function (){var obj35647 = {};return obj35647;
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
cljs.core.async.Mult = (function (){var obj35649 = {};return obj35649;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t35873 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35873 = (function (cs,ch,mult,meta35874){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta35874 = meta35874;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35873.cljs$lang$type = true;
cljs.core.async.t35873.cljs$lang$ctorStr = "cljs.core.async/t35873";
cljs.core.async.t35873.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t35873");
});})(cs))
;
cljs.core.async.t35873.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t35873.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t35873.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t35873.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t35873.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t35873.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t35873.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_35875){var self__ = this;
var _35875__$1 = this;return self__.meta35874;
});})(cs))
;
cljs.core.async.t35873.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_35875,meta35874__$1){var self__ = this;
var _35875__$1 = this;return (new cljs.core.async.t35873(self__.cs,self__.ch,self__.mult,meta35874__$1));
});})(cs))
;
cljs.core.async.__GT_t35873 = ((function (cs){
return (function __GT_t35873(cs__$1,ch__$1,mult__$1,meta35874){return (new cljs.core.async.t35873(cs__$1,ch__$1,mult__$1,meta35874));
});})(cs))
;
}
return (new cljs.core.async.t35873(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___36096 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36010){var state_val_36011 = (state_36010[1]);if((state_val_36011 === 32))
{var inst_35954 = (state_36010[7]);var inst_35878 = (state_36010[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36010,31,Object,null,30);var inst_35961 = cljs.core.async.put_BANG_.call(null,inst_35954,inst_35878,done);var state_36010__$1 = state_36010;var statearr_36012_36097 = state_36010__$1;(statearr_36012_36097[2] = inst_35961);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36010__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36011 === 1))
{var state_36010__$1 = state_36010;var statearr_36013_36098 = state_36010__$1;(statearr_36013_36098[2] = null);
(statearr_36013_36098[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36011 === 33))
{var inst_35967 = (state_36010[9]);var inst_35969 = cljs.core.chunked_seq_QMARK_.call(null,inst_35967);var state_36010__$1 = state_36010;if(inst_35969)
{var statearr_36014_36099 = state_36010__$1;(statearr_36014_36099[1] = 36);
} else
{var statearr_36015_36100 = state_36010__$1;(statearr_36015_36100[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36011 === 2))
{var state_36010__$1 = state_36010;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36010__$1,4,ch);
} else
{if((state_val_36011 === 34))
{var state_36010__$1 = state_36010;var statearr_36016_36101 = state_36010__$1;(statearr_36016_36101[2] = null);
(statearr_36016_36101[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36011 === 3))
{var inst_36008 = (state_36010[2]);var state_36010__$1 = state_36010;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36010__$1,inst_36008);
} else
{if((state_val_36011 === 35))
{var inst_35992 = (state_36010[2]);var state_36010__$1 = state_36010;var statearr_36017_36102 = state_36010__$1;(statearr_36017_36102[2] = inst_35992);
(statearr_36017_36102[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36011 === 4))
{var inst_35878 = (state_36010[8]);var inst_35878__$1 = (state_36010[2]);var inst_35879 = (inst_35878__$1 == null);var state_36010__$1 = (function (){var statearr_36018 = state_36010;(statearr_36018[8] = inst_35878__$1);
return statearr_36018;
})();if(cljs.core.truth_(inst_35879))
{var statearr_36019_36103 = state_36010__$1;(statearr_36019_36103[1] = 5);
} else
{var statearr_36020_36104 = state_36010__$1;(statearr_36020_36104[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36011 === 36))
{var inst_35967 = (state_36010[9]);var inst_35971 = cljs.core.chunk_first.call(null,inst_35967);var inst_35972 = cljs.core.chunk_rest.call(null,inst_35967);var inst_35973 = cljs.core.count.call(null,inst_35971);var inst_35946 = inst_35972;var inst_35947 = inst_35971;var inst_35948 = inst_35973;var inst_35949 = 0;var state_36010__$1 = (function (){var statearr_36021 = state_36010;(statearr_36021[10] = inst_35947);
(statearr_36021[11] = inst_35946);
(statearr_36021[12] = inst_35949);
(statearr_36021[13] = inst_35948);
return statearr_36021;
})();var statearr_36022_36105 = state_36010__$1;(statearr_36022_36105[2] = null);
(statearr_36022_36105[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36011 === 5))
{var inst_35885 = cljs.core.deref.call(null,cs);var inst_35886 = cljs.core.seq.call(null,inst_35885);var inst_35887 = inst_35886;var inst_35888 = null;var inst_35889 = 0;var inst_35890 = 0;var state_36010__$1 = (function (){var statearr_36023 = state_36010;(statearr_36023[14] = inst_35890);
(statearr_36023[15] = inst_35887);
(statearr_36023[16] = inst_35888);
(statearr_36023[17] = inst_35889);
return statearr_36023;
})();var statearr_36024_36106 = state_36010__$1;(statearr_36024_36106[2] = null);
(statearr_36024_36106[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36011 === 37))
{var inst_35967 = (state_36010[9]);var inst_35976 = cljs.core.first.call(null,inst_35967);var state_36010__$1 = (function (){var statearr_36025 = state_36010;(statearr_36025[18] = inst_35976);
return statearr_36025;
})();var statearr_36026_36107 = state_36010__$1;(statearr_36026_36107[2] = null);
(statearr_36026_36107[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36011 === 6))
{var inst_35938 = (state_36010[19]);var inst_35937 = cljs.core.deref.call(null,cs);var inst_35938__$1 = cljs.core.keys.call(null,inst_35937);var inst_35939 = cljs.core.count.call(null,inst_35938__$1);var inst_35940 = cljs.core.reset_BANG_.call(null,dctr,inst_35939);var inst_35945 = cljs.core.seq.call(null,inst_35938__$1);var inst_35946 = inst_35945;var inst_35947 = null;var inst_35948 = 0;var inst_35949 = 0;var state_36010__$1 = (function (){var statearr_36027 = state_36010;(statearr_36027[10] = inst_35947);
(statearr_36027[11] = inst_35946);
(statearr_36027[12] = inst_35949);
(statearr_36027[13] = inst_35948);
(statearr_36027[20] = inst_35940);
(statearr_36027[19] = inst_35938__$1);
return statearr_36027;
})();var statearr_36028_36108 = state_36010__$1;(statearr_36028_36108[2] = null);
(statearr_36028_36108[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36011 === 38))
{var inst_35989 = (state_36010[2]);var state_36010__$1 = state_36010;var statearr_36029_36109 = state_36010__$1;(statearr_36029_36109[2] = inst_35989);
(statearr_36029_36109[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36011 === 7))
{var inst_36006 = (state_36010[2]);var state_36010__$1 = state_36010;var statearr_36030_36110 = state_36010__$1;(statearr_36030_36110[2] = inst_36006);
(statearr_36030_36110[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36011 === 39))
{var inst_35967 = (state_36010[9]);var inst_35985 = (state_36010[2]);var inst_35986 = cljs.core.next.call(null,inst_35967);var inst_35946 = inst_35986;var inst_35947 = null;var inst_35948 = 0;var inst_35949 = 0;var state_36010__$1 = (function (){var statearr_36031 = state_36010;(statearr_36031[10] = inst_35947);
(statearr_36031[11] = inst_35946);
(statearr_36031[12] = inst_35949);
(statearr_36031[13] = inst_35948);
(statearr_36031[21] = inst_35985);
return statearr_36031;
})();var statearr_36032_36111 = state_36010__$1;(statearr_36032_36111[2] = null);
(statearr_36032_36111[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36011 === 8))
{var inst_35890 = (state_36010[14]);var inst_35889 = (state_36010[17]);var inst_35892 = (inst_35890 < inst_35889);var inst_35893 = inst_35892;var state_36010__$1 = state_36010;if(cljs.core.truth_(inst_35893))
{var statearr_36033_36112 = state_36010__$1;(statearr_36033_36112[1] = 10);
} else
{var statearr_36034_36113 = state_36010__$1;(statearr_36034_36113[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36011 === 40))
{var inst_35976 = (state_36010[18]);var inst_35977 = (state_36010[2]);var inst_35978 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_35979 = cljs.core.async.untap_STAR_.call(null,m,inst_35976);var state_36010__$1 = (function (){var statearr_36035 = state_36010;(statearr_36035[22] = inst_35977);
(statearr_36035[23] = inst_35978);
return statearr_36035;
})();var statearr_36036_36114 = state_36010__$1;(statearr_36036_36114[2] = inst_35979);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36010__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36011 === 9))
{var inst_35935 = (state_36010[2]);var state_36010__$1 = state_36010;var statearr_36037_36115 = state_36010__$1;(statearr_36037_36115[2] = inst_35935);
(statearr_36037_36115[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36011 === 41))
{var inst_35976 = (state_36010[18]);var inst_35878 = (state_36010[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36010,40,Object,null,39);var inst_35983 = cljs.core.async.put_BANG_.call(null,inst_35976,inst_35878,done);var state_36010__$1 = state_36010;var statearr_36038_36116 = state_36010__$1;(statearr_36038_36116[2] = inst_35983);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36010__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36011 === 10))
{var inst_35890 = (state_36010[14]);var inst_35888 = (state_36010[16]);var inst_35896 = cljs.core._nth.call(null,inst_35888,inst_35890);var inst_35897 = cljs.core.nth.call(null,inst_35896,0,null);var inst_35898 = cljs.core.nth.call(null,inst_35896,1,null);var state_36010__$1 = (function (){var statearr_36039 = state_36010;(statearr_36039[24] = inst_35897);
return statearr_36039;
})();if(cljs.core.truth_(inst_35898))
{var statearr_36040_36117 = state_36010__$1;(statearr_36040_36117[1] = 13);
} else
{var statearr_36041_36118 = state_36010__$1;(statearr_36041_36118[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36011 === 42))
{var state_36010__$1 = state_36010;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36010__$1,45,dchan);
} else
{if((state_val_36011 === 11))
{var inst_35907 = (state_36010[25]);var inst_35887 = (state_36010[15]);var inst_35907__$1 = cljs.core.seq.call(null,inst_35887);var state_36010__$1 = (function (){var statearr_36042 = state_36010;(statearr_36042[25] = inst_35907__$1);
return statearr_36042;
})();if(inst_35907__$1)
{var statearr_36043_36119 = state_36010__$1;(statearr_36043_36119[1] = 16);
} else
{var statearr_36044_36120 = state_36010__$1;(statearr_36044_36120[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36011 === 43))
{var state_36010__$1 = state_36010;var statearr_36045_36121 = state_36010__$1;(statearr_36045_36121[2] = null);
(statearr_36045_36121[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36011 === 12))
{var inst_35933 = (state_36010[2]);var state_36010__$1 = state_36010;var statearr_36046_36122 = state_36010__$1;(statearr_36046_36122[2] = inst_35933);
(statearr_36046_36122[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36011 === 44))
{var inst_36003 = (state_36010[2]);var state_36010__$1 = (function (){var statearr_36047 = state_36010;(statearr_36047[26] = inst_36003);
return statearr_36047;
})();var statearr_36048_36123 = state_36010__$1;(statearr_36048_36123[2] = null);
(statearr_36048_36123[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36011 === 13))
{var inst_35897 = (state_36010[24]);var inst_35900 = cljs.core.async.close_BANG_.call(null,inst_35897);var state_36010__$1 = state_36010;var statearr_36049_36124 = state_36010__$1;(statearr_36049_36124[2] = inst_35900);
(statearr_36049_36124[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36011 === 45))
{var inst_36000 = (state_36010[2]);var state_36010__$1 = state_36010;var statearr_36053_36125 = state_36010__$1;(statearr_36053_36125[2] = inst_36000);
(statearr_36053_36125[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36011 === 14))
{var state_36010__$1 = state_36010;var statearr_36054_36126 = state_36010__$1;(statearr_36054_36126[2] = null);
(statearr_36054_36126[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36011 === 15))
{var inst_35890 = (state_36010[14]);var inst_35887 = (state_36010[15]);var inst_35888 = (state_36010[16]);var inst_35889 = (state_36010[17]);var inst_35903 = (state_36010[2]);var inst_35904 = (inst_35890 + 1);var tmp36050 = inst_35887;var tmp36051 = inst_35888;var tmp36052 = inst_35889;var inst_35887__$1 = tmp36050;var inst_35888__$1 = tmp36051;var inst_35889__$1 = tmp36052;var inst_35890__$1 = inst_35904;var state_36010__$1 = (function (){var statearr_36055 = state_36010;(statearr_36055[27] = inst_35903);
(statearr_36055[14] = inst_35890__$1);
(statearr_36055[15] = inst_35887__$1);
(statearr_36055[16] = inst_35888__$1);
(statearr_36055[17] = inst_35889__$1);
return statearr_36055;
})();var statearr_36056_36127 = state_36010__$1;(statearr_36056_36127[2] = null);
(statearr_36056_36127[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36011 === 16))
{var inst_35907 = (state_36010[25]);var inst_35909 = cljs.core.chunked_seq_QMARK_.call(null,inst_35907);var state_36010__$1 = state_36010;if(inst_35909)
{var statearr_36057_36128 = state_36010__$1;(statearr_36057_36128[1] = 19);
} else
{var statearr_36058_36129 = state_36010__$1;(statearr_36058_36129[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36011 === 17))
{var state_36010__$1 = state_36010;var statearr_36059_36130 = state_36010__$1;(statearr_36059_36130[2] = null);
(statearr_36059_36130[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36011 === 18))
{var inst_35931 = (state_36010[2]);var state_36010__$1 = state_36010;var statearr_36060_36131 = state_36010__$1;(statearr_36060_36131[2] = inst_35931);
(statearr_36060_36131[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36011 === 19))
{var inst_35907 = (state_36010[25]);var inst_35911 = cljs.core.chunk_first.call(null,inst_35907);var inst_35912 = cljs.core.chunk_rest.call(null,inst_35907);var inst_35913 = cljs.core.count.call(null,inst_35911);var inst_35887 = inst_35912;var inst_35888 = inst_35911;var inst_35889 = inst_35913;var inst_35890 = 0;var state_36010__$1 = (function (){var statearr_36061 = state_36010;(statearr_36061[14] = inst_35890);
(statearr_36061[15] = inst_35887);
(statearr_36061[16] = inst_35888);
(statearr_36061[17] = inst_35889);
return statearr_36061;
})();var statearr_36062_36132 = state_36010__$1;(statearr_36062_36132[2] = null);
(statearr_36062_36132[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36011 === 20))
{var inst_35907 = (state_36010[25]);var inst_35917 = cljs.core.first.call(null,inst_35907);var inst_35918 = cljs.core.nth.call(null,inst_35917,0,null);var inst_35919 = cljs.core.nth.call(null,inst_35917,1,null);var state_36010__$1 = (function (){var statearr_36063 = state_36010;(statearr_36063[28] = inst_35918);
return statearr_36063;
})();if(cljs.core.truth_(inst_35919))
{var statearr_36064_36133 = state_36010__$1;(statearr_36064_36133[1] = 22);
} else
{var statearr_36065_36134 = state_36010__$1;(statearr_36065_36134[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36011 === 21))
{var inst_35928 = (state_36010[2]);var state_36010__$1 = state_36010;var statearr_36066_36135 = state_36010__$1;(statearr_36066_36135[2] = inst_35928);
(statearr_36066_36135[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36011 === 22))
{var inst_35918 = (state_36010[28]);var inst_35921 = cljs.core.async.close_BANG_.call(null,inst_35918);var state_36010__$1 = state_36010;var statearr_36067_36136 = state_36010__$1;(statearr_36067_36136[2] = inst_35921);
(statearr_36067_36136[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36011 === 23))
{var state_36010__$1 = state_36010;var statearr_36068_36137 = state_36010__$1;(statearr_36068_36137[2] = null);
(statearr_36068_36137[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36011 === 24))
{var inst_35907 = (state_36010[25]);var inst_35924 = (state_36010[2]);var inst_35925 = cljs.core.next.call(null,inst_35907);var inst_35887 = inst_35925;var inst_35888 = null;var inst_35889 = 0;var inst_35890 = 0;var state_36010__$1 = (function (){var statearr_36069 = state_36010;(statearr_36069[14] = inst_35890);
(statearr_36069[15] = inst_35887);
(statearr_36069[16] = inst_35888);
(statearr_36069[17] = inst_35889);
(statearr_36069[29] = inst_35924);
return statearr_36069;
})();var statearr_36070_36138 = state_36010__$1;(statearr_36070_36138[2] = null);
(statearr_36070_36138[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36011 === 25))
{var inst_35949 = (state_36010[12]);var inst_35948 = (state_36010[13]);var inst_35951 = (inst_35949 < inst_35948);var inst_35952 = inst_35951;var state_36010__$1 = state_36010;if(cljs.core.truth_(inst_35952))
{var statearr_36071_36139 = state_36010__$1;(statearr_36071_36139[1] = 27);
} else
{var statearr_36072_36140 = state_36010__$1;(statearr_36072_36140[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36011 === 26))
{var inst_35938 = (state_36010[19]);var inst_35996 = (state_36010[2]);var inst_35997 = cljs.core.seq.call(null,inst_35938);var state_36010__$1 = (function (){var statearr_36073 = state_36010;(statearr_36073[30] = inst_35996);
return statearr_36073;
})();if(inst_35997)
{var statearr_36074_36141 = state_36010__$1;(statearr_36074_36141[1] = 42);
} else
{var statearr_36075_36142 = state_36010__$1;(statearr_36075_36142[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36011 === 27))
{var inst_35947 = (state_36010[10]);var inst_35949 = (state_36010[12]);var inst_35954 = cljs.core._nth.call(null,inst_35947,inst_35949);var state_36010__$1 = (function (){var statearr_36076 = state_36010;(statearr_36076[7] = inst_35954);
return statearr_36076;
})();var statearr_36077_36143 = state_36010__$1;(statearr_36077_36143[2] = null);
(statearr_36077_36143[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36011 === 28))
{var inst_35946 = (state_36010[11]);var inst_35967 = (state_36010[9]);var inst_35967__$1 = cljs.core.seq.call(null,inst_35946);var state_36010__$1 = (function (){var statearr_36081 = state_36010;(statearr_36081[9] = inst_35967__$1);
return statearr_36081;
})();if(inst_35967__$1)
{var statearr_36082_36144 = state_36010__$1;(statearr_36082_36144[1] = 33);
} else
{var statearr_36083_36145 = state_36010__$1;(statearr_36083_36145[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36011 === 29))
{var inst_35994 = (state_36010[2]);var state_36010__$1 = state_36010;var statearr_36084_36146 = state_36010__$1;(statearr_36084_36146[2] = inst_35994);
(statearr_36084_36146[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36011 === 30))
{var inst_35947 = (state_36010[10]);var inst_35946 = (state_36010[11]);var inst_35949 = (state_36010[12]);var inst_35948 = (state_36010[13]);var inst_35963 = (state_36010[2]);var inst_35964 = (inst_35949 + 1);var tmp36078 = inst_35947;var tmp36079 = inst_35946;var tmp36080 = inst_35948;var inst_35946__$1 = tmp36079;var inst_35947__$1 = tmp36078;var inst_35948__$1 = tmp36080;var inst_35949__$1 = inst_35964;var state_36010__$1 = (function (){var statearr_36085 = state_36010;(statearr_36085[10] = inst_35947__$1);
(statearr_36085[11] = inst_35946__$1);
(statearr_36085[12] = inst_35949__$1);
(statearr_36085[13] = inst_35948__$1);
(statearr_36085[31] = inst_35963);
return statearr_36085;
})();var statearr_36086_36147 = state_36010__$1;(statearr_36086_36147[2] = null);
(statearr_36086_36147[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36011 === 31))
{var inst_35954 = (state_36010[7]);var inst_35955 = (state_36010[2]);var inst_35956 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_35957 = cljs.core.async.untap_STAR_.call(null,m,inst_35954);var state_36010__$1 = (function (){var statearr_36087 = state_36010;(statearr_36087[32] = inst_35955);
(statearr_36087[33] = inst_35956);
return statearr_36087;
})();var statearr_36088_36148 = state_36010__$1;(statearr_36088_36148[2] = inst_35957);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36010__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_36092 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36092[0] = state_machine__5507__auto__);
(statearr_36092[1] = 1);
return statearr_36092;
});
var state_machine__5507__auto____1 = (function (state_36010){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36010);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36093){if((e36093 instanceof Object))
{var ex__5510__auto__ = e36093;var statearr_36094_36149 = state_36010;(statearr_36094_36149[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36010);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36093;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36150 = state_36010;
state_36010 = G__36150;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36010){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36095 = f__5522__auto__.call(null);(statearr_36095[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36096);
return statearr_36095;
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
cljs.core.async.Mix = (function (){var obj36152 = {};return obj36152;
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
;var m = (function (){if(typeof cljs.core.async.t36262 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36262 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta36263){
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
this.meta36263 = meta36263;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36262.cljs$lang$type = true;
cljs.core.async.t36262.cljs$lang$ctorStr = "cljs.core.async/t36262";
cljs.core.async.t36262.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t36262");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36262.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t36262.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36262.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36262.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36262.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36262.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36262.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t36262.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36262.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36264){var self__ = this;
var _36264__$1 = this;return self__.meta36263;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36262.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36264,meta36263__$1){var self__ = this;
var _36264__$1 = this;return (new cljs.core.async.t36262(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta36263__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t36262 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t36262(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta36263){return (new cljs.core.async.t36262(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta36263));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t36262(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___36371 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36329){var state_val_36330 = (state_36329[1]);if((state_val_36330 === 1))
{var inst_36268 = (state_36329[7]);var inst_36268__$1 = calc_state.call(null);var inst_36269 = cljs.core.seq_QMARK_.call(null,inst_36268__$1);var state_36329__$1 = (function (){var statearr_36331 = state_36329;(statearr_36331[7] = inst_36268__$1);
return statearr_36331;
})();if(inst_36269)
{var statearr_36332_36372 = state_36329__$1;(statearr_36332_36372[1] = 2);
} else
{var statearr_36333_36373 = state_36329__$1;(statearr_36333_36373[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36330 === 2))
{var inst_36268 = (state_36329[7]);var inst_36271 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36268);var state_36329__$1 = state_36329;var statearr_36334_36374 = state_36329__$1;(statearr_36334_36374[2] = inst_36271);
(statearr_36334_36374[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36330 === 3))
{var inst_36268 = (state_36329[7]);var state_36329__$1 = state_36329;var statearr_36335_36375 = state_36329__$1;(statearr_36335_36375[2] = inst_36268);
(statearr_36335_36375[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36330 === 4))
{var inst_36268 = (state_36329[7]);var inst_36274 = (state_36329[2]);var inst_36275 = cljs.core.get.call(null,inst_36274,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_36276 = cljs.core.get.call(null,inst_36274,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_36277 = cljs.core.get.call(null,inst_36274,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_36278 = inst_36268;var state_36329__$1 = (function (){var statearr_36336 = state_36329;(statearr_36336[8] = inst_36277);
(statearr_36336[9] = inst_36278);
(statearr_36336[10] = inst_36275);
(statearr_36336[11] = inst_36276);
return statearr_36336;
})();var statearr_36337_36376 = state_36329__$1;(statearr_36337_36376[2] = null);
(statearr_36337_36376[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36330 === 5))
{var inst_36278 = (state_36329[9]);var inst_36281 = cljs.core.seq_QMARK_.call(null,inst_36278);var state_36329__$1 = state_36329;if(inst_36281)
{var statearr_36338_36377 = state_36329__$1;(statearr_36338_36377[1] = 7);
} else
{var statearr_36339_36378 = state_36329__$1;(statearr_36339_36378[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36330 === 6))
{var inst_36327 = (state_36329[2]);var state_36329__$1 = state_36329;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36329__$1,inst_36327);
} else
{if((state_val_36330 === 7))
{var inst_36278 = (state_36329[9]);var inst_36283 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36278);var state_36329__$1 = state_36329;var statearr_36340_36379 = state_36329__$1;(statearr_36340_36379[2] = inst_36283);
(statearr_36340_36379[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36330 === 8))
{var inst_36278 = (state_36329[9]);var state_36329__$1 = state_36329;var statearr_36341_36380 = state_36329__$1;(statearr_36341_36380[2] = inst_36278);
(statearr_36341_36380[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36330 === 9))
{var inst_36286 = (state_36329[12]);var inst_36286__$1 = (state_36329[2]);var inst_36287 = cljs.core.get.call(null,inst_36286__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_36288 = cljs.core.get.call(null,inst_36286__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_36289 = cljs.core.get.call(null,inst_36286__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_36329__$1 = (function (){var statearr_36342 = state_36329;(statearr_36342[13] = inst_36288);
(statearr_36342[14] = inst_36289);
(statearr_36342[12] = inst_36286__$1);
return statearr_36342;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_36329__$1,10,inst_36287);
} else
{if((state_val_36330 === 10))
{var inst_36294 = (state_36329[15]);var inst_36293 = (state_36329[16]);var inst_36292 = (state_36329[2]);var inst_36293__$1 = cljs.core.nth.call(null,inst_36292,0,null);var inst_36294__$1 = cljs.core.nth.call(null,inst_36292,1,null);var inst_36295 = (inst_36293__$1 == null);var inst_36296 = cljs.core._EQ_.call(null,inst_36294__$1,change);var inst_36297 = (inst_36295) || (inst_36296);var state_36329__$1 = (function (){var statearr_36343 = state_36329;(statearr_36343[15] = inst_36294__$1);
(statearr_36343[16] = inst_36293__$1);
return statearr_36343;
})();if(cljs.core.truth_(inst_36297))
{var statearr_36344_36381 = state_36329__$1;(statearr_36344_36381[1] = 11);
} else
{var statearr_36345_36382 = state_36329__$1;(statearr_36345_36382[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36330 === 11))
{var inst_36293 = (state_36329[16]);var inst_36299 = (inst_36293 == null);var state_36329__$1 = state_36329;if(cljs.core.truth_(inst_36299))
{var statearr_36346_36383 = state_36329__$1;(statearr_36346_36383[1] = 14);
} else
{var statearr_36347_36384 = state_36329__$1;(statearr_36347_36384[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36330 === 12))
{var inst_36308 = (state_36329[17]);var inst_36289 = (state_36329[14]);var inst_36294 = (state_36329[15]);var inst_36308__$1 = inst_36289.call(null,inst_36294);var state_36329__$1 = (function (){var statearr_36348 = state_36329;(statearr_36348[17] = inst_36308__$1);
return statearr_36348;
})();if(cljs.core.truth_(inst_36308__$1))
{var statearr_36349_36385 = state_36329__$1;(statearr_36349_36385[1] = 17);
} else
{var statearr_36350_36386 = state_36329__$1;(statearr_36350_36386[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36330 === 13))
{var inst_36325 = (state_36329[2]);var state_36329__$1 = state_36329;var statearr_36351_36387 = state_36329__$1;(statearr_36351_36387[2] = inst_36325);
(statearr_36351_36387[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36330 === 14))
{var inst_36294 = (state_36329[15]);var inst_36301 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_36294);var state_36329__$1 = state_36329;var statearr_36352_36388 = state_36329__$1;(statearr_36352_36388[2] = inst_36301);
(statearr_36352_36388[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36330 === 15))
{var state_36329__$1 = state_36329;var statearr_36353_36389 = state_36329__$1;(statearr_36353_36389[2] = null);
(statearr_36353_36389[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36330 === 16))
{var inst_36304 = (state_36329[2]);var inst_36305 = calc_state.call(null);var inst_36278 = inst_36305;var state_36329__$1 = (function (){var statearr_36354 = state_36329;(statearr_36354[9] = inst_36278);
(statearr_36354[18] = inst_36304);
return statearr_36354;
})();var statearr_36355_36390 = state_36329__$1;(statearr_36355_36390[2] = null);
(statearr_36355_36390[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36330 === 17))
{var inst_36308 = (state_36329[17]);var state_36329__$1 = state_36329;var statearr_36356_36391 = state_36329__$1;(statearr_36356_36391[2] = inst_36308);
(statearr_36356_36391[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36330 === 18))
{var inst_36288 = (state_36329[13]);var inst_36289 = (state_36329[14]);var inst_36294 = (state_36329[15]);var inst_36311 = cljs.core.empty_QMARK_.call(null,inst_36289);var inst_36312 = inst_36288.call(null,inst_36294);var inst_36313 = cljs.core.not.call(null,inst_36312);var inst_36314 = (inst_36311) && (inst_36313);var state_36329__$1 = state_36329;var statearr_36357_36392 = state_36329__$1;(statearr_36357_36392[2] = inst_36314);
(statearr_36357_36392[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36330 === 19))
{var inst_36316 = (state_36329[2]);var state_36329__$1 = state_36329;if(cljs.core.truth_(inst_36316))
{var statearr_36358_36393 = state_36329__$1;(statearr_36358_36393[1] = 20);
} else
{var statearr_36359_36394 = state_36329__$1;(statearr_36359_36394[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36330 === 20))
{var inst_36293 = (state_36329[16]);var state_36329__$1 = state_36329;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36329__$1,23,out,inst_36293);
} else
{if((state_val_36330 === 21))
{var state_36329__$1 = state_36329;var statearr_36360_36395 = state_36329__$1;(statearr_36360_36395[2] = null);
(statearr_36360_36395[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36330 === 22))
{var inst_36286 = (state_36329[12]);var inst_36322 = (state_36329[2]);var inst_36278 = inst_36286;var state_36329__$1 = (function (){var statearr_36361 = state_36329;(statearr_36361[9] = inst_36278);
(statearr_36361[19] = inst_36322);
return statearr_36361;
})();var statearr_36362_36396 = state_36329__$1;(statearr_36362_36396[2] = null);
(statearr_36362_36396[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36330 === 23))
{var inst_36319 = (state_36329[2]);var state_36329__$1 = state_36329;var statearr_36363_36397 = state_36329__$1;(statearr_36363_36397[2] = inst_36319);
(statearr_36363_36397[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_36367 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36367[0] = state_machine__5507__auto__);
(statearr_36367[1] = 1);
return statearr_36367;
});
var state_machine__5507__auto____1 = (function (state_36329){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36329);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36368){if((e36368 instanceof Object))
{var ex__5510__auto__ = e36368;var statearr_36369_36398 = state_36329;(statearr_36369_36398[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36329);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36368;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36399 = state_36329;
state_36329 = G__36399;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36329){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36370 = f__5522__auto__.call(null);(statearr_36370[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36371);
return statearr_36370;
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
cljs.core.async.Pub = (function (){var obj36401 = {};return obj36401;
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
return (function (p1__36402_SHARP_){if(cljs.core.truth_(p1__36402_SHARP_.call(null,topic)))
{return p1__36402_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__36402_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t36527 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36527 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta36528){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta36528 = meta36528;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36527.cljs$lang$type = true;
cljs.core.async.t36527.cljs$lang$ctorStr = "cljs.core.async/t36527";
cljs.core.async.t36527.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t36527");
});})(mults,ensure_mult))
;
cljs.core.async.t36527.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t36527.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t36527.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t36527.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t36527.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t36527.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t36527.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t36527.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_36529){var self__ = this;
var _36529__$1 = this;return self__.meta36528;
});})(mults,ensure_mult))
;
cljs.core.async.t36527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_36529,meta36528__$1){var self__ = this;
var _36529__$1 = this;return (new cljs.core.async.t36527(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta36528__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t36527 = ((function (mults,ensure_mult){
return (function __GT_t36527(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta36528){return (new cljs.core.async.t36527(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta36528));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t36527(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___36651 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36603){var state_val_36604 = (state_36603[1]);if((state_val_36604 === 1))
{var state_36603__$1 = state_36603;var statearr_36605_36652 = state_36603__$1;(statearr_36605_36652[2] = null);
(statearr_36605_36652[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36604 === 2))
{var state_36603__$1 = state_36603;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36603__$1,4,ch);
} else
{if((state_val_36604 === 3))
{var inst_36601 = (state_36603[2]);var state_36603__$1 = state_36603;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36603__$1,inst_36601);
} else
{if((state_val_36604 === 4))
{var inst_36532 = (state_36603[7]);var inst_36532__$1 = (state_36603[2]);var inst_36533 = (inst_36532__$1 == null);var state_36603__$1 = (function (){var statearr_36606 = state_36603;(statearr_36606[7] = inst_36532__$1);
return statearr_36606;
})();if(cljs.core.truth_(inst_36533))
{var statearr_36607_36653 = state_36603__$1;(statearr_36607_36653[1] = 5);
} else
{var statearr_36608_36654 = state_36603__$1;(statearr_36608_36654[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36604 === 5))
{var inst_36539 = cljs.core.deref.call(null,mults);var inst_36540 = cljs.core.vals.call(null,inst_36539);var inst_36541 = cljs.core.seq.call(null,inst_36540);var inst_36542 = inst_36541;var inst_36543 = null;var inst_36544 = 0;var inst_36545 = 0;var state_36603__$1 = (function (){var statearr_36609 = state_36603;(statearr_36609[8] = inst_36542);
(statearr_36609[9] = inst_36545);
(statearr_36609[10] = inst_36544);
(statearr_36609[11] = inst_36543);
return statearr_36609;
})();var statearr_36610_36655 = state_36603__$1;(statearr_36610_36655[2] = null);
(statearr_36610_36655[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36604 === 6))
{var inst_36580 = (state_36603[12]);var inst_36582 = (state_36603[13]);var inst_36532 = (state_36603[7]);var inst_36580__$1 = topic_fn.call(null,inst_36532);var inst_36581 = cljs.core.deref.call(null,mults);var inst_36582__$1 = cljs.core.get.call(null,inst_36581,inst_36580__$1);var state_36603__$1 = (function (){var statearr_36611 = state_36603;(statearr_36611[12] = inst_36580__$1);
(statearr_36611[13] = inst_36582__$1);
return statearr_36611;
})();if(cljs.core.truth_(inst_36582__$1))
{var statearr_36612_36656 = state_36603__$1;(statearr_36612_36656[1] = 19);
} else
{var statearr_36613_36657 = state_36603__$1;(statearr_36613_36657[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36604 === 7))
{var inst_36599 = (state_36603[2]);var state_36603__$1 = state_36603;var statearr_36614_36658 = state_36603__$1;(statearr_36614_36658[2] = inst_36599);
(statearr_36614_36658[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36604 === 8))
{var inst_36545 = (state_36603[9]);var inst_36544 = (state_36603[10]);var inst_36547 = (inst_36545 < inst_36544);var inst_36548 = inst_36547;var state_36603__$1 = state_36603;if(cljs.core.truth_(inst_36548))
{var statearr_36618_36659 = state_36603__$1;(statearr_36618_36659[1] = 10);
} else
{var statearr_36619_36660 = state_36603__$1;(statearr_36619_36660[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36604 === 9))
{var inst_36578 = (state_36603[2]);var state_36603__$1 = state_36603;var statearr_36620_36661 = state_36603__$1;(statearr_36620_36661[2] = inst_36578);
(statearr_36620_36661[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36604 === 10))
{var inst_36542 = (state_36603[8]);var inst_36545 = (state_36603[9]);var inst_36544 = (state_36603[10]);var inst_36543 = (state_36603[11]);var inst_36550 = cljs.core._nth.call(null,inst_36543,inst_36545);var inst_36551 = cljs.core.async.muxch_STAR_.call(null,inst_36550);var inst_36552 = cljs.core.async.close_BANG_.call(null,inst_36551);var inst_36553 = (inst_36545 + 1);var tmp36615 = inst_36542;var tmp36616 = inst_36544;var tmp36617 = inst_36543;var inst_36542__$1 = tmp36615;var inst_36543__$1 = tmp36617;var inst_36544__$1 = tmp36616;var inst_36545__$1 = inst_36553;var state_36603__$1 = (function (){var statearr_36621 = state_36603;(statearr_36621[8] = inst_36542__$1);
(statearr_36621[14] = inst_36552);
(statearr_36621[9] = inst_36545__$1);
(statearr_36621[10] = inst_36544__$1);
(statearr_36621[11] = inst_36543__$1);
return statearr_36621;
})();var statearr_36622_36662 = state_36603__$1;(statearr_36622_36662[2] = null);
(statearr_36622_36662[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36604 === 11))
{var inst_36542 = (state_36603[8]);var inst_36556 = (state_36603[15]);var inst_36556__$1 = cljs.core.seq.call(null,inst_36542);var state_36603__$1 = (function (){var statearr_36623 = state_36603;(statearr_36623[15] = inst_36556__$1);
return statearr_36623;
})();if(inst_36556__$1)
{var statearr_36624_36663 = state_36603__$1;(statearr_36624_36663[1] = 13);
} else
{var statearr_36625_36664 = state_36603__$1;(statearr_36625_36664[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36604 === 12))
{var inst_36576 = (state_36603[2]);var state_36603__$1 = state_36603;var statearr_36626_36665 = state_36603__$1;(statearr_36626_36665[2] = inst_36576);
(statearr_36626_36665[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36604 === 13))
{var inst_36556 = (state_36603[15]);var inst_36558 = cljs.core.chunked_seq_QMARK_.call(null,inst_36556);var state_36603__$1 = state_36603;if(inst_36558)
{var statearr_36627_36666 = state_36603__$1;(statearr_36627_36666[1] = 16);
} else
{var statearr_36628_36667 = state_36603__$1;(statearr_36628_36667[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36604 === 14))
{var state_36603__$1 = state_36603;var statearr_36629_36668 = state_36603__$1;(statearr_36629_36668[2] = null);
(statearr_36629_36668[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36604 === 15))
{var inst_36574 = (state_36603[2]);var state_36603__$1 = state_36603;var statearr_36630_36669 = state_36603__$1;(statearr_36630_36669[2] = inst_36574);
(statearr_36630_36669[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36604 === 16))
{var inst_36556 = (state_36603[15]);var inst_36560 = cljs.core.chunk_first.call(null,inst_36556);var inst_36561 = cljs.core.chunk_rest.call(null,inst_36556);var inst_36562 = cljs.core.count.call(null,inst_36560);var inst_36542 = inst_36561;var inst_36543 = inst_36560;var inst_36544 = inst_36562;var inst_36545 = 0;var state_36603__$1 = (function (){var statearr_36631 = state_36603;(statearr_36631[8] = inst_36542);
(statearr_36631[9] = inst_36545);
(statearr_36631[10] = inst_36544);
(statearr_36631[11] = inst_36543);
return statearr_36631;
})();var statearr_36632_36670 = state_36603__$1;(statearr_36632_36670[2] = null);
(statearr_36632_36670[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36604 === 17))
{var inst_36556 = (state_36603[15]);var inst_36565 = cljs.core.first.call(null,inst_36556);var inst_36566 = cljs.core.async.muxch_STAR_.call(null,inst_36565);var inst_36567 = cljs.core.async.close_BANG_.call(null,inst_36566);var inst_36568 = cljs.core.next.call(null,inst_36556);var inst_36542 = inst_36568;var inst_36543 = null;var inst_36544 = 0;var inst_36545 = 0;var state_36603__$1 = (function (){var statearr_36633 = state_36603;(statearr_36633[8] = inst_36542);
(statearr_36633[9] = inst_36545);
(statearr_36633[10] = inst_36544);
(statearr_36633[11] = inst_36543);
(statearr_36633[16] = inst_36567);
return statearr_36633;
})();var statearr_36634_36671 = state_36603__$1;(statearr_36634_36671[2] = null);
(statearr_36634_36671[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36604 === 18))
{var inst_36571 = (state_36603[2]);var state_36603__$1 = state_36603;var statearr_36635_36672 = state_36603__$1;(statearr_36635_36672[2] = inst_36571);
(statearr_36635_36672[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36604 === 19))
{var state_36603__$1 = state_36603;var statearr_36636_36673 = state_36603__$1;(statearr_36636_36673[2] = null);
(statearr_36636_36673[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36604 === 20))
{var state_36603__$1 = state_36603;var statearr_36637_36674 = state_36603__$1;(statearr_36637_36674[2] = null);
(statearr_36637_36674[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36604 === 21))
{var inst_36596 = (state_36603[2]);var state_36603__$1 = (function (){var statearr_36638 = state_36603;(statearr_36638[17] = inst_36596);
return statearr_36638;
})();var statearr_36639_36675 = state_36603__$1;(statearr_36639_36675[2] = null);
(statearr_36639_36675[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36604 === 22))
{var inst_36593 = (state_36603[2]);var state_36603__$1 = state_36603;var statearr_36640_36676 = state_36603__$1;(statearr_36640_36676[2] = inst_36593);
(statearr_36640_36676[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36604 === 23))
{var inst_36580 = (state_36603[12]);var inst_36584 = (state_36603[2]);var inst_36585 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_36580);var state_36603__$1 = (function (){var statearr_36641 = state_36603;(statearr_36641[18] = inst_36584);
return statearr_36641;
})();var statearr_36642_36677 = state_36603__$1;(statearr_36642_36677[2] = inst_36585);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36603__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36604 === 24))
{var inst_36582 = (state_36603[13]);var inst_36532 = (state_36603[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36603,23,Object,null,22);var inst_36589 = cljs.core.async.muxch_STAR_.call(null,inst_36582);var state_36603__$1 = state_36603;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36603__$1,25,inst_36589,inst_36532);
} else
{if((state_val_36604 === 25))
{var inst_36591 = (state_36603[2]);var state_36603__$1 = state_36603;var statearr_36643_36678 = state_36603__$1;(statearr_36643_36678[2] = inst_36591);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36603__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_36647 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36647[0] = state_machine__5507__auto__);
(statearr_36647[1] = 1);
return statearr_36647;
});
var state_machine__5507__auto____1 = (function (state_36603){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36603);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36648){if((e36648 instanceof Object))
{var ex__5510__auto__ = e36648;var statearr_36649_36679 = state_36603;(statearr_36649_36679[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36603);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36648;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36680 = state_36603;
state_36603 = G__36680;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36603){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36650 = f__5522__auto__.call(null);(statearr_36650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36651);
return statearr_36650;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___36817 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36787){var state_val_36788 = (state_36787[1]);if((state_val_36788 === 1))
{var state_36787__$1 = state_36787;var statearr_36789_36818 = state_36787__$1;(statearr_36789_36818[2] = null);
(statearr_36789_36818[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36788 === 2))
{var inst_36750 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_36751 = 0;var state_36787__$1 = (function (){var statearr_36790 = state_36787;(statearr_36790[7] = inst_36750);
(statearr_36790[8] = inst_36751);
return statearr_36790;
})();var statearr_36791_36819 = state_36787__$1;(statearr_36791_36819[2] = null);
(statearr_36791_36819[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36788 === 3))
{var inst_36785 = (state_36787[2]);var state_36787__$1 = state_36787;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36787__$1,inst_36785);
} else
{if((state_val_36788 === 4))
{var inst_36751 = (state_36787[8]);var inst_36753 = (inst_36751 < cnt);var state_36787__$1 = state_36787;if(cljs.core.truth_(inst_36753))
{var statearr_36792_36820 = state_36787__$1;(statearr_36792_36820[1] = 6);
} else
{var statearr_36793_36821 = state_36787__$1;(statearr_36793_36821[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36788 === 5))
{var inst_36771 = (state_36787[2]);var state_36787__$1 = (function (){var statearr_36794 = state_36787;(statearr_36794[9] = inst_36771);
return statearr_36794;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36787__$1,12,dchan);
} else
{if((state_val_36788 === 6))
{var state_36787__$1 = state_36787;var statearr_36795_36822 = state_36787__$1;(statearr_36795_36822[2] = null);
(statearr_36795_36822[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36788 === 7))
{var state_36787__$1 = state_36787;var statearr_36796_36823 = state_36787__$1;(statearr_36796_36823[2] = null);
(statearr_36796_36823[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36788 === 8))
{var inst_36769 = (state_36787[2]);var state_36787__$1 = state_36787;var statearr_36797_36824 = state_36787__$1;(statearr_36797_36824[2] = inst_36769);
(statearr_36797_36824[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36788 === 9))
{var inst_36751 = (state_36787[8]);var inst_36764 = (state_36787[2]);var inst_36765 = (inst_36751 + 1);var inst_36751__$1 = inst_36765;var state_36787__$1 = (function (){var statearr_36798 = state_36787;(statearr_36798[8] = inst_36751__$1);
(statearr_36798[10] = inst_36764);
return statearr_36798;
})();var statearr_36799_36825 = state_36787__$1;(statearr_36799_36825[2] = null);
(statearr_36799_36825[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36788 === 10))
{var inst_36755 = (state_36787[2]);var inst_36756 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_36787__$1 = (function (){var statearr_36800 = state_36787;(statearr_36800[11] = inst_36755);
return statearr_36800;
})();var statearr_36801_36826 = state_36787__$1;(statearr_36801_36826[2] = inst_36756);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36787__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36788 === 11))
{var inst_36751 = (state_36787[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36787,10,Object,null,9);var inst_36760 = chs__$1.call(null,inst_36751);var inst_36761 = done.call(null,inst_36751);var inst_36762 = cljs.core.async.take_BANG_.call(null,inst_36760,inst_36761);var state_36787__$1 = state_36787;var statearr_36802_36827 = state_36787__$1;(statearr_36802_36827[2] = inst_36762);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36787__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36788 === 12))
{var inst_36773 = (state_36787[12]);var inst_36773__$1 = (state_36787[2]);var inst_36774 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_36773__$1);var state_36787__$1 = (function (){var statearr_36803 = state_36787;(statearr_36803[12] = inst_36773__$1);
return statearr_36803;
})();if(cljs.core.truth_(inst_36774))
{var statearr_36804_36828 = state_36787__$1;(statearr_36804_36828[1] = 13);
} else
{var statearr_36805_36829 = state_36787__$1;(statearr_36805_36829[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36788 === 13))
{var inst_36776 = cljs.core.async.close_BANG_.call(null,out);var state_36787__$1 = state_36787;var statearr_36806_36830 = state_36787__$1;(statearr_36806_36830[2] = inst_36776);
(statearr_36806_36830[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36788 === 14))
{var inst_36773 = (state_36787[12]);var inst_36778 = cljs.core.apply.call(null,f,inst_36773);var state_36787__$1 = state_36787;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36787__$1,16,out,inst_36778);
} else
{if((state_val_36788 === 15))
{var inst_36783 = (state_36787[2]);var state_36787__$1 = state_36787;var statearr_36807_36831 = state_36787__$1;(statearr_36807_36831[2] = inst_36783);
(statearr_36807_36831[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36788 === 16))
{var inst_36780 = (state_36787[2]);var state_36787__$1 = (function (){var statearr_36808 = state_36787;(statearr_36808[13] = inst_36780);
return statearr_36808;
})();var statearr_36809_36832 = state_36787__$1;(statearr_36809_36832[2] = null);
(statearr_36809_36832[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_36813 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36813[0] = state_machine__5507__auto__);
(statearr_36813[1] = 1);
return statearr_36813;
});
var state_machine__5507__auto____1 = (function (state_36787){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36787);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36814){if((e36814 instanceof Object))
{var ex__5510__auto__ = e36814;var statearr_36815_36833 = state_36787;(statearr_36815_36833[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36787);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36814;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36834 = state_36787;
state_36787 = G__36834;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36787){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36816 = f__5522__auto__.call(null);(statearr_36816[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36817);
return statearr_36816;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___36942 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36918){var state_val_36919 = (state_36918[1]);if((state_val_36919 === 1))
{var inst_36889 = cljs.core.vec.call(null,chs);var inst_36890 = inst_36889;var state_36918__$1 = (function (){var statearr_36920 = state_36918;(statearr_36920[7] = inst_36890);
return statearr_36920;
})();var statearr_36921_36943 = state_36918__$1;(statearr_36921_36943[2] = null);
(statearr_36921_36943[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36919 === 2))
{var inst_36890 = (state_36918[7]);var inst_36892 = cljs.core.count.call(null,inst_36890);var inst_36893 = (inst_36892 > 0);var state_36918__$1 = state_36918;if(cljs.core.truth_(inst_36893))
{var statearr_36922_36944 = state_36918__$1;(statearr_36922_36944[1] = 4);
} else
{var statearr_36923_36945 = state_36918__$1;(statearr_36923_36945[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36919 === 3))
{var inst_36916 = (state_36918[2]);var state_36918__$1 = state_36918;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36918__$1,inst_36916);
} else
{if((state_val_36919 === 4))
{var inst_36890 = (state_36918[7]);var state_36918__$1 = state_36918;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_36918__$1,7,inst_36890);
} else
{if((state_val_36919 === 5))
{var inst_36912 = cljs.core.async.close_BANG_.call(null,out);var state_36918__$1 = state_36918;var statearr_36924_36946 = state_36918__$1;(statearr_36924_36946[2] = inst_36912);
(statearr_36924_36946[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36919 === 6))
{var inst_36914 = (state_36918[2]);var state_36918__$1 = state_36918;var statearr_36925_36947 = state_36918__$1;(statearr_36925_36947[2] = inst_36914);
(statearr_36925_36947[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36919 === 7))
{var inst_36898 = (state_36918[8]);var inst_36897 = (state_36918[9]);var inst_36897__$1 = (state_36918[2]);var inst_36898__$1 = cljs.core.nth.call(null,inst_36897__$1,0,null);var inst_36899 = cljs.core.nth.call(null,inst_36897__$1,1,null);var inst_36900 = (inst_36898__$1 == null);var state_36918__$1 = (function (){var statearr_36926 = state_36918;(statearr_36926[10] = inst_36899);
(statearr_36926[8] = inst_36898__$1);
(statearr_36926[9] = inst_36897__$1);
return statearr_36926;
})();if(cljs.core.truth_(inst_36900))
{var statearr_36927_36948 = state_36918__$1;(statearr_36927_36948[1] = 8);
} else
{var statearr_36928_36949 = state_36918__$1;(statearr_36928_36949[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36919 === 8))
{var inst_36899 = (state_36918[10]);var inst_36898 = (state_36918[8]);var inst_36897 = (state_36918[9]);var inst_36890 = (state_36918[7]);var inst_36902 = (function (){var c = inst_36899;var v = inst_36898;var vec__36895 = inst_36897;var cs = inst_36890;return ((function (c,v,vec__36895,cs,inst_36899,inst_36898,inst_36897,inst_36890,state_val_36919){
return (function (p1__36835_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__36835_SHARP_);
});
;})(c,v,vec__36895,cs,inst_36899,inst_36898,inst_36897,inst_36890,state_val_36919))
})();var inst_36903 = cljs.core.filterv.call(null,inst_36902,inst_36890);var inst_36890__$1 = inst_36903;var state_36918__$1 = (function (){var statearr_36929 = state_36918;(statearr_36929[7] = inst_36890__$1);
return statearr_36929;
})();var statearr_36930_36950 = state_36918__$1;(statearr_36930_36950[2] = null);
(statearr_36930_36950[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36919 === 9))
{var inst_36898 = (state_36918[8]);var state_36918__$1 = state_36918;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36918__$1,11,out,inst_36898);
} else
{if((state_val_36919 === 10))
{var inst_36910 = (state_36918[2]);var state_36918__$1 = state_36918;var statearr_36932_36951 = state_36918__$1;(statearr_36932_36951[2] = inst_36910);
(statearr_36932_36951[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36919 === 11))
{var inst_36890 = (state_36918[7]);var inst_36907 = (state_36918[2]);var tmp36931 = inst_36890;var inst_36890__$1 = tmp36931;var state_36918__$1 = (function (){var statearr_36933 = state_36918;(statearr_36933[11] = inst_36907);
(statearr_36933[7] = inst_36890__$1);
return statearr_36933;
})();var statearr_36934_36952 = state_36918__$1;(statearr_36934_36952[2] = null);
(statearr_36934_36952[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_36938 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36938[0] = state_machine__5507__auto__);
(statearr_36938[1] = 1);
return statearr_36938;
});
var state_machine__5507__auto____1 = (function (state_36918){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36918);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36939){if((e36939 instanceof Object))
{var ex__5510__auto__ = e36939;var statearr_36940_36953 = state_36918;(statearr_36940_36953[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36918);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36939;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36954 = state_36918;
state_36918 = G__36954;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36918){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36941 = f__5522__auto__.call(null);(statearr_36941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36942);
return statearr_36941;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___37047 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_37024){var state_val_37025 = (state_37024[1]);if((state_val_37025 === 1))
{var inst_37001 = 0;var state_37024__$1 = (function (){var statearr_37026 = state_37024;(statearr_37026[7] = inst_37001);
return statearr_37026;
})();var statearr_37027_37048 = state_37024__$1;(statearr_37027_37048[2] = null);
(statearr_37027_37048[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37025 === 2))
{var inst_37001 = (state_37024[7]);var inst_37003 = (inst_37001 < n);var state_37024__$1 = state_37024;if(cljs.core.truth_(inst_37003))
{var statearr_37028_37049 = state_37024__$1;(statearr_37028_37049[1] = 4);
} else
{var statearr_37029_37050 = state_37024__$1;(statearr_37029_37050[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37025 === 3))
{var inst_37021 = (state_37024[2]);var inst_37022 = cljs.core.async.close_BANG_.call(null,out);var state_37024__$1 = (function (){var statearr_37030 = state_37024;(statearr_37030[8] = inst_37021);
return statearr_37030;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37024__$1,inst_37022);
} else
{if((state_val_37025 === 4))
{var state_37024__$1 = state_37024;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37024__$1,7,ch);
} else
{if((state_val_37025 === 5))
{var state_37024__$1 = state_37024;var statearr_37031_37051 = state_37024__$1;(statearr_37031_37051[2] = null);
(statearr_37031_37051[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37025 === 6))
{var inst_37019 = (state_37024[2]);var state_37024__$1 = state_37024;var statearr_37032_37052 = state_37024__$1;(statearr_37032_37052[2] = inst_37019);
(statearr_37032_37052[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37025 === 7))
{var inst_37006 = (state_37024[9]);var inst_37006__$1 = (state_37024[2]);var inst_37007 = (inst_37006__$1 == null);var inst_37008 = cljs.core.not.call(null,inst_37007);var state_37024__$1 = (function (){var statearr_37033 = state_37024;(statearr_37033[9] = inst_37006__$1);
return statearr_37033;
})();if(inst_37008)
{var statearr_37034_37053 = state_37024__$1;(statearr_37034_37053[1] = 8);
} else
{var statearr_37035_37054 = state_37024__$1;(statearr_37035_37054[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37025 === 8))
{var inst_37006 = (state_37024[9]);var state_37024__$1 = state_37024;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37024__$1,11,out,inst_37006);
} else
{if((state_val_37025 === 9))
{var state_37024__$1 = state_37024;var statearr_37036_37055 = state_37024__$1;(statearr_37036_37055[2] = null);
(statearr_37036_37055[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37025 === 10))
{var inst_37016 = (state_37024[2]);var state_37024__$1 = state_37024;var statearr_37037_37056 = state_37024__$1;(statearr_37037_37056[2] = inst_37016);
(statearr_37037_37056[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37025 === 11))
{var inst_37001 = (state_37024[7]);var inst_37011 = (state_37024[2]);var inst_37012 = (inst_37001 + 1);var inst_37001__$1 = inst_37012;var state_37024__$1 = (function (){var statearr_37038 = state_37024;(statearr_37038[7] = inst_37001__$1);
(statearr_37038[10] = inst_37011);
return statearr_37038;
})();var statearr_37039_37057 = state_37024__$1;(statearr_37039_37057[2] = null);
(statearr_37039_37057[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_37043 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_37043[0] = state_machine__5507__auto__);
(statearr_37043[1] = 1);
return statearr_37043;
});
var state_machine__5507__auto____1 = (function (state_37024){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_37024);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e37044){if((e37044 instanceof Object))
{var ex__5510__auto__ = e37044;var statearr_37045_37058 = state_37024;(statearr_37045_37058[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37024);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37044;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37059 = state_37024;
state_37024 = G__37059;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_37024){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_37024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_37046 = f__5522__auto__.call(null);(statearr_37046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___37047);
return statearr_37046;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___37156 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_37131){var state_val_37132 = (state_37131[1]);if((state_val_37132 === 1))
{var inst_37108 = null;var state_37131__$1 = (function (){var statearr_37133 = state_37131;(statearr_37133[7] = inst_37108);
return statearr_37133;
})();var statearr_37134_37157 = state_37131__$1;(statearr_37134_37157[2] = null);
(statearr_37134_37157[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37132 === 2))
{var state_37131__$1 = state_37131;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37131__$1,4,ch);
} else
{if((state_val_37132 === 3))
{var inst_37128 = (state_37131[2]);var inst_37129 = cljs.core.async.close_BANG_.call(null,out);var state_37131__$1 = (function (){var statearr_37135 = state_37131;(statearr_37135[8] = inst_37128);
return statearr_37135;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37131__$1,inst_37129);
} else
{if((state_val_37132 === 4))
{var inst_37111 = (state_37131[9]);var inst_37111__$1 = (state_37131[2]);var inst_37112 = (inst_37111__$1 == null);var inst_37113 = cljs.core.not.call(null,inst_37112);var state_37131__$1 = (function (){var statearr_37136 = state_37131;(statearr_37136[9] = inst_37111__$1);
return statearr_37136;
})();if(inst_37113)
{var statearr_37137_37158 = state_37131__$1;(statearr_37137_37158[1] = 5);
} else
{var statearr_37138_37159 = state_37131__$1;(statearr_37138_37159[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37132 === 5))
{var inst_37111 = (state_37131[9]);var inst_37108 = (state_37131[7]);var inst_37115 = cljs.core._EQ_.call(null,inst_37111,inst_37108);var state_37131__$1 = state_37131;if(inst_37115)
{var statearr_37139_37160 = state_37131__$1;(statearr_37139_37160[1] = 8);
} else
{var statearr_37140_37161 = state_37131__$1;(statearr_37140_37161[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37132 === 6))
{var state_37131__$1 = state_37131;var statearr_37142_37162 = state_37131__$1;(statearr_37142_37162[2] = null);
(statearr_37142_37162[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37132 === 7))
{var inst_37126 = (state_37131[2]);var state_37131__$1 = state_37131;var statearr_37143_37163 = state_37131__$1;(statearr_37143_37163[2] = inst_37126);
(statearr_37143_37163[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37132 === 8))
{var inst_37108 = (state_37131[7]);var tmp37141 = inst_37108;var inst_37108__$1 = tmp37141;var state_37131__$1 = (function (){var statearr_37144 = state_37131;(statearr_37144[7] = inst_37108__$1);
return statearr_37144;
})();var statearr_37145_37164 = state_37131__$1;(statearr_37145_37164[2] = null);
(statearr_37145_37164[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37132 === 9))
{var inst_37111 = (state_37131[9]);var state_37131__$1 = state_37131;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37131__$1,11,out,inst_37111);
} else
{if((state_val_37132 === 10))
{var inst_37123 = (state_37131[2]);var state_37131__$1 = state_37131;var statearr_37146_37165 = state_37131__$1;(statearr_37146_37165[2] = inst_37123);
(statearr_37146_37165[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37132 === 11))
{var inst_37111 = (state_37131[9]);var inst_37120 = (state_37131[2]);var inst_37108 = inst_37111;var state_37131__$1 = (function (){var statearr_37147 = state_37131;(statearr_37147[7] = inst_37108);
(statearr_37147[10] = inst_37120);
return statearr_37147;
})();var statearr_37148_37166 = state_37131__$1;(statearr_37148_37166[2] = null);
(statearr_37148_37166[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_37152 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_37152[0] = state_machine__5507__auto__);
(statearr_37152[1] = 1);
return statearr_37152;
});
var state_machine__5507__auto____1 = (function (state_37131){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_37131);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e37153){if((e37153 instanceof Object))
{var ex__5510__auto__ = e37153;var statearr_37154_37167 = state_37131;(statearr_37154_37167[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37131);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37153;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37168 = state_37131;
state_37131 = G__37168;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_37131){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_37131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_37155 = f__5522__auto__.call(null);(statearr_37155[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___37156);
return statearr_37155;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___37303 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_37273){var state_val_37274 = (state_37273[1]);if((state_val_37274 === 1))
{var inst_37236 = (new Array(n));var inst_37237 = inst_37236;var inst_37238 = 0;var state_37273__$1 = (function (){var statearr_37275 = state_37273;(statearr_37275[7] = inst_37238);
(statearr_37275[8] = inst_37237);
return statearr_37275;
})();var statearr_37276_37304 = state_37273__$1;(statearr_37276_37304[2] = null);
(statearr_37276_37304[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37274 === 2))
{var state_37273__$1 = state_37273;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37273__$1,4,ch);
} else
{if((state_val_37274 === 3))
{var inst_37271 = (state_37273[2]);var state_37273__$1 = state_37273;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37273__$1,inst_37271);
} else
{if((state_val_37274 === 4))
{var inst_37241 = (state_37273[9]);var inst_37241__$1 = (state_37273[2]);var inst_37242 = (inst_37241__$1 == null);var inst_37243 = cljs.core.not.call(null,inst_37242);var state_37273__$1 = (function (){var statearr_37277 = state_37273;(statearr_37277[9] = inst_37241__$1);
return statearr_37277;
})();if(inst_37243)
{var statearr_37278_37305 = state_37273__$1;(statearr_37278_37305[1] = 5);
} else
{var statearr_37279_37306 = state_37273__$1;(statearr_37279_37306[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37274 === 5))
{var inst_37246 = (state_37273[10]);var inst_37238 = (state_37273[7]);var inst_37237 = (state_37273[8]);var inst_37241 = (state_37273[9]);var inst_37245 = (inst_37237[inst_37238] = inst_37241);var inst_37246__$1 = (inst_37238 + 1);var inst_37247 = (inst_37246__$1 < n);var state_37273__$1 = (function (){var statearr_37280 = state_37273;(statearr_37280[11] = inst_37245);
(statearr_37280[10] = inst_37246__$1);
return statearr_37280;
})();if(cljs.core.truth_(inst_37247))
{var statearr_37281_37307 = state_37273__$1;(statearr_37281_37307[1] = 8);
} else
{var statearr_37282_37308 = state_37273__$1;(statearr_37282_37308[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37274 === 6))
{var inst_37238 = (state_37273[7]);var inst_37259 = (inst_37238 > 0);var state_37273__$1 = state_37273;if(cljs.core.truth_(inst_37259))
{var statearr_37284_37309 = state_37273__$1;(statearr_37284_37309[1] = 12);
} else
{var statearr_37285_37310 = state_37273__$1;(statearr_37285_37310[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37274 === 7))
{var inst_37269 = (state_37273[2]);var state_37273__$1 = state_37273;var statearr_37286_37311 = state_37273__$1;(statearr_37286_37311[2] = inst_37269);
(statearr_37286_37311[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37274 === 8))
{var inst_37246 = (state_37273[10]);var inst_37237 = (state_37273[8]);var tmp37283 = inst_37237;var inst_37237__$1 = tmp37283;var inst_37238 = inst_37246;var state_37273__$1 = (function (){var statearr_37287 = state_37273;(statearr_37287[7] = inst_37238);
(statearr_37287[8] = inst_37237__$1);
return statearr_37287;
})();var statearr_37288_37312 = state_37273__$1;(statearr_37288_37312[2] = null);
(statearr_37288_37312[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37274 === 9))
{var inst_37237 = (state_37273[8]);var inst_37251 = cljs.core.vec.call(null,inst_37237);var state_37273__$1 = state_37273;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37273__$1,11,out,inst_37251);
} else
{if((state_val_37274 === 10))
{var inst_37257 = (state_37273[2]);var state_37273__$1 = state_37273;var statearr_37289_37313 = state_37273__$1;(statearr_37289_37313[2] = inst_37257);
(statearr_37289_37313[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37274 === 11))
{var inst_37253 = (state_37273[2]);var inst_37254 = (new Array(n));var inst_37237 = inst_37254;var inst_37238 = 0;var state_37273__$1 = (function (){var statearr_37290 = state_37273;(statearr_37290[7] = inst_37238);
(statearr_37290[8] = inst_37237);
(statearr_37290[12] = inst_37253);
return statearr_37290;
})();var statearr_37291_37314 = state_37273__$1;(statearr_37291_37314[2] = null);
(statearr_37291_37314[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37274 === 12))
{var inst_37237 = (state_37273[8]);var inst_37261 = cljs.core.vec.call(null,inst_37237);var state_37273__$1 = state_37273;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37273__$1,15,out,inst_37261);
} else
{if((state_val_37274 === 13))
{var state_37273__$1 = state_37273;var statearr_37292_37315 = state_37273__$1;(statearr_37292_37315[2] = null);
(statearr_37292_37315[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37274 === 14))
{var inst_37266 = (state_37273[2]);var inst_37267 = cljs.core.async.close_BANG_.call(null,out);var state_37273__$1 = (function (){var statearr_37293 = state_37273;(statearr_37293[13] = inst_37266);
return statearr_37293;
})();var statearr_37294_37316 = state_37273__$1;(statearr_37294_37316[2] = inst_37267);
(statearr_37294_37316[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37274 === 15))
{var inst_37263 = (state_37273[2]);var state_37273__$1 = state_37273;var statearr_37295_37317 = state_37273__$1;(statearr_37295_37317[2] = inst_37263);
(statearr_37295_37317[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_37299 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37299[0] = state_machine__5507__auto__);
(statearr_37299[1] = 1);
return statearr_37299;
});
var state_machine__5507__auto____1 = (function (state_37273){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_37273);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e37300){if((e37300 instanceof Object))
{var ex__5510__auto__ = e37300;var statearr_37301_37318 = state_37273;(statearr_37301_37318[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37273);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37300;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37319 = state_37273;
state_37273 = G__37319;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_37273){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_37273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_37302 = f__5522__auto__.call(null);(statearr_37302[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___37303);
return statearr_37302;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___37462 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_37432){var state_val_37433 = (state_37432[1]);if((state_val_37433 === 1))
{var inst_37391 = [];var inst_37392 = inst_37391;var inst_37393 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_37432__$1 = (function (){var statearr_37434 = state_37432;(statearr_37434[7] = inst_37393);
(statearr_37434[8] = inst_37392);
return statearr_37434;
})();var statearr_37435_37463 = state_37432__$1;(statearr_37435_37463[2] = null);
(statearr_37435_37463[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37433 === 2))
{var state_37432__$1 = state_37432;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37432__$1,4,ch);
} else
{if((state_val_37433 === 3))
{var inst_37430 = (state_37432[2]);var state_37432__$1 = state_37432;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37432__$1,inst_37430);
} else
{if((state_val_37433 === 4))
{var inst_37396 = (state_37432[9]);var inst_37396__$1 = (state_37432[2]);var inst_37397 = (inst_37396__$1 == null);var inst_37398 = cljs.core.not.call(null,inst_37397);var state_37432__$1 = (function (){var statearr_37436 = state_37432;(statearr_37436[9] = inst_37396__$1);
return statearr_37436;
})();if(inst_37398)
{var statearr_37437_37464 = state_37432__$1;(statearr_37437_37464[1] = 5);
} else
{var statearr_37438_37465 = state_37432__$1;(statearr_37438_37465[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37433 === 5))
{var inst_37393 = (state_37432[7]);var inst_37396 = (state_37432[9]);var inst_37400 = (state_37432[10]);var inst_37400__$1 = f.call(null,inst_37396);var inst_37401 = cljs.core._EQ_.call(null,inst_37400__$1,inst_37393);var inst_37402 = cljs.core.keyword_identical_QMARK_.call(null,inst_37393,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_37403 = (inst_37401) || (inst_37402);var state_37432__$1 = (function (){var statearr_37439 = state_37432;(statearr_37439[10] = inst_37400__$1);
return statearr_37439;
})();if(cljs.core.truth_(inst_37403))
{var statearr_37440_37466 = state_37432__$1;(statearr_37440_37466[1] = 8);
} else
{var statearr_37441_37467 = state_37432__$1;(statearr_37441_37467[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37433 === 6))
{var inst_37392 = (state_37432[8]);var inst_37417 = inst_37392.length;var inst_37418 = (inst_37417 > 0);var state_37432__$1 = state_37432;if(cljs.core.truth_(inst_37418))
{var statearr_37443_37468 = state_37432__$1;(statearr_37443_37468[1] = 12);
} else
{var statearr_37444_37469 = state_37432__$1;(statearr_37444_37469[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37433 === 7))
{var inst_37428 = (state_37432[2]);var state_37432__$1 = state_37432;var statearr_37445_37470 = state_37432__$1;(statearr_37445_37470[2] = inst_37428);
(statearr_37445_37470[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37433 === 8))
{var inst_37396 = (state_37432[9]);var inst_37400 = (state_37432[10]);var inst_37392 = (state_37432[8]);var inst_37405 = inst_37392.push(inst_37396);var tmp37442 = inst_37392;var inst_37392__$1 = tmp37442;var inst_37393 = inst_37400;var state_37432__$1 = (function (){var statearr_37446 = state_37432;(statearr_37446[7] = inst_37393);
(statearr_37446[8] = inst_37392__$1);
(statearr_37446[11] = inst_37405);
return statearr_37446;
})();var statearr_37447_37471 = state_37432__$1;(statearr_37447_37471[2] = null);
(statearr_37447_37471[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37433 === 9))
{var inst_37392 = (state_37432[8]);var inst_37408 = cljs.core.vec.call(null,inst_37392);var state_37432__$1 = state_37432;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37432__$1,11,out,inst_37408);
} else
{if((state_val_37433 === 10))
{var inst_37415 = (state_37432[2]);var state_37432__$1 = state_37432;var statearr_37448_37472 = state_37432__$1;(statearr_37448_37472[2] = inst_37415);
(statearr_37448_37472[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37433 === 11))
{var inst_37396 = (state_37432[9]);var inst_37400 = (state_37432[10]);var inst_37410 = (state_37432[2]);var inst_37411 = [];var inst_37412 = inst_37411.push(inst_37396);var inst_37392 = inst_37411;var inst_37393 = inst_37400;var state_37432__$1 = (function (){var statearr_37449 = state_37432;(statearr_37449[7] = inst_37393);
(statearr_37449[12] = inst_37410);
(statearr_37449[8] = inst_37392);
(statearr_37449[13] = inst_37412);
return statearr_37449;
})();var statearr_37450_37473 = state_37432__$1;(statearr_37450_37473[2] = null);
(statearr_37450_37473[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37433 === 12))
{var inst_37392 = (state_37432[8]);var inst_37420 = cljs.core.vec.call(null,inst_37392);var state_37432__$1 = state_37432;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37432__$1,15,out,inst_37420);
} else
{if((state_val_37433 === 13))
{var state_37432__$1 = state_37432;var statearr_37451_37474 = state_37432__$1;(statearr_37451_37474[2] = null);
(statearr_37451_37474[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37433 === 14))
{var inst_37425 = (state_37432[2]);var inst_37426 = cljs.core.async.close_BANG_.call(null,out);var state_37432__$1 = (function (){var statearr_37452 = state_37432;(statearr_37452[14] = inst_37425);
return statearr_37452;
})();var statearr_37453_37475 = state_37432__$1;(statearr_37453_37475[2] = inst_37426);
(statearr_37453_37475[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37433 === 15))
{var inst_37422 = (state_37432[2]);var state_37432__$1 = state_37432;var statearr_37454_37476 = state_37432__$1;(statearr_37454_37476[2] = inst_37422);
(statearr_37454_37476[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_37458 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37458[0] = state_machine__5507__auto__);
(statearr_37458[1] = 1);
return statearr_37458;
});
var state_machine__5507__auto____1 = (function (state_37432){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_37432);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e37459){if((e37459 instanceof Object))
{var ex__5510__auto__ = e37459;var statearr_37460_37477 = state_37432;(statearr_37460_37477[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37432);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37459;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37478 = state_37432;
state_37432 = G__37478;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_37432){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_37432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_37461 = f__5522__auto__.call(null);(statearr_37461[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___37462);
return statearr_37461;
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
