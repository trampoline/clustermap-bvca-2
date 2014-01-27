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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t12913 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12913 = (function (f,fn_handler,meta12914){
this.f = f;
this.fn_handler = fn_handler;
this.meta12914 = meta12914;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12913.cljs$lang$type = true;
cljs.core.async.t12913.cljs$lang$ctorStr = "cljs.core.async/t12913";
cljs.core.async.t12913.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12913");
});
cljs.core.async.t12913.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12913.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t12913.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t12913.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12915){var self__ = this;
var _12915__$1 = this;return self__.meta12914;
});
cljs.core.async.t12913.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12915,meta12914__$1){var self__ = this;
var _12915__$1 = this;return (new cljs.core.async.t12913(self__.f,self__.fn_handler,meta12914__$1));
});
cljs.core.async.__GT_t12913 = (function __GT_t12913(f__$1,fn_handler__$1,meta12914){return (new cljs.core.async.t12913(f__$1,fn_handler__$1,meta12914));
});
}
return (new cljs.core.async.t12913(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__12917 = buff;if(G__12917)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__12917.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__12917.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12917);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12917);
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
{var val_12918 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_12918);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_12918);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___12919 = n;var x_12920 = 0;while(true){
if((x_12920 < n__4248__auto___12919))
{(a[x_12920] = 0);
{
var G__12921 = (x_12920 + 1);
x_12920 = G__12921;
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
var G__12922 = (i + 1);
i = G__12922;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t12926 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12926 = (function (flag,alt_flag,meta12927){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta12927 = meta12927;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12926.cljs$lang$type = true;
cljs.core.async.t12926.cljs$lang$ctorStr = "cljs.core.async/t12926";
cljs.core.async.t12926.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12926");
});
cljs.core.async.t12926.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12926.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t12926.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t12926.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12928){var self__ = this;
var _12928__$1 = this;return self__.meta12927;
});
cljs.core.async.t12926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12928,meta12927__$1){var self__ = this;
var _12928__$1 = this;return (new cljs.core.async.t12926(self__.flag,self__.alt_flag,meta12927__$1));
});
cljs.core.async.__GT_t12926 = (function __GT_t12926(flag__$1,alt_flag__$1,meta12927){return (new cljs.core.async.t12926(flag__$1,alt_flag__$1,meta12927));
});
}
return (new cljs.core.async.t12926(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t12932 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12932 = (function (cb,flag,alt_handler,meta12933){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta12933 = meta12933;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12932.cljs$lang$type = true;
cljs.core.async.t12932.cljs$lang$ctorStr = "cljs.core.async/t12932";
cljs.core.async.t12932.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12932");
});
cljs.core.async.t12932.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12932.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t12932.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t12932.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12934){var self__ = this;
var _12934__$1 = this;return self__.meta12933;
});
cljs.core.async.t12932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12934,meta12933__$1){var self__ = this;
var _12934__$1 = this;return (new cljs.core.async.t12932(self__.cb,self__.flag,self__.alt_handler,meta12933__$1));
});
cljs.core.async.__GT_t12932 = (function __GT_t12932(cb__$1,flag__$1,alt_handler__$1,meta12933){return (new cljs.core.async.t12932(cb__$1,flag__$1,alt_handler__$1,meta12933));
});
}
return (new cljs.core.async.t12932(cb,flag,alt_handler,null));
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
return (function (p1__12935_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12935_SHARP_,port], null));
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
var G__12936 = (i + 1);
i = G__12936;
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
var alts_BANG___delegate = function (ports,p__12937){var map__12939 = p__12937;var map__12939__$1 = ((cljs.core.seq_QMARK_.call(null,map__12939))?cljs.core.apply.call(null,cljs.core.hash_map,map__12939):map__12939);var opts = map__12939__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__12937 = null;if (arguments.length > 1) {
  p__12937 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__12937);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12940){
var ports = cljs.core.first(arglist__12940);
var p__12937 = cljs.core.rest(arglist__12940);
return alts_BANG___delegate(ports,p__12937);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t12948 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12948 = (function (ch,f,map_LT_,meta12949){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12949 = meta12949;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12948.cljs$lang$type = true;
cljs.core.async.t12948.cljs$lang$ctorStr = "cljs.core.async/t12948";
cljs.core.async.t12948.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12948");
});
cljs.core.async.t12948.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12948.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t12948.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12948.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t12951 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12951 = (function (fn1,_,meta12949,ch,f,map_LT_,meta12952){
this.fn1 = fn1;
this._ = _;
this.meta12949 = meta12949;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12952 = meta12952;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12951.cljs$lang$type = true;
cljs.core.async.t12951.cljs$lang$ctorStr = "cljs.core.async/t12951";
cljs.core.async.t12951.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12951");
});
cljs.core.async.t12951.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12951.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t12951.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t12951.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__12941_SHARP_){return f1.call(null,(((p1__12941_SHARP_ == null))?null:self__.f.call(null,p1__12941_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t12951.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12953){var self__ = this;
var _12953__$1 = this;return self__.meta12952;
});
cljs.core.async.t12951.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12953,meta12952__$1){var self__ = this;
var _12953__$1 = this;return (new cljs.core.async.t12951(self__.fn1,self__._,self__.meta12949,self__.ch,self__.f,self__.map_LT_,meta12952__$1));
});
cljs.core.async.__GT_t12951 = (function __GT_t12951(fn1__$1,___$2,meta12949__$1,ch__$2,f__$2,map_LT___$2,meta12952){return (new cljs.core.async.t12951(fn1__$1,___$2,meta12949__$1,ch__$2,f__$2,map_LT___$2,meta12952));
});
}
return (new cljs.core.async.t12951(fn1,___$1,self__.meta12949,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t12948.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12948.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12948.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12950){var self__ = this;
var _12950__$1 = this;return self__.meta12949;
});
cljs.core.async.t12948.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12950,meta12949__$1){var self__ = this;
var _12950__$1 = this;return (new cljs.core.async.t12948(self__.ch,self__.f,self__.map_LT_,meta12949__$1));
});
cljs.core.async.__GT_t12948 = (function __GT_t12948(ch__$1,f__$1,map_LT___$1,meta12949){return (new cljs.core.async.t12948(ch__$1,f__$1,map_LT___$1,meta12949));
});
}
return (new cljs.core.async.t12948(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t12957 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12957 = (function (ch,f,map_GT_,meta12958){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta12958 = meta12958;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12957.cljs$lang$type = true;
cljs.core.async.t12957.cljs$lang$ctorStr = "cljs.core.async/t12957";
cljs.core.async.t12957.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12957");
});
cljs.core.async.t12957.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12957.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t12957.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12957.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12957.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12957.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12957.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12959){var self__ = this;
var _12959__$1 = this;return self__.meta12958;
});
cljs.core.async.t12957.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12959,meta12958__$1){var self__ = this;
var _12959__$1 = this;return (new cljs.core.async.t12957(self__.ch,self__.f,self__.map_GT_,meta12958__$1));
});
cljs.core.async.__GT_t12957 = (function __GT_t12957(ch__$1,f__$1,map_GT___$1,meta12958){return (new cljs.core.async.t12957(ch__$1,f__$1,map_GT___$1,meta12958));
});
}
return (new cljs.core.async.t12957(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t12963 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12963 = (function (ch,p,filter_GT_,meta12964){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta12964 = meta12964;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12963.cljs$lang$type = true;
cljs.core.async.t12963.cljs$lang$ctorStr = "cljs.core.async/t12963";
cljs.core.async.t12963.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12963");
});
cljs.core.async.t12963.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12963.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t12963.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12963.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12963.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12963.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12963.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12965){var self__ = this;
var _12965__$1 = this;return self__.meta12964;
});
cljs.core.async.t12963.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12965,meta12964__$1){var self__ = this;
var _12965__$1 = this;return (new cljs.core.async.t12963(self__.ch,self__.p,self__.filter_GT_,meta12964__$1));
});
cljs.core.async.__GT_t12963 = (function __GT_t12963(ch__$1,p__$1,filter_GT___$1,meta12964){return (new cljs.core.async.t12963(ch__$1,p__$1,filter_GT___$1,meta12964));
});
}
return (new cljs.core.async.t12963(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___13048 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13027){var state_val_13028 = (state_13027[1]);if((state_val_13028 === 1))
{var state_13027__$1 = state_13027;var statearr_13029_13049 = state_13027__$1;(statearr_13029_13049[2] = null);
(statearr_13029_13049[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13028 === 2))
{var state_13027__$1 = state_13027;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13027__$1,4,ch);
} else
{if((state_val_13028 === 3))
{var inst_13025 = (state_13027[2]);var state_13027__$1 = state_13027;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13027__$1,inst_13025);
} else
{if((state_val_13028 === 4))
{var inst_13009 = (state_13027[7]);var inst_13009__$1 = (state_13027[2]);var inst_13010 = (inst_13009__$1 == null);var state_13027__$1 = (function (){var statearr_13030 = state_13027;(statearr_13030[7] = inst_13009__$1);
return statearr_13030;
})();if(cljs.core.truth_(inst_13010))
{var statearr_13031_13050 = state_13027__$1;(statearr_13031_13050[1] = 5);
} else
{var statearr_13032_13051 = state_13027__$1;(statearr_13032_13051[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13028 === 5))
{var inst_13012 = cljs.core.async.close_BANG_.call(null,out);var state_13027__$1 = state_13027;var statearr_13033_13052 = state_13027__$1;(statearr_13033_13052[2] = inst_13012);
(statearr_13033_13052[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13028 === 6))
{var inst_13009 = (state_13027[7]);var inst_13014 = p.call(null,inst_13009);var state_13027__$1 = state_13027;if(cljs.core.truth_(inst_13014))
{var statearr_13034_13053 = state_13027__$1;(statearr_13034_13053[1] = 8);
} else
{var statearr_13035_13054 = state_13027__$1;(statearr_13035_13054[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13028 === 7))
{var inst_13023 = (state_13027[2]);var state_13027__$1 = state_13027;var statearr_13036_13055 = state_13027__$1;(statearr_13036_13055[2] = inst_13023);
(statearr_13036_13055[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13028 === 8))
{var inst_13009 = (state_13027[7]);var state_13027__$1 = state_13027;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13027__$1,11,out,inst_13009);
} else
{if((state_val_13028 === 9))
{var state_13027__$1 = state_13027;var statearr_13037_13056 = state_13027__$1;(statearr_13037_13056[2] = null);
(statearr_13037_13056[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13028 === 10))
{var inst_13020 = (state_13027[2]);var state_13027__$1 = (function (){var statearr_13038 = state_13027;(statearr_13038[8] = inst_13020);
return statearr_13038;
})();var statearr_13039_13057 = state_13027__$1;(statearr_13039_13057[2] = null);
(statearr_13039_13057[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13028 === 11))
{var inst_13017 = (state_13027[2]);var state_13027__$1 = state_13027;var statearr_13040_13058 = state_13027__$1;(statearr_13040_13058[2] = inst_13017);
(statearr_13040_13058[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_13044 = [null,null,null,null,null,null,null,null,null];(statearr_13044[0] = state_machine__5507__auto__);
(statearr_13044[1] = 1);
return statearr_13044;
});
var state_machine__5507__auto____1 = (function (state_13027){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13027);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13045){if((e13045 instanceof Object))
{var ex__5510__auto__ = e13045;var statearr_13046_13059 = state_13027;(statearr_13046_13059[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13027);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13045;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13060 = state_13027;
state_13027 = G__13060;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13027){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13047 = f__5522__auto__.call(null);(statearr_13047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13048);
return statearr_13047;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13212){var state_val_13213 = (state_13212[1]);if((state_val_13213 === 1))
{var state_13212__$1 = state_13212;var statearr_13214_13251 = state_13212__$1;(statearr_13214_13251[2] = null);
(statearr_13214_13251[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13213 === 2))
{var state_13212__$1 = state_13212;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13212__$1,4,in$);
} else
{if((state_val_13213 === 3))
{var inst_13210 = (state_13212[2]);var state_13212__$1 = state_13212;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13212__$1,inst_13210);
} else
{if((state_val_13213 === 4))
{var inst_13158 = (state_13212[7]);var inst_13158__$1 = (state_13212[2]);var inst_13159 = (inst_13158__$1 == null);var state_13212__$1 = (function (){var statearr_13215 = state_13212;(statearr_13215[7] = inst_13158__$1);
return statearr_13215;
})();if(cljs.core.truth_(inst_13159))
{var statearr_13216_13252 = state_13212__$1;(statearr_13216_13252[1] = 5);
} else
{var statearr_13217_13253 = state_13212__$1;(statearr_13217_13253[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13213 === 5))
{var inst_13161 = cljs.core.async.close_BANG_.call(null,out);var state_13212__$1 = state_13212;var statearr_13218_13254 = state_13212__$1;(statearr_13218_13254[2] = inst_13161);
(statearr_13218_13254[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13213 === 6))
{var inst_13158 = (state_13212[7]);var inst_13163 = f.call(null,inst_13158);var inst_13168 = cljs.core.seq.call(null,inst_13163);var inst_13169 = inst_13168;var inst_13170 = null;var inst_13171 = 0;var inst_13172 = 0;var state_13212__$1 = (function (){var statearr_13219 = state_13212;(statearr_13219[8] = inst_13169);
(statearr_13219[9] = inst_13170);
(statearr_13219[10] = inst_13172);
(statearr_13219[11] = inst_13171);
return statearr_13219;
})();var statearr_13220_13255 = state_13212__$1;(statearr_13220_13255[2] = null);
(statearr_13220_13255[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13213 === 7))
{var inst_13208 = (state_13212[2]);var state_13212__$1 = state_13212;var statearr_13221_13256 = state_13212__$1;(statearr_13221_13256[2] = inst_13208);
(statearr_13221_13256[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13213 === 8))
{var inst_13172 = (state_13212[10]);var inst_13171 = (state_13212[11]);var inst_13174 = (inst_13172 < inst_13171);var inst_13175 = inst_13174;var state_13212__$1 = state_13212;if(cljs.core.truth_(inst_13175))
{var statearr_13222_13257 = state_13212__$1;(statearr_13222_13257[1] = 10);
} else
{var statearr_13223_13258 = state_13212__$1;(statearr_13223_13258[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13213 === 9))
{var inst_13205 = (state_13212[2]);var state_13212__$1 = (function (){var statearr_13224 = state_13212;(statearr_13224[12] = inst_13205);
return statearr_13224;
})();var statearr_13225_13259 = state_13212__$1;(statearr_13225_13259[2] = null);
(statearr_13225_13259[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13213 === 10))
{var inst_13170 = (state_13212[9]);var inst_13172 = (state_13212[10]);var inst_13177 = cljs.core._nth.call(null,inst_13170,inst_13172);var state_13212__$1 = state_13212;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13212__$1,13,out,inst_13177);
} else
{if((state_val_13213 === 11))
{var inst_13169 = (state_13212[8]);var inst_13183 = (state_13212[13]);var inst_13183__$1 = cljs.core.seq.call(null,inst_13169);var state_13212__$1 = (function (){var statearr_13229 = state_13212;(statearr_13229[13] = inst_13183__$1);
return statearr_13229;
})();if(inst_13183__$1)
{var statearr_13230_13260 = state_13212__$1;(statearr_13230_13260[1] = 14);
} else
{var statearr_13231_13261 = state_13212__$1;(statearr_13231_13261[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13213 === 12))
{var inst_13203 = (state_13212[2]);var state_13212__$1 = state_13212;var statearr_13232_13262 = state_13212__$1;(statearr_13232_13262[2] = inst_13203);
(statearr_13232_13262[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13213 === 13))
{var inst_13169 = (state_13212[8]);var inst_13170 = (state_13212[9]);var inst_13172 = (state_13212[10]);var inst_13171 = (state_13212[11]);var inst_13179 = (state_13212[2]);var inst_13180 = (inst_13172 + 1);var tmp13226 = inst_13169;var tmp13227 = inst_13170;var tmp13228 = inst_13171;var inst_13169__$1 = tmp13226;var inst_13170__$1 = tmp13227;var inst_13171__$1 = tmp13228;var inst_13172__$1 = inst_13180;var state_13212__$1 = (function (){var statearr_13233 = state_13212;(statearr_13233[8] = inst_13169__$1);
(statearr_13233[9] = inst_13170__$1);
(statearr_13233[10] = inst_13172__$1);
(statearr_13233[11] = inst_13171__$1);
(statearr_13233[14] = inst_13179);
return statearr_13233;
})();var statearr_13234_13263 = state_13212__$1;(statearr_13234_13263[2] = null);
(statearr_13234_13263[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13213 === 14))
{var inst_13183 = (state_13212[13]);var inst_13185 = cljs.core.chunked_seq_QMARK_.call(null,inst_13183);var state_13212__$1 = state_13212;if(inst_13185)
{var statearr_13235_13264 = state_13212__$1;(statearr_13235_13264[1] = 17);
} else
{var statearr_13236_13265 = state_13212__$1;(statearr_13236_13265[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13213 === 15))
{var state_13212__$1 = state_13212;var statearr_13237_13266 = state_13212__$1;(statearr_13237_13266[2] = null);
(statearr_13237_13266[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13213 === 16))
{var inst_13201 = (state_13212[2]);var state_13212__$1 = state_13212;var statearr_13238_13267 = state_13212__$1;(statearr_13238_13267[2] = inst_13201);
(statearr_13238_13267[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13213 === 17))
{var inst_13183 = (state_13212[13]);var inst_13187 = cljs.core.chunk_first.call(null,inst_13183);var inst_13188 = cljs.core.chunk_rest.call(null,inst_13183);var inst_13189 = cljs.core.count.call(null,inst_13187);var inst_13169 = inst_13188;var inst_13170 = inst_13187;var inst_13171 = inst_13189;var inst_13172 = 0;var state_13212__$1 = (function (){var statearr_13239 = state_13212;(statearr_13239[8] = inst_13169);
(statearr_13239[9] = inst_13170);
(statearr_13239[10] = inst_13172);
(statearr_13239[11] = inst_13171);
return statearr_13239;
})();var statearr_13240_13268 = state_13212__$1;(statearr_13240_13268[2] = null);
(statearr_13240_13268[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13213 === 18))
{var inst_13183 = (state_13212[13]);var inst_13192 = cljs.core.first.call(null,inst_13183);var state_13212__$1 = state_13212;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13212__$1,20,out,inst_13192);
} else
{if((state_val_13213 === 19))
{var inst_13198 = (state_13212[2]);var state_13212__$1 = state_13212;var statearr_13241_13269 = state_13212__$1;(statearr_13241_13269[2] = inst_13198);
(statearr_13241_13269[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13213 === 20))
{var inst_13183 = (state_13212[13]);var inst_13194 = (state_13212[2]);var inst_13195 = cljs.core.next.call(null,inst_13183);var inst_13169 = inst_13195;var inst_13170 = null;var inst_13171 = 0;var inst_13172 = 0;var state_13212__$1 = (function (){var statearr_13242 = state_13212;(statearr_13242[15] = inst_13194);
(statearr_13242[8] = inst_13169);
(statearr_13242[9] = inst_13170);
(statearr_13242[10] = inst_13172);
(statearr_13242[11] = inst_13171);
return statearr_13242;
})();var statearr_13243_13270 = state_13212__$1;(statearr_13243_13270[2] = null);
(statearr_13243_13270[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_13247 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13247[0] = state_machine__5507__auto__);
(statearr_13247[1] = 1);
return statearr_13247;
});
var state_machine__5507__auto____1 = (function (state_13212){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13212);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13248){if((e13248 instanceof Object))
{var ex__5510__auto__ = e13248;var statearr_13249_13271 = state_13212;(statearr_13249_13271[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13212);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13248;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13272 = state_13212;
state_13212 = G__13272;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13212){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13250 = f__5522__auto__.call(null);(statearr_13250[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13250;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___13353 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13332){var state_val_13333 = (state_13332[1]);if((state_val_13333 === 1))
{var state_13332__$1 = state_13332;var statearr_13334_13354 = state_13332__$1;(statearr_13334_13354[2] = null);
(statearr_13334_13354[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13333 === 2))
{var state_13332__$1 = state_13332;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13332__$1,4,from);
} else
{if((state_val_13333 === 3))
{var inst_13330 = (state_13332[2]);var state_13332__$1 = state_13332;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13332__$1,inst_13330);
} else
{if((state_val_13333 === 4))
{var inst_13315 = (state_13332[7]);var inst_13315__$1 = (state_13332[2]);var inst_13316 = (inst_13315__$1 == null);var state_13332__$1 = (function (){var statearr_13335 = state_13332;(statearr_13335[7] = inst_13315__$1);
return statearr_13335;
})();if(cljs.core.truth_(inst_13316))
{var statearr_13336_13355 = state_13332__$1;(statearr_13336_13355[1] = 5);
} else
{var statearr_13337_13356 = state_13332__$1;(statearr_13337_13356[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13333 === 5))
{var state_13332__$1 = state_13332;if(cljs.core.truth_(close_QMARK_))
{var statearr_13338_13357 = state_13332__$1;(statearr_13338_13357[1] = 8);
} else
{var statearr_13339_13358 = state_13332__$1;(statearr_13339_13358[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13333 === 6))
{var inst_13315 = (state_13332[7]);var state_13332__$1 = state_13332;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13332__$1,11,to,inst_13315);
} else
{if((state_val_13333 === 7))
{var inst_13328 = (state_13332[2]);var state_13332__$1 = state_13332;var statearr_13340_13359 = state_13332__$1;(statearr_13340_13359[2] = inst_13328);
(statearr_13340_13359[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13333 === 8))
{var inst_13319 = cljs.core.async.close_BANG_.call(null,to);var state_13332__$1 = state_13332;var statearr_13341_13360 = state_13332__$1;(statearr_13341_13360[2] = inst_13319);
(statearr_13341_13360[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13333 === 9))
{var state_13332__$1 = state_13332;var statearr_13342_13361 = state_13332__$1;(statearr_13342_13361[2] = null);
(statearr_13342_13361[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13333 === 10))
{var inst_13322 = (state_13332[2]);var state_13332__$1 = state_13332;var statearr_13343_13362 = state_13332__$1;(statearr_13343_13362[2] = inst_13322);
(statearr_13343_13362[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13333 === 11))
{var inst_13325 = (state_13332[2]);var state_13332__$1 = (function (){var statearr_13344 = state_13332;(statearr_13344[8] = inst_13325);
return statearr_13344;
})();var statearr_13345_13363 = state_13332__$1;(statearr_13345_13363[2] = null);
(statearr_13345_13363[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_13349 = [null,null,null,null,null,null,null,null,null];(statearr_13349[0] = state_machine__5507__auto__);
(statearr_13349[1] = 1);
return statearr_13349;
});
var state_machine__5507__auto____1 = (function (state_13332){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13332);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13350){if((e13350 instanceof Object))
{var ex__5510__auto__ = e13350;var statearr_13351_13364 = state_13332;(statearr_13351_13364[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13332);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13350;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13365 = state_13332;
state_13332 = G__13365;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13332){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13352 = f__5522__auto__.call(null);(statearr_13352[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13353);
return statearr_13352;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___13452 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13430){var state_val_13431 = (state_13430[1]);if((state_val_13431 === 1))
{var state_13430__$1 = state_13430;var statearr_13432_13453 = state_13430__$1;(statearr_13432_13453[2] = null);
(statearr_13432_13453[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13431 === 2))
{var state_13430__$1 = state_13430;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13430__$1,4,ch);
} else
{if((state_val_13431 === 3))
{var inst_13428 = (state_13430[2]);var state_13430__$1 = state_13430;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13430__$1,inst_13428);
} else
{if((state_val_13431 === 4))
{var inst_13411 = (state_13430[7]);var inst_13411__$1 = (state_13430[2]);var inst_13412 = (inst_13411__$1 == null);var state_13430__$1 = (function (){var statearr_13433 = state_13430;(statearr_13433[7] = inst_13411__$1);
return statearr_13433;
})();if(cljs.core.truth_(inst_13412))
{var statearr_13434_13454 = state_13430__$1;(statearr_13434_13454[1] = 5);
} else
{var statearr_13435_13455 = state_13430__$1;(statearr_13435_13455[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13431 === 5))
{var inst_13414 = cljs.core.async.close_BANG_.call(null,tc);var inst_13415 = cljs.core.async.close_BANG_.call(null,fc);var state_13430__$1 = (function (){var statearr_13436 = state_13430;(statearr_13436[8] = inst_13414);
return statearr_13436;
})();var statearr_13437_13456 = state_13430__$1;(statearr_13437_13456[2] = inst_13415);
(statearr_13437_13456[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13431 === 6))
{var inst_13411 = (state_13430[7]);var inst_13417 = p.call(null,inst_13411);var state_13430__$1 = state_13430;if(cljs.core.truth_(inst_13417))
{var statearr_13438_13457 = state_13430__$1;(statearr_13438_13457[1] = 9);
} else
{var statearr_13439_13458 = state_13430__$1;(statearr_13439_13458[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13431 === 7))
{var inst_13426 = (state_13430[2]);var state_13430__$1 = state_13430;var statearr_13440_13459 = state_13430__$1;(statearr_13440_13459[2] = inst_13426);
(statearr_13440_13459[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13431 === 8))
{var inst_13423 = (state_13430[2]);var state_13430__$1 = (function (){var statearr_13441 = state_13430;(statearr_13441[9] = inst_13423);
return statearr_13441;
})();var statearr_13442_13460 = state_13430__$1;(statearr_13442_13460[2] = null);
(statearr_13442_13460[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13431 === 9))
{var state_13430__$1 = state_13430;var statearr_13443_13461 = state_13430__$1;(statearr_13443_13461[2] = tc);
(statearr_13443_13461[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13431 === 10))
{var state_13430__$1 = state_13430;var statearr_13444_13462 = state_13430__$1;(statearr_13444_13462[2] = fc);
(statearr_13444_13462[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13431 === 11))
{var inst_13411 = (state_13430[7]);var inst_13421 = (state_13430[2]);var state_13430__$1 = state_13430;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13430__$1,8,inst_13421,inst_13411);
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
var state_machine__5507__auto____0 = (function (){var statearr_13448 = [null,null,null,null,null,null,null,null,null,null];(statearr_13448[0] = state_machine__5507__auto__);
(statearr_13448[1] = 1);
return statearr_13448;
});
var state_machine__5507__auto____1 = (function (state_13430){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13430);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13449){if((e13449 instanceof Object))
{var ex__5510__auto__ = e13449;var statearr_13450_13463 = state_13430;(statearr_13450_13463[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13430);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13449;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13464 = state_13430;
state_13430 = G__13464;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13430){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13451 = f__5522__auto__.call(null);(statearr_13451[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13452);
return statearr_13451;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13511){var state_val_13512 = (state_13511[1]);if((state_val_13512 === 7))
{var inst_13507 = (state_13511[2]);var state_13511__$1 = state_13511;var statearr_13513_13529 = state_13511__$1;(statearr_13513_13529[2] = inst_13507);
(statearr_13513_13529[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13512 === 6))
{var inst_13497 = (state_13511[7]);var inst_13500 = (state_13511[8]);var inst_13504 = f.call(null,inst_13497,inst_13500);var inst_13497__$1 = inst_13504;var state_13511__$1 = (function (){var statearr_13514 = state_13511;(statearr_13514[7] = inst_13497__$1);
return statearr_13514;
})();var statearr_13515_13530 = state_13511__$1;(statearr_13515_13530[2] = null);
(statearr_13515_13530[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13512 === 5))
{var inst_13497 = (state_13511[7]);var state_13511__$1 = state_13511;var statearr_13516_13531 = state_13511__$1;(statearr_13516_13531[2] = inst_13497);
(statearr_13516_13531[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13512 === 4))
{var inst_13500 = (state_13511[8]);var inst_13500__$1 = (state_13511[2]);var inst_13501 = (inst_13500__$1 == null);var state_13511__$1 = (function (){var statearr_13517 = state_13511;(statearr_13517[8] = inst_13500__$1);
return statearr_13517;
})();if(cljs.core.truth_(inst_13501))
{var statearr_13518_13532 = state_13511__$1;(statearr_13518_13532[1] = 5);
} else
{var statearr_13519_13533 = state_13511__$1;(statearr_13519_13533[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13512 === 3))
{var inst_13509 = (state_13511[2]);var state_13511__$1 = state_13511;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13511__$1,inst_13509);
} else
{if((state_val_13512 === 2))
{var state_13511__$1 = state_13511;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13511__$1,4,ch);
} else
{if((state_val_13512 === 1))
{var inst_13497 = init;var state_13511__$1 = (function (){var statearr_13520 = state_13511;(statearr_13520[7] = inst_13497);
return statearr_13520;
})();var statearr_13521_13534 = state_13511__$1;(statearr_13521_13534[2] = null);
(statearr_13521_13534[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_13525 = [null,null,null,null,null,null,null,null,null];(statearr_13525[0] = state_machine__5507__auto__);
(statearr_13525[1] = 1);
return statearr_13525;
});
var state_machine__5507__auto____1 = (function (state_13511){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13511);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13526){if((e13526 instanceof Object))
{var ex__5510__auto__ = e13526;var statearr_13527_13535 = state_13511;(statearr_13527_13535[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13511);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13526;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13536 = state_13511;
state_13511 = G__13536;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13511){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13528 = f__5522__auto__.call(null);(statearr_13528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13528;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13598){var state_val_13599 = (state_13598[1]);if((state_val_13599 === 1))
{var inst_13578 = cljs.core.seq.call(null,coll);var inst_13579 = inst_13578;var state_13598__$1 = (function (){var statearr_13600 = state_13598;(statearr_13600[7] = inst_13579);
return statearr_13600;
})();var statearr_13601_13619 = state_13598__$1;(statearr_13601_13619[2] = null);
(statearr_13601_13619[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13599 === 2))
{var inst_13579 = (state_13598[7]);var state_13598__$1 = state_13598;if(cljs.core.truth_(inst_13579))
{var statearr_13602_13620 = state_13598__$1;(statearr_13602_13620[1] = 4);
} else
{var statearr_13603_13621 = state_13598__$1;(statearr_13603_13621[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13599 === 3))
{var inst_13596 = (state_13598[2]);var state_13598__$1 = state_13598;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13598__$1,inst_13596);
} else
{if((state_val_13599 === 4))
{var inst_13579 = (state_13598[7]);var inst_13582 = cljs.core.first.call(null,inst_13579);var state_13598__$1 = state_13598;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13598__$1,7,ch,inst_13582);
} else
{if((state_val_13599 === 5))
{var state_13598__$1 = state_13598;if(cljs.core.truth_(close_QMARK_))
{var statearr_13604_13622 = state_13598__$1;(statearr_13604_13622[1] = 8);
} else
{var statearr_13605_13623 = state_13598__$1;(statearr_13605_13623[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13599 === 6))
{var inst_13594 = (state_13598[2]);var state_13598__$1 = state_13598;var statearr_13606_13624 = state_13598__$1;(statearr_13606_13624[2] = inst_13594);
(statearr_13606_13624[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13599 === 7))
{var inst_13579 = (state_13598[7]);var inst_13584 = (state_13598[2]);var inst_13585 = cljs.core.next.call(null,inst_13579);var inst_13579__$1 = inst_13585;var state_13598__$1 = (function (){var statearr_13607 = state_13598;(statearr_13607[7] = inst_13579__$1);
(statearr_13607[8] = inst_13584);
return statearr_13607;
})();var statearr_13608_13625 = state_13598__$1;(statearr_13608_13625[2] = null);
(statearr_13608_13625[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13599 === 8))
{var inst_13589 = cljs.core.async.close_BANG_.call(null,ch);var state_13598__$1 = state_13598;var statearr_13609_13626 = state_13598__$1;(statearr_13609_13626[2] = inst_13589);
(statearr_13609_13626[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13599 === 9))
{var state_13598__$1 = state_13598;var statearr_13610_13627 = state_13598__$1;(statearr_13610_13627[2] = null);
(statearr_13610_13627[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13599 === 10))
{var inst_13592 = (state_13598[2]);var state_13598__$1 = state_13598;var statearr_13611_13628 = state_13598__$1;(statearr_13611_13628[2] = inst_13592);
(statearr_13611_13628[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_13615 = [null,null,null,null,null,null,null,null,null];(statearr_13615[0] = state_machine__5507__auto__);
(statearr_13615[1] = 1);
return statearr_13615;
});
var state_machine__5507__auto____1 = (function (state_13598){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13598);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13616){if((e13616 instanceof Object))
{var ex__5510__auto__ = e13616;var statearr_13617_13629 = state_13598;(statearr_13617_13629[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13598);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13616;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13630 = state_13598;
state_13598 = G__13630;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13598){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13618 = f__5522__auto__.call(null);(statearr_13618[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13618;
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
cljs.core.async.Mux = (function (){var obj13632 = {};return obj13632;
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
cljs.core.async.Mult = (function (){var obj13634 = {};return obj13634;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t13858 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13858 = (function (cs,ch,mult,meta13859){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta13859 = meta13859;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13858.cljs$lang$type = true;
cljs.core.async.t13858.cljs$lang$ctorStr = "cljs.core.async/t13858";
cljs.core.async.t13858.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13858");
});})(cs))
;
cljs.core.async.t13858.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t13858.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t13858.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t13858.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t13858.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13858.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t13858.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13860){var self__ = this;
var _13860__$1 = this;return self__.meta13859;
});})(cs))
;
cljs.core.async.t13858.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13860,meta13859__$1){var self__ = this;
var _13860__$1 = this;return (new cljs.core.async.t13858(self__.cs,self__.ch,self__.mult,meta13859__$1));
});})(cs))
;
cljs.core.async.__GT_t13858 = ((function (cs){
return (function __GT_t13858(cs__$1,ch__$1,mult__$1,meta13859){return (new cljs.core.async.t13858(cs__$1,ch__$1,mult__$1,meta13859));
});})(cs))
;
}
return (new cljs.core.async.t13858(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___14081 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13995){var state_val_13996 = (state_13995[1]);if((state_val_13996 === 32))
{var inst_13939 = (state_13995[7]);var inst_13863 = (state_13995[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13995,31,Object,null,30);var inst_13946 = cljs.core.async.put_BANG_.call(null,inst_13939,inst_13863,done);var state_13995__$1 = state_13995;var statearr_13997_14082 = state_13995__$1;(statearr_13997_14082[2] = inst_13946);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13995__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13996 === 1))
{var state_13995__$1 = state_13995;var statearr_13998_14083 = state_13995__$1;(statearr_13998_14083[2] = null);
(statearr_13998_14083[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13996 === 33))
{var inst_13952 = (state_13995[9]);var inst_13954 = cljs.core.chunked_seq_QMARK_.call(null,inst_13952);var state_13995__$1 = state_13995;if(inst_13954)
{var statearr_13999_14084 = state_13995__$1;(statearr_13999_14084[1] = 36);
} else
{var statearr_14000_14085 = state_13995__$1;(statearr_14000_14085[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13996 === 2))
{var state_13995__$1 = state_13995;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13995__$1,4,ch);
} else
{if((state_val_13996 === 34))
{var state_13995__$1 = state_13995;var statearr_14001_14086 = state_13995__$1;(statearr_14001_14086[2] = null);
(statearr_14001_14086[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13996 === 3))
{var inst_13993 = (state_13995[2]);var state_13995__$1 = state_13995;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13995__$1,inst_13993);
} else
{if((state_val_13996 === 35))
{var inst_13977 = (state_13995[2]);var state_13995__$1 = state_13995;var statearr_14002_14087 = state_13995__$1;(statearr_14002_14087[2] = inst_13977);
(statearr_14002_14087[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13996 === 4))
{var inst_13863 = (state_13995[8]);var inst_13863__$1 = (state_13995[2]);var inst_13864 = (inst_13863__$1 == null);var state_13995__$1 = (function (){var statearr_14003 = state_13995;(statearr_14003[8] = inst_13863__$1);
return statearr_14003;
})();if(cljs.core.truth_(inst_13864))
{var statearr_14004_14088 = state_13995__$1;(statearr_14004_14088[1] = 5);
} else
{var statearr_14005_14089 = state_13995__$1;(statearr_14005_14089[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13996 === 36))
{var inst_13952 = (state_13995[9]);var inst_13956 = cljs.core.chunk_first.call(null,inst_13952);var inst_13957 = cljs.core.chunk_rest.call(null,inst_13952);var inst_13958 = cljs.core.count.call(null,inst_13956);var inst_13931 = inst_13957;var inst_13932 = inst_13956;var inst_13933 = inst_13958;var inst_13934 = 0;var state_13995__$1 = (function (){var statearr_14006 = state_13995;(statearr_14006[10] = inst_13931);
(statearr_14006[11] = inst_13932);
(statearr_14006[12] = inst_13933);
(statearr_14006[13] = inst_13934);
return statearr_14006;
})();var statearr_14007_14090 = state_13995__$1;(statearr_14007_14090[2] = null);
(statearr_14007_14090[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13996 === 5))
{var inst_13870 = cljs.core.deref.call(null,cs);var inst_13871 = cljs.core.seq.call(null,inst_13870);var inst_13872 = inst_13871;var inst_13873 = null;var inst_13874 = 0;var inst_13875 = 0;var state_13995__$1 = (function (){var statearr_14008 = state_13995;(statearr_14008[14] = inst_13875);
(statearr_14008[15] = inst_13874);
(statearr_14008[16] = inst_13873);
(statearr_14008[17] = inst_13872);
return statearr_14008;
})();var statearr_14009_14091 = state_13995__$1;(statearr_14009_14091[2] = null);
(statearr_14009_14091[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13996 === 37))
{var inst_13952 = (state_13995[9]);var inst_13961 = cljs.core.first.call(null,inst_13952);var state_13995__$1 = (function (){var statearr_14010 = state_13995;(statearr_14010[18] = inst_13961);
return statearr_14010;
})();var statearr_14011_14092 = state_13995__$1;(statearr_14011_14092[2] = null);
(statearr_14011_14092[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13996 === 6))
{var inst_13923 = (state_13995[19]);var inst_13922 = cljs.core.deref.call(null,cs);var inst_13923__$1 = cljs.core.keys.call(null,inst_13922);var inst_13924 = cljs.core.count.call(null,inst_13923__$1);var inst_13925 = cljs.core.reset_BANG_.call(null,dctr,inst_13924);var inst_13930 = cljs.core.seq.call(null,inst_13923__$1);var inst_13931 = inst_13930;var inst_13932 = null;var inst_13933 = 0;var inst_13934 = 0;var state_13995__$1 = (function (){var statearr_14012 = state_13995;(statearr_14012[20] = inst_13925);
(statearr_14012[10] = inst_13931);
(statearr_14012[11] = inst_13932);
(statearr_14012[12] = inst_13933);
(statearr_14012[13] = inst_13934);
(statearr_14012[19] = inst_13923__$1);
return statearr_14012;
})();var statearr_14013_14093 = state_13995__$1;(statearr_14013_14093[2] = null);
(statearr_14013_14093[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13996 === 38))
{var inst_13974 = (state_13995[2]);var state_13995__$1 = state_13995;var statearr_14014_14094 = state_13995__$1;(statearr_14014_14094[2] = inst_13974);
(statearr_14014_14094[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13996 === 7))
{var inst_13991 = (state_13995[2]);var state_13995__$1 = state_13995;var statearr_14015_14095 = state_13995__$1;(statearr_14015_14095[2] = inst_13991);
(statearr_14015_14095[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13996 === 39))
{var inst_13952 = (state_13995[9]);var inst_13970 = (state_13995[2]);var inst_13971 = cljs.core.next.call(null,inst_13952);var inst_13931 = inst_13971;var inst_13932 = null;var inst_13933 = 0;var inst_13934 = 0;var state_13995__$1 = (function (){var statearr_14016 = state_13995;(statearr_14016[21] = inst_13970);
(statearr_14016[10] = inst_13931);
(statearr_14016[11] = inst_13932);
(statearr_14016[12] = inst_13933);
(statearr_14016[13] = inst_13934);
return statearr_14016;
})();var statearr_14017_14096 = state_13995__$1;(statearr_14017_14096[2] = null);
(statearr_14017_14096[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13996 === 8))
{var inst_13875 = (state_13995[14]);var inst_13874 = (state_13995[15]);var inst_13877 = (inst_13875 < inst_13874);var inst_13878 = inst_13877;var state_13995__$1 = state_13995;if(cljs.core.truth_(inst_13878))
{var statearr_14018_14097 = state_13995__$1;(statearr_14018_14097[1] = 10);
} else
{var statearr_14019_14098 = state_13995__$1;(statearr_14019_14098[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13996 === 40))
{var inst_13961 = (state_13995[18]);var inst_13962 = (state_13995[2]);var inst_13963 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_13964 = cljs.core.async.untap_STAR_.call(null,m,inst_13961);var state_13995__$1 = (function (){var statearr_14020 = state_13995;(statearr_14020[22] = inst_13963);
(statearr_14020[23] = inst_13962);
return statearr_14020;
})();var statearr_14021_14099 = state_13995__$1;(statearr_14021_14099[2] = inst_13964);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13995__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13996 === 9))
{var inst_13920 = (state_13995[2]);var state_13995__$1 = state_13995;var statearr_14022_14100 = state_13995__$1;(statearr_14022_14100[2] = inst_13920);
(statearr_14022_14100[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13996 === 41))
{var inst_13961 = (state_13995[18]);var inst_13863 = (state_13995[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13995,40,Object,null,39);var inst_13968 = cljs.core.async.put_BANG_.call(null,inst_13961,inst_13863,done);var state_13995__$1 = state_13995;var statearr_14023_14101 = state_13995__$1;(statearr_14023_14101[2] = inst_13968);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13995__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13996 === 10))
{var inst_13875 = (state_13995[14]);var inst_13873 = (state_13995[16]);var inst_13881 = cljs.core._nth.call(null,inst_13873,inst_13875);var inst_13882 = cljs.core.nth.call(null,inst_13881,0,null);var inst_13883 = cljs.core.nth.call(null,inst_13881,1,null);var state_13995__$1 = (function (){var statearr_14024 = state_13995;(statearr_14024[24] = inst_13882);
return statearr_14024;
})();if(cljs.core.truth_(inst_13883))
{var statearr_14025_14102 = state_13995__$1;(statearr_14025_14102[1] = 13);
} else
{var statearr_14026_14103 = state_13995__$1;(statearr_14026_14103[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13996 === 42))
{var state_13995__$1 = state_13995;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13995__$1,45,dchan);
} else
{if((state_val_13996 === 11))
{var inst_13872 = (state_13995[17]);var inst_13892 = (state_13995[25]);var inst_13892__$1 = cljs.core.seq.call(null,inst_13872);var state_13995__$1 = (function (){var statearr_14027 = state_13995;(statearr_14027[25] = inst_13892__$1);
return statearr_14027;
})();if(inst_13892__$1)
{var statearr_14028_14104 = state_13995__$1;(statearr_14028_14104[1] = 16);
} else
{var statearr_14029_14105 = state_13995__$1;(statearr_14029_14105[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13996 === 43))
{var state_13995__$1 = state_13995;var statearr_14030_14106 = state_13995__$1;(statearr_14030_14106[2] = null);
(statearr_14030_14106[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13996 === 12))
{var inst_13918 = (state_13995[2]);var state_13995__$1 = state_13995;var statearr_14031_14107 = state_13995__$1;(statearr_14031_14107[2] = inst_13918);
(statearr_14031_14107[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13996 === 44))
{var inst_13988 = (state_13995[2]);var state_13995__$1 = (function (){var statearr_14032 = state_13995;(statearr_14032[26] = inst_13988);
return statearr_14032;
})();var statearr_14033_14108 = state_13995__$1;(statearr_14033_14108[2] = null);
(statearr_14033_14108[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13996 === 13))
{var inst_13882 = (state_13995[24]);var inst_13885 = cljs.core.async.close_BANG_.call(null,inst_13882);var state_13995__$1 = state_13995;var statearr_14034_14109 = state_13995__$1;(statearr_14034_14109[2] = inst_13885);
(statearr_14034_14109[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13996 === 45))
{var inst_13985 = (state_13995[2]);var state_13995__$1 = state_13995;var statearr_14038_14110 = state_13995__$1;(statearr_14038_14110[2] = inst_13985);
(statearr_14038_14110[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13996 === 14))
{var state_13995__$1 = state_13995;var statearr_14039_14111 = state_13995__$1;(statearr_14039_14111[2] = null);
(statearr_14039_14111[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13996 === 15))
{var inst_13875 = (state_13995[14]);var inst_13874 = (state_13995[15]);var inst_13873 = (state_13995[16]);var inst_13872 = (state_13995[17]);var inst_13888 = (state_13995[2]);var inst_13889 = (inst_13875 + 1);var tmp14035 = inst_13874;var tmp14036 = inst_13873;var tmp14037 = inst_13872;var inst_13872__$1 = tmp14037;var inst_13873__$1 = tmp14036;var inst_13874__$1 = tmp14035;var inst_13875__$1 = inst_13889;var state_13995__$1 = (function (){var statearr_14040 = state_13995;(statearr_14040[14] = inst_13875__$1);
(statearr_14040[15] = inst_13874__$1);
(statearr_14040[16] = inst_13873__$1);
(statearr_14040[17] = inst_13872__$1);
(statearr_14040[27] = inst_13888);
return statearr_14040;
})();var statearr_14041_14112 = state_13995__$1;(statearr_14041_14112[2] = null);
(statearr_14041_14112[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13996 === 16))
{var inst_13892 = (state_13995[25]);var inst_13894 = cljs.core.chunked_seq_QMARK_.call(null,inst_13892);var state_13995__$1 = state_13995;if(inst_13894)
{var statearr_14042_14113 = state_13995__$1;(statearr_14042_14113[1] = 19);
} else
{var statearr_14043_14114 = state_13995__$1;(statearr_14043_14114[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13996 === 17))
{var state_13995__$1 = state_13995;var statearr_14044_14115 = state_13995__$1;(statearr_14044_14115[2] = null);
(statearr_14044_14115[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13996 === 18))
{var inst_13916 = (state_13995[2]);var state_13995__$1 = state_13995;var statearr_14045_14116 = state_13995__$1;(statearr_14045_14116[2] = inst_13916);
(statearr_14045_14116[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13996 === 19))
{var inst_13892 = (state_13995[25]);var inst_13896 = cljs.core.chunk_first.call(null,inst_13892);var inst_13897 = cljs.core.chunk_rest.call(null,inst_13892);var inst_13898 = cljs.core.count.call(null,inst_13896);var inst_13872 = inst_13897;var inst_13873 = inst_13896;var inst_13874 = inst_13898;var inst_13875 = 0;var state_13995__$1 = (function (){var statearr_14046 = state_13995;(statearr_14046[14] = inst_13875);
(statearr_14046[15] = inst_13874);
(statearr_14046[16] = inst_13873);
(statearr_14046[17] = inst_13872);
return statearr_14046;
})();var statearr_14047_14117 = state_13995__$1;(statearr_14047_14117[2] = null);
(statearr_14047_14117[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13996 === 20))
{var inst_13892 = (state_13995[25]);var inst_13902 = cljs.core.first.call(null,inst_13892);var inst_13903 = cljs.core.nth.call(null,inst_13902,0,null);var inst_13904 = cljs.core.nth.call(null,inst_13902,1,null);var state_13995__$1 = (function (){var statearr_14048 = state_13995;(statearr_14048[28] = inst_13903);
return statearr_14048;
})();if(cljs.core.truth_(inst_13904))
{var statearr_14049_14118 = state_13995__$1;(statearr_14049_14118[1] = 22);
} else
{var statearr_14050_14119 = state_13995__$1;(statearr_14050_14119[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13996 === 21))
{var inst_13913 = (state_13995[2]);var state_13995__$1 = state_13995;var statearr_14051_14120 = state_13995__$1;(statearr_14051_14120[2] = inst_13913);
(statearr_14051_14120[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13996 === 22))
{var inst_13903 = (state_13995[28]);var inst_13906 = cljs.core.async.close_BANG_.call(null,inst_13903);var state_13995__$1 = state_13995;var statearr_14052_14121 = state_13995__$1;(statearr_14052_14121[2] = inst_13906);
(statearr_14052_14121[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13996 === 23))
{var state_13995__$1 = state_13995;var statearr_14053_14122 = state_13995__$1;(statearr_14053_14122[2] = null);
(statearr_14053_14122[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13996 === 24))
{var inst_13892 = (state_13995[25]);var inst_13909 = (state_13995[2]);var inst_13910 = cljs.core.next.call(null,inst_13892);var inst_13872 = inst_13910;var inst_13873 = null;var inst_13874 = 0;var inst_13875 = 0;var state_13995__$1 = (function (){var statearr_14054 = state_13995;(statearr_14054[14] = inst_13875);
(statearr_14054[15] = inst_13874);
(statearr_14054[16] = inst_13873);
(statearr_14054[17] = inst_13872);
(statearr_14054[29] = inst_13909);
return statearr_14054;
})();var statearr_14055_14123 = state_13995__$1;(statearr_14055_14123[2] = null);
(statearr_14055_14123[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13996 === 25))
{var inst_13933 = (state_13995[12]);var inst_13934 = (state_13995[13]);var inst_13936 = (inst_13934 < inst_13933);var inst_13937 = inst_13936;var state_13995__$1 = state_13995;if(cljs.core.truth_(inst_13937))
{var statearr_14056_14124 = state_13995__$1;(statearr_14056_14124[1] = 27);
} else
{var statearr_14057_14125 = state_13995__$1;(statearr_14057_14125[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13996 === 26))
{var inst_13923 = (state_13995[19]);var inst_13981 = (state_13995[2]);var inst_13982 = cljs.core.seq.call(null,inst_13923);var state_13995__$1 = (function (){var statearr_14058 = state_13995;(statearr_14058[30] = inst_13981);
return statearr_14058;
})();if(inst_13982)
{var statearr_14059_14126 = state_13995__$1;(statearr_14059_14126[1] = 42);
} else
{var statearr_14060_14127 = state_13995__$1;(statearr_14060_14127[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13996 === 27))
{var inst_13932 = (state_13995[11]);var inst_13934 = (state_13995[13]);var inst_13939 = cljs.core._nth.call(null,inst_13932,inst_13934);var state_13995__$1 = (function (){var statearr_14061 = state_13995;(statearr_14061[7] = inst_13939);
return statearr_14061;
})();var statearr_14062_14128 = state_13995__$1;(statearr_14062_14128[2] = null);
(statearr_14062_14128[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13996 === 28))
{var inst_13952 = (state_13995[9]);var inst_13931 = (state_13995[10]);var inst_13952__$1 = cljs.core.seq.call(null,inst_13931);var state_13995__$1 = (function (){var statearr_14066 = state_13995;(statearr_14066[9] = inst_13952__$1);
return statearr_14066;
})();if(inst_13952__$1)
{var statearr_14067_14129 = state_13995__$1;(statearr_14067_14129[1] = 33);
} else
{var statearr_14068_14130 = state_13995__$1;(statearr_14068_14130[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13996 === 29))
{var inst_13979 = (state_13995[2]);var state_13995__$1 = state_13995;var statearr_14069_14131 = state_13995__$1;(statearr_14069_14131[2] = inst_13979);
(statearr_14069_14131[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13996 === 30))
{var inst_13931 = (state_13995[10]);var inst_13932 = (state_13995[11]);var inst_13933 = (state_13995[12]);var inst_13934 = (state_13995[13]);var inst_13948 = (state_13995[2]);var inst_13949 = (inst_13934 + 1);var tmp14063 = inst_13931;var tmp14064 = inst_13932;var tmp14065 = inst_13933;var inst_13931__$1 = tmp14063;var inst_13932__$1 = tmp14064;var inst_13933__$1 = tmp14065;var inst_13934__$1 = inst_13949;var state_13995__$1 = (function (){var statearr_14070 = state_13995;(statearr_14070[31] = inst_13948);
(statearr_14070[10] = inst_13931__$1);
(statearr_14070[11] = inst_13932__$1);
(statearr_14070[12] = inst_13933__$1);
(statearr_14070[13] = inst_13934__$1);
return statearr_14070;
})();var statearr_14071_14132 = state_13995__$1;(statearr_14071_14132[2] = null);
(statearr_14071_14132[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13996 === 31))
{var inst_13939 = (state_13995[7]);var inst_13940 = (state_13995[2]);var inst_13941 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_13942 = cljs.core.async.untap_STAR_.call(null,m,inst_13939);var state_13995__$1 = (function (){var statearr_14072 = state_13995;(statearr_14072[32] = inst_13941);
(statearr_14072[33] = inst_13940);
return statearr_14072;
})();var statearr_14073_14133 = state_13995__$1;(statearr_14073_14133[2] = inst_13942);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13995__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_14077 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14077[0] = state_machine__5507__auto__);
(statearr_14077[1] = 1);
return statearr_14077;
});
var state_machine__5507__auto____1 = (function (state_13995){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13995);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14078){if((e14078 instanceof Object))
{var ex__5510__auto__ = e14078;var statearr_14079_14134 = state_13995;(statearr_14079_14134[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13995);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14078;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14135 = state_13995;
state_13995 = G__14135;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13995){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14080 = f__5522__auto__.call(null);(statearr_14080[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14081);
return statearr_14080;
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
cljs.core.async.Mix = (function (){var obj14137 = {};return obj14137;
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
;var m = (function (){if(typeof cljs.core.async.t14247 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14247 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta14248){
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
this.meta14248 = meta14248;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14247.cljs$lang$type = true;
cljs.core.async.t14247.cljs$lang$ctorStr = "cljs.core.async/t14247";
cljs.core.async.t14247.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14247");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14247.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t14247.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14247.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14247.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14247.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14247.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14247.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14247.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14247.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14249){var self__ = this;
var _14249__$1 = this;return self__.meta14248;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14247.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14249,meta14248__$1){var self__ = this;
var _14249__$1 = this;return (new cljs.core.async.t14247(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta14248__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t14247 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t14247(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14248){return (new cljs.core.async.t14247(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14248));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t14247(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___14356 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14314){var state_val_14315 = (state_14314[1]);if((state_val_14315 === 1))
{var inst_14253 = (state_14314[7]);var inst_14253__$1 = calc_state.call(null);var inst_14254 = cljs.core.seq_QMARK_.call(null,inst_14253__$1);var state_14314__$1 = (function (){var statearr_14316 = state_14314;(statearr_14316[7] = inst_14253__$1);
return statearr_14316;
})();if(inst_14254)
{var statearr_14317_14357 = state_14314__$1;(statearr_14317_14357[1] = 2);
} else
{var statearr_14318_14358 = state_14314__$1;(statearr_14318_14358[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14315 === 2))
{var inst_14253 = (state_14314[7]);var inst_14256 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14253);var state_14314__$1 = state_14314;var statearr_14319_14359 = state_14314__$1;(statearr_14319_14359[2] = inst_14256);
(statearr_14319_14359[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14315 === 3))
{var inst_14253 = (state_14314[7]);var state_14314__$1 = state_14314;var statearr_14320_14360 = state_14314__$1;(statearr_14320_14360[2] = inst_14253);
(statearr_14320_14360[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14315 === 4))
{var inst_14253 = (state_14314[7]);var inst_14259 = (state_14314[2]);var inst_14260 = cljs.core.get.call(null,inst_14259,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14261 = cljs.core.get.call(null,inst_14259,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14262 = cljs.core.get.call(null,inst_14259,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_14263 = inst_14253;var state_14314__$1 = (function (){var statearr_14321 = state_14314;(statearr_14321[8] = inst_14261);
(statearr_14321[9] = inst_14260);
(statearr_14321[10] = inst_14263);
(statearr_14321[11] = inst_14262);
return statearr_14321;
})();var statearr_14322_14361 = state_14314__$1;(statearr_14322_14361[2] = null);
(statearr_14322_14361[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14315 === 5))
{var inst_14263 = (state_14314[10]);var inst_14266 = cljs.core.seq_QMARK_.call(null,inst_14263);var state_14314__$1 = state_14314;if(inst_14266)
{var statearr_14323_14362 = state_14314__$1;(statearr_14323_14362[1] = 7);
} else
{var statearr_14324_14363 = state_14314__$1;(statearr_14324_14363[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14315 === 6))
{var inst_14312 = (state_14314[2]);var state_14314__$1 = state_14314;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14314__$1,inst_14312);
} else
{if((state_val_14315 === 7))
{var inst_14263 = (state_14314[10]);var inst_14268 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14263);var state_14314__$1 = state_14314;var statearr_14325_14364 = state_14314__$1;(statearr_14325_14364[2] = inst_14268);
(statearr_14325_14364[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14315 === 8))
{var inst_14263 = (state_14314[10]);var state_14314__$1 = state_14314;var statearr_14326_14365 = state_14314__$1;(statearr_14326_14365[2] = inst_14263);
(statearr_14326_14365[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14315 === 9))
{var inst_14271 = (state_14314[12]);var inst_14271__$1 = (state_14314[2]);var inst_14272 = cljs.core.get.call(null,inst_14271__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14273 = cljs.core.get.call(null,inst_14271__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14274 = cljs.core.get.call(null,inst_14271__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_14314__$1 = (function (){var statearr_14327 = state_14314;(statearr_14327[12] = inst_14271__$1);
(statearr_14327[13] = inst_14274);
(statearr_14327[14] = inst_14273);
return statearr_14327;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14314__$1,10,inst_14272);
} else
{if((state_val_14315 === 10))
{var inst_14279 = (state_14314[15]);var inst_14278 = (state_14314[16]);var inst_14277 = (state_14314[2]);var inst_14278__$1 = cljs.core.nth.call(null,inst_14277,0,null);var inst_14279__$1 = cljs.core.nth.call(null,inst_14277,1,null);var inst_14280 = (inst_14278__$1 == null);var inst_14281 = cljs.core._EQ_.call(null,inst_14279__$1,change);var inst_14282 = (inst_14280) || (inst_14281);var state_14314__$1 = (function (){var statearr_14328 = state_14314;(statearr_14328[15] = inst_14279__$1);
(statearr_14328[16] = inst_14278__$1);
return statearr_14328;
})();if(cljs.core.truth_(inst_14282))
{var statearr_14329_14366 = state_14314__$1;(statearr_14329_14366[1] = 11);
} else
{var statearr_14330_14367 = state_14314__$1;(statearr_14330_14367[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14315 === 11))
{var inst_14278 = (state_14314[16]);var inst_14284 = (inst_14278 == null);var state_14314__$1 = state_14314;if(cljs.core.truth_(inst_14284))
{var statearr_14331_14368 = state_14314__$1;(statearr_14331_14368[1] = 14);
} else
{var statearr_14332_14369 = state_14314__$1;(statearr_14332_14369[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14315 === 12))
{var inst_14293 = (state_14314[17]);var inst_14279 = (state_14314[15]);var inst_14274 = (state_14314[13]);var inst_14293__$1 = inst_14274.call(null,inst_14279);var state_14314__$1 = (function (){var statearr_14333 = state_14314;(statearr_14333[17] = inst_14293__$1);
return statearr_14333;
})();if(cljs.core.truth_(inst_14293__$1))
{var statearr_14334_14370 = state_14314__$1;(statearr_14334_14370[1] = 17);
} else
{var statearr_14335_14371 = state_14314__$1;(statearr_14335_14371[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14315 === 13))
{var inst_14310 = (state_14314[2]);var state_14314__$1 = state_14314;var statearr_14336_14372 = state_14314__$1;(statearr_14336_14372[2] = inst_14310);
(statearr_14336_14372[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14315 === 14))
{var inst_14279 = (state_14314[15]);var inst_14286 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14279);var state_14314__$1 = state_14314;var statearr_14337_14373 = state_14314__$1;(statearr_14337_14373[2] = inst_14286);
(statearr_14337_14373[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14315 === 15))
{var state_14314__$1 = state_14314;var statearr_14338_14374 = state_14314__$1;(statearr_14338_14374[2] = null);
(statearr_14338_14374[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14315 === 16))
{var inst_14289 = (state_14314[2]);var inst_14290 = calc_state.call(null);var inst_14263 = inst_14290;var state_14314__$1 = (function (){var statearr_14339 = state_14314;(statearr_14339[18] = inst_14289);
(statearr_14339[10] = inst_14263);
return statearr_14339;
})();var statearr_14340_14375 = state_14314__$1;(statearr_14340_14375[2] = null);
(statearr_14340_14375[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14315 === 17))
{var inst_14293 = (state_14314[17]);var state_14314__$1 = state_14314;var statearr_14341_14376 = state_14314__$1;(statearr_14341_14376[2] = inst_14293);
(statearr_14341_14376[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14315 === 18))
{var inst_14279 = (state_14314[15]);var inst_14274 = (state_14314[13]);var inst_14273 = (state_14314[14]);var inst_14296 = cljs.core.empty_QMARK_.call(null,inst_14274);var inst_14297 = inst_14273.call(null,inst_14279);var inst_14298 = cljs.core.not.call(null,inst_14297);var inst_14299 = (inst_14296) && (inst_14298);var state_14314__$1 = state_14314;var statearr_14342_14377 = state_14314__$1;(statearr_14342_14377[2] = inst_14299);
(statearr_14342_14377[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14315 === 19))
{var inst_14301 = (state_14314[2]);var state_14314__$1 = state_14314;if(cljs.core.truth_(inst_14301))
{var statearr_14343_14378 = state_14314__$1;(statearr_14343_14378[1] = 20);
} else
{var statearr_14344_14379 = state_14314__$1;(statearr_14344_14379[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14315 === 20))
{var inst_14278 = (state_14314[16]);var state_14314__$1 = state_14314;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14314__$1,23,out,inst_14278);
} else
{if((state_val_14315 === 21))
{var state_14314__$1 = state_14314;var statearr_14345_14380 = state_14314__$1;(statearr_14345_14380[2] = null);
(statearr_14345_14380[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14315 === 22))
{var inst_14271 = (state_14314[12]);var inst_14307 = (state_14314[2]);var inst_14263 = inst_14271;var state_14314__$1 = (function (){var statearr_14346 = state_14314;(statearr_14346[10] = inst_14263);
(statearr_14346[19] = inst_14307);
return statearr_14346;
})();var statearr_14347_14381 = state_14314__$1;(statearr_14347_14381[2] = null);
(statearr_14347_14381[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14315 === 23))
{var inst_14304 = (state_14314[2]);var state_14314__$1 = state_14314;var statearr_14348_14382 = state_14314__$1;(statearr_14348_14382[2] = inst_14304);
(statearr_14348_14382[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_14352 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14352[0] = state_machine__5507__auto__);
(statearr_14352[1] = 1);
return statearr_14352;
});
var state_machine__5507__auto____1 = (function (state_14314){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14314);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14353){if((e14353 instanceof Object))
{var ex__5510__auto__ = e14353;var statearr_14354_14383 = state_14314;(statearr_14354_14383[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14314);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14353;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14384 = state_14314;
state_14314 = G__14384;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14314){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14355 = f__5522__auto__.call(null);(statearr_14355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14356);
return statearr_14355;
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
cljs.core.async.Pub = (function (){var obj14386 = {};return obj14386;
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
return (function (p1__14387_SHARP_){if(cljs.core.truth_(p1__14387_SHARP_.call(null,topic)))
{return p1__14387_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__14387_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t14512 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14512 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta14513){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta14513 = meta14513;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14512.cljs$lang$type = true;
cljs.core.async.t14512.cljs$lang$ctorStr = "cljs.core.async/t14512";
cljs.core.async.t14512.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14512");
});})(mults,ensure_mult))
;
cljs.core.async.t14512.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t14512.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t14512.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t14512.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t14512.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t14512.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14512.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t14512.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14514){var self__ = this;
var _14514__$1 = this;return self__.meta14513;
});})(mults,ensure_mult))
;
cljs.core.async.t14512.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14514,meta14513__$1){var self__ = this;
var _14514__$1 = this;return (new cljs.core.async.t14512(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta14513__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t14512 = ((function (mults,ensure_mult){
return (function __GT_t14512(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14513){return (new cljs.core.async.t14512(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14513));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t14512(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___14636 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14588){var state_val_14589 = (state_14588[1]);if((state_val_14589 === 1))
{var state_14588__$1 = state_14588;var statearr_14590_14637 = state_14588__$1;(statearr_14590_14637[2] = null);
(statearr_14590_14637[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14589 === 2))
{var state_14588__$1 = state_14588;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14588__$1,4,ch);
} else
{if((state_val_14589 === 3))
{var inst_14586 = (state_14588[2]);var state_14588__$1 = state_14588;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14588__$1,inst_14586);
} else
{if((state_val_14589 === 4))
{var inst_14517 = (state_14588[7]);var inst_14517__$1 = (state_14588[2]);var inst_14518 = (inst_14517__$1 == null);var state_14588__$1 = (function (){var statearr_14591 = state_14588;(statearr_14591[7] = inst_14517__$1);
return statearr_14591;
})();if(cljs.core.truth_(inst_14518))
{var statearr_14592_14638 = state_14588__$1;(statearr_14592_14638[1] = 5);
} else
{var statearr_14593_14639 = state_14588__$1;(statearr_14593_14639[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14589 === 5))
{var inst_14524 = cljs.core.deref.call(null,mults);var inst_14525 = cljs.core.vals.call(null,inst_14524);var inst_14526 = cljs.core.seq.call(null,inst_14525);var inst_14527 = inst_14526;var inst_14528 = null;var inst_14529 = 0;var inst_14530 = 0;var state_14588__$1 = (function (){var statearr_14594 = state_14588;(statearr_14594[8] = inst_14527);
(statearr_14594[9] = inst_14528);
(statearr_14594[10] = inst_14530);
(statearr_14594[11] = inst_14529);
return statearr_14594;
})();var statearr_14595_14640 = state_14588__$1;(statearr_14595_14640[2] = null);
(statearr_14595_14640[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14589 === 6))
{var inst_14567 = (state_14588[12]);var inst_14517 = (state_14588[7]);var inst_14565 = (state_14588[13]);var inst_14565__$1 = topic_fn.call(null,inst_14517);var inst_14566 = cljs.core.deref.call(null,mults);var inst_14567__$1 = cljs.core.get.call(null,inst_14566,inst_14565__$1);var state_14588__$1 = (function (){var statearr_14596 = state_14588;(statearr_14596[12] = inst_14567__$1);
(statearr_14596[13] = inst_14565__$1);
return statearr_14596;
})();if(cljs.core.truth_(inst_14567__$1))
{var statearr_14597_14641 = state_14588__$1;(statearr_14597_14641[1] = 19);
} else
{var statearr_14598_14642 = state_14588__$1;(statearr_14598_14642[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14589 === 7))
{var inst_14584 = (state_14588[2]);var state_14588__$1 = state_14588;var statearr_14599_14643 = state_14588__$1;(statearr_14599_14643[2] = inst_14584);
(statearr_14599_14643[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14589 === 8))
{var inst_14530 = (state_14588[10]);var inst_14529 = (state_14588[11]);var inst_14532 = (inst_14530 < inst_14529);var inst_14533 = inst_14532;var state_14588__$1 = state_14588;if(cljs.core.truth_(inst_14533))
{var statearr_14603_14644 = state_14588__$1;(statearr_14603_14644[1] = 10);
} else
{var statearr_14604_14645 = state_14588__$1;(statearr_14604_14645[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14589 === 9))
{var inst_14563 = (state_14588[2]);var state_14588__$1 = state_14588;var statearr_14605_14646 = state_14588__$1;(statearr_14605_14646[2] = inst_14563);
(statearr_14605_14646[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14589 === 10))
{var inst_14527 = (state_14588[8]);var inst_14528 = (state_14588[9]);var inst_14530 = (state_14588[10]);var inst_14529 = (state_14588[11]);var inst_14535 = cljs.core._nth.call(null,inst_14528,inst_14530);var inst_14536 = cljs.core.async.muxch_STAR_.call(null,inst_14535);var inst_14537 = cljs.core.async.close_BANG_.call(null,inst_14536);var inst_14538 = (inst_14530 + 1);var tmp14600 = inst_14527;var tmp14601 = inst_14528;var tmp14602 = inst_14529;var inst_14527__$1 = tmp14600;var inst_14528__$1 = tmp14601;var inst_14529__$1 = tmp14602;var inst_14530__$1 = inst_14538;var state_14588__$1 = (function (){var statearr_14606 = state_14588;(statearr_14606[8] = inst_14527__$1);
(statearr_14606[9] = inst_14528__$1);
(statearr_14606[10] = inst_14530__$1);
(statearr_14606[11] = inst_14529__$1);
(statearr_14606[14] = inst_14537);
return statearr_14606;
})();var statearr_14607_14647 = state_14588__$1;(statearr_14607_14647[2] = null);
(statearr_14607_14647[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14589 === 11))
{var inst_14527 = (state_14588[8]);var inst_14541 = (state_14588[15]);var inst_14541__$1 = cljs.core.seq.call(null,inst_14527);var state_14588__$1 = (function (){var statearr_14608 = state_14588;(statearr_14608[15] = inst_14541__$1);
return statearr_14608;
})();if(inst_14541__$1)
{var statearr_14609_14648 = state_14588__$1;(statearr_14609_14648[1] = 13);
} else
{var statearr_14610_14649 = state_14588__$1;(statearr_14610_14649[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14589 === 12))
{var inst_14561 = (state_14588[2]);var state_14588__$1 = state_14588;var statearr_14611_14650 = state_14588__$1;(statearr_14611_14650[2] = inst_14561);
(statearr_14611_14650[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14589 === 13))
{var inst_14541 = (state_14588[15]);var inst_14543 = cljs.core.chunked_seq_QMARK_.call(null,inst_14541);var state_14588__$1 = state_14588;if(inst_14543)
{var statearr_14612_14651 = state_14588__$1;(statearr_14612_14651[1] = 16);
} else
{var statearr_14613_14652 = state_14588__$1;(statearr_14613_14652[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14589 === 14))
{var state_14588__$1 = state_14588;var statearr_14614_14653 = state_14588__$1;(statearr_14614_14653[2] = null);
(statearr_14614_14653[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14589 === 15))
{var inst_14559 = (state_14588[2]);var state_14588__$1 = state_14588;var statearr_14615_14654 = state_14588__$1;(statearr_14615_14654[2] = inst_14559);
(statearr_14615_14654[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14589 === 16))
{var inst_14541 = (state_14588[15]);var inst_14545 = cljs.core.chunk_first.call(null,inst_14541);var inst_14546 = cljs.core.chunk_rest.call(null,inst_14541);var inst_14547 = cljs.core.count.call(null,inst_14545);var inst_14527 = inst_14546;var inst_14528 = inst_14545;var inst_14529 = inst_14547;var inst_14530 = 0;var state_14588__$1 = (function (){var statearr_14616 = state_14588;(statearr_14616[8] = inst_14527);
(statearr_14616[9] = inst_14528);
(statearr_14616[10] = inst_14530);
(statearr_14616[11] = inst_14529);
return statearr_14616;
})();var statearr_14617_14655 = state_14588__$1;(statearr_14617_14655[2] = null);
(statearr_14617_14655[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14589 === 17))
{var inst_14541 = (state_14588[15]);var inst_14550 = cljs.core.first.call(null,inst_14541);var inst_14551 = cljs.core.async.muxch_STAR_.call(null,inst_14550);var inst_14552 = cljs.core.async.close_BANG_.call(null,inst_14551);var inst_14553 = cljs.core.next.call(null,inst_14541);var inst_14527 = inst_14553;var inst_14528 = null;var inst_14529 = 0;var inst_14530 = 0;var state_14588__$1 = (function (){var statearr_14618 = state_14588;(statearr_14618[8] = inst_14527);
(statearr_14618[9] = inst_14528);
(statearr_14618[10] = inst_14530);
(statearr_14618[16] = inst_14552);
(statearr_14618[11] = inst_14529);
return statearr_14618;
})();var statearr_14619_14656 = state_14588__$1;(statearr_14619_14656[2] = null);
(statearr_14619_14656[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14589 === 18))
{var inst_14556 = (state_14588[2]);var state_14588__$1 = state_14588;var statearr_14620_14657 = state_14588__$1;(statearr_14620_14657[2] = inst_14556);
(statearr_14620_14657[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14589 === 19))
{var state_14588__$1 = state_14588;var statearr_14621_14658 = state_14588__$1;(statearr_14621_14658[2] = null);
(statearr_14621_14658[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14589 === 20))
{var state_14588__$1 = state_14588;var statearr_14622_14659 = state_14588__$1;(statearr_14622_14659[2] = null);
(statearr_14622_14659[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14589 === 21))
{var inst_14581 = (state_14588[2]);var state_14588__$1 = (function (){var statearr_14623 = state_14588;(statearr_14623[17] = inst_14581);
return statearr_14623;
})();var statearr_14624_14660 = state_14588__$1;(statearr_14624_14660[2] = null);
(statearr_14624_14660[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14589 === 22))
{var inst_14578 = (state_14588[2]);var state_14588__$1 = state_14588;var statearr_14625_14661 = state_14588__$1;(statearr_14625_14661[2] = inst_14578);
(statearr_14625_14661[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14589 === 23))
{var inst_14565 = (state_14588[13]);var inst_14569 = (state_14588[2]);var inst_14570 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14565);var state_14588__$1 = (function (){var statearr_14626 = state_14588;(statearr_14626[18] = inst_14569);
return statearr_14626;
})();var statearr_14627_14662 = state_14588__$1;(statearr_14627_14662[2] = inst_14570);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14588__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14589 === 24))
{var inst_14567 = (state_14588[12]);var inst_14517 = (state_14588[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14588,23,Object,null,22);var inst_14574 = cljs.core.async.muxch_STAR_.call(null,inst_14567);var state_14588__$1 = state_14588;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14588__$1,25,inst_14574,inst_14517);
} else
{if((state_val_14589 === 25))
{var inst_14576 = (state_14588[2]);var state_14588__$1 = state_14588;var statearr_14628_14663 = state_14588__$1;(statearr_14628_14663[2] = inst_14576);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14588__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_14632 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14632[0] = state_machine__5507__auto__);
(statearr_14632[1] = 1);
return statearr_14632;
});
var state_machine__5507__auto____1 = (function (state_14588){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14588);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14633){if((e14633 instanceof Object))
{var ex__5510__auto__ = e14633;var statearr_14634_14664 = state_14588;(statearr_14634_14664[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14588);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14633;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14665 = state_14588;
state_14588 = G__14665;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14588){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14635 = f__5522__auto__.call(null);(statearr_14635[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14636);
return statearr_14635;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___14802 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14772){var state_val_14773 = (state_14772[1]);if((state_val_14773 === 1))
{var state_14772__$1 = state_14772;var statearr_14774_14803 = state_14772__$1;(statearr_14774_14803[2] = null);
(statearr_14774_14803[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14773 === 2))
{var inst_14735 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_14736 = 0;var state_14772__$1 = (function (){var statearr_14775 = state_14772;(statearr_14775[7] = inst_14735);
(statearr_14775[8] = inst_14736);
return statearr_14775;
})();var statearr_14776_14804 = state_14772__$1;(statearr_14776_14804[2] = null);
(statearr_14776_14804[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14773 === 3))
{var inst_14770 = (state_14772[2]);var state_14772__$1 = state_14772;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14772__$1,inst_14770);
} else
{if((state_val_14773 === 4))
{var inst_14736 = (state_14772[8]);var inst_14738 = (inst_14736 < cnt);var state_14772__$1 = state_14772;if(cljs.core.truth_(inst_14738))
{var statearr_14777_14805 = state_14772__$1;(statearr_14777_14805[1] = 6);
} else
{var statearr_14778_14806 = state_14772__$1;(statearr_14778_14806[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14773 === 5))
{var inst_14756 = (state_14772[2]);var state_14772__$1 = (function (){var statearr_14779 = state_14772;(statearr_14779[9] = inst_14756);
return statearr_14779;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14772__$1,12,dchan);
} else
{if((state_val_14773 === 6))
{var state_14772__$1 = state_14772;var statearr_14780_14807 = state_14772__$1;(statearr_14780_14807[2] = null);
(statearr_14780_14807[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14773 === 7))
{var state_14772__$1 = state_14772;var statearr_14781_14808 = state_14772__$1;(statearr_14781_14808[2] = null);
(statearr_14781_14808[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14773 === 8))
{var inst_14754 = (state_14772[2]);var state_14772__$1 = state_14772;var statearr_14782_14809 = state_14772__$1;(statearr_14782_14809[2] = inst_14754);
(statearr_14782_14809[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14773 === 9))
{var inst_14736 = (state_14772[8]);var inst_14749 = (state_14772[2]);var inst_14750 = (inst_14736 + 1);var inst_14736__$1 = inst_14750;var state_14772__$1 = (function (){var statearr_14783 = state_14772;(statearr_14783[10] = inst_14749);
(statearr_14783[8] = inst_14736__$1);
return statearr_14783;
})();var statearr_14784_14810 = state_14772__$1;(statearr_14784_14810[2] = null);
(statearr_14784_14810[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14773 === 10))
{var inst_14740 = (state_14772[2]);var inst_14741 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_14772__$1 = (function (){var statearr_14785 = state_14772;(statearr_14785[11] = inst_14740);
return statearr_14785;
})();var statearr_14786_14811 = state_14772__$1;(statearr_14786_14811[2] = inst_14741);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14772__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14773 === 11))
{var inst_14736 = (state_14772[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14772,10,Object,null,9);var inst_14745 = chs__$1.call(null,inst_14736);var inst_14746 = done.call(null,inst_14736);var inst_14747 = cljs.core.async.take_BANG_.call(null,inst_14745,inst_14746);var state_14772__$1 = state_14772;var statearr_14787_14812 = state_14772__$1;(statearr_14787_14812[2] = inst_14747);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14772__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14773 === 12))
{var inst_14758 = (state_14772[12]);var inst_14758__$1 = (state_14772[2]);var inst_14759 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14758__$1);var state_14772__$1 = (function (){var statearr_14788 = state_14772;(statearr_14788[12] = inst_14758__$1);
return statearr_14788;
})();if(cljs.core.truth_(inst_14759))
{var statearr_14789_14813 = state_14772__$1;(statearr_14789_14813[1] = 13);
} else
{var statearr_14790_14814 = state_14772__$1;(statearr_14790_14814[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14773 === 13))
{var inst_14761 = cljs.core.async.close_BANG_.call(null,out);var state_14772__$1 = state_14772;var statearr_14791_14815 = state_14772__$1;(statearr_14791_14815[2] = inst_14761);
(statearr_14791_14815[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14773 === 14))
{var inst_14758 = (state_14772[12]);var inst_14763 = cljs.core.apply.call(null,f,inst_14758);var state_14772__$1 = state_14772;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14772__$1,16,out,inst_14763);
} else
{if((state_val_14773 === 15))
{var inst_14768 = (state_14772[2]);var state_14772__$1 = state_14772;var statearr_14792_14816 = state_14772__$1;(statearr_14792_14816[2] = inst_14768);
(statearr_14792_14816[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14773 === 16))
{var inst_14765 = (state_14772[2]);var state_14772__$1 = (function (){var statearr_14793 = state_14772;(statearr_14793[13] = inst_14765);
return statearr_14793;
})();var statearr_14794_14817 = state_14772__$1;(statearr_14794_14817[2] = null);
(statearr_14794_14817[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14798 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14798[0] = state_machine__5507__auto__);
(statearr_14798[1] = 1);
return statearr_14798;
});
var state_machine__5507__auto____1 = (function (state_14772){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14772);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14799){if((e14799 instanceof Object))
{var ex__5510__auto__ = e14799;var statearr_14800_14818 = state_14772;(statearr_14800_14818[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14772);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14799;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14819 = state_14772;
state_14772 = G__14819;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14772){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14801 = f__5522__auto__.call(null);(statearr_14801[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14802);
return statearr_14801;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14927 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14903){var state_val_14904 = (state_14903[1]);if((state_val_14904 === 1))
{var inst_14874 = cljs.core.vec.call(null,chs);var inst_14875 = inst_14874;var state_14903__$1 = (function (){var statearr_14905 = state_14903;(statearr_14905[7] = inst_14875);
return statearr_14905;
})();var statearr_14906_14928 = state_14903__$1;(statearr_14906_14928[2] = null);
(statearr_14906_14928[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14904 === 2))
{var inst_14875 = (state_14903[7]);var inst_14877 = cljs.core.count.call(null,inst_14875);var inst_14878 = (inst_14877 > 0);var state_14903__$1 = state_14903;if(cljs.core.truth_(inst_14878))
{var statearr_14907_14929 = state_14903__$1;(statearr_14907_14929[1] = 4);
} else
{var statearr_14908_14930 = state_14903__$1;(statearr_14908_14930[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14904 === 3))
{var inst_14901 = (state_14903[2]);var state_14903__$1 = state_14903;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14903__$1,inst_14901);
} else
{if((state_val_14904 === 4))
{var inst_14875 = (state_14903[7]);var state_14903__$1 = state_14903;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14903__$1,7,inst_14875);
} else
{if((state_val_14904 === 5))
{var inst_14897 = cljs.core.async.close_BANG_.call(null,out);var state_14903__$1 = state_14903;var statearr_14909_14931 = state_14903__$1;(statearr_14909_14931[2] = inst_14897);
(statearr_14909_14931[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14904 === 6))
{var inst_14899 = (state_14903[2]);var state_14903__$1 = state_14903;var statearr_14910_14932 = state_14903__$1;(statearr_14910_14932[2] = inst_14899);
(statearr_14910_14932[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14904 === 7))
{var inst_14882 = (state_14903[8]);var inst_14883 = (state_14903[9]);var inst_14882__$1 = (state_14903[2]);var inst_14883__$1 = cljs.core.nth.call(null,inst_14882__$1,0,null);var inst_14884 = cljs.core.nth.call(null,inst_14882__$1,1,null);var inst_14885 = (inst_14883__$1 == null);var state_14903__$1 = (function (){var statearr_14911 = state_14903;(statearr_14911[8] = inst_14882__$1);
(statearr_14911[9] = inst_14883__$1);
(statearr_14911[10] = inst_14884);
return statearr_14911;
})();if(cljs.core.truth_(inst_14885))
{var statearr_14912_14933 = state_14903__$1;(statearr_14912_14933[1] = 8);
} else
{var statearr_14913_14934 = state_14903__$1;(statearr_14913_14934[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14904 === 8))
{var inst_14882 = (state_14903[8]);var inst_14883 = (state_14903[9]);var inst_14884 = (state_14903[10]);var inst_14875 = (state_14903[7]);var inst_14887 = (function (){var c = inst_14884;var v = inst_14883;var vec__14880 = inst_14882;var cs = inst_14875;return ((function (c,v,vec__14880,cs,inst_14882,inst_14883,inst_14884,inst_14875,state_val_14904){
return (function (p1__14820_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__14820_SHARP_);
});
;})(c,v,vec__14880,cs,inst_14882,inst_14883,inst_14884,inst_14875,state_val_14904))
})();var inst_14888 = cljs.core.filterv.call(null,inst_14887,inst_14875);var inst_14875__$1 = inst_14888;var state_14903__$1 = (function (){var statearr_14914 = state_14903;(statearr_14914[7] = inst_14875__$1);
return statearr_14914;
})();var statearr_14915_14935 = state_14903__$1;(statearr_14915_14935[2] = null);
(statearr_14915_14935[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14904 === 9))
{var inst_14883 = (state_14903[9]);var state_14903__$1 = state_14903;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14903__$1,11,out,inst_14883);
} else
{if((state_val_14904 === 10))
{var inst_14895 = (state_14903[2]);var state_14903__$1 = state_14903;var statearr_14917_14936 = state_14903__$1;(statearr_14917_14936[2] = inst_14895);
(statearr_14917_14936[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14904 === 11))
{var inst_14875 = (state_14903[7]);var inst_14892 = (state_14903[2]);var tmp14916 = inst_14875;var inst_14875__$1 = tmp14916;var state_14903__$1 = (function (){var statearr_14918 = state_14903;(statearr_14918[11] = inst_14892);
(statearr_14918[7] = inst_14875__$1);
return statearr_14918;
})();var statearr_14919_14937 = state_14903__$1;(statearr_14919_14937[2] = null);
(statearr_14919_14937[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14923 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14923[0] = state_machine__5507__auto__);
(statearr_14923[1] = 1);
return statearr_14923;
});
var state_machine__5507__auto____1 = (function (state_14903){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14903);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14924){if((e14924 instanceof Object))
{var ex__5510__auto__ = e14924;var statearr_14925_14938 = state_14903;(statearr_14925_14938[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14903);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14924;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14939 = state_14903;
state_14903 = G__14939;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14903){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14926 = f__5522__auto__.call(null);(statearr_14926[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14927);
return statearr_14926;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15032 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15009){var state_val_15010 = (state_15009[1]);if((state_val_15010 === 1))
{var inst_14986 = 0;var state_15009__$1 = (function (){var statearr_15011 = state_15009;(statearr_15011[7] = inst_14986);
return statearr_15011;
})();var statearr_15012_15033 = state_15009__$1;(statearr_15012_15033[2] = null);
(statearr_15012_15033[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15010 === 2))
{var inst_14986 = (state_15009[7]);var inst_14988 = (inst_14986 < n);var state_15009__$1 = state_15009;if(cljs.core.truth_(inst_14988))
{var statearr_15013_15034 = state_15009__$1;(statearr_15013_15034[1] = 4);
} else
{var statearr_15014_15035 = state_15009__$1;(statearr_15014_15035[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15010 === 3))
{var inst_15006 = (state_15009[2]);var inst_15007 = cljs.core.async.close_BANG_.call(null,out);var state_15009__$1 = (function (){var statearr_15015 = state_15009;(statearr_15015[8] = inst_15006);
return statearr_15015;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15009__$1,inst_15007);
} else
{if((state_val_15010 === 4))
{var state_15009__$1 = state_15009;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15009__$1,7,ch);
} else
{if((state_val_15010 === 5))
{var state_15009__$1 = state_15009;var statearr_15016_15036 = state_15009__$1;(statearr_15016_15036[2] = null);
(statearr_15016_15036[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15010 === 6))
{var inst_15004 = (state_15009[2]);var state_15009__$1 = state_15009;var statearr_15017_15037 = state_15009__$1;(statearr_15017_15037[2] = inst_15004);
(statearr_15017_15037[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15010 === 7))
{var inst_14991 = (state_15009[9]);var inst_14991__$1 = (state_15009[2]);var inst_14992 = (inst_14991__$1 == null);var inst_14993 = cljs.core.not.call(null,inst_14992);var state_15009__$1 = (function (){var statearr_15018 = state_15009;(statearr_15018[9] = inst_14991__$1);
return statearr_15018;
})();if(inst_14993)
{var statearr_15019_15038 = state_15009__$1;(statearr_15019_15038[1] = 8);
} else
{var statearr_15020_15039 = state_15009__$1;(statearr_15020_15039[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15010 === 8))
{var inst_14991 = (state_15009[9]);var state_15009__$1 = state_15009;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15009__$1,11,out,inst_14991);
} else
{if((state_val_15010 === 9))
{var state_15009__$1 = state_15009;var statearr_15021_15040 = state_15009__$1;(statearr_15021_15040[2] = null);
(statearr_15021_15040[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15010 === 10))
{var inst_15001 = (state_15009[2]);var state_15009__$1 = state_15009;var statearr_15022_15041 = state_15009__$1;(statearr_15022_15041[2] = inst_15001);
(statearr_15022_15041[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15010 === 11))
{var inst_14986 = (state_15009[7]);var inst_14996 = (state_15009[2]);var inst_14997 = (inst_14986 + 1);var inst_14986__$1 = inst_14997;var state_15009__$1 = (function (){var statearr_15023 = state_15009;(statearr_15023[10] = inst_14996);
(statearr_15023[7] = inst_14986__$1);
return statearr_15023;
})();var statearr_15024_15042 = state_15009__$1;(statearr_15024_15042[2] = null);
(statearr_15024_15042[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15028 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15028[0] = state_machine__5507__auto__);
(statearr_15028[1] = 1);
return statearr_15028;
});
var state_machine__5507__auto____1 = (function (state_15009){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15009);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15029){if((e15029 instanceof Object))
{var ex__5510__auto__ = e15029;var statearr_15030_15043 = state_15009;(statearr_15030_15043[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15009);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15029;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15044 = state_15009;
state_15009 = G__15044;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15009){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15031 = f__5522__auto__.call(null);(statearr_15031[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15032);
return statearr_15031;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15141 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15116){var state_val_15117 = (state_15116[1]);if((state_val_15117 === 1))
{var inst_15093 = null;var state_15116__$1 = (function (){var statearr_15118 = state_15116;(statearr_15118[7] = inst_15093);
return statearr_15118;
})();var statearr_15119_15142 = state_15116__$1;(statearr_15119_15142[2] = null);
(statearr_15119_15142[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15117 === 2))
{var state_15116__$1 = state_15116;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15116__$1,4,ch);
} else
{if((state_val_15117 === 3))
{var inst_15113 = (state_15116[2]);var inst_15114 = cljs.core.async.close_BANG_.call(null,out);var state_15116__$1 = (function (){var statearr_15120 = state_15116;(statearr_15120[8] = inst_15113);
return statearr_15120;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15116__$1,inst_15114);
} else
{if((state_val_15117 === 4))
{var inst_15096 = (state_15116[9]);var inst_15096__$1 = (state_15116[2]);var inst_15097 = (inst_15096__$1 == null);var inst_15098 = cljs.core.not.call(null,inst_15097);var state_15116__$1 = (function (){var statearr_15121 = state_15116;(statearr_15121[9] = inst_15096__$1);
return statearr_15121;
})();if(inst_15098)
{var statearr_15122_15143 = state_15116__$1;(statearr_15122_15143[1] = 5);
} else
{var statearr_15123_15144 = state_15116__$1;(statearr_15123_15144[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15117 === 5))
{var inst_15096 = (state_15116[9]);var inst_15093 = (state_15116[7]);var inst_15100 = cljs.core._EQ_.call(null,inst_15096,inst_15093);var state_15116__$1 = state_15116;if(inst_15100)
{var statearr_15124_15145 = state_15116__$1;(statearr_15124_15145[1] = 8);
} else
{var statearr_15125_15146 = state_15116__$1;(statearr_15125_15146[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15117 === 6))
{var state_15116__$1 = state_15116;var statearr_15127_15147 = state_15116__$1;(statearr_15127_15147[2] = null);
(statearr_15127_15147[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15117 === 7))
{var inst_15111 = (state_15116[2]);var state_15116__$1 = state_15116;var statearr_15128_15148 = state_15116__$1;(statearr_15128_15148[2] = inst_15111);
(statearr_15128_15148[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15117 === 8))
{var inst_15093 = (state_15116[7]);var tmp15126 = inst_15093;var inst_15093__$1 = tmp15126;var state_15116__$1 = (function (){var statearr_15129 = state_15116;(statearr_15129[7] = inst_15093__$1);
return statearr_15129;
})();var statearr_15130_15149 = state_15116__$1;(statearr_15130_15149[2] = null);
(statearr_15130_15149[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15117 === 9))
{var inst_15096 = (state_15116[9]);var state_15116__$1 = state_15116;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15116__$1,11,out,inst_15096);
} else
{if((state_val_15117 === 10))
{var inst_15108 = (state_15116[2]);var state_15116__$1 = state_15116;var statearr_15131_15150 = state_15116__$1;(statearr_15131_15150[2] = inst_15108);
(statearr_15131_15150[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15117 === 11))
{var inst_15096 = (state_15116[9]);var inst_15105 = (state_15116[2]);var inst_15093 = inst_15096;var state_15116__$1 = (function (){var statearr_15132 = state_15116;(statearr_15132[10] = inst_15105);
(statearr_15132[7] = inst_15093);
return statearr_15132;
})();var statearr_15133_15151 = state_15116__$1;(statearr_15133_15151[2] = null);
(statearr_15133_15151[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15137 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15137[0] = state_machine__5507__auto__);
(statearr_15137[1] = 1);
return statearr_15137;
});
var state_machine__5507__auto____1 = (function (state_15116){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15116);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15138){if((e15138 instanceof Object))
{var ex__5510__auto__ = e15138;var statearr_15139_15152 = state_15116;(statearr_15139_15152[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15116);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15138;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15153 = state_15116;
state_15116 = G__15153;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15116){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15140 = f__5522__auto__.call(null);(statearr_15140[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15141);
return statearr_15140;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15288 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15258){var state_val_15259 = (state_15258[1]);if((state_val_15259 === 1))
{var inst_15221 = (new Array(n));var inst_15222 = inst_15221;var inst_15223 = 0;var state_15258__$1 = (function (){var statearr_15260 = state_15258;(statearr_15260[7] = inst_15223);
(statearr_15260[8] = inst_15222);
return statearr_15260;
})();var statearr_15261_15289 = state_15258__$1;(statearr_15261_15289[2] = null);
(statearr_15261_15289[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15259 === 2))
{var state_15258__$1 = state_15258;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15258__$1,4,ch);
} else
{if((state_val_15259 === 3))
{var inst_15256 = (state_15258[2]);var state_15258__$1 = state_15258;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15258__$1,inst_15256);
} else
{if((state_val_15259 === 4))
{var inst_15226 = (state_15258[9]);var inst_15226__$1 = (state_15258[2]);var inst_15227 = (inst_15226__$1 == null);var inst_15228 = cljs.core.not.call(null,inst_15227);var state_15258__$1 = (function (){var statearr_15262 = state_15258;(statearr_15262[9] = inst_15226__$1);
return statearr_15262;
})();if(inst_15228)
{var statearr_15263_15290 = state_15258__$1;(statearr_15263_15290[1] = 5);
} else
{var statearr_15264_15291 = state_15258__$1;(statearr_15264_15291[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15259 === 5))
{var inst_15226 = (state_15258[9]);var inst_15223 = (state_15258[7]);var inst_15222 = (state_15258[8]);var inst_15231 = (state_15258[10]);var inst_15230 = (inst_15222[inst_15223] = inst_15226);var inst_15231__$1 = (inst_15223 + 1);var inst_15232 = (inst_15231__$1 < n);var state_15258__$1 = (function (){var statearr_15265 = state_15258;(statearr_15265[10] = inst_15231__$1);
(statearr_15265[11] = inst_15230);
return statearr_15265;
})();if(cljs.core.truth_(inst_15232))
{var statearr_15266_15292 = state_15258__$1;(statearr_15266_15292[1] = 8);
} else
{var statearr_15267_15293 = state_15258__$1;(statearr_15267_15293[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15259 === 6))
{var inst_15223 = (state_15258[7]);var inst_15244 = (inst_15223 > 0);var state_15258__$1 = state_15258;if(cljs.core.truth_(inst_15244))
{var statearr_15269_15294 = state_15258__$1;(statearr_15269_15294[1] = 12);
} else
{var statearr_15270_15295 = state_15258__$1;(statearr_15270_15295[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15259 === 7))
{var inst_15254 = (state_15258[2]);var state_15258__$1 = state_15258;var statearr_15271_15296 = state_15258__$1;(statearr_15271_15296[2] = inst_15254);
(statearr_15271_15296[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15259 === 8))
{var inst_15222 = (state_15258[8]);var inst_15231 = (state_15258[10]);var tmp15268 = inst_15222;var inst_15222__$1 = tmp15268;var inst_15223 = inst_15231;var state_15258__$1 = (function (){var statearr_15272 = state_15258;(statearr_15272[7] = inst_15223);
(statearr_15272[8] = inst_15222__$1);
return statearr_15272;
})();var statearr_15273_15297 = state_15258__$1;(statearr_15273_15297[2] = null);
(statearr_15273_15297[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15259 === 9))
{var inst_15222 = (state_15258[8]);var inst_15236 = cljs.core.vec.call(null,inst_15222);var state_15258__$1 = state_15258;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15258__$1,11,out,inst_15236);
} else
{if((state_val_15259 === 10))
{var inst_15242 = (state_15258[2]);var state_15258__$1 = state_15258;var statearr_15274_15298 = state_15258__$1;(statearr_15274_15298[2] = inst_15242);
(statearr_15274_15298[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15259 === 11))
{var inst_15238 = (state_15258[2]);var inst_15239 = (new Array(n));var inst_15222 = inst_15239;var inst_15223 = 0;var state_15258__$1 = (function (){var statearr_15275 = state_15258;(statearr_15275[7] = inst_15223);
(statearr_15275[8] = inst_15222);
(statearr_15275[12] = inst_15238);
return statearr_15275;
})();var statearr_15276_15299 = state_15258__$1;(statearr_15276_15299[2] = null);
(statearr_15276_15299[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15259 === 12))
{var inst_15222 = (state_15258[8]);var inst_15246 = cljs.core.vec.call(null,inst_15222);var state_15258__$1 = state_15258;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15258__$1,15,out,inst_15246);
} else
{if((state_val_15259 === 13))
{var state_15258__$1 = state_15258;var statearr_15277_15300 = state_15258__$1;(statearr_15277_15300[2] = null);
(statearr_15277_15300[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15259 === 14))
{var inst_15251 = (state_15258[2]);var inst_15252 = cljs.core.async.close_BANG_.call(null,out);var state_15258__$1 = (function (){var statearr_15278 = state_15258;(statearr_15278[13] = inst_15251);
return statearr_15278;
})();var statearr_15279_15301 = state_15258__$1;(statearr_15279_15301[2] = inst_15252);
(statearr_15279_15301[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15259 === 15))
{var inst_15248 = (state_15258[2]);var state_15258__$1 = state_15258;var statearr_15280_15302 = state_15258__$1;(statearr_15280_15302[2] = inst_15248);
(statearr_15280_15302[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_15284 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15284[0] = state_machine__5507__auto__);
(statearr_15284[1] = 1);
return statearr_15284;
});
var state_machine__5507__auto____1 = (function (state_15258){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15258);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15285){if((e15285 instanceof Object))
{var ex__5510__auto__ = e15285;var statearr_15286_15303 = state_15258;(statearr_15286_15303[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15258);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15285;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15304 = state_15258;
state_15258 = G__15304;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15258){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15287 = f__5522__auto__.call(null);(statearr_15287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15288);
return statearr_15287;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15447 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15417){var state_val_15418 = (state_15417[1]);if((state_val_15418 === 1))
{var inst_15376 = [];var inst_15377 = inst_15376;var inst_15378 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_15417__$1 = (function (){var statearr_15419 = state_15417;(statearr_15419[7] = inst_15377);
(statearr_15419[8] = inst_15378);
return statearr_15419;
})();var statearr_15420_15448 = state_15417__$1;(statearr_15420_15448[2] = null);
(statearr_15420_15448[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15418 === 2))
{var state_15417__$1 = state_15417;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15417__$1,4,ch);
} else
{if((state_val_15418 === 3))
{var inst_15415 = (state_15417[2]);var state_15417__$1 = state_15417;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15417__$1,inst_15415);
} else
{if((state_val_15418 === 4))
{var inst_15381 = (state_15417[9]);var inst_15381__$1 = (state_15417[2]);var inst_15382 = (inst_15381__$1 == null);var inst_15383 = cljs.core.not.call(null,inst_15382);var state_15417__$1 = (function (){var statearr_15421 = state_15417;(statearr_15421[9] = inst_15381__$1);
return statearr_15421;
})();if(inst_15383)
{var statearr_15422_15449 = state_15417__$1;(statearr_15422_15449[1] = 5);
} else
{var statearr_15423_15450 = state_15417__$1;(statearr_15423_15450[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15418 === 5))
{var inst_15378 = (state_15417[8]);var inst_15385 = (state_15417[10]);var inst_15381 = (state_15417[9]);var inst_15385__$1 = f.call(null,inst_15381);var inst_15386 = cljs.core._EQ_.call(null,inst_15385__$1,inst_15378);var inst_15387 = cljs.core.keyword_identical_QMARK_.call(null,inst_15378,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_15388 = (inst_15386) || (inst_15387);var state_15417__$1 = (function (){var statearr_15424 = state_15417;(statearr_15424[10] = inst_15385__$1);
return statearr_15424;
})();if(cljs.core.truth_(inst_15388))
{var statearr_15425_15451 = state_15417__$1;(statearr_15425_15451[1] = 8);
} else
{var statearr_15426_15452 = state_15417__$1;(statearr_15426_15452[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15418 === 6))
{var inst_15377 = (state_15417[7]);var inst_15402 = inst_15377.length;var inst_15403 = (inst_15402 > 0);var state_15417__$1 = state_15417;if(cljs.core.truth_(inst_15403))
{var statearr_15428_15453 = state_15417__$1;(statearr_15428_15453[1] = 12);
} else
{var statearr_15429_15454 = state_15417__$1;(statearr_15429_15454[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15418 === 7))
{var inst_15413 = (state_15417[2]);var state_15417__$1 = state_15417;var statearr_15430_15455 = state_15417__$1;(statearr_15430_15455[2] = inst_15413);
(statearr_15430_15455[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15418 === 8))
{var inst_15377 = (state_15417[7]);var inst_15385 = (state_15417[10]);var inst_15381 = (state_15417[9]);var inst_15390 = inst_15377.push(inst_15381);var tmp15427 = inst_15377;var inst_15377__$1 = tmp15427;var inst_15378 = inst_15385;var state_15417__$1 = (function (){var statearr_15431 = state_15417;(statearr_15431[7] = inst_15377__$1);
(statearr_15431[8] = inst_15378);
(statearr_15431[11] = inst_15390);
return statearr_15431;
})();var statearr_15432_15456 = state_15417__$1;(statearr_15432_15456[2] = null);
(statearr_15432_15456[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15418 === 9))
{var inst_15377 = (state_15417[7]);var inst_15393 = cljs.core.vec.call(null,inst_15377);var state_15417__$1 = state_15417;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15417__$1,11,out,inst_15393);
} else
{if((state_val_15418 === 10))
{var inst_15400 = (state_15417[2]);var state_15417__$1 = state_15417;var statearr_15433_15457 = state_15417__$1;(statearr_15433_15457[2] = inst_15400);
(statearr_15433_15457[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15418 === 11))
{var inst_15385 = (state_15417[10]);var inst_15381 = (state_15417[9]);var inst_15395 = (state_15417[2]);var inst_15396 = [];var inst_15397 = inst_15396.push(inst_15381);var inst_15377 = inst_15396;var inst_15378 = inst_15385;var state_15417__$1 = (function (){var statearr_15434 = state_15417;(statearr_15434[7] = inst_15377);
(statearr_15434[8] = inst_15378);
(statearr_15434[12] = inst_15397);
(statearr_15434[13] = inst_15395);
return statearr_15434;
})();var statearr_15435_15458 = state_15417__$1;(statearr_15435_15458[2] = null);
(statearr_15435_15458[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15418 === 12))
{var inst_15377 = (state_15417[7]);var inst_15405 = cljs.core.vec.call(null,inst_15377);var state_15417__$1 = state_15417;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15417__$1,15,out,inst_15405);
} else
{if((state_val_15418 === 13))
{var state_15417__$1 = state_15417;var statearr_15436_15459 = state_15417__$1;(statearr_15436_15459[2] = null);
(statearr_15436_15459[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15418 === 14))
{var inst_15410 = (state_15417[2]);var inst_15411 = cljs.core.async.close_BANG_.call(null,out);var state_15417__$1 = (function (){var statearr_15437 = state_15417;(statearr_15437[14] = inst_15410);
return statearr_15437;
})();var statearr_15438_15460 = state_15417__$1;(statearr_15438_15460[2] = inst_15411);
(statearr_15438_15460[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15418 === 15))
{var inst_15407 = (state_15417[2]);var state_15417__$1 = state_15417;var statearr_15439_15461 = state_15417__$1;(statearr_15439_15461[2] = inst_15407);
(statearr_15439_15461[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_15443 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15443[0] = state_machine__5507__auto__);
(statearr_15443[1] = 1);
return statearr_15443;
});
var state_machine__5507__auto____1 = (function (state_15417){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15417);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15444){if((e15444 instanceof Object))
{var ex__5510__auto__ = e15444;var statearr_15445_15462 = state_15417;(statearr_15445_15462[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15417);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15444;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15463 = state_15417;
state_15417 = G__15463;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15417){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15446 = f__5522__auto__.call(null);(statearr_15446[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15447);
return statearr_15446;
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