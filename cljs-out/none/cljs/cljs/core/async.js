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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t12920 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12920 = (function (f,fn_handler,meta12921){
this.f = f;
this.fn_handler = fn_handler;
this.meta12921 = meta12921;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12920.cljs$lang$type = true;
cljs.core.async.t12920.cljs$lang$ctorStr = "cljs.core.async/t12920";
cljs.core.async.t12920.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12920");
});
cljs.core.async.t12920.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12920.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t12920.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t12920.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12922){var self__ = this;
var _12922__$1 = this;return self__.meta12921;
});
cljs.core.async.t12920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12922,meta12921__$1){var self__ = this;
var _12922__$1 = this;return (new cljs.core.async.t12920(self__.f,self__.fn_handler,meta12921__$1));
});
cljs.core.async.__GT_t12920 = (function __GT_t12920(f__$1,fn_handler__$1,meta12921){return (new cljs.core.async.t12920(f__$1,fn_handler__$1,meta12921));
});
}
return (new cljs.core.async.t12920(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__12924 = buff;if(G__12924)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__12924.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__12924.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12924);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12924);
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
{var val_12925 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_12925);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_12925);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___12926 = n;var x_12927 = 0;while(true){
if((x_12927 < n__4248__auto___12926))
{(a[x_12927] = 0);
{
var G__12928 = (x_12927 + 1);
x_12927 = G__12928;
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
var G__12929 = (i + 1);
i = G__12929;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t12933 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12933 = (function (flag,alt_flag,meta12934){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta12934 = meta12934;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12933.cljs$lang$type = true;
cljs.core.async.t12933.cljs$lang$ctorStr = "cljs.core.async/t12933";
cljs.core.async.t12933.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12933");
});
cljs.core.async.t12933.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12933.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t12933.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t12933.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12935){var self__ = this;
var _12935__$1 = this;return self__.meta12934;
});
cljs.core.async.t12933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12935,meta12934__$1){var self__ = this;
var _12935__$1 = this;return (new cljs.core.async.t12933(self__.flag,self__.alt_flag,meta12934__$1));
});
cljs.core.async.__GT_t12933 = (function __GT_t12933(flag__$1,alt_flag__$1,meta12934){return (new cljs.core.async.t12933(flag__$1,alt_flag__$1,meta12934));
});
}
return (new cljs.core.async.t12933(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t12939 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12939 = (function (cb,flag,alt_handler,meta12940){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta12940 = meta12940;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12939.cljs$lang$type = true;
cljs.core.async.t12939.cljs$lang$ctorStr = "cljs.core.async/t12939";
cljs.core.async.t12939.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12939");
});
cljs.core.async.t12939.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12939.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t12939.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t12939.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12941){var self__ = this;
var _12941__$1 = this;return self__.meta12940;
});
cljs.core.async.t12939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12941,meta12940__$1){var self__ = this;
var _12941__$1 = this;return (new cljs.core.async.t12939(self__.cb,self__.flag,self__.alt_handler,meta12940__$1));
});
cljs.core.async.__GT_t12939 = (function __GT_t12939(cb__$1,flag__$1,alt_handler__$1,meta12940){return (new cljs.core.async.t12939(cb__$1,flag__$1,alt_handler__$1,meta12940));
});
}
return (new cljs.core.async.t12939(cb,flag,alt_handler,null));
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
return (function (p1__12942_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12942_SHARP_,port], null));
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
var G__12943 = (i + 1);
i = G__12943;
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
var alts_BANG___delegate = function (ports,p__12944){var map__12946 = p__12944;var map__12946__$1 = ((cljs.core.seq_QMARK_.call(null,map__12946))?cljs.core.apply.call(null,cljs.core.hash_map,map__12946):map__12946);var opts = map__12946__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__12944 = null;if (arguments.length > 1) {
  p__12944 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__12944);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12947){
var ports = cljs.core.first(arglist__12947);
var p__12944 = cljs.core.rest(arglist__12947);
return alts_BANG___delegate(ports,p__12944);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t12955 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12955 = (function (ch,f,map_LT_,meta12956){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12956 = meta12956;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12955.cljs$lang$type = true;
cljs.core.async.t12955.cljs$lang$ctorStr = "cljs.core.async/t12955";
cljs.core.async.t12955.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12955");
});
cljs.core.async.t12955.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12955.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t12955.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12955.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t12958 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12958 = (function (fn1,_,meta12956,ch,f,map_LT_,meta12959){
this.fn1 = fn1;
this._ = _;
this.meta12956 = meta12956;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12959 = meta12959;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12958.cljs$lang$type = true;
cljs.core.async.t12958.cljs$lang$ctorStr = "cljs.core.async/t12958";
cljs.core.async.t12958.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12958");
});
cljs.core.async.t12958.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12958.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t12958.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t12958.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__12948_SHARP_){return f1.call(null,(((p1__12948_SHARP_ == null))?null:self__.f.call(null,p1__12948_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t12958.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12960){var self__ = this;
var _12960__$1 = this;return self__.meta12959;
});
cljs.core.async.t12958.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12960,meta12959__$1){var self__ = this;
var _12960__$1 = this;return (new cljs.core.async.t12958(self__.fn1,self__._,self__.meta12956,self__.ch,self__.f,self__.map_LT_,meta12959__$1));
});
cljs.core.async.__GT_t12958 = (function __GT_t12958(fn1__$1,___$2,meta12956__$1,ch__$2,f__$2,map_LT___$2,meta12959){return (new cljs.core.async.t12958(fn1__$1,___$2,meta12956__$1,ch__$2,f__$2,map_LT___$2,meta12959));
});
}
return (new cljs.core.async.t12958(fn1,___$1,self__.meta12956,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t12955.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12955.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12955.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12957){var self__ = this;
var _12957__$1 = this;return self__.meta12956;
});
cljs.core.async.t12955.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12957,meta12956__$1){var self__ = this;
var _12957__$1 = this;return (new cljs.core.async.t12955(self__.ch,self__.f,self__.map_LT_,meta12956__$1));
});
cljs.core.async.__GT_t12955 = (function __GT_t12955(ch__$1,f__$1,map_LT___$1,meta12956){return (new cljs.core.async.t12955(ch__$1,f__$1,map_LT___$1,meta12956));
});
}
return (new cljs.core.async.t12955(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t12964 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12964 = (function (ch,f,map_GT_,meta12965){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta12965 = meta12965;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12964.cljs$lang$type = true;
cljs.core.async.t12964.cljs$lang$ctorStr = "cljs.core.async/t12964";
cljs.core.async.t12964.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12964");
});
cljs.core.async.t12964.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12964.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t12964.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12964.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12964.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12964.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12964.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12966){var self__ = this;
var _12966__$1 = this;return self__.meta12965;
});
cljs.core.async.t12964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12966,meta12965__$1){var self__ = this;
var _12966__$1 = this;return (new cljs.core.async.t12964(self__.ch,self__.f,self__.map_GT_,meta12965__$1));
});
cljs.core.async.__GT_t12964 = (function __GT_t12964(ch__$1,f__$1,map_GT___$1,meta12965){return (new cljs.core.async.t12964(ch__$1,f__$1,map_GT___$1,meta12965));
});
}
return (new cljs.core.async.t12964(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t12970 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12970 = (function (ch,p,filter_GT_,meta12971){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta12971 = meta12971;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12970.cljs$lang$type = true;
cljs.core.async.t12970.cljs$lang$ctorStr = "cljs.core.async/t12970";
cljs.core.async.t12970.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12970");
});
cljs.core.async.t12970.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12970.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t12970.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12970.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12970.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12970.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12970.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12972){var self__ = this;
var _12972__$1 = this;return self__.meta12971;
});
cljs.core.async.t12970.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12972,meta12971__$1){var self__ = this;
var _12972__$1 = this;return (new cljs.core.async.t12970(self__.ch,self__.p,self__.filter_GT_,meta12971__$1));
});
cljs.core.async.__GT_t12970 = (function __GT_t12970(ch__$1,p__$1,filter_GT___$1,meta12971){return (new cljs.core.async.t12970(ch__$1,p__$1,filter_GT___$1,meta12971));
});
}
return (new cljs.core.async.t12970(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___13055 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13034){var state_val_13035 = (state_13034[1]);if((state_val_13035 === 1))
{var state_13034__$1 = state_13034;var statearr_13036_13056 = state_13034__$1;(statearr_13036_13056[2] = null);
(statearr_13036_13056[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13035 === 2))
{var state_13034__$1 = state_13034;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13034__$1,4,ch);
} else
{if((state_val_13035 === 3))
{var inst_13032 = (state_13034[2]);var state_13034__$1 = state_13034;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13034__$1,inst_13032);
} else
{if((state_val_13035 === 4))
{var inst_13016 = (state_13034[7]);var inst_13016__$1 = (state_13034[2]);var inst_13017 = (inst_13016__$1 == null);var state_13034__$1 = (function (){var statearr_13037 = state_13034;(statearr_13037[7] = inst_13016__$1);
return statearr_13037;
})();if(cljs.core.truth_(inst_13017))
{var statearr_13038_13057 = state_13034__$1;(statearr_13038_13057[1] = 5);
} else
{var statearr_13039_13058 = state_13034__$1;(statearr_13039_13058[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13035 === 5))
{var inst_13019 = cljs.core.async.close_BANG_.call(null,out);var state_13034__$1 = state_13034;var statearr_13040_13059 = state_13034__$1;(statearr_13040_13059[2] = inst_13019);
(statearr_13040_13059[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13035 === 6))
{var inst_13016 = (state_13034[7]);var inst_13021 = p.call(null,inst_13016);var state_13034__$1 = state_13034;if(cljs.core.truth_(inst_13021))
{var statearr_13041_13060 = state_13034__$1;(statearr_13041_13060[1] = 8);
} else
{var statearr_13042_13061 = state_13034__$1;(statearr_13042_13061[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13035 === 7))
{var inst_13030 = (state_13034[2]);var state_13034__$1 = state_13034;var statearr_13043_13062 = state_13034__$1;(statearr_13043_13062[2] = inst_13030);
(statearr_13043_13062[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13035 === 8))
{var inst_13016 = (state_13034[7]);var state_13034__$1 = state_13034;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13034__$1,11,out,inst_13016);
} else
{if((state_val_13035 === 9))
{var state_13034__$1 = state_13034;var statearr_13044_13063 = state_13034__$1;(statearr_13044_13063[2] = null);
(statearr_13044_13063[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13035 === 10))
{var inst_13027 = (state_13034[2]);var state_13034__$1 = (function (){var statearr_13045 = state_13034;(statearr_13045[8] = inst_13027);
return statearr_13045;
})();var statearr_13046_13064 = state_13034__$1;(statearr_13046_13064[2] = null);
(statearr_13046_13064[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13035 === 11))
{var inst_13024 = (state_13034[2]);var state_13034__$1 = state_13034;var statearr_13047_13065 = state_13034__$1;(statearr_13047_13065[2] = inst_13024);
(statearr_13047_13065[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_13051 = [null,null,null,null,null,null,null,null,null];(statearr_13051[0] = state_machine__5507__auto__);
(statearr_13051[1] = 1);
return statearr_13051;
});
var state_machine__5507__auto____1 = (function (state_13034){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13034);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13052){if((e13052 instanceof Object))
{var ex__5510__auto__ = e13052;var statearr_13053_13066 = state_13034;(statearr_13053_13066[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13034);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13052;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13067 = state_13034;
state_13034 = G__13067;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13034){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13054 = f__5522__auto__.call(null);(statearr_13054[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13055);
return statearr_13054;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13219){var state_val_13220 = (state_13219[1]);if((state_val_13220 === 1))
{var state_13219__$1 = state_13219;var statearr_13221_13258 = state_13219__$1;(statearr_13221_13258[2] = null);
(statearr_13221_13258[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13220 === 2))
{var state_13219__$1 = state_13219;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13219__$1,4,in$);
} else
{if((state_val_13220 === 3))
{var inst_13217 = (state_13219[2]);var state_13219__$1 = state_13219;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13219__$1,inst_13217);
} else
{if((state_val_13220 === 4))
{var inst_13165 = (state_13219[7]);var inst_13165__$1 = (state_13219[2]);var inst_13166 = (inst_13165__$1 == null);var state_13219__$1 = (function (){var statearr_13222 = state_13219;(statearr_13222[7] = inst_13165__$1);
return statearr_13222;
})();if(cljs.core.truth_(inst_13166))
{var statearr_13223_13259 = state_13219__$1;(statearr_13223_13259[1] = 5);
} else
{var statearr_13224_13260 = state_13219__$1;(statearr_13224_13260[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13220 === 5))
{var inst_13168 = cljs.core.async.close_BANG_.call(null,out);var state_13219__$1 = state_13219;var statearr_13225_13261 = state_13219__$1;(statearr_13225_13261[2] = inst_13168);
(statearr_13225_13261[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13220 === 6))
{var inst_13165 = (state_13219[7]);var inst_13170 = f.call(null,inst_13165);var inst_13175 = cljs.core.seq.call(null,inst_13170);var inst_13176 = inst_13175;var inst_13177 = null;var inst_13178 = 0;var inst_13179 = 0;var state_13219__$1 = (function (){var statearr_13226 = state_13219;(statearr_13226[8] = inst_13177);
(statearr_13226[9] = inst_13178);
(statearr_13226[10] = inst_13176);
(statearr_13226[11] = inst_13179);
return statearr_13226;
})();var statearr_13227_13262 = state_13219__$1;(statearr_13227_13262[2] = null);
(statearr_13227_13262[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13220 === 7))
{var inst_13215 = (state_13219[2]);var state_13219__$1 = state_13219;var statearr_13228_13263 = state_13219__$1;(statearr_13228_13263[2] = inst_13215);
(statearr_13228_13263[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13220 === 8))
{var inst_13178 = (state_13219[9]);var inst_13179 = (state_13219[11]);var inst_13181 = (inst_13179 < inst_13178);var inst_13182 = inst_13181;var state_13219__$1 = state_13219;if(cljs.core.truth_(inst_13182))
{var statearr_13229_13264 = state_13219__$1;(statearr_13229_13264[1] = 10);
} else
{var statearr_13230_13265 = state_13219__$1;(statearr_13230_13265[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13220 === 9))
{var inst_13212 = (state_13219[2]);var state_13219__$1 = (function (){var statearr_13231 = state_13219;(statearr_13231[12] = inst_13212);
return statearr_13231;
})();var statearr_13232_13266 = state_13219__$1;(statearr_13232_13266[2] = null);
(statearr_13232_13266[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13220 === 10))
{var inst_13177 = (state_13219[8]);var inst_13179 = (state_13219[11]);var inst_13184 = cljs.core._nth.call(null,inst_13177,inst_13179);var state_13219__$1 = state_13219;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13219__$1,13,out,inst_13184);
} else
{if((state_val_13220 === 11))
{var inst_13176 = (state_13219[10]);var inst_13190 = (state_13219[13]);var inst_13190__$1 = cljs.core.seq.call(null,inst_13176);var state_13219__$1 = (function (){var statearr_13236 = state_13219;(statearr_13236[13] = inst_13190__$1);
return statearr_13236;
})();if(inst_13190__$1)
{var statearr_13237_13267 = state_13219__$1;(statearr_13237_13267[1] = 14);
} else
{var statearr_13238_13268 = state_13219__$1;(statearr_13238_13268[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13220 === 12))
{var inst_13210 = (state_13219[2]);var state_13219__$1 = state_13219;var statearr_13239_13269 = state_13219__$1;(statearr_13239_13269[2] = inst_13210);
(statearr_13239_13269[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13220 === 13))
{var inst_13177 = (state_13219[8]);var inst_13178 = (state_13219[9]);var inst_13176 = (state_13219[10]);var inst_13179 = (state_13219[11]);var inst_13186 = (state_13219[2]);var inst_13187 = (inst_13179 + 1);var tmp13233 = inst_13177;var tmp13234 = inst_13178;var tmp13235 = inst_13176;var inst_13176__$1 = tmp13235;var inst_13177__$1 = tmp13233;var inst_13178__$1 = tmp13234;var inst_13179__$1 = inst_13187;var state_13219__$1 = (function (){var statearr_13240 = state_13219;(statearr_13240[8] = inst_13177__$1);
(statearr_13240[9] = inst_13178__$1);
(statearr_13240[10] = inst_13176__$1);
(statearr_13240[14] = inst_13186);
(statearr_13240[11] = inst_13179__$1);
return statearr_13240;
})();var statearr_13241_13270 = state_13219__$1;(statearr_13241_13270[2] = null);
(statearr_13241_13270[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13220 === 14))
{var inst_13190 = (state_13219[13]);var inst_13192 = cljs.core.chunked_seq_QMARK_.call(null,inst_13190);var state_13219__$1 = state_13219;if(inst_13192)
{var statearr_13242_13271 = state_13219__$1;(statearr_13242_13271[1] = 17);
} else
{var statearr_13243_13272 = state_13219__$1;(statearr_13243_13272[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13220 === 15))
{var state_13219__$1 = state_13219;var statearr_13244_13273 = state_13219__$1;(statearr_13244_13273[2] = null);
(statearr_13244_13273[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13220 === 16))
{var inst_13208 = (state_13219[2]);var state_13219__$1 = state_13219;var statearr_13245_13274 = state_13219__$1;(statearr_13245_13274[2] = inst_13208);
(statearr_13245_13274[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13220 === 17))
{var inst_13190 = (state_13219[13]);var inst_13194 = cljs.core.chunk_first.call(null,inst_13190);var inst_13195 = cljs.core.chunk_rest.call(null,inst_13190);var inst_13196 = cljs.core.count.call(null,inst_13194);var inst_13176 = inst_13195;var inst_13177 = inst_13194;var inst_13178 = inst_13196;var inst_13179 = 0;var state_13219__$1 = (function (){var statearr_13246 = state_13219;(statearr_13246[8] = inst_13177);
(statearr_13246[9] = inst_13178);
(statearr_13246[10] = inst_13176);
(statearr_13246[11] = inst_13179);
return statearr_13246;
})();var statearr_13247_13275 = state_13219__$1;(statearr_13247_13275[2] = null);
(statearr_13247_13275[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13220 === 18))
{var inst_13190 = (state_13219[13]);var inst_13199 = cljs.core.first.call(null,inst_13190);var state_13219__$1 = state_13219;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13219__$1,20,out,inst_13199);
} else
{if((state_val_13220 === 19))
{var inst_13205 = (state_13219[2]);var state_13219__$1 = state_13219;var statearr_13248_13276 = state_13219__$1;(statearr_13248_13276[2] = inst_13205);
(statearr_13248_13276[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13220 === 20))
{var inst_13190 = (state_13219[13]);var inst_13201 = (state_13219[2]);var inst_13202 = cljs.core.next.call(null,inst_13190);var inst_13176 = inst_13202;var inst_13177 = null;var inst_13178 = 0;var inst_13179 = 0;var state_13219__$1 = (function (){var statearr_13249 = state_13219;(statearr_13249[15] = inst_13201);
(statearr_13249[8] = inst_13177);
(statearr_13249[9] = inst_13178);
(statearr_13249[10] = inst_13176);
(statearr_13249[11] = inst_13179);
return statearr_13249;
})();var statearr_13250_13277 = state_13219__$1;(statearr_13250_13277[2] = null);
(statearr_13250_13277[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_13254 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13254[0] = state_machine__5507__auto__);
(statearr_13254[1] = 1);
return statearr_13254;
});
var state_machine__5507__auto____1 = (function (state_13219){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13219);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13255){if((e13255 instanceof Object))
{var ex__5510__auto__ = e13255;var statearr_13256_13278 = state_13219;(statearr_13256_13278[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13219);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13255;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13279 = state_13219;
state_13219 = G__13279;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13219){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13257 = f__5522__auto__.call(null);(statearr_13257[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13257;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___13360 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13339){var state_val_13340 = (state_13339[1]);if((state_val_13340 === 1))
{var state_13339__$1 = state_13339;var statearr_13341_13361 = state_13339__$1;(statearr_13341_13361[2] = null);
(statearr_13341_13361[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13340 === 2))
{var state_13339__$1 = state_13339;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13339__$1,4,from);
} else
{if((state_val_13340 === 3))
{var inst_13337 = (state_13339[2]);var state_13339__$1 = state_13339;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13339__$1,inst_13337);
} else
{if((state_val_13340 === 4))
{var inst_13322 = (state_13339[7]);var inst_13322__$1 = (state_13339[2]);var inst_13323 = (inst_13322__$1 == null);var state_13339__$1 = (function (){var statearr_13342 = state_13339;(statearr_13342[7] = inst_13322__$1);
return statearr_13342;
})();if(cljs.core.truth_(inst_13323))
{var statearr_13343_13362 = state_13339__$1;(statearr_13343_13362[1] = 5);
} else
{var statearr_13344_13363 = state_13339__$1;(statearr_13344_13363[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13340 === 5))
{var state_13339__$1 = state_13339;if(cljs.core.truth_(close_QMARK_))
{var statearr_13345_13364 = state_13339__$1;(statearr_13345_13364[1] = 8);
} else
{var statearr_13346_13365 = state_13339__$1;(statearr_13346_13365[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13340 === 6))
{var inst_13322 = (state_13339[7]);var state_13339__$1 = state_13339;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13339__$1,11,to,inst_13322);
} else
{if((state_val_13340 === 7))
{var inst_13335 = (state_13339[2]);var state_13339__$1 = state_13339;var statearr_13347_13366 = state_13339__$1;(statearr_13347_13366[2] = inst_13335);
(statearr_13347_13366[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13340 === 8))
{var inst_13326 = cljs.core.async.close_BANG_.call(null,to);var state_13339__$1 = state_13339;var statearr_13348_13367 = state_13339__$1;(statearr_13348_13367[2] = inst_13326);
(statearr_13348_13367[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13340 === 9))
{var state_13339__$1 = state_13339;var statearr_13349_13368 = state_13339__$1;(statearr_13349_13368[2] = null);
(statearr_13349_13368[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13340 === 10))
{var inst_13329 = (state_13339[2]);var state_13339__$1 = state_13339;var statearr_13350_13369 = state_13339__$1;(statearr_13350_13369[2] = inst_13329);
(statearr_13350_13369[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13340 === 11))
{var inst_13332 = (state_13339[2]);var state_13339__$1 = (function (){var statearr_13351 = state_13339;(statearr_13351[8] = inst_13332);
return statearr_13351;
})();var statearr_13352_13370 = state_13339__$1;(statearr_13352_13370[2] = null);
(statearr_13352_13370[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_13356 = [null,null,null,null,null,null,null,null,null];(statearr_13356[0] = state_machine__5507__auto__);
(statearr_13356[1] = 1);
return statearr_13356;
});
var state_machine__5507__auto____1 = (function (state_13339){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13339);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13357){if((e13357 instanceof Object))
{var ex__5510__auto__ = e13357;var statearr_13358_13371 = state_13339;(statearr_13358_13371[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13339);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13357;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13372 = state_13339;
state_13339 = G__13372;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13339){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13359 = f__5522__auto__.call(null);(statearr_13359[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13360);
return statearr_13359;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___13459 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13437){var state_val_13438 = (state_13437[1]);if((state_val_13438 === 1))
{var state_13437__$1 = state_13437;var statearr_13439_13460 = state_13437__$1;(statearr_13439_13460[2] = null);
(statearr_13439_13460[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13438 === 2))
{var state_13437__$1 = state_13437;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13437__$1,4,ch);
} else
{if((state_val_13438 === 3))
{var inst_13435 = (state_13437[2]);var state_13437__$1 = state_13437;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13437__$1,inst_13435);
} else
{if((state_val_13438 === 4))
{var inst_13418 = (state_13437[7]);var inst_13418__$1 = (state_13437[2]);var inst_13419 = (inst_13418__$1 == null);var state_13437__$1 = (function (){var statearr_13440 = state_13437;(statearr_13440[7] = inst_13418__$1);
return statearr_13440;
})();if(cljs.core.truth_(inst_13419))
{var statearr_13441_13461 = state_13437__$1;(statearr_13441_13461[1] = 5);
} else
{var statearr_13442_13462 = state_13437__$1;(statearr_13442_13462[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13438 === 5))
{var inst_13421 = cljs.core.async.close_BANG_.call(null,tc);var inst_13422 = cljs.core.async.close_BANG_.call(null,fc);var state_13437__$1 = (function (){var statearr_13443 = state_13437;(statearr_13443[8] = inst_13421);
return statearr_13443;
})();var statearr_13444_13463 = state_13437__$1;(statearr_13444_13463[2] = inst_13422);
(statearr_13444_13463[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13438 === 6))
{var inst_13418 = (state_13437[7]);var inst_13424 = p.call(null,inst_13418);var state_13437__$1 = state_13437;if(cljs.core.truth_(inst_13424))
{var statearr_13445_13464 = state_13437__$1;(statearr_13445_13464[1] = 9);
} else
{var statearr_13446_13465 = state_13437__$1;(statearr_13446_13465[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13438 === 7))
{var inst_13433 = (state_13437[2]);var state_13437__$1 = state_13437;var statearr_13447_13466 = state_13437__$1;(statearr_13447_13466[2] = inst_13433);
(statearr_13447_13466[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13438 === 8))
{var inst_13430 = (state_13437[2]);var state_13437__$1 = (function (){var statearr_13448 = state_13437;(statearr_13448[9] = inst_13430);
return statearr_13448;
})();var statearr_13449_13467 = state_13437__$1;(statearr_13449_13467[2] = null);
(statearr_13449_13467[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13438 === 9))
{var state_13437__$1 = state_13437;var statearr_13450_13468 = state_13437__$1;(statearr_13450_13468[2] = tc);
(statearr_13450_13468[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13438 === 10))
{var state_13437__$1 = state_13437;var statearr_13451_13469 = state_13437__$1;(statearr_13451_13469[2] = fc);
(statearr_13451_13469[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13438 === 11))
{var inst_13418 = (state_13437[7]);var inst_13428 = (state_13437[2]);var state_13437__$1 = state_13437;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13437__$1,8,inst_13428,inst_13418);
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
var state_machine__5507__auto____0 = (function (){var statearr_13455 = [null,null,null,null,null,null,null,null,null,null];(statearr_13455[0] = state_machine__5507__auto__);
(statearr_13455[1] = 1);
return statearr_13455;
});
var state_machine__5507__auto____1 = (function (state_13437){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13437);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13456){if((e13456 instanceof Object))
{var ex__5510__auto__ = e13456;var statearr_13457_13470 = state_13437;(statearr_13457_13470[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13437);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13456;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13471 = state_13437;
state_13437 = G__13471;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13437){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13458 = f__5522__auto__.call(null);(statearr_13458[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13459);
return statearr_13458;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13518){var state_val_13519 = (state_13518[1]);if((state_val_13519 === 7))
{var inst_13514 = (state_13518[2]);var state_13518__$1 = state_13518;var statearr_13520_13536 = state_13518__$1;(statearr_13520_13536[2] = inst_13514);
(statearr_13520_13536[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13519 === 6))
{var inst_13504 = (state_13518[7]);var inst_13507 = (state_13518[8]);var inst_13511 = f.call(null,inst_13504,inst_13507);var inst_13504__$1 = inst_13511;var state_13518__$1 = (function (){var statearr_13521 = state_13518;(statearr_13521[7] = inst_13504__$1);
return statearr_13521;
})();var statearr_13522_13537 = state_13518__$1;(statearr_13522_13537[2] = null);
(statearr_13522_13537[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13519 === 5))
{var inst_13504 = (state_13518[7]);var state_13518__$1 = state_13518;var statearr_13523_13538 = state_13518__$1;(statearr_13523_13538[2] = inst_13504);
(statearr_13523_13538[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13519 === 4))
{var inst_13507 = (state_13518[8]);var inst_13507__$1 = (state_13518[2]);var inst_13508 = (inst_13507__$1 == null);var state_13518__$1 = (function (){var statearr_13524 = state_13518;(statearr_13524[8] = inst_13507__$1);
return statearr_13524;
})();if(cljs.core.truth_(inst_13508))
{var statearr_13525_13539 = state_13518__$1;(statearr_13525_13539[1] = 5);
} else
{var statearr_13526_13540 = state_13518__$1;(statearr_13526_13540[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13519 === 3))
{var inst_13516 = (state_13518[2]);var state_13518__$1 = state_13518;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13518__$1,inst_13516);
} else
{if((state_val_13519 === 2))
{var state_13518__$1 = state_13518;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13518__$1,4,ch);
} else
{if((state_val_13519 === 1))
{var inst_13504 = init;var state_13518__$1 = (function (){var statearr_13527 = state_13518;(statearr_13527[7] = inst_13504);
return statearr_13527;
})();var statearr_13528_13541 = state_13518__$1;(statearr_13528_13541[2] = null);
(statearr_13528_13541[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_13532 = [null,null,null,null,null,null,null,null,null];(statearr_13532[0] = state_machine__5507__auto__);
(statearr_13532[1] = 1);
return statearr_13532;
});
var state_machine__5507__auto____1 = (function (state_13518){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13518);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13533){if((e13533 instanceof Object))
{var ex__5510__auto__ = e13533;var statearr_13534_13542 = state_13518;(statearr_13534_13542[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13518);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13533;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13543 = state_13518;
state_13518 = G__13543;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13518){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13535 = f__5522__auto__.call(null);(statearr_13535[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13535;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13605){var state_val_13606 = (state_13605[1]);if((state_val_13606 === 1))
{var inst_13585 = cljs.core.seq.call(null,coll);var inst_13586 = inst_13585;var state_13605__$1 = (function (){var statearr_13607 = state_13605;(statearr_13607[7] = inst_13586);
return statearr_13607;
})();var statearr_13608_13626 = state_13605__$1;(statearr_13608_13626[2] = null);
(statearr_13608_13626[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13606 === 2))
{var inst_13586 = (state_13605[7]);var state_13605__$1 = state_13605;if(cljs.core.truth_(inst_13586))
{var statearr_13609_13627 = state_13605__$1;(statearr_13609_13627[1] = 4);
} else
{var statearr_13610_13628 = state_13605__$1;(statearr_13610_13628[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13606 === 3))
{var inst_13603 = (state_13605[2]);var state_13605__$1 = state_13605;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13605__$1,inst_13603);
} else
{if((state_val_13606 === 4))
{var inst_13586 = (state_13605[7]);var inst_13589 = cljs.core.first.call(null,inst_13586);var state_13605__$1 = state_13605;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13605__$1,7,ch,inst_13589);
} else
{if((state_val_13606 === 5))
{var state_13605__$1 = state_13605;if(cljs.core.truth_(close_QMARK_))
{var statearr_13611_13629 = state_13605__$1;(statearr_13611_13629[1] = 8);
} else
{var statearr_13612_13630 = state_13605__$1;(statearr_13612_13630[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13606 === 6))
{var inst_13601 = (state_13605[2]);var state_13605__$1 = state_13605;var statearr_13613_13631 = state_13605__$1;(statearr_13613_13631[2] = inst_13601);
(statearr_13613_13631[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13606 === 7))
{var inst_13586 = (state_13605[7]);var inst_13591 = (state_13605[2]);var inst_13592 = cljs.core.next.call(null,inst_13586);var inst_13586__$1 = inst_13592;var state_13605__$1 = (function (){var statearr_13614 = state_13605;(statearr_13614[8] = inst_13591);
(statearr_13614[7] = inst_13586__$1);
return statearr_13614;
})();var statearr_13615_13632 = state_13605__$1;(statearr_13615_13632[2] = null);
(statearr_13615_13632[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13606 === 8))
{var inst_13596 = cljs.core.async.close_BANG_.call(null,ch);var state_13605__$1 = state_13605;var statearr_13616_13633 = state_13605__$1;(statearr_13616_13633[2] = inst_13596);
(statearr_13616_13633[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13606 === 9))
{var state_13605__$1 = state_13605;var statearr_13617_13634 = state_13605__$1;(statearr_13617_13634[2] = null);
(statearr_13617_13634[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13606 === 10))
{var inst_13599 = (state_13605[2]);var state_13605__$1 = state_13605;var statearr_13618_13635 = state_13605__$1;(statearr_13618_13635[2] = inst_13599);
(statearr_13618_13635[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_13622 = [null,null,null,null,null,null,null,null,null];(statearr_13622[0] = state_machine__5507__auto__);
(statearr_13622[1] = 1);
return statearr_13622;
});
var state_machine__5507__auto____1 = (function (state_13605){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13605);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13623){if((e13623 instanceof Object))
{var ex__5510__auto__ = e13623;var statearr_13624_13636 = state_13605;(statearr_13624_13636[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13605);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13623;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13637 = state_13605;
state_13605 = G__13637;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13605){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13625 = f__5522__auto__.call(null);(statearr_13625[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13625;
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
cljs.core.async.Mux = (function (){var obj13639 = {};return obj13639;
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
cljs.core.async.Mult = (function (){var obj13641 = {};return obj13641;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t13865 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13865 = (function (cs,ch,mult,meta13866){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta13866 = meta13866;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13865.cljs$lang$type = true;
cljs.core.async.t13865.cljs$lang$ctorStr = "cljs.core.async/t13865";
cljs.core.async.t13865.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13865");
});})(cs))
;
cljs.core.async.t13865.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t13865.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t13865.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t13865.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t13865.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13865.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t13865.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13867){var self__ = this;
var _13867__$1 = this;return self__.meta13866;
});})(cs))
;
cljs.core.async.t13865.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13867,meta13866__$1){var self__ = this;
var _13867__$1 = this;return (new cljs.core.async.t13865(self__.cs,self__.ch,self__.mult,meta13866__$1));
});})(cs))
;
cljs.core.async.__GT_t13865 = ((function (cs){
return (function __GT_t13865(cs__$1,ch__$1,mult__$1,meta13866){return (new cljs.core.async.t13865(cs__$1,ch__$1,mult__$1,meta13866));
});})(cs))
;
}
return (new cljs.core.async.t13865(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___14088 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14002){var state_val_14003 = (state_14002[1]);if((state_val_14003 === 32))
{var inst_13870 = (state_14002[7]);var inst_13946 = (state_14002[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14002,31,Object,null,30);var inst_13953 = cljs.core.async.put_BANG_.call(null,inst_13946,inst_13870,done);var state_14002__$1 = state_14002;var statearr_14004_14089 = state_14002__$1;(statearr_14004_14089[2] = inst_13953);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14002__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14003 === 1))
{var state_14002__$1 = state_14002;var statearr_14005_14090 = state_14002__$1;(statearr_14005_14090[2] = null);
(statearr_14005_14090[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14003 === 33))
{var inst_13959 = (state_14002[9]);var inst_13961 = cljs.core.chunked_seq_QMARK_.call(null,inst_13959);var state_14002__$1 = state_14002;if(inst_13961)
{var statearr_14006_14091 = state_14002__$1;(statearr_14006_14091[1] = 36);
} else
{var statearr_14007_14092 = state_14002__$1;(statearr_14007_14092[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14003 === 2))
{var state_14002__$1 = state_14002;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14002__$1,4,ch);
} else
{if((state_val_14003 === 34))
{var state_14002__$1 = state_14002;var statearr_14008_14093 = state_14002__$1;(statearr_14008_14093[2] = null);
(statearr_14008_14093[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14003 === 3))
{var inst_14000 = (state_14002[2]);var state_14002__$1 = state_14002;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14002__$1,inst_14000);
} else
{if((state_val_14003 === 35))
{var inst_13984 = (state_14002[2]);var state_14002__$1 = state_14002;var statearr_14009_14094 = state_14002__$1;(statearr_14009_14094[2] = inst_13984);
(statearr_14009_14094[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14003 === 4))
{var inst_13870 = (state_14002[7]);var inst_13870__$1 = (state_14002[2]);var inst_13871 = (inst_13870__$1 == null);var state_14002__$1 = (function (){var statearr_14010 = state_14002;(statearr_14010[7] = inst_13870__$1);
return statearr_14010;
})();if(cljs.core.truth_(inst_13871))
{var statearr_14011_14095 = state_14002__$1;(statearr_14011_14095[1] = 5);
} else
{var statearr_14012_14096 = state_14002__$1;(statearr_14012_14096[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14003 === 36))
{var inst_13959 = (state_14002[9]);var inst_13963 = cljs.core.chunk_first.call(null,inst_13959);var inst_13964 = cljs.core.chunk_rest.call(null,inst_13959);var inst_13965 = cljs.core.count.call(null,inst_13963);var inst_13938 = inst_13964;var inst_13939 = inst_13963;var inst_13940 = inst_13965;var inst_13941 = 0;var state_14002__$1 = (function (){var statearr_14013 = state_14002;(statearr_14013[10] = inst_13938);
(statearr_14013[11] = inst_13939);
(statearr_14013[12] = inst_13941);
(statearr_14013[13] = inst_13940);
return statearr_14013;
})();var statearr_14014_14097 = state_14002__$1;(statearr_14014_14097[2] = null);
(statearr_14014_14097[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14003 === 5))
{var inst_13877 = cljs.core.deref.call(null,cs);var inst_13878 = cljs.core.seq.call(null,inst_13877);var inst_13879 = inst_13878;var inst_13880 = null;var inst_13881 = 0;var inst_13882 = 0;var state_14002__$1 = (function (){var statearr_14015 = state_14002;(statearr_14015[14] = inst_13879);
(statearr_14015[15] = inst_13881);
(statearr_14015[16] = inst_13882);
(statearr_14015[17] = inst_13880);
return statearr_14015;
})();var statearr_14016_14098 = state_14002__$1;(statearr_14016_14098[2] = null);
(statearr_14016_14098[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14003 === 37))
{var inst_13959 = (state_14002[9]);var inst_13968 = cljs.core.first.call(null,inst_13959);var state_14002__$1 = (function (){var statearr_14017 = state_14002;(statearr_14017[18] = inst_13968);
return statearr_14017;
})();var statearr_14018_14099 = state_14002__$1;(statearr_14018_14099[2] = null);
(statearr_14018_14099[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14003 === 6))
{var inst_13930 = (state_14002[19]);var inst_13929 = cljs.core.deref.call(null,cs);var inst_13930__$1 = cljs.core.keys.call(null,inst_13929);var inst_13931 = cljs.core.count.call(null,inst_13930__$1);var inst_13932 = cljs.core.reset_BANG_.call(null,dctr,inst_13931);var inst_13937 = cljs.core.seq.call(null,inst_13930__$1);var inst_13938 = inst_13937;var inst_13939 = null;var inst_13940 = 0;var inst_13941 = 0;var state_14002__$1 = (function (){var statearr_14019 = state_14002;(statearr_14019[10] = inst_13938);
(statearr_14019[11] = inst_13939);
(statearr_14019[12] = inst_13941);
(statearr_14019[20] = inst_13932);
(statearr_14019[13] = inst_13940);
(statearr_14019[19] = inst_13930__$1);
return statearr_14019;
})();var statearr_14020_14100 = state_14002__$1;(statearr_14020_14100[2] = null);
(statearr_14020_14100[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14003 === 38))
{var inst_13981 = (state_14002[2]);var state_14002__$1 = state_14002;var statearr_14021_14101 = state_14002__$1;(statearr_14021_14101[2] = inst_13981);
(statearr_14021_14101[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14003 === 7))
{var inst_13998 = (state_14002[2]);var state_14002__$1 = state_14002;var statearr_14022_14102 = state_14002__$1;(statearr_14022_14102[2] = inst_13998);
(statearr_14022_14102[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14003 === 39))
{var inst_13959 = (state_14002[9]);var inst_13977 = (state_14002[2]);var inst_13978 = cljs.core.next.call(null,inst_13959);var inst_13938 = inst_13978;var inst_13939 = null;var inst_13940 = 0;var inst_13941 = 0;var state_14002__$1 = (function (){var statearr_14023 = state_14002;(statearr_14023[10] = inst_13938);
(statearr_14023[11] = inst_13939);
(statearr_14023[12] = inst_13941);
(statearr_14023[13] = inst_13940);
(statearr_14023[21] = inst_13977);
return statearr_14023;
})();var statearr_14024_14103 = state_14002__$1;(statearr_14024_14103[2] = null);
(statearr_14024_14103[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14003 === 8))
{var inst_13881 = (state_14002[15]);var inst_13882 = (state_14002[16]);var inst_13884 = (inst_13882 < inst_13881);var inst_13885 = inst_13884;var state_14002__$1 = state_14002;if(cljs.core.truth_(inst_13885))
{var statearr_14025_14104 = state_14002__$1;(statearr_14025_14104[1] = 10);
} else
{var statearr_14026_14105 = state_14002__$1;(statearr_14026_14105[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14003 === 40))
{var inst_13968 = (state_14002[18]);var inst_13969 = (state_14002[2]);var inst_13970 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_13971 = cljs.core.async.untap_STAR_.call(null,m,inst_13968);var state_14002__$1 = (function (){var statearr_14027 = state_14002;(statearr_14027[22] = inst_13969);
(statearr_14027[23] = inst_13970);
return statearr_14027;
})();var statearr_14028_14106 = state_14002__$1;(statearr_14028_14106[2] = inst_13971);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14002__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14003 === 9))
{var inst_13927 = (state_14002[2]);var state_14002__$1 = state_14002;var statearr_14029_14107 = state_14002__$1;(statearr_14029_14107[2] = inst_13927);
(statearr_14029_14107[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14003 === 41))
{var inst_13870 = (state_14002[7]);var inst_13968 = (state_14002[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14002,40,Object,null,39);var inst_13975 = cljs.core.async.put_BANG_.call(null,inst_13968,inst_13870,done);var state_14002__$1 = state_14002;var statearr_14030_14108 = state_14002__$1;(statearr_14030_14108[2] = inst_13975);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14002__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14003 === 10))
{var inst_13882 = (state_14002[16]);var inst_13880 = (state_14002[17]);var inst_13888 = cljs.core._nth.call(null,inst_13880,inst_13882);var inst_13889 = cljs.core.nth.call(null,inst_13888,0,null);var inst_13890 = cljs.core.nth.call(null,inst_13888,1,null);var state_14002__$1 = (function (){var statearr_14031 = state_14002;(statearr_14031[24] = inst_13889);
return statearr_14031;
})();if(cljs.core.truth_(inst_13890))
{var statearr_14032_14109 = state_14002__$1;(statearr_14032_14109[1] = 13);
} else
{var statearr_14033_14110 = state_14002__$1;(statearr_14033_14110[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14003 === 42))
{var state_14002__$1 = state_14002;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14002__$1,45,dchan);
} else
{if((state_val_14003 === 11))
{var inst_13879 = (state_14002[14]);var inst_13899 = (state_14002[25]);var inst_13899__$1 = cljs.core.seq.call(null,inst_13879);var state_14002__$1 = (function (){var statearr_14034 = state_14002;(statearr_14034[25] = inst_13899__$1);
return statearr_14034;
})();if(inst_13899__$1)
{var statearr_14035_14111 = state_14002__$1;(statearr_14035_14111[1] = 16);
} else
{var statearr_14036_14112 = state_14002__$1;(statearr_14036_14112[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14003 === 43))
{var state_14002__$1 = state_14002;var statearr_14037_14113 = state_14002__$1;(statearr_14037_14113[2] = null);
(statearr_14037_14113[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14003 === 12))
{var inst_13925 = (state_14002[2]);var state_14002__$1 = state_14002;var statearr_14038_14114 = state_14002__$1;(statearr_14038_14114[2] = inst_13925);
(statearr_14038_14114[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14003 === 44))
{var inst_13995 = (state_14002[2]);var state_14002__$1 = (function (){var statearr_14039 = state_14002;(statearr_14039[26] = inst_13995);
return statearr_14039;
})();var statearr_14040_14115 = state_14002__$1;(statearr_14040_14115[2] = null);
(statearr_14040_14115[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14003 === 13))
{var inst_13889 = (state_14002[24]);var inst_13892 = cljs.core.async.close_BANG_.call(null,inst_13889);var state_14002__$1 = state_14002;var statearr_14041_14116 = state_14002__$1;(statearr_14041_14116[2] = inst_13892);
(statearr_14041_14116[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14003 === 45))
{var inst_13992 = (state_14002[2]);var state_14002__$1 = state_14002;var statearr_14045_14117 = state_14002__$1;(statearr_14045_14117[2] = inst_13992);
(statearr_14045_14117[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14003 === 14))
{var state_14002__$1 = state_14002;var statearr_14046_14118 = state_14002__$1;(statearr_14046_14118[2] = null);
(statearr_14046_14118[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14003 === 15))
{var inst_13879 = (state_14002[14]);var inst_13881 = (state_14002[15]);var inst_13882 = (state_14002[16]);var inst_13880 = (state_14002[17]);var inst_13895 = (state_14002[2]);var inst_13896 = (inst_13882 + 1);var tmp14042 = inst_13879;var tmp14043 = inst_13881;var tmp14044 = inst_13880;var inst_13879__$1 = tmp14042;var inst_13880__$1 = tmp14044;var inst_13881__$1 = tmp14043;var inst_13882__$1 = inst_13896;var state_14002__$1 = (function (){var statearr_14047 = state_14002;(statearr_14047[14] = inst_13879__$1);
(statearr_14047[15] = inst_13881__$1);
(statearr_14047[16] = inst_13882__$1);
(statearr_14047[17] = inst_13880__$1);
(statearr_14047[27] = inst_13895);
return statearr_14047;
})();var statearr_14048_14119 = state_14002__$1;(statearr_14048_14119[2] = null);
(statearr_14048_14119[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14003 === 16))
{var inst_13899 = (state_14002[25]);var inst_13901 = cljs.core.chunked_seq_QMARK_.call(null,inst_13899);var state_14002__$1 = state_14002;if(inst_13901)
{var statearr_14049_14120 = state_14002__$1;(statearr_14049_14120[1] = 19);
} else
{var statearr_14050_14121 = state_14002__$1;(statearr_14050_14121[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14003 === 17))
{var state_14002__$1 = state_14002;var statearr_14051_14122 = state_14002__$1;(statearr_14051_14122[2] = null);
(statearr_14051_14122[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14003 === 18))
{var inst_13923 = (state_14002[2]);var state_14002__$1 = state_14002;var statearr_14052_14123 = state_14002__$1;(statearr_14052_14123[2] = inst_13923);
(statearr_14052_14123[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14003 === 19))
{var inst_13899 = (state_14002[25]);var inst_13903 = cljs.core.chunk_first.call(null,inst_13899);var inst_13904 = cljs.core.chunk_rest.call(null,inst_13899);var inst_13905 = cljs.core.count.call(null,inst_13903);var inst_13879 = inst_13904;var inst_13880 = inst_13903;var inst_13881 = inst_13905;var inst_13882 = 0;var state_14002__$1 = (function (){var statearr_14053 = state_14002;(statearr_14053[14] = inst_13879);
(statearr_14053[15] = inst_13881);
(statearr_14053[16] = inst_13882);
(statearr_14053[17] = inst_13880);
return statearr_14053;
})();var statearr_14054_14124 = state_14002__$1;(statearr_14054_14124[2] = null);
(statearr_14054_14124[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14003 === 20))
{var inst_13899 = (state_14002[25]);var inst_13909 = cljs.core.first.call(null,inst_13899);var inst_13910 = cljs.core.nth.call(null,inst_13909,0,null);var inst_13911 = cljs.core.nth.call(null,inst_13909,1,null);var state_14002__$1 = (function (){var statearr_14055 = state_14002;(statearr_14055[28] = inst_13910);
return statearr_14055;
})();if(cljs.core.truth_(inst_13911))
{var statearr_14056_14125 = state_14002__$1;(statearr_14056_14125[1] = 22);
} else
{var statearr_14057_14126 = state_14002__$1;(statearr_14057_14126[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14003 === 21))
{var inst_13920 = (state_14002[2]);var state_14002__$1 = state_14002;var statearr_14058_14127 = state_14002__$1;(statearr_14058_14127[2] = inst_13920);
(statearr_14058_14127[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14003 === 22))
{var inst_13910 = (state_14002[28]);var inst_13913 = cljs.core.async.close_BANG_.call(null,inst_13910);var state_14002__$1 = state_14002;var statearr_14059_14128 = state_14002__$1;(statearr_14059_14128[2] = inst_13913);
(statearr_14059_14128[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14003 === 23))
{var state_14002__$1 = state_14002;var statearr_14060_14129 = state_14002__$1;(statearr_14060_14129[2] = null);
(statearr_14060_14129[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14003 === 24))
{var inst_13899 = (state_14002[25]);var inst_13916 = (state_14002[2]);var inst_13917 = cljs.core.next.call(null,inst_13899);var inst_13879 = inst_13917;var inst_13880 = null;var inst_13881 = 0;var inst_13882 = 0;var state_14002__$1 = (function (){var statearr_14061 = state_14002;(statearr_14061[14] = inst_13879);
(statearr_14061[15] = inst_13881);
(statearr_14061[16] = inst_13882);
(statearr_14061[17] = inst_13880);
(statearr_14061[29] = inst_13916);
return statearr_14061;
})();var statearr_14062_14130 = state_14002__$1;(statearr_14062_14130[2] = null);
(statearr_14062_14130[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14003 === 25))
{var inst_13941 = (state_14002[12]);var inst_13940 = (state_14002[13]);var inst_13943 = (inst_13941 < inst_13940);var inst_13944 = inst_13943;var state_14002__$1 = state_14002;if(cljs.core.truth_(inst_13944))
{var statearr_14063_14131 = state_14002__$1;(statearr_14063_14131[1] = 27);
} else
{var statearr_14064_14132 = state_14002__$1;(statearr_14064_14132[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14003 === 26))
{var inst_13930 = (state_14002[19]);var inst_13988 = (state_14002[2]);var inst_13989 = cljs.core.seq.call(null,inst_13930);var state_14002__$1 = (function (){var statearr_14065 = state_14002;(statearr_14065[30] = inst_13988);
return statearr_14065;
})();if(inst_13989)
{var statearr_14066_14133 = state_14002__$1;(statearr_14066_14133[1] = 42);
} else
{var statearr_14067_14134 = state_14002__$1;(statearr_14067_14134[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14003 === 27))
{var inst_13939 = (state_14002[11]);var inst_13941 = (state_14002[12]);var inst_13946 = cljs.core._nth.call(null,inst_13939,inst_13941);var state_14002__$1 = (function (){var statearr_14068 = state_14002;(statearr_14068[8] = inst_13946);
return statearr_14068;
})();var statearr_14069_14135 = state_14002__$1;(statearr_14069_14135[2] = null);
(statearr_14069_14135[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14003 === 28))
{var inst_13938 = (state_14002[10]);var inst_13959 = (state_14002[9]);var inst_13959__$1 = cljs.core.seq.call(null,inst_13938);var state_14002__$1 = (function (){var statearr_14073 = state_14002;(statearr_14073[9] = inst_13959__$1);
return statearr_14073;
})();if(inst_13959__$1)
{var statearr_14074_14136 = state_14002__$1;(statearr_14074_14136[1] = 33);
} else
{var statearr_14075_14137 = state_14002__$1;(statearr_14075_14137[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14003 === 29))
{var inst_13986 = (state_14002[2]);var state_14002__$1 = state_14002;var statearr_14076_14138 = state_14002__$1;(statearr_14076_14138[2] = inst_13986);
(statearr_14076_14138[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14003 === 30))
{var inst_13938 = (state_14002[10]);var inst_13939 = (state_14002[11]);var inst_13941 = (state_14002[12]);var inst_13940 = (state_14002[13]);var inst_13955 = (state_14002[2]);var inst_13956 = (inst_13941 + 1);var tmp14070 = inst_13938;var tmp14071 = inst_13939;var tmp14072 = inst_13940;var inst_13938__$1 = tmp14070;var inst_13939__$1 = tmp14071;var inst_13940__$1 = tmp14072;var inst_13941__$1 = inst_13956;var state_14002__$1 = (function (){var statearr_14077 = state_14002;(statearr_14077[31] = inst_13955);
(statearr_14077[10] = inst_13938__$1);
(statearr_14077[11] = inst_13939__$1);
(statearr_14077[12] = inst_13941__$1);
(statearr_14077[13] = inst_13940__$1);
return statearr_14077;
})();var statearr_14078_14139 = state_14002__$1;(statearr_14078_14139[2] = null);
(statearr_14078_14139[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14003 === 31))
{var inst_13946 = (state_14002[8]);var inst_13947 = (state_14002[2]);var inst_13948 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_13949 = cljs.core.async.untap_STAR_.call(null,m,inst_13946);var state_14002__$1 = (function (){var statearr_14079 = state_14002;(statearr_14079[32] = inst_13947);
(statearr_14079[33] = inst_13948);
return statearr_14079;
})();var statearr_14080_14140 = state_14002__$1;(statearr_14080_14140[2] = inst_13949);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14002__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_14084 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14084[0] = state_machine__5507__auto__);
(statearr_14084[1] = 1);
return statearr_14084;
});
var state_machine__5507__auto____1 = (function (state_14002){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14002);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14085){if((e14085 instanceof Object))
{var ex__5510__auto__ = e14085;var statearr_14086_14141 = state_14002;(statearr_14086_14141[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14002);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14085;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14142 = state_14002;
state_14002 = G__14142;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14002){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14087 = f__5522__auto__.call(null);(statearr_14087[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14088);
return statearr_14087;
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
cljs.core.async.Mix = (function (){var obj14144 = {};return obj14144;
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
;var m = (function (){if(typeof cljs.core.async.t14254 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14254 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta14255){
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
this.meta14255 = meta14255;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14254.cljs$lang$type = true;
cljs.core.async.t14254.cljs$lang$ctorStr = "cljs.core.async/t14254";
cljs.core.async.t14254.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14254");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14254.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t14254.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14254.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14254.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14254.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14254.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14254.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14254.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14254.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14256){var self__ = this;
var _14256__$1 = this;return self__.meta14255;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14254.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14256,meta14255__$1){var self__ = this;
var _14256__$1 = this;return (new cljs.core.async.t14254(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta14255__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t14254 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t14254(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14255){return (new cljs.core.async.t14254(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14255));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t14254(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___14363 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14321){var state_val_14322 = (state_14321[1]);if((state_val_14322 === 1))
{var inst_14260 = (state_14321[7]);var inst_14260__$1 = calc_state.call(null);var inst_14261 = cljs.core.seq_QMARK_.call(null,inst_14260__$1);var state_14321__$1 = (function (){var statearr_14323 = state_14321;(statearr_14323[7] = inst_14260__$1);
return statearr_14323;
})();if(inst_14261)
{var statearr_14324_14364 = state_14321__$1;(statearr_14324_14364[1] = 2);
} else
{var statearr_14325_14365 = state_14321__$1;(statearr_14325_14365[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14322 === 2))
{var inst_14260 = (state_14321[7]);var inst_14263 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14260);var state_14321__$1 = state_14321;var statearr_14326_14366 = state_14321__$1;(statearr_14326_14366[2] = inst_14263);
(statearr_14326_14366[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14322 === 3))
{var inst_14260 = (state_14321[7]);var state_14321__$1 = state_14321;var statearr_14327_14367 = state_14321__$1;(statearr_14327_14367[2] = inst_14260);
(statearr_14327_14367[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14322 === 4))
{var inst_14260 = (state_14321[7]);var inst_14266 = (state_14321[2]);var inst_14267 = cljs.core.get.call(null,inst_14266,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14268 = cljs.core.get.call(null,inst_14266,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14269 = cljs.core.get.call(null,inst_14266,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_14270 = inst_14260;var state_14321__$1 = (function (){var statearr_14328 = state_14321;(statearr_14328[8] = inst_14270);
(statearr_14328[9] = inst_14267);
(statearr_14328[10] = inst_14269);
(statearr_14328[11] = inst_14268);
return statearr_14328;
})();var statearr_14329_14368 = state_14321__$1;(statearr_14329_14368[2] = null);
(statearr_14329_14368[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14322 === 5))
{var inst_14270 = (state_14321[8]);var inst_14273 = cljs.core.seq_QMARK_.call(null,inst_14270);var state_14321__$1 = state_14321;if(inst_14273)
{var statearr_14330_14369 = state_14321__$1;(statearr_14330_14369[1] = 7);
} else
{var statearr_14331_14370 = state_14321__$1;(statearr_14331_14370[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14322 === 6))
{var inst_14319 = (state_14321[2]);var state_14321__$1 = state_14321;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14321__$1,inst_14319);
} else
{if((state_val_14322 === 7))
{var inst_14270 = (state_14321[8]);var inst_14275 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14270);var state_14321__$1 = state_14321;var statearr_14332_14371 = state_14321__$1;(statearr_14332_14371[2] = inst_14275);
(statearr_14332_14371[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14322 === 8))
{var inst_14270 = (state_14321[8]);var state_14321__$1 = state_14321;var statearr_14333_14372 = state_14321__$1;(statearr_14333_14372[2] = inst_14270);
(statearr_14333_14372[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14322 === 9))
{var inst_14278 = (state_14321[12]);var inst_14278__$1 = (state_14321[2]);var inst_14279 = cljs.core.get.call(null,inst_14278__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14280 = cljs.core.get.call(null,inst_14278__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14281 = cljs.core.get.call(null,inst_14278__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_14321__$1 = (function (){var statearr_14334 = state_14321;(statearr_14334[12] = inst_14278__$1);
(statearr_14334[13] = inst_14280);
(statearr_14334[14] = inst_14281);
return statearr_14334;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14321__$1,10,inst_14279);
} else
{if((state_val_14322 === 10))
{var inst_14286 = (state_14321[15]);var inst_14285 = (state_14321[16]);var inst_14284 = (state_14321[2]);var inst_14285__$1 = cljs.core.nth.call(null,inst_14284,0,null);var inst_14286__$1 = cljs.core.nth.call(null,inst_14284,1,null);var inst_14287 = (inst_14285__$1 == null);var inst_14288 = cljs.core._EQ_.call(null,inst_14286__$1,change);var inst_14289 = (inst_14287) || (inst_14288);var state_14321__$1 = (function (){var statearr_14335 = state_14321;(statearr_14335[15] = inst_14286__$1);
(statearr_14335[16] = inst_14285__$1);
return statearr_14335;
})();if(cljs.core.truth_(inst_14289))
{var statearr_14336_14373 = state_14321__$1;(statearr_14336_14373[1] = 11);
} else
{var statearr_14337_14374 = state_14321__$1;(statearr_14337_14374[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14322 === 11))
{var inst_14285 = (state_14321[16]);var inst_14291 = (inst_14285 == null);var state_14321__$1 = state_14321;if(cljs.core.truth_(inst_14291))
{var statearr_14338_14375 = state_14321__$1;(statearr_14338_14375[1] = 14);
} else
{var statearr_14339_14376 = state_14321__$1;(statearr_14339_14376[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14322 === 12))
{var inst_14286 = (state_14321[15]);var inst_14300 = (state_14321[17]);var inst_14281 = (state_14321[14]);var inst_14300__$1 = inst_14281.call(null,inst_14286);var state_14321__$1 = (function (){var statearr_14340 = state_14321;(statearr_14340[17] = inst_14300__$1);
return statearr_14340;
})();if(cljs.core.truth_(inst_14300__$1))
{var statearr_14341_14377 = state_14321__$1;(statearr_14341_14377[1] = 17);
} else
{var statearr_14342_14378 = state_14321__$1;(statearr_14342_14378[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14322 === 13))
{var inst_14317 = (state_14321[2]);var state_14321__$1 = state_14321;var statearr_14343_14379 = state_14321__$1;(statearr_14343_14379[2] = inst_14317);
(statearr_14343_14379[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14322 === 14))
{var inst_14286 = (state_14321[15]);var inst_14293 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14286);var state_14321__$1 = state_14321;var statearr_14344_14380 = state_14321__$1;(statearr_14344_14380[2] = inst_14293);
(statearr_14344_14380[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14322 === 15))
{var state_14321__$1 = state_14321;var statearr_14345_14381 = state_14321__$1;(statearr_14345_14381[2] = null);
(statearr_14345_14381[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14322 === 16))
{var inst_14296 = (state_14321[2]);var inst_14297 = calc_state.call(null);var inst_14270 = inst_14297;var state_14321__$1 = (function (){var statearr_14346 = state_14321;(statearr_14346[8] = inst_14270);
(statearr_14346[18] = inst_14296);
return statearr_14346;
})();var statearr_14347_14382 = state_14321__$1;(statearr_14347_14382[2] = null);
(statearr_14347_14382[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14322 === 17))
{var inst_14300 = (state_14321[17]);var state_14321__$1 = state_14321;var statearr_14348_14383 = state_14321__$1;(statearr_14348_14383[2] = inst_14300);
(statearr_14348_14383[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14322 === 18))
{var inst_14286 = (state_14321[15]);var inst_14280 = (state_14321[13]);var inst_14281 = (state_14321[14]);var inst_14303 = cljs.core.empty_QMARK_.call(null,inst_14281);var inst_14304 = inst_14280.call(null,inst_14286);var inst_14305 = cljs.core.not.call(null,inst_14304);var inst_14306 = (inst_14303) && (inst_14305);var state_14321__$1 = state_14321;var statearr_14349_14384 = state_14321__$1;(statearr_14349_14384[2] = inst_14306);
(statearr_14349_14384[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14322 === 19))
{var inst_14308 = (state_14321[2]);var state_14321__$1 = state_14321;if(cljs.core.truth_(inst_14308))
{var statearr_14350_14385 = state_14321__$1;(statearr_14350_14385[1] = 20);
} else
{var statearr_14351_14386 = state_14321__$1;(statearr_14351_14386[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14322 === 20))
{var inst_14285 = (state_14321[16]);var state_14321__$1 = state_14321;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14321__$1,23,out,inst_14285);
} else
{if((state_val_14322 === 21))
{var state_14321__$1 = state_14321;var statearr_14352_14387 = state_14321__$1;(statearr_14352_14387[2] = null);
(statearr_14352_14387[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14322 === 22))
{var inst_14278 = (state_14321[12]);var inst_14314 = (state_14321[2]);var inst_14270 = inst_14278;var state_14321__$1 = (function (){var statearr_14353 = state_14321;(statearr_14353[8] = inst_14270);
(statearr_14353[19] = inst_14314);
return statearr_14353;
})();var statearr_14354_14388 = state_14321__$1;(statearr_14354_14388[2] = null);
(statearr_14354_14388[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14322 === 23))
{var inst_14311 = (state_14321[2]);var state_14321__$1 = state_14321;var statearr_14355_14389 = state_14321__$1;(statearr_14355_14389[2] = inst_14311);
(statearr_14355_14389[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_14359 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14359[0] = state_machine__5507__auto__);
(statearr_14359[1] = 1);
return statearr_14359;
});
var state_machine__5507__auto____1 = (function (state_14321){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14321);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14360){if((e14360 instanceof Object))
{var ex__5510__auto__ = e14360;var statearr_14361_14390 = state_14321;(statearr_14361_14390[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14321);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14360;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14391 = state_14321;
state_14321 = G__14391;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14321){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14362 = f__5522__auto__.call(null);(statearr_14362[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14363);
return statearr_14362;
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
cljs.core.async.Pub = (function (){var obj14393 = {};return obj14393;
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
return (function (p1__14394_SHARP_){if(cljs.core.truth_(p1__14394_SHARP_.call(null,topic)))
{return p1__14394_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__14394_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t14519 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14519 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta14520){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta14520 = meta14520;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14519.cljs$lang$type = true;
cljs.core.async.t14519.cljs$lang$ctorStr = "cljs.core.async/t14519";
cljs.core.async.t14519.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14519");
});})(mults,ensure_mult))
;
cljs.core.async.t14519.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t14519.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t14519.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t14519.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t14519.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t14519.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14519.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t14519.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14521){var self__ = this;
var _14521__$1 = this;return self__.meta14520;
});})(mults,ensure_mult))
;
cljs.core.async.t14519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14521,meta14520__$1){var self__ = this;
var _14521__$1 = this;return (new cljs.core.async.t14519(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta14520__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t14519 = ((function (mults,ensure_mult){
return (function __GT_t14519(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14520){return (new cljs.core.async.t14519(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14520));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t14519(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___14643 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14595){var state_val_14596 = (state_14595[1]);if((state_val_14596 === 1))
{var state_14595__$1 = state_14595;var statearr_14597_14644 = state_14595__$1;(statearr_14597_14644[2] = null);
(statearr_14597_14644[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14596 === 2))
{var state_14595__$1 = state_14595;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14595__$1,4,ch);
} else
{if((state_val_14596 === 3))
{var inst_14593 = (state_14595[2]);var state_14595__$1 = state_14595;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14595__$1,inst_14593);
} else
{if((state_val_14596 === 4))
{var inst_14524 = (state_14595[7]);var inst_14524__$1 = (state_14595[2]);var inst_14525 = (inst_14524__$1 == null);var state_14595__$1 = (function (){var statearr_14598 = state_14595;(statearr_14598[7] = inst_14524__$1);
return statearr_14598;
})();if(cljs.core.truth_(inst_14525))
{var statearr_14599_14645 = state_14595__$1;(statearr_14599_14645[1] = 5);
} else
{var statearr_14600_14646 = state_14595__$1;(statearr_14600_14646[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14596 === 5))
{var inst_14531 = cljs.core.deref.call(null,mults);var inst_14532 = cljs.core.vals.call(null,inst_14531);var inst_14533 = cljs.core.seq.call(null,inst_14532);var inst_14534 = inst_14533;var inst_14535 = null;var inst_14536 = 0;var inst_14537 = 0;var state_14595__$1 = (function (){var statearr_14601 = state_14595;(statearr_14601[8] = inst_14535);
(statearr_14601[9] = inst_14534);
(statearr_14601[10] = inst_14536);
(statearr_14601[11] = inst_14537);
return statearr_14601;
})();var statearr_14602_14647 = state_14595__$1;(statearr_14602_14647[2] = null);
(statearr_14602_14647[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14596 === 6))
{var inst_14574 = (state_14595[12]);var inst_14572 = (state_14595[13]);var inst_14524 = (state_14595[7]);var inst_14572__$1 = topic_fn.call(null,inst_14524);var inst_14573 = cljs.core.deref.call(null,mults);var inst_14574__$1 = cljs.core.get.call(null,inst_14573,inst_14572__$1);var state_14595__$1 = (function (){var statearr_14603 = state_14595;(statearr_14603[12] = inst_14574__$1);
(statearr_14603[13] = inst_14572__$1);
return statearr_14603;
})();if(cljs.core.truth_(inst_14574__$1))
{var statearr_14604_14648 = state_14595__$1;(statearr_14604_14648[1] = 19);
} else
{var statearr_14605_14649 = state_14595__$1;(statearr_14605_14649[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14596 === 7))
{var inst_14591 = (state_14595[2]);var state_14595__$1 = state_14595;var statearr_14606_14650 = state_14595__$1;(statearr_14606_14650[2] = inst_14591);
(statearr_14606_14650[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14596 === 8))
{var inst_14536 = (state_14595[10]);var inst_14537 = (state_14595[11]);var inst_14539 = (inst_14537 < inst_14536);var inst_14540 = inst_14539;var state_14595__$1 = state_14595;if(cljs.core.truth_(inst_14540))
{var statearr_14610_14651 = state_14595__$1;(statearr_14610_14651[1] = 10);
} else
{var statearr_14611_14652 = state_14595__$1;(statearr_14611_14652[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14596 === 9))
{var inst_14570 = (state_14595[2]);var state_14595__$1 = state_14595;var statearr_14612_14653 = state_14595__$1;(statearr_14612_14653[2] = inst_14570);
(statearr_14612_14653[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14596 === 10))
{var inst_14535 = (state_14595[8]);var inst_14534 = (state_14595[9]);var inst_14536 = (state_14595[10]);var inst_14537 = (state_14595[11]);var inst_14542 = cljs.core._nth.call(null,inst_14535,inst_14537);var inst_14543 = cljs.core.async.muxch_STAR_.call(null,inst_14542);var inst_14544 = cljs.core.async.close_BANG_.call(null,inst_14543);var inst_14545 = (inst_14537 + 1);var tmp14607 = inst_14535;var tmp14608 = inst_14534;var tmp14609 = inst_14536;var inst_14534__$1 = tmp14608;var inst_14535__$1 = tmp14607;var inst_14536__$1 = tmp14609;var inst_14537__$1 = inst_14545;var state_14595__$1 = (function (){var statearr_14613 = state_14595;(statearr_14613[8] = inst_14535__$1);
(statearr_14613[9] = inst_14534__$1);
(statearr_14613[10] = inst_14536__$1);
(statearr_14613[11] = inst_14537__$1);
(statearr_14613[14] = inst_14544);
return statearr_14613;
})();var statearr_14614_14654 = state_14595__$1;(statearr_14614_14654[2] = null);
(statearr_14614_14654[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14596 === 11))
{var inst_14534 = (state_14595[9]);var inst_14548 = (state_14595[15]);var inst_14548__$1 = cljs.core.seq.call(null,inst_14534);var state_14595__$1 = (function (){var statearr_14615 = state_14595;(statearr_14615[15] = inst_14548__$1);
return statearr_14615;
})();if(inst_14548__$1)
{var statearr_14616_14655 = state_14595__$1;(statearr_14616_14655[1] = 13);
} else
{var statearr_14617_14656 = state_14595__$1;(statearr_14617_14656[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14596 === 12))
{var inst_14568 = (state_14595[2]);var state_14595__$1 = state_14595;var statearr_14618_14657 = state_14595__$1;(statearr_14618_14657[2] = inst_14568);
(statearr_14618_14657[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14596 === 13))
{var inst_14548 = (state_14595[15]);var inst_14550 = cljs.core.chunked_seq_QMARK_.call(null,inst_14548);var state_14595__$1 = state_14595;if(inst_14550)
{var statearr_14619_14658 = state_14595__$1;(statearr_14619_14658[1] = 16);
} else
{var statearr_14620_14659 = state_14595__$1;(statearr_14620_14659[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14596 === 14))
{var state_14595__$1 = state_14595;var statearr_14621_14660 = state_14595__$1;(statearr_14621_14660[2] = null);
(statearr_14621_14660[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14596 === 15))
{var inst_14566 = (state_14595[2]);var state_14595__$1 = state_14595;var statearr_14622_14661 = state_14595__$1;(statearr_14622_14661[2] = inst_14566);
(statearr_14622_14661[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14596 === 16))
{var inst_14548 = (state_14595[15]);var inst_14552 = cljs.core.chunk_first.call(null,inst_14548);var inst_14553 = cljs.core.chunk_rest.call(null,inst_14548);var inst_14554 = cljs.core.count.call(null,inst_14552);var inst_14534 = inst_14553;var inst_14535 = inst_14552;var inst_14536 = inst_14554;var inst_14537 = 0;var state_14595__$1 = (function (){var statearr_14623 = state_14595;(statearr_14623[8] = inst_14535);
(statearr_14623[9] = inst_14534);
(statearr_14623[10] = inst_14536);
(statearr_14623[11] = inst_14537);
return statearr_14623;
})();var statearr_14624_14662 = state_14595__$1;(statearr_14624_14662[2] = null);
(statearr_14624_14662[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14596 === 17))
{var inst_14548 = (state_14595[15]);var inst_14557 = cljs.core.first.call(null,inst_14548);var inst_14558 = cljs.core.async.muxch_STAR_.call(null,inst_14557);var inst_14559 = cljs.core.async.close_BANG_.call(null,inst_14558);var inst_14560 = cljs.core.next.call(null,inst_14548);var inst_14534 = inst_14560;var inst_14535 = null;var inst_14536 = 0;var inst_14537 = 0;var state_14595__$1 = (function (){var statearr_14625 = state_14595;(statearr_14625[8] = inst_14535);
(statearr_14625[9] = inst_14534);
(statearr_14625[16] = inst_14559);
(statearr_14625[10] = inst_14536);
(statearr_14625[11] = inst_14537);
return statearr_14625;
})();var statearr_14626_14663 = state_14595__$1;(statearr_14626_14663[2] = null);
(statearr_14626_14663[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14596 === 18))
{var inst_14563 = (state_14595[2]);var state_14595__$1 = state_14595;var statearr_14627_14664 = state_14595__$1;(statearr_14627_14664[2] = inst_14563);
(statearr_14627_14664[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14596 === 19))
{var state_14595__$1 = state_14595;var statearr_14628_14665 = state_14595__$1;(statearr_14628_14665[2] = null);
(statearr_14628_14665[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14596 === 20))
{var state_14595__$1 = state_14595;var statearr_14629_14666 = state_14595__$1;(statearr_14629_14666[2] = null);
(statearr_14629_14666[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14596 === 21))
{var inst_14588 = (state_14595[2]);var state_14595__$1 = (function (){var statearr_14630 = state_14595;(statearr_14630[17] = inst_14588);
return statearr_14630;
})();var statearr_14631_14667 = state_14595__$1;(statearr_14631_14667[2] = null);
(statearr_14631_14667[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14596 === 22))
{var inst_14585 = (state_14595[2]);var state_14595__$1 = state_14595;var statearr_14632_14668 = state_14595__$1;(statearr_14632_14668[2] = inst_14585);
(statearr_14632_14668[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14596 === 23))
{var inst_14572 = (state_14595[13]);var inst_14576 = (state_14595[2]);var inst_14577 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14572);var state_14595__$1 = (function (){var statearr_14633 = state_14595;(statearr_14633[18] = inst_14576);
return statearr_14633;
})();var statearr_14634_14669 = state_14595__$1;(statearr_14634_14669[2] = inst_14577);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14595__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14596 === 24))
{var inst_14574 = (state_14595[12]);var inst_14524 = (state_14595[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14595,23,Object,null,22);var inst_14581 = cljs.core.async.muxch_STAR_.call(null,inst_14574);var state_14595__$1 = state_14595;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14595__$1,25,inst_14581,inst_14524);
} else
{if((state_val_14596 === 25))
{var inst_14583 = (state_14595[2]);var state_14595__$1 = state_14595;var statearr_14635_14670 = state_14595__$1;(statearr_14635_14670[2] = inst_14583);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14595__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_14639 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14639[0] = state_machine__5507__auto__);
(statearr_14639[1] = 1);
return statearr_14639;
});
var state_machine__5507__auto____1 = (function (state_14595){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14595);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14640){if((e14640 instanceof Object))
{var ex__5510__auto__ = e14640;var statearr_14641_14671 = state_14595;(statearr_14641_14671[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14595);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14640;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14672 = state_14595;
state_14595 = G__14672;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14595){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14642 = f__5522__auto__.call(null);(statearr_14642[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14643);
return statearr_14642;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___14809 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14779){var state_val_14780 = (state_14779[1]);if((state_val_14780 === 1))
{var state_14779__$1 = state_14779;var statearr_14781_14810 = state_14779__$1;(statearr_14781_14810[2] = null);
(statearr_14781_14810[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14780 === 2))
{var inst_14742 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_14743 = 0;var state_14779__$1 = (function (){var statearr_14782 = state_14779;(statearr_14782[7] = inst_14743);
(statearr_14782[8] = inst_14742);
return statearr_14782;
})();var statearr_14783_14811 = state_14779__$1;(statearr_14783_14811[2] = null);
(statearr_14783_14811[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14780 === 3))
{var inst_14777 = (state_14779[2]);var state_14779__$1 = state_14779;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14779__$1,inst_14777);
} else
{if((state_val_14780 === 4))
{var inst_14743 = (state_14779[7]);var inst_14745 = (inst_14743 < cnt);var state_14779__$1 = state_14779;if(cljs.core.truth_(inst_14745))
{var statearr_14784_14812 = state_14779__$1;(statearr_14784_14812[1] = 6);
} else
{var statearr_14785_14813 = state_14779__$1;(statearr_14785_14813[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14780 === 5))
{var inst_14763 = (state_14779[2]);var state_14779__$1 = (function (){var statearr_14786 = state_14779;(statearr_14786[9] = inst_14763);
return statearr_14786;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14779__$1,12,dchan);
} else
{if((state_val_14780 === 6))
{var state_14779__$1 = state_14779;var statearr_14787_14814 = state_14779__$1;(statearr_14787_14814[2] = null);
(statearr_14787_14814[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14780 === 7))
{var state_14779__$1 = state_14779;var statearr_14788_14815 = state_14779__$1;(statearr_14788_14815[2] = null);
(statearr_14788_14815[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14780 === 8))
{var inst_14761 = (state_14779[2]);var state_14779__$1 = state_14779;var statearr_14789_14816 = state_14779__$1;(statearr_14789_14816[2] = inst_14761);
(statearr_14789_14816[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14780 === 9))
{var inst_14743 = (state_14779[7]);var inst_14756 = (state_14779[2]);var inst_14757 = (inst_14743 + 1);var inst_14743__$1 = inst_14757;var state_14779__$1 = (function (){var statearr_14790 = state_14779;(statearr_14790[10] = inst_14756);
(statearr_14790[7] = inst_14743__$1);
return statearr_14790;
})();var statearr_14791_14817 = state_14779__$1;(statearr_14791_14817[2] = null);
(statearr_14791_14817[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14780 === 10))
{var inst_14747 = (state_14779[2]);var inst_14748 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_14779__$1 = (function (){var statearr_14792 = state_14779;(statearr_14792[11] = inst_14747);
return statearr_14792;
})();var statearr_14793_14818 = state_14779__$1;(statearr_14793_14818[2] = inst_14748);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14779__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14780 === 11))
{var inst_14743 = (state_14779[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14779,10,Object,null,9);var inst_14752 = chs__$1.call(null,inst_14743);var inst_14753 = done.call(null,inst_14743);var inst_14754 = cljs.core.async.take_BANG_.call(null,inst_14752,inst_14753);var state_14779__$1 = state_14779;var statearr_14794_14819 = state_14779__$1;(statearr_14794_14819[2] = inst_14754);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14779__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14780 === 12))
{var inst_14765 = (state_14779[12]);var inst_14765__$1 = (state_14779[2]);var inst_14766 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14765__$1);var state_14779__$1 = (function (){var statearr_14795 = state_14779;(statearr_14795[12] = inst_14765__$1);
return statearr_14795;
})();if(cljs.core.truth_(inst_14766))
{var statearr_14796_14820 = state_14779__$1;(statearr_14796_14820[1] = 13);
} else
{var statearr_14797_14821 = state_14779__$1;(statearr_14797_14821[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14780 === 13))
{var inst_14768 = cljs.core.async.close_BANG_.call(null,out);var state_14779__$1 = state_14779;var statearr_14798_14822 = state_14779__$1;(statearr_14798_14822[2] = inst_14768);
(statearr_14798_14822[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14780 === 14))
{var inst_14765 = (state_14779[12]);var inst_14770 = cljs.core.apply.call(null,f,inst_14765);var state_14779__$1 = state_14779;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14779__$1,16,out,inst_14770);
} else
{if((state_val_14780 === 15))
{var inst_14775 = (state_14779[2]);var state_14779__$1 = state_14779;var statearr_14799_14823 = state_14779__$1;(statearr_14799_14823[2] = inst_14775);
(statearr_14799_14823[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14780 === 16))
{var inst_14772 = (state_14779[2]);var state_14779__$1 = (function (){var statearr_14800 = state_14779;(statearr_14800[13] = inst_14772);
return statearr_14800;
})();var statearr_14801_14824 = state_14779__$1;(statearr_14801_14824[2] = null);
(statearr_14801_14824[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14805 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14805[0] = state_machine__5507__auto__);
(statearr_14805[1] = 1);
return statearr_14805;
});
var state_machine__5507__auto____1 = (function (state_14779){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14779);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14806){if((e14806 instanceof Object))
{var ex__5510__auto__ = e14806;var statearr_14807_14825 = state_14779;(statearr_14807_14825[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14779);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14806;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14826 = state_14779;
state_14779 = G__14826;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14779){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14808 = f__5522__auto__.call(null);(statearr_14808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14809);
return statearr_14808;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14934 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14910){var state_val_14911 = (state_14910[1]);if((state_val_14911 === 1))
{var inst_14881 = cljs.core.vec.call(null,chs);var inst_14882 = inst_14881;var state_14910__$1 = (function (){var statearr_14912 = state_14910;(statearr_14912[7] = inst_14882);
return statearr_14912;
})();var statearr_14913_14935 = state_14910__$1;(statearr_14913_14935[2] = null);
(statearr_14913_14935[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14911 === 2))
{var inst_14882 = (state_14910[7]);var inst_14884 = cljs.core.count.call(null,inst_14882);var inst_14885 = (inst_14884 > 0);var state_14910__$1 = state_14910;if(cljs.core.truth_(inst_14885))
{var statearr_14914_14936 = state_14910__$1;(statearr_14914_14936[1] = 4);
} else
{var statearr_14915_14937 = state_14910__$1;(statearr_14915_14937[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14911 === 3))
{var inst_14908 = (state_14910[2]);var state_14910__$1 = state_14910;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14910__$1,inst_14908);
} else
{if((state_val_14911 === 4))
{var inst_14882 = (state_14910[7]);var state_14910__$1 = state_14910;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14910__$1,7,inst_14882);
} else
{if((state_val_14911 === 5))
{var inst_14904 = cljs.core.async.close_BANG_.call(null,out);var state_14910__$1 = state_14910;var statearr_14916_14938 = state_14910__$1;(statearr_14916_14938[2] = inst_14904);
(statearr_14916_14938[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14911 === 6))
{var inst_14906 = (state_14910[2]);var state_14910__$1 = state_14910;var statearr_14917_14939 = state_14910__$1;(statearr_14917_14939[2] = inst_14906);
(statearr_14917_14939[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14911 === 7))
{var inst_14889 = (state_14910[8]);var inst_14890 = (state_14910[9]);var inst_14889__$1 = (state_14910[2]);var inst_14890__$1 = cljs.core.nth.call(null,inst_14889__$1,0,null);var inst_14891 = cljs.core.nth.call(null,inst_14889__$1,1,null);var inst_14892 = (inst_14890__$1 == null);var state_14910__$1 = (function (){var statearr_14918 = state_14910;(statearr_14918[8] = inst_14889__$1);
(statearr_14918[10] = inst_14891);
(statearr_14918[9] = inst_14890__$1);
return statearr_14918;
})();if(cljs.core.truth_(inst_14892))
{var statearr_14919_14940 = state_14910__$1;(statearr_14919_14940[1] = 8);
} else
{var statearr_14920_14941 = state_14910__$1;(statearr_14920_14941[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14911 === 8))
{var inst_14882 = (state_14910[7]);var inst_14889 = (state_14910[8]);var inst_14891 = (state_14910[10]);var inst_14890 = (state_14910[9]);var inst_14894 = (function (){var c = inst_14891;var v = inst_14890;var vec__14887 = inst_14889;var cs = inst_14882;return ((function (c,v,vec__14887,cs,inst_14882,inst_14889,inst_14891,inst_14890,state_val_14911){
return (function (p1__14827_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__14827_SHARP_);
});
;})(c,v,vec__14887,cs,inst_14882,inst_14889,inst_14891,inst_14890,state_val_14911))
})();var inst_14895 = cljs.core.filterv.call(null,inst_14894,inst_14882);var inst_14882__$1 = inst_14895;var state_14910__$1 = (function (){var statearr_14921 = state_14910;(statearr_14921[7] = inst_14882__$1);
return statearr_14921;
})();var statearr_14922_14942 = state_14910__$1;(statearr_14922_14942[2] = null);
(statearr_14922_14942[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14911 === 9))
{var inst_14890 = (state_14910[9]);var state_14910__$1 = state_14910;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14910__$1,11,out,inst_14890);
} else
{if((state_val_14911 === 10))
{var inst_14902 = (state_14910[2]);var state_14910__$1 = state_14910;var statearr_14924_14943 = state_14910__$1;(statearr_14924_14943[2] = inst_14902);
(statearr_14924_14943[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14911 === 11))
{var inst_14882 = (state_14910[7]);var inst_14899 = (state_14910[2]);var tmp14923 = inst_14882;var inst_14882__$1 = tmp14923;var state_14910__$1 = (function (){var statearr_14925 = state_14910;(statearr_14925[7] = inst_14882__$1);
(statearr_14925[11] = inst_14899);
return statearr_14925;
})();var statearr_14926_14944 = state_14910__$1;(statearr_14926_14944[2] = null);
(statearr_14926_14944[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14930 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14930[0] = state_machine__5507__auto__);
(statearr_14930[1] = 1);
return statearr_14930;
});
var state_machine__5507__auto____1 = (function (state_14910){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14910);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14931){if((e14931 instanceof Object))
{var ex__5510__auto__ = e14931;var statearr_14932_14945 = state_14910;(statearr_14932_14945[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14910);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14931;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14946 = state_14910;
state_14910 = G__14946;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14910){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14933 = f__5522__auto__.call(null);(statearr_14933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14934);
return statearr_14933;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15039 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15016){var state_val_15017 = (state_15016[1]);if((state_val_15017 === 1))
{var inst_14993 = 0;var state_15016__$1 = (function (){var statearr_15018 = state_15016;(statearr_15018[7] = inst_14993);
return statearr_15018;
})();var statearr_15019_15040 = state_15016__$1;(statearr_15019_15040[2] = null);
(statearr_15019_15040[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15017 === 2))
{var inst_14993 = (state_15016[7]);var inst_14995 = (inst_14993 < n);var state_15016__$1 = state_15016;if(cljs.core.truth_(inst_14995))
{var statearr_15020_15041 = state_15016__$1;(statearr_15020_15041[1] = 4);
} else
{var statearr_15021_15042 = state_15016__$1;(statearr_15021_15042[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15017 === 3))
{var inst_15013 = (state_15016[2]);var inst_15014 = cljs.core.async.close_BANG_.call(null,out);var state_15016__$1 = (function (){var statearr_15022 = state_15016;(statearr_15022[8] = inst_15013);
return statearr_15022;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15016__$1,inst_15014);
} else
{if((state_val_15017 === 4))
{var state_15016__$1 = state_15016;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15016__$1,7,ch);
} else
{if((state_val_15017 === 5))
{var state_15016__$1 = state_15016;var statearr_15023_15043 = state_15016__$1;(statearr_15023_15043[2] = null);
(statearr_15023_15043[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15017 === 6))
{var inst_15011 = (state_15016[2]);var state_15016__$1 = state_15016;var statearr_15024_15044 = state_15016__$1;(statearr_15024_15044[2] = inst_15011);
(statearr_15024_15044[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15017 === 7))
{var inst_14998 = (state_15016[9]);var inst_14998__$1 = (state_15016[2]);var inst_14999 = (inst_14998__$1 == null);var inst_15000 = cljs.core.not.call(null,inst_14999);var state_15016__$1 = (function (){var statearr_15025 = state_15016;(statearr_15025[9] = inst_14998__$1);
return statearr_15025;
})();if(inst_15000)
{var statearr_15026_15045 = state_15016__$1;(statearr_15026_15045[1] = 8);
} else
{var statearr_15027_15046 = state_15016__$1;(statearr_15027_15046[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15017 === 8))
{var inst_14998 = (state_15016[9]);var state_15016__$1 = state_15016;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15016__$1,11,out,inst_14998);
} else
{if((state_val_15017 === 9))
{var state_15016__$1 = state_15016;var statearr_15028_15047 = state_15016__$1;(statearr_15028_15047[2] = null);
(statearr_15028_15047[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15017 === 10))
{var inst_15008 = (state_15016[2]);var state_15016__$1 = state_15016;var statearr_15029_15048 = state_15016__$1;(statearr_15029_15048[2] = inst_15008);
(statearr_15029_15048[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15017 === 11))
{var inst_14993 = (state_15016[7]);var inst_15003 = (state_15016[2]);var inst_15004 = (inst_14993 + 1);var inst_14993__$1 = inst_15004;var state_15016__$1 = (function (){var statearr_15030 = state_15016;(statearr_15030[10] = inst_15003);
(statearr_15030[7] = inst_14993__$1);
return statearr_15030;
})();var statearr_15031_15049 = state_15016__$1;(statearr_15031_15049[2] = null);
(statearr_15031_15049[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15035 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15035[0] = state_machine__5507__auto__);
(statearr_15035[1] = 1);
return statearr_15035;
});
var state_machine__5507__auto____1 = (function (state_15016){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15016);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15036){if((e15036 instanceof Object))
{var ex__5510__auto__ = e15036;var statearr_15037_15050 = state_15016;(statearr_15037_15050[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15016);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15036;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15051 = state_15016;
state_15016 = G__15051;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15016){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15038 = f__5522__auto__.call(null);(statearr_15038[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15039);
return statearr_15038;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15148 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15123){var state_val_15124 = (state_15123[1]);if((state_val_15124 === 1))
{var inst_15100 = null;var state_15123__$1 = (function (){var statearr_15125 = state_15123;(statearr_15125[7] = inst_15100);
return statearr_15125;
})();var statearr_15126_15149 = state_15123__$1;(statearr_15126_15149[2] = null);
(statearr_15126_15149[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15124 === 2))
{var state_15123__$1 = state_15123;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15123__$1,4,ch);
} else
{if((state_val_15124 === 3))
{var inst_15120 = (state_15123[2]);var inst_15121 = cljs.core.async.close_BANG_.call(null,out);var state_15123__$1 = (function (){var statearr_15127 = state_15123;(statearr_15127[8] = inst_15120);
return statearr_15127;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15123__$1,inst_15121);
} else
{if((state_val_15124 === 4))
{var inst_15103 = (state_15123[9]);var inst_15103__$1 = (state_15123[2]);var inst_15104 = (inst_15103__$1 == null);var inst_15105 = cljs.core.not.call(null,inst_15104);var state_15123__$1 = (function (){var statearr_15128 = state_15123;(statearr_15128[9] = inst_15103__$1);
return statearr_15128;
})();if(inst_15105)
{var statearr_15129_15150 = state_15123__$1;(statearr_15129_15150[1] = 5);
} else
{var statearr_15130_15151 = state_15123__$1;(statearr_15130_15151[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15124 === 5))
{var inst_15103 = (state_15123[9]);var inst_15100 = (state_15123[7]);var inst_15107 = cljs.core._EQ_.call(null,inst_15103,inst_15100);var state_15123__$1 = state_15123;if(inst_15107)
{var statearr_15131_15152 = state_15123__$1;(statearr_15131_15152[1] = 8);
} else
{var statearr_15132_15153 = state_15123__$1;(statearr_15132_15153[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15124 === 6))
{var state_15123__$1 = state_15123;var statearr_15134_15154 = state_15123__$1;(statearr_15134_15154[2] = null);
(statearr_15134_15154[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15124 === 7))
{var inst_15118 = (state_15123[2]);var state_15123__$1 = state_15123;var statearr_15135_15155 = state_15123__$1;(statearr_15135_15155[2] = inst_15118);
(statearr_15135_15155[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15124 === 8))
{var inst_15100 = (state_15123[7]);var tmp15133 = inst_15100;var inst_15100__$1 = tmp15133;var state_15123__$1 = (function (){var statearr_15136 = state_15123;(statearr_15136[7] = inst_15100__$1);
return statearr_15136;
})();var statearr_15137_15156 = state_15123__$1;(statearr_15137_15156[2] = null);
(statearr_15137_15156[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15124 === 9))
{var inst_15103 = (state_15123[9]);var state_15123__$1 = state_15123;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15123__$1,11,out,inst_15103);
} else
{if((state_val_15124 === 10))
{var inst_15115 = (state_15123[2]);var state_15123__$1 = state_15123;var statearr_15138_15157 = state_15123__$1;(statearr_15138_15157[2] = inst_15115);
(statearr_15138_15157[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15124 === 11))
{var inst_15103 = (state_15123[9]);var inst_15112 = (state_15123[2]);var inst_15100 = inst_15103;var state_15123__$1 = (function (){var statearr_15139 = state_15123;(statearr_15139[7] = inst_15100);
(statearr_15139[10] = inst_15112);
return statearr_15139;
})();var statearr_15140_15158 = state_15123__$1;(statearr_15140_15158[2] = null);
(statearr_15140_15158[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15144 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15144[0] = state_machine__5507__auto__);
(statearr_15144[1] = 1);
return statearr_15144;
});
var state_machine__5507__auto____1 = (function (state_15123){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15123);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15145){if((e15145 instanceof Object))
{var ex__5510__auto__ = e15145;var statearr_15146_15159 = state_15123;(statearr_15146_15159[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15123);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15145;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15160 = state_15123;
state_15123 = G__15160;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15123){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15147 = f__5522__auto__.call(null);(statearr_15147[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15148);
return statearr_15147;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15295 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15265){var state_val_15266 = (state_15265[1]);if((state_val_15266 === 1))
{var inst_15228 = (new Array(n));var inst_15229 = inst_15228;var inst_15230 = 0;var state_15265__$1 = (function (){var statearr_15267 = state_15265;(statearr_15267[7] = inst_15230);
(statearr_15267[8] = inst_15229);
return statearr_15267;
})();var statearr_15268_15296 = state_15265__$1;(statearr_15268_15296[2] = null);
(statearr_15268_15296[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15266 === 2))
{var state_15265__$1 = state_15265;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15265__$1,4,ch);
} else
{if((state_val_15266 === 3))
{var inst_15263 = (state_15265[2]);var state_15265__$1 = state_15265;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15265__$1,inst_15263);
} else
{if((state_val_15266 === 4))
{var inst_15233 = (state_15265[9]);var inst_15233__$1 = (state_15265[2]);var inst_15234 = (inst_15233__$1 == null);var inst_15235 = cljs.core.not.call(null,inst_15234);var state_15265__$1 = (function (){var statearr_15269 = state_15265;(statearr_15269[9] = inst_15233__$1);
return statearr_15269;
})();if(inst_15235)
{var statearr_15270_15297 = state_15265__$1;(statearr_15270_15297[1] = 5);
} else
{var statearr_15271_15298 = state_15265__$1;(statearr_15271_15298[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15266 === 5))
{var inst_15233 = (state_15265[9]);var inst_15230 = (state_15265[7]);var inst_15229 = (state_15265[8]);var inst_15238 = (state_15265[10]);var inst_15237 = (inst_15229[inst_15230] = inst_15233);var inst_15238__$1 = (inst_15230 + 1);var inst_15239 = (inst_15238__$1 < n);var state_15265__$1 = (function (){var statearr_15272 = state_15265;(statearr_15272[10] = inst_15238__$1);
(statearr_15272[11] = inst_15237);
return statearr_15272;
})();if(cljs.core.truth_(inst_15239))
{var statearr_15273_15299 = state_15265__$1;(statearr_15273_15299[1] = 8);
} else
{var statearr_15274_15300 = state_15265__$1;(statearr_15274_15300[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15266 === 6))
{var inst_15230 = (state_15265[7]);var inst_15251 = (inst_15230 > 0);var state_15265__$1 = state_15265;if(cljs.core.truth_(inst_15251))
{var statearr_15276_15301 = state_15265__$1;(statearr_15276_15301[1] = 12);
} else
{var statearr_15277_15302 = state_15265__$1;(statearr_15277_15302[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15266 === 7))
{var inst_15261 = (state_15265[2]);var state_15265__$1 = state_15265;var statearr_15278_15303 = state_15265__$1;(statearr_15278_15303[2] = inst_15261);
(statearr_15278_15303[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15266 === 8))
{var inst_15229 = (state_15265[8]);var inst_15238 = (state_15265[10]);var tmp15275 = inst_15229;var inst_15229__$1 = tmp15275;var inst_15230 = inst_15238;var state_15265__$1 = (function (){var statearr_15279 = state_15265;(statearr_15279[7] = inst_15230);
(statearr_15279[8] = inst_15229__$1);
return statearr_15279;
})();var statearr_15280_15304 = state_15265__$1;(statearr_15280_15304[2] = null);
(statearr_15280_15304[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15266 === 9))
{var inst_15229 = (state_15265[8]);var inst_15243 = cljs.core.vec.call(null,inst_15229);var state_15265__$1 = state_15265;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15265__$1,11,out,inst_15243);
} else
{if((state_val_15266 === 10))
{var inst_15249 = (state_15265[2]);var state_15265__$1 = state_15265;var statearr_15281_15305 = state_15265__$1;(statearr_15281_15305[2] = inst_15249);
(statearr_15281_15305[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15266 === 11))
{var inst_15245 = (state_15265[2]);var inst_15246 = (new Array(n));var inst_15229 = inst_15246;var inst_15230 = 0;var state_15265__$1 = (function (){var statearr_15282 = state_15265;(statearr_15282[7] = inst_15230);
(statearr_15282[12] = inst_15245);
(statearr_15282[8] = inst_15229);
return statearr_15282;
})();var statearr_15283_15306 = state_15265__$1;(statearr_15283_15306[2] = null);
(statearr_15283_15306[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15266 === 12))
{var inst_15229 = (state_15265[8]);var inst_15253 = cljs.core.vec.call(null,inst_15229);var state_15265__$1 = state_15265;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15265__$1,15,out,inst_15253);
} else
{if((state_val_15266 === 13))
{var state_15265__$1 = state_15265;var statearr_15284_15307 = state_15265__$1;(statearr_15284_15307[2] = null);
(statearr_15284_15307[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15266 === 14))
{var inst_15258 = (state_15265[2]);var inst_15259 = cljs.core.async.close_BANG_.call(null,out);var state_15265__$1 = (function (){var statearr_15285 = state_15265;(statearr_15285[13] = inst_15258);
return statearr_15285;
})();var statearr_15286_15308 = state_15265__$1;(statearr_15286_15308[2] = inst_15259);
(statearr_15286_15308[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15266 === 15))
{var inst_15255 = (state_15265[2]);var state_15265__$1 = state_15265;var statearr_15287_15309 = state_15265__$1;(statearr_15287_15309[2] = inst_15255);
(statearr_15287_15309[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_15291 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15291[0] = state_machine__5507__auto__);
(statearr_15291[1] = 1);
return statearr_15291;
});
var state_machine__5507__auto____1 = (function (state_15265){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15265);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15292){if((e15292 instanceof Object))
{var ex__5510__auto__ = e15292;var statearr_15293_15310 = state_15265;(statearr_15293_15310[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15265);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15292;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15311 = state_15265;
state_15265 = G__15311;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15265){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15294 = f__5522__auto__.call(null);(statearr_15294[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15295);
return statearr_15294;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15454 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15424){var state_val_15425 = (state_15424[1]);if((state_val_15425 === 1))
{var inst_15383 = [];var inst_15384 = inst_15383;var inst_15385 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_15424__$1 = (function (){var statearr_15426 = state_15424;(statearr_15426[7] = inst_15385);
(statearr_15426[8] = inst_15384);
return statearr_15426;
})();var statearr_15427_15455 = state_15424__$1;(statearr_15427_15455[2] = null);
(statearr_15427_15455[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15425 === 2))
{var state_15424__$1 = state_15424;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15424__$1,4,ch);
} else
{if((state_val_15425 === 3))
{var inst_15422 = (state_15424[2]);var state_15424__$1 = state_15424;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15424__$1,inst_15422);
} else
{if((state_val_15425 === 4))
{var inst_15388 = (state_15424[9]);var inst_15388__$1 = (state_15424[2]);var inst_15389 = (inst_15388__$1 == null);var inst_15390 = cljs.core.not.call(null,inst_15389);var state_15424__$1 = (function (){var statearr_15428 = state_15424;(statearr_15428[9] = inst_15388__$1);
return statearr_15428;
})();if(inst_15390)
{var statearr_15429_15456 = state_15424__$1;(statearr_15429_15456[1] = 5);
} else
{var statearr_15430_15457 = state_15424__$1;(statearr_15430_15457[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15425 === 5))
{var inst_15388 = (state_15424[9]);var inst_15392 = (state_15424[10]);var inst_15385 = (state_15424[7]);var inst_15392__$1 = f.call(null,inst_15388);var inst_15393 = cljs.core._EQ_.call(null,inst_15392__$1,inst_15385);var inst_15394 = cljs.core.keyword_identical_QMARK_.call(null,inst_15385,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_15395 = (inst_15393) || (inst_15394);var state_15424__$1 = (function (){var statearr_15431 = state_15424;(statearr_15431[10] = inst_15392__$1);
return statearr_15431;
})();if(cljs.core.truth_(inst_15395))
{var statearr_15432_15458 = state_15424__$1;(statearr_15432_15458[1] = 8);
} else
{var statearr_15433_15459 = state_15424__$1;(statearr_15433_15459[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15425 === 6))
{var inst_15384 = (state_15424[8]);var inst_15409 = inst_15384.length;var inst_15410 = (inst_15409 > 0);var state_15424__$1 = state_15424;if(cljs.core.truth_(inst_15410))
{var statearr_15435_15460 = state_15424__$1;(statearr_15435_15460[1] = 12);
} else
{var statearr_15436_15461 = state_15424__$1;(statearr_15436_15461[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15425 === 7))
{var inst_15420 = (state_15424[2]);var state_15424__$1 = state_15424;var statearr_15437_15462 = state_15424__$1;(statearr_15437_15462[2] = inst_15420);
(statearr_15437_15462[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15425 === 8))
{var inst_15388 = (state_15424[9]);var inst_15392 = (state_15424[10]);var inst_15384 = (state_15424[8]);var inst_15397 = inst_15384.push(inst_15388);var tmp15434 = inst_15384;var inst_15384__$1 = tmp15434;var inst_15385 = inst_15392;var state_15424__$1 = (function (){var statearr_15438 = state_15424;(statearr_15438[7] = inst_15385);
(statearr_15438[8] = inst_15384__$1);
(statearr_15438[11] = inst_15397);
return statearr_15438;
})();var statearr_15439_15463 = state_15424__$1;(statearr_15439_15463[2] = null);
(statearr_15439_15463[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15425 === 9))
{var inst_15384 = (state_15424[8]);var inst_15400 = cljs.core.vec.call(null,inst_15384);var state_15424__$1 = state_15424;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15424__$1,11,out,inst_15400);
} else
{if((state_val_15425 === 10))
{var inst_15407 = (state_15424[2]);var state_15424__$1 = state_15424;var statearr_15440_15464 = state_15424__$1;(statearr_15440_15464[2] = inst_15407);
(statearr_15440_15464[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15425 === 11))
{var inst_15388 = (state_15424[9]);var inst_15392 = (state_15424[10]);var inst_15402 = (state_15424[2]);var inst_15403 = [];var inst_15404 = inst_15403.push(inst_15388);var inst_15384 = inst_15403;var inst_15385 = inst_15392;var state_15424__$1 = (function (){var statearr_15441 = state_15424;(statearr_15441[7] = inst_15385);
(statearr_15441[8] = inst_15384);
(statearr_15441[12] = inst_15404);
(statearr_15441[13] = inst_15402);
return statearr_15441;
})();var statearr_15442_15465 = state_15424__$1;(statearr_15442_15465[2] = null);
(statearr_15442_15465[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15425 === 12))
{var inst_15384 = (state_15424[8]);var inst_15412 = cljs.core.vec.call(null,inst_15384);var state_15424__$1 = state_15424;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15424__$1,15,out,inst_15412);
} else
{if((state_val_15425 === 13))
{var state_15424__$1 = state_15424;var statearr_15443_15466 = state_15424__$1;(statearr_15443_15466[2] = null);
(statearr_15443_15466[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15425 === 14))
{var inst_15417 = (state_15424[2]);var inst_15418 = cljs.core.async.close_BANG_.call(null,out);var state_15424__$1 = (function (){var statearr_15444 = state_15424;(statearr_15444[14] = inst_15417);
return statearr_15444;
})();var statearr_15445_15467 = state_15424__$1;(statearr_15445_15467[2] = inst_15418);
(statearr_15445_15467[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15425 === 15))
{var inst_15414 = (state_15424[2]);var state_15424__$1 = state_15424;var statearr_15446_15468 = state_15424__$1;(statearr_15446_15468[2] = inst_15414);
(statearr_15446_15468[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_15450 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15450[0] = state_machine__5507__auto__);
(statearr_15450[1] = 1);
return statearr_15450;
});
var state_machine__5507__auto____1 = (function (state_15424){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15424);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15451){if((e15451 instanceof Object))
{var ex__5510__auto__ = e15451;var statearr_15452_15469 = state_15424;(statearr_15452_15469[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15424);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15451;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15470 = state_15424;
state_15424 = G__15470;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15424){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15453 = f__5522__auto__.call(null);(statearr_15453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15454);
return statearr_15453;
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