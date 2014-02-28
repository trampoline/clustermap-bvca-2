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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t34880 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34880 = (function (f,fn_handler,meta34881){
this.f = f;
this.fn_handler = fn_handler;
this.meta34881 = meta34881;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34880.cljs$lang$type = true;
cljs.core.async.t34880.cljs$lang$ctorStr = "cljs.core.async/t34880";
cljs.core.async.t34880.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34880");
});
cljs.core.async.t34880.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34880.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t34880.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t34880.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34882){var self__ = this;
var _34882__$1 = this;return self__.meta34881;
});
cljs.core.async.t34880.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34882,meta34881__$1){var self__ = this;
var _34882__$1 = this;return (new cljs.core.async.t34880(self__.f,self__.fn_handler,meta34881__$1));
});
cljs.core.async.__GT_t34880 = (function __GT_t34880(f__$1,fn_handler__$1,meta34881){return (new cljs.core.async.t34880(f__$1,fn_handler__$1,meta34881));
});
}
return (new cljs.core.async.t34880(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__34884 = buff;if(G__34884)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__34884.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__34884.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__34884);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__34884);
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
{var val_34885 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_34885);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_34885);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___34886 = n;var x_34887 = 0;while(true){
if((x_34887 < n__4248__auto___34886))
{(a[x_34887] = 0);
{
var G__34888 = (x_34887 + 1);
x_34887 = G__34888;
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
var G__34889 = (i + 1);
i = G__34889;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t34893 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34893 = (function (flag,alt_flag,meta34894){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta34894 = meta34894;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34893.cljs$lang$type = true;
cljs.core.async.t34893.cljs$lang$ctorStr = "cljs.core.async/t34893";
cljs.core.async.t34893.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34893");
});
cljs.core.async.t34893.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34893.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t34893.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t34893.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34895){var self__ = this;
var _34895__$1 = this;return self__.meta34894;
});
cljs.core.async.t34893.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34895,meta34894__$1){var self__ = this;
var _34895__$1 = this;return (new cljs.core.async.t34893(self__.flag,self__.alt_flag,meta34894__$1));
});
cljs.core.async.__GT_t34893 = (function __GT_t34893(flag__$1,alt_flag__$1,meta34894){return (new cljs.core.async.t34893(flag__$1,alt_flag__$1,meta34894));
});
}
return (new cljs.core.async.t34893(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t34899 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34899 = (function (cb,flag,alt_handler,meta34900){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta34900 = meta34900;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34899.cljs$lang$type = true;
cljs.core.async.t34899.cljs$lang$ctorStr = "cljs.core.async/t34899";
cljs.core.async.t34899.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34899");
});
cljs.core.async.t34899.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34899.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t34899.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t34899.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34901){var self__ = this;
var _34901__$1 = this;return self__.meta34900;
});
cljs.core.async.t34899.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34901,meta34900__$1){var self__ = this;
var _34901__$1 = this;return (new cljs.core.async.t34899(self__.cb,self__.flag,self__.alt_handler,meta34900__$1));
});
cljs.core.async.__GT_t34899 = (function __GT_t34899(cb__$1,flag__$1,alt_handler__$1,meta34900){return (new cljs.core.async.t34899(cb__$1,flag__$1,alt_handler__$1,meta34900));
});
}
return (new cljs.core.async.t34899(cb,flag,alt_handler,null));
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
return (function (p1__34902_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34902_SHARP_,port], null));
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
var G__34903 = (i + 1);
i = G__34903;
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
var alts_BANG___delegate = function (ports,p__34904){var map__34906 = p__34904;var map__34906__$1 = ((cljs.core.seq_QMARK_.call(null,map__34906))?cljs.core.apply.call(null,cljs.core.hash_map,map__34906):map__34906);var opts = map__34906__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__34904 = null;if (arguments.length > 1) {
  p__34904 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__34904);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__34907){
var ports = cljs.core.first(arglist__34907);
var p__34904 = cljs.core.rest(arglist__34907);
return alts_BANG___delegate(ports,p__34904);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t34915 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34915 = (function (ch,f,map_LT_,meta34916){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta34916 = meta34916;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34915.cljs$lang$type = true;
cljs.core.async.t34915.cljs$lang$ctorStr = "cljs.core.async/t34915";
cljs.core.async.t34915.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34915");
});
cljs.core.async.t34915.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t34915.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t34915.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t34915.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t34918 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34918 = (function (fn1,_,meta34916,ch,f,map_LT_,meta34919){
this.fn1 = fn1;
this._ = _;
this.meta34916 = meta34916;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta34919 = meta34919;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34918.cljs$lang$type = true;
cljs.core.async.t34918.cljs$lang$ctorStr = "cljs.core.async/t34918";
cljs.core.async.t34918.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34918");
});
cljs.core.async.t34918.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34918.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t34918.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t34918.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__34908_SHARP_){return f1.call(null,(((p1__34908_SHARP_ == null))?null:self__.f.call(null,p1__34908_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t34918.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34920){var self__ = this;
var _34920__$1 = this;return self__.meta34919;
});
cljs.core.async.t34918.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34920,meta34919__$1){var self__ = this;
var _34920__$1 = this;return (new cljs.core.async.t34918(self__.fn1,self__._,self__.meta34916,self__.ch,self__.f,self__.map_LT_,meta34919__$1));
});
cljs.core.async.__GT_t34918 = (function __GT_t34918(fn1__$1,___$2,meta34916__$1,ch__$2,f__$2,map_LT___$2,meta34919){return (new cljs.core.async.t34918(fn1__$1,___$2,meta34916__$1,ch__$2,f__$2,map_LT___$2,meta34919));
});
}
return (new cljs.core.async.t34918(fn1,___$1,self__.meta34916,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t34915.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t34915.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t34915.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34917){var self__ = this;
var _34917__$1 = this;return self__.meta34916;
});
cljs.core.async.t34915.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34917,meta34916__$1){var self__ = this;
var _34917__$1 = this;return (new cljs.core.async.t34915(self__.ch,self__.f,self__.map_LT_,meta34916__$1));
});
cljs.core.async.__GT_t34915 = (function __GT_t34915(ch__$1,f__$1,map_LT___$1,meta34916){return (new cljs.core.async.t34915(ch__$1,f__$1,map_LT___$1,meta34916));
});
}
return (new cljs.core.async.t34915(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t34924 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34924 = (function (ch,f,map_GT_,meta34925){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta34925 = meta34925;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34924.cljs$lang$type = true;
cljs.core.async.t34924.cljs$lang$ctorStr = "cljs.core.async/t34924";
cljs.core.async.t34924.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34924");
});
cljs.core.async.t34924.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t34924.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t34924.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t34924.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t34924.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t34924.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t34924.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34926){var self__ = this;
var _34926__$1 = this;return self__.meta34925;
});
cljs.core.async.t34924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34926,meta34925__$1){var self__ = this;
var _34926__$1 = this;return (new cljs.core.async.t34924(self__.ch,self__.f,self__.map_GT_,meta34925__$1));
});
cljs.core.async.__GT_t34924 = (function __GT_t34924(ch__$1,f__$1,map_GT___$1,meta34925){return (new cljs.core.async.t34924(ch__$1,f__$1,map_GT___$1,meta34925));
});
}
return (new cljs.core.async.t34924(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t34930 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34930 = (function (ch,p,filter_GT_,meta34931){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta34931 = meta34931;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34930.cljs$lang$type = true;
cljs.core.async.t34930.cljs$lang$ctorStr = "cljs.core.async/t34930";
cljs.core.async.t34930.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34930");
});
cljs.core.async.t34930.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t34930.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t34930.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t34930.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t34930.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t34930.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t34930.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34932){var self__ = this;
var _34932__$1 = this;return self__.meta34931;
});
cljs.core.async.t34930.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34932,meta34931__$1){var self__ = this;
var _34932__$1 = this;return (new cljs.core.async.t34930(self__.ch,self__.p,self__.filter_GT_,meta34931__$1));
});
cljs.core.async.__GT_t34930 = (function __GT_t34930(ch__$1,p__$1,filter_GT___$1,meta34931){return (new cljs.core.async.t34930(ch__$1,p__$1,filter_GT___$1,meta34931));
});
}
return (new cljs.core.async.t34930(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35015 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34994){var state_val_34995 = (state_34994[1]);if((state_val_34995 === 1))
{var state_34994__$1 = state_34994;var statearr_34996_35016 = state_34994__$1;(statearr_34996_35016[2] = null);
(statearr_34996_35016[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34995 === 2))
{var state_34994__$1 = state_34994;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34994__$1,4,ch);
} else
{if((state_val_34995 === 3))
{var inst_34992 = (state_34994[2]);var state_34994__$1 = state_34994;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34994__$1,inst_34992);
} else
{if((state_val_34995 === 4))
{var inst_34976 = (state_34994[7]);var inst_34976__$1 = (state_34994[2]);var inst_34977 = (inst_34976__$1 == null);var state_34994__$1 = (function (){var statearr_34997 = state_34994;(statearr_34997[7] = inst_34976__$1);
return statearr_34997;
})();if(cljs.core.truth_(inst_34977))
{var statearr_34998_35017 = state_34994__$1;(statearr_34998_35017[1] = 5);
} else
{var statearr_34999_35018 = state_34994__$1;(statearr_34999_35018[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34995 === 5))
{var inst_34979 = cljs.core.async.close_BANG_.call(null,out);var state_34994__$1 = state_34994;var statearr_35000_35019 = state_34994__$1;(statearr_35000_35019[2] = inst_34979);
(statearr_35000_35019[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34995 === 6))
{var inst_34976 = (state_34994[7]);var inst_34981 = p.call(null,inst_34976);var state_34994__$1 = state_34994;if(cljs.core.truth_(inst_34981))
{var statearr_35001_35020 = state_34994__$1;(statearr_35001_35020[1] = 8);
} else
{var statearr_35002_35021 = state_34994__$1;(statearr_35002_35021[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34995 === 7))
{var inst_34990 = (state_34994[2]);var state_34994__$1 = state_34994;var statearr_35003_35022 = state_34994__$1;(statearr_35003_35022[2] = inst_34990);
(statearr_35003_35022[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34995 === 8))
{var inst_34976 = (state_34994[7]);var state_34994__$1 = state_34994;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34994__$1,11,out,inst_34976);
} else
{if((state_val_34995 === 9))
{var state_34994__$1 = state_34994;var statearr_35004_35023 = state_34994__$1;(statearr_35004_35023[2] = null);
(statearr_35004_35023[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34995 === 10))
{var inst_34987 = (state_34994[2]);var state_34994__$1 = (function (){var statearr_35005 = state_34994;(statearr_35005[8] = inst_34987);
return statearr_35005;
})();var statearr_35006_35024 = state_34994__$1;(statearr_35006_35024[2] = null);
(statearr_35006_35024[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34995 === 11))
{var inst_34984 = (state_34994[2]);var state_34994__$1 = state_34994;var statearr_35007_35025 = state_34994__$1;(statearr_35007_35025[2] = inst_34984);
(statearr_35007_35025[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_35011 = [null,null,null,null,null,null,null,null,null];(statearr_35011[0] = state_machine__5507__auto__);
(statearr_35011[1] = 1);
return statearr_35011;
});
var state_machine__5507__auto____1 = (function (state_34994){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34994);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35012){if((e35012 instanceof Object))
{var ex__5510__auto__ = e35012;var statearr_35013_35026 = state_34994;(statearr_35013_35026[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34994);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35012;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35027 = state_34994;
state_34994 = G__35027;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34994){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35014 = f__5522__auto__.call(null);(statearr_35014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35015);
return statearr_35014;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35179){var state_val_35180 = (state_35179[1]);if((state_val_35180 === 1))
{var state_35179__$1 = state_35179;var statearr_35181_35218 = state_35179__$1;(statearr_35181_35218[2] = null);
(statearr_35181_35218[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35180 === 2))
{var state_35179__$1 = state_35179;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35179__$1,4,in$);
} else
{if((state_val_35180 === 3))
{var inst_35177 = (state_35179[2]);var state_35179__$1 = state_35179;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35179__$1,inst_35177);
} else
{if((state_val_35180 === 4))
{var inst_35125 = (state_35179[7]);var inst_35125__$1 = (state_35179[2]);var inst_35126 = (inst_35125__$1 == null);var state_35179__$1 = (function (){var statearr_35182 = state_35179;(statearr_35182[7] = inst_35125__$1);
return statearr_35182;
})();if(cljs.core.truth_(inst_35126))
{var statearr_35183_35219 = state_35179__$1;(statearr_35183_35219[1] = 5);
} else
{var statearr_35184_35220 = state_35179__$1;(statearr_35184_35220[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35180 === 5))
{var inst_35128 = cljs.core.async.close_BANG_.call(null,out);var state_35179__$1 = state_35179;var statearr_35185_35221 = state_35179__$1;(statearr_35185_35221[2] = inst_35128);
(statearr_35185_35221[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35180 === 6))
{var inst_35125 = (state_35179[7]);var inst_35130 = f.call(null,inst_35125);var inst_35135 = cljs.core.seq.call(null,inst_35130);var inst_35136 = inst_35135;var inst_35137 = null;var inst_35138 = 0;var inst_35139 = 0;var state_35179__$1 = (function (){var statearr_35186 = state_35179;(statearr_35186[8] = inst_35139);
(statearr_35186[9] = inst_35138);
(statearr_35186[10] = inst_35137);
(statearr_35186[11] = inst_35136);
return statearr_35186;
})();var statearr_35187_35222 = state_35179__$1;(statearr_35187_35222[2] = null);
(statearr_35187_35222[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35180 === 7))
{var inst_35175 = (state_35179[2]);var state_35179__$1 = state_35179;var statearr_35188_35223 = state_35179__$1;(statearr_35188_35223[2] = inst_35175);
(statearr_35188_35223[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35180 === 8))
{var inst_35139 = (state_35179[8]);var inst_35138 = (state_35179[9]);var inst_35141 = (inst_35139 < inst_35138);var inst_35142 = inst_35141;var state_35179__$1 = state_35179;if(cljs.core.truth_(inst_35142))
{var statearr_35189_35224 = state_35179__$1;(statearr_35189_35224[1] = 10);
} else
{var statearr_35190_35225 = state_35179__$1;(statearr_35190_35225[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35180 === 9))
{var inst_35172 = (state_35179[2]);var state_35179__$1 = (function (){var statearr_35191 = state_35179;(statearr_35191[12] = inst_35172);
return statearr_35191;
})();var statearr_35192_35226 = state_35179__$1;(statearr_35192_35226[2] = null);
(statearr_35192_35226[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35180 === 10))
{var inst_35139 = (state_35179[8]);var inst_35137 = (state_35179[10]);var inst_35144 = cljs.core._nth.call(null,inst_35137,inst_35139);var state_35179__$1 = state_35179;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35179__$1,13,out,inst_35144);
} else
{if((state_val_35180 === 11))
{var inst_35136 = (state_35179[11]);var inst_35150 = (state_35179[13]);var inst_35150__$1 = cljs.core.seq.call(null,inst_35136);var state_35179__$1 = (function (){var statearr_35196 = state_35179;(statearr_35196[13] = inst_35150__$1);
return statearr_35196;
})();if(inst_35150__$1)
{var statearr_35197_35227 = state_35179__$1;(statearr_35197_35227[1] = 14);
} else
{var statearr_35198_35228 = state_35179__$1;(statearr_35198_35228[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35180 === 12))
{var inst_35170 = (state_35179[2]);var state_35179__$1 = state_35179;var statearr_35199_35229 = state_35179__$1;(statearr_35199_35229[2] = inst_35170);
(statearr_35199_35229[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35180 === 13))
{var inst_35139 = (state_35179[8]);var inst_35138 = (state_35179[9]);var inst_35137 = (state_35179[10]);var inst_35136 = (state_35179[11]);var inst_35146 = (state_35179[2]);var inst_35147 = (inst_35139 + 1);var tmp35193 = inst_35138;var tmp35194 = inst_35137;var tmp35195 = inst_35136;var inst_35136__$1 = tmp35195;var inst_35137__$1 = tmp35194;var inst_35138__$1 = tmp35193;var inst_35139__$1 = inst_35147;var state_35179__$1 = (function (){var statearr_35200 = state_35179;(statearr_35200[8] = inst_35139__$1);
(statearr_35200[14] = inst_35146);
(statearr_35200[9] = inst_35138__$1);
(statearr_35200[10] = inst_35137__$1);
(statearr_35200[11] = inst_35136__$1);
return statearr_35200;
})();var statearr_35201_35230 = state_35179__$1;(statearr_35201_35230[2] = null);
(statearr_35201_35230[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35180 === 14))
{var inst_35150 = (state_35179[13]);var inst_35152 = cljs.core.chunked_seq_QMARK_.call(null,inst_35150);var state_35179__$1 = state_35179;if(inst_35152)
{var statearr_35202_35231 = state_35179__$1;(statearr_35202_35231[1] = 17);
} else
{var statearr_35203_35232 = state_35179__$1;(statearr_35203_35232[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35180 === 15))
{var state_35179__$1 = state_35179;var statearr_35204_35233 = state_35179__$1;(statearr_35204_35233[2] = null);
(statearr_35204_35233[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35180 === 16))
{var inst_35168 = (state_35179[2]);var state_35179__$1 = state_35179;var statearr_35205_35234 = state_35179__$1;(statearr_35205_35234[2] = inst_35168);
(statearr_35205_35234[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35180 === 17))
{var inst_35150 = (state_35179[13]);var inst_35154 = cljs.core.chunk_first.call(null,inst_35150);var inst_35155 = cljs.core.chunk_rest.call(null,inst_35150);var inst_35156 = cljs.core.count.call(null,inst_35154);var inst_35136 = inst_35155;var inst_35137 = inst_35154;var inst_35138 = inst_35156;var inst_35139 = 0;var state_35179__$1 = (function (){var statearr_35206 = state_35179;(statearr_35206[8] = inst_35139);
(statearr_35206[9] = inst_35138);
(statearr_35206[10] = inst_35137);
(statearr_35206[11] = inst_35136);
return statearr_35206;
})();var statearr_35207_35235 = state_35179__$1;(statearr_35207_35235[2] = null);
(statearr_35207_35235[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35180 === 18))
{var inst_35150 = (state_35179[13]);var inst_35159 = cljs.core.first.call(null,inst_35150);var state_35179__$1 = state_35179;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35179__$1,20,out,inst_35159);
} else
{if((state_val_35180 === 19))
{var inst_35165 = (state_35179[2]);var state_35179__$1 = state_35179;var statearr_35208_35236 = state_35179__$1;(statearr_35208_35236[2] = inst_35165);
(statearr_35208_35236[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35180 === 20))
{var inst_35150 = (state_35179[13]);var inst_35161 = (state_35179[2]);var inst_35162 = cljs.core.next.call(null,inst_35150);var inst_35136 = inst_35162;var inst_35137 = null;var inst_35138 = 0;var inst_35139 = 0;var state_35179__$1 = (function (){var statearr_35209 = state_35179;(statearr_35209[8] = inst_35139);
(statearr_35209[9] = inst_35138);
(statearr_35209[10] = inst_35137);
(statearr_35209[11] = inst_35136);
(statearr_35209[15] = inst_35161);
return statearr_35209;
})();var statearr_35210_35237 = state_35179__$1;(statearr_35210_35237[2] = null);
(statearr_35210_35237[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_35214 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35214[0] = state_machine__5507__auto__);
(statearr_35214[1] = 1);
return statearr_35214;
});
var state_machine__5507__auto____1 = (function (state_35179){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35179);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35215){if((e35215 instanceof Object))
{var ex__5510__auto__ = e35215;var statearr_35216_35238 = state_35179;(statearr_35216_35238[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35179);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35215;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35239 = state_35179;
state_35179 = G__35239;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35179){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35217 = f__5522__auto__.call(null);(statearr_35217[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_35217;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___35320 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35299){var state_val_35300 = (state_35299[1]);if((state_val_35300 === 1))
{var state_35299__$1 = state_35299;var statearr_35301_35321 = state_35299__$1;(statearr_35301_35321[2] = null);
(statearr_35301_35321[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35300 === 2))
{var state_35299__$1 = state_35299;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35299__$1,4,from);
} else
{if((state_val_35300 === 3))
{var inst_35297 = (state_35299[2]);var state_35299__$1 = state_35299;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35299__$1,inst_35297);
} else
{if((state_val_35300 === 4))
{var inst_35282 = (state_35299[7]);var inst_35282__$1 = (state_35299[2]);var inst_35283 = (inst_35282__$1 == null);var state_35299__$1 = (function (){var statearr_35302 = state_35299;(statearr_35302[7] = inst_35282__$1);
return statearr_35302;
})();if(cljs.core.truth_(inst_35283))
{var statearr_35303_35322 = state_35299__$1;(statearr_35303_35322[1] = 5);
} else
{var statearr_35304_35323 = state_35299__$1;(statearr_35304_35323[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35300 === 5))
{var state_35299__$1 = state_35299;if(cljs.core.truth_(close_QMARK_))
{var statearr_35305_35324 = state_35299__$1;(statearr_35305_35324[1] = 8);
} else
{var statearr_35306_35325 = state_35299__$1;(statearr_35306_35325[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35300 === 6))
{var inst_35282 = (state_35299[7]);var state_35299__$1 = state_35299;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35299__$1,11,to,inst_35282);
} else
{if((state_val_35300 === 7))
{var inst_35295 = (state_35299[2]);var state_35299__$1 = state_35299;var statearr_35307_35326 = state_35299__$1;(statearr_35307_35326[2] = inst_35295);
(statearr_35307_35326[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35300 === 8))
{var inst_35286 = cljs.core.async.close_BANG_.call(null,to);var state_35299__$1 = state_35299;var statearr_35308_35327 = state_35299__$1;(statearr_35308_35327[2] = inst_35286);
(statearr_35308_35327[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35300 === 9))
{var state_35299__$1 = state_35299;var statearr_35309_35328 = state_35299__$1;(statearr_35309_35328[2] = null);
(statearr_35309_35328[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35300 === 10))
{var inst_35289 = (state_35299[2]);var state_35299__$1 = state_35299;var statearr_35310_35329 = state_35299__$1;(statearr_35310_35329[2] = inst_35289);
(statearr_35310_35329[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35300 === 11))
{var inst_35292 = (state_35299[2]);var state_35299__$1 = (function (){var statearr_35311 = state_35299;(statearr_35311[8] = inst_35292);
return statearr_35311;
})();var statearr_35312_35330 = state_35299__$1;(statearr_35312_35330[2] = null);
(statearr_35312_35330[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_35316 = [null,null,null,null,null,null,null,null,null];(statearr_35316[0] = state_machine__5507__auto__);
(statearr_35316[1] = 1);
return statearr_35316;
});
var state_machine__5507__auto____1 = (function (state_35299){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35299);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35317){if((e35317 instanceof Object))
{var ex__5510__auto__ = e35317;var statearr_35318_35331 = state_35299;(statearr_35318_35331[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35299);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35317;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35332 = state_35299;
state_35299 = G__35332;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35299){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35319 = f__5522__auto__.call(null);(statearr_35319[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35320);
return statearr_35319;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___35419 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35397){var state_val_35398 = (state_35397[1]);if((state_val_35398 === 1))
{var state_35397__$1 = state_35397;var statearr_35399_35420 = state_35397__$1;(statearr_35399_35420[2] = null);
(statearr_35399_35420[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35398 === 2))
{var state_35397__$1 = state_35397;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35397__$1,4,ch);
} else
{if((state_val_35398 === 3))
{var inst_35395 = (state_35397[2]);var state_35397__$1 = state_35397;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35397__$1,inst_35395);
} else
{if((state_val_35398 === 4))
{var inst_35378 = (state_35397[7]);var inst_35378__$1 = (state_35397[2]);var inst_35379 = (inst_35378__$1 == null);var state_35397__$1 = (function (){var statearr_35400 = state_35397;(statearr_35400[7] = inst_35378__$1);
return statearr_35400;
})();if(cljs.core.truth_(inst_35379))
{var statearr_35401_35421 = state_35397__$1;(statearr_35401_35421[1] = 5);
} else
{var statearr_35402_35422 = state_35397__$1;(statearr_35402_35422[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35398 === 5))
{var inst_35381 = cljs.core.async.close_BANG_.call(null,tc);var inst_35382 = cljs.core.async.close_BANG_.call(null,fc);var state_35397__$1 = (function (){var statearr_35403 = state_35397;(statearr_35403[8] = inst_35381);
return statearr_35403;
})();var statearr_35404_35423 = state_35397__$1;(statearr_35404_35423[2] = inst_35382);
(statearr_35404_35423[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35398 === 6))
{var inst_35378 = (state_35397[7]);var inst_35384 = p.call(null,inst_35378);var state_35397__$1 = state_35397;if(cljs.core.truth_(inst_35384))
{var statearr_35405_35424 = state_35397__$1;(statearr_35405_35424[1] = 9);
} else
{var statearr_35406_35425 = state_35397__$1;(statearr_35406_35425[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35398 === 7))
{var inst_35393 = (state_35397[2]);var state_35397__$1 = state_35397;var statearr_35407_35426 = state_35397__$1;(statearr_35407_35426[2] = inst_35393);
(statearr_35407_35426[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35398 === 8))
{var inst_35390 = (state_35397[2]);var state_35397__$1 = (function (){var statearr_35408 = state_35397;(statearr_35408[9] = inst_35390);
return statearr_35408;
})();var statearr_35409_35427 = state_35397__$1;(statearr_35409_35427[2] = null);
(statearr_35409_35427[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35398 === 9))
{var state_35397__$1 = state_35397;var statearr_35410_35428 = state_35397__$1;(statearr_35410_35428[2] = tc);
(statearr_35410_35428[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35398 === 10))
{var state_35397__$1 = state_35397;var statearr_35411_35429 = state_35397__$1;(statearr_35411_35429[2] = fc);
(statearr_35411_35429[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35398 === 11))
{var inst_35378 = (state_35397[7]);var inst_35388 = (state_35397[2]);var state_35397__$1 = state_35397;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35397__$1,8,inst_35388,inst_35378);
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
var state_machine__5507__auto____0 = (function (){var statearr_35415 = [null,null,null,null,null,null,null,null,null,null];(statearr_35415[0] = state_machine__5507__auto__);
(statearr_35415[1] = 1);
return statearr_35415;
});
var state_machine__5507__auto____1 = (function (state_35397){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35397);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35416){if((e35416 instanceof Object))
{var ex__5510__auto__ = e35416;var statearr_35417_35430 = state_35397;(statearr_35417_35430[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35397);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35416;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35431 = state_35397;
state_35397 = G__35431;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35397){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35418 = f__5522__auto__.call(null);(statearr_35418[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35419);
return statearr_35418;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35478){var state_val_35479 = (state_35478[1]);if((state_val_35479 === 7))
{var inst_35474 = (state_35478[2]);var state_35478__$1 = state_35478;var statearr_35480_35496 = state_35478__$1;(statearr_35480_35496[2] = inst_35474);
(statearr_35480_35496[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35479 === 6))
{var inst_35467 = (state_35478[7]);var inst_35464 = (state_35478[8]);var inst_35471 = f.call(null,inst_35464,inst_35467);var inst_35464__$1 = inst_35471;var state_35478__$1 = (function (){var statearr_35481 = state_35478;(statearr_35481[8] = inst_35464__$1);
return statearr_35481;
})();var statearr_35482_35497 = state_35478__$1;(statearr_35482_35497[2] = null);
(statearr_35482_35497[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35479 === 5))
{var inst_35464 = (state_35478[8]);var state_35478__$1 = state_35478;var statearr_35483_35498 = state_35478__$1;(statearr_35483_35498[2] = inst_35464);
(statearr_35483_35498[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35479 === 4))
{var inst_35467 = (state_35478[7]);var inst_35467__$1 = (state_35478[2]);var inst_35468 = (inst_35467__$1 == null);var state_35478__$1 = (function (){var statearr_35484 = state_35478;(statearr_35484[7] = inst_35467__$1);
return statearr_35484;
})();if(cljs.core.truth_(inst_35468))
{var statearr_35485_35499 = state_35478__$1;(statearr_35485_35499[1] = 5);
} else
{var statearr_35486_35500 = state_35478__$1;(statearr_35486_35500[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35479 === 3))
{var inst_35476 = (state_35478[2]);var state_35478__$1 = state_35478;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35478__$1,inst_35476);
} else
{if((state_val_35479 === 2))
{var state_35478__$1 = state_35478;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35478__$1,4,ch);
} else
{if((state_val_35479 === 1))
{var inst_35464 = init;var state_35478__$1 = (function (){var statearr_35487 = state_35478;(statearr_35487[8] = inst_35464);
return statearr_35487;
})();var statearr_35488_35501 = state_35478__$1;(statearr_35488_35501[2] = null);
(statearr_35488_35501[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_35492 = [null,null,null,null,null,null,null,null,null];(statearr_35492[0] = state_machine__5507__auto__);
(statearr_35492[1] = 1);
return statearr_35492;
});
var state_machine__5507__auto____1 = (function (state_35478){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35478);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35493){if((e35493 instanceof Object))
{var ex__5510__auto__ = e35493;var statearr_35494_35502 = state_35478;(statearr_35494_35502[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35478);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35493;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35503 = state_35478;
state_35478 = G__35503;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35478){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35495 = f__5522__auto__.call(null);(statearr_35495[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_35495;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35565){var state_val_35566 = (state_35565[1]);if((state_val_35566 === 1))
{var inst_35545 = cljs.core.seq.call(null,coll);var inst_35546 = inst_35545;var state_35565__$1 = (function (){var statearr_35567 = state_35565;(statearr_35567[7] = inst_35546);
return statearr_35567;
})();var statearr_35568_35586 = state_35565__$1;(statearr_35568_35586[2] = null);
(statearr_35568_35586[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35566 === 2))
{var inst_35546 = (state_35565[7]);var state_35565__$1 = state_35565;if(cljs.core.truth_(inst_35546))
{var statearr_35569_35587 = state_35565__$1;(statearr_35569_35587[1] = 4);
} else
{var statearr_35570_35588 = state_35565__$1;(statearr_35570_35588[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35566 === 3))
{var inst_35563 = (state_35565[2]);var state_35565__$1 = state_35565;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35565__$1,inst_35563);
} else
{if((state_val_35566 === 4))
{var inst_35546 = (state_35565[7]);var inst_35549 = cljs.core.first.call(null,inst_35546);var state_35565__$1 = state_35565;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35565__$1,7,ch,inst_35549);
} else
{if((state_val_35566 === 5))
{var state_35565__$1 = state_35565;if(cljs.core.truth_(close_QMARK_))
{var statearr_35571_35589 = state_35565__$1;(statearr_35571_35589[1] = 8);
} else
{var statearr_35572_35590 = state_35565__$1;(statearr_35572_35590[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35566 === 6))
{var inst_35561 = (state_35565[2]);var state_35565__$1 = state_35565;var statearr_35573_35591 = state_35565__$1;(statearr_35573_35591[2] = inst_35561);
(statearr_35573_35591[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35566 === 7))
{var inst_35546 = (state_35565[7]);var inst_35551 = (state_35565[2]);var inst_35552 = cljs.core.next.call(null,inst_35546);var inst_35546__$1 = inst_35552;var state_35565__$1 = (function (){var statearr_35574 = state_35565;(statearr_35574[8] = inst_35551);
(statearr_35574[7] = inst_35546__$1);
return statearr_35574;
})();var statearr_35575_35592 = state_35565__$1;(statearr_35575_35592[2] = null);
(statearr_35575_35592[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35566 === 8))
{var inst_35556 = cljs.core.async.close_BANG_.call(null,ch);var state_35565__$1 = state_35565;var statearr_35576_35593 = state_35565__$1;(statearr_35576_35593[2] = inst_35556);
(statearr_35576_35593[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35566 === 9))
{var state_35565__$1 = state_35565;var statearr_35577_35594 = state_35565__$1;(statearr_35577_35594[2] = null);
(statearr_35577_35594[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35566 === 10))
{var inst_35559 = (state_35565[2]);var state_35565__$1 = state_35565;var statearr_35578_35595 = state_35565__$1;(statearr_35578_35595[2] = inst_35559);
(statearr_35578_35595[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_35582 = [null,null,null,null,null,null,null,null,null];(statearr_35582[0] = state_machine__5507__auto__);
(statearr_35582[1] = 1);
return statearr_35582;
});
var state_machine__5507__auto____1 = (function (state_35565){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35565);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35583){if((e35583 instanceof Object))
{var ex__5510__auto__ = e35583;var statearr_35584_35596 = state_35565;(statearr_35584_35596[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35565);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35583;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35597 = state_35565;
state_35565 = G__35597;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35565){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35585 = f__5522__auto__.call(null);(statearr_35585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_35585;
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
cljs.core.async.Mux = (function (){var obj35599 = {};return obj35599;
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
cljs.core.async.Mult = (function (){var obj35601 = {};return obj35601;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t35825 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35825 = (function (cs,ch,mult,meta35826){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta35826 = meta35826;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35825.cljs$lang$type = true;
cljs.core.async.t35825.cljs$lang$ctorStr = "cljs.core.async/t35825";
cljs.core.async.t35825.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t35825");
});})(cs))
;
cljs.core.async.t35825.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t35825.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t35825.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t35825.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t35825.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t35825.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t35825.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_35827){var self__ = this;
var _35827__$1 = this;return self__.meta35826;
});})(cs))
;
cljs.core.async.t35825.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_35827,meta35826__$1){var self__ = this;
var _35827__$1 = this;return (new cljs.core.async.t35825(self__.cs,self__.ch,self__.mult,meta35826__$1));
});})(cs))
;
cljs.core.async.__GT_t35825 = ((function (cs){
return (function __GT_t35825(cs__$1,ch__$1,mult__$1,meta35826){return (new cljs.core.async.t35825(cs__$1,ch__$1,mult__$1,meta35826));
});})(cs))
;
}
return (new cljs.core.async.t35825(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___36048 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35962){var state_val_35963 = (state_35962[1]);if((state_val_35963 === 32))
{var inst_35906 = (state_35962[7]);var inst_35830 = (state_35962[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35962,31,Object,null,30);var inst_35913 = cljs.core.async.put_BANG_.call(null,inst_35906,inst_35830,done);var state_35962__$1 = state_35962;var statearr_35964_36049 = state_35962__$1;(statearr_35964_36049[2] = inst_35913);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35962__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35963 === 1))
{var state_35962__$1 = state_35962;var statearr_35965_36050 = state_35962__$1;(statearr_35965_36050[2] = null);
(statearr_35965_36050[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35963 === 33))
{var inst_35919 = (state_35962[9]);var inst_35921 = cljs.core.chunked_seq_QMARK_.call(null,inst_35919);var state_35962__$1 = state_35962;if(inst_35921)
{var statearr_35966_36051 = state_35962__$1;(statearr_35966_36051[1] = 36);
} else
{var statearr_35967_36052 = state_35962__$1;(statearr_35967_36052[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35963 === 2))
{var state_35962__$1 = state_35962;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35962__$1,4,ch);
} else
{if((state_val_35963 === 34))
{var state_35962__$1 = state_35962;var statearr_35968_36053 = state_35962__$1;(statearr_35968_36053[2] = null);
(statearr_35968_36053[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35963 === 3))
{var inst_35960 = (state_35962[2]);var state_35962__$1 = state_35962;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35962__$1,inst_35960);
} else
{if((state_val_35963 === 35))
{var inst_35944 = (state_35962[2]);var state_35962__$1 = state_35962;var statearr_35969_36054 = state_35962__$1;(statearr_35969_36054[2] = inst_35944);
(statearr_35969_36054[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35963 === 4))
{var inst_35830 = (state_35962[8]);var inst_35830__$1 = (state_35962[2]);var inst_35831 = (inst_35830__$1 == null);var state_35962__$1 = (function (){var statearr_35970 = state_35962;(statearr_35970[8] = inst_35830__$1);
return statearr_35970;
})();if(cljs.core.truth_(inst_35831))
{var statearr_35971_36055 = state_35962__$1;(statearr_35971_36055[1] = 5);
} else
{var statearr_35972_36056 = state_35962__$1;(statearr_35972_36056[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35963 === 36))
{var inst_35919 = (state_35962[9]);var inst_35923 = cljs.core.chunk_first.call(null,inst_35919);var inst_35924 = cljs.core.chunk_rest.call(null,inst_35919);var inst_35925 = cljs.core.count.call(null,inst_35923);var inst_35898 = inst_35924;var inst_35899 = inst_35923;var inst_35900 = inst_35925;var inst_35901 = 0;var state_35962__$1 = (function (){var statearr_35973 = state_35962;(statearr_35973[10] = inst_35898);
(statearr_35973[11] = inst_35899);
(statearr_35973[12] = inst_35900);
(statearr_35973[13] = inst_35901);
return statearr_35973;
})();var statearr_35974_36057 = state_35962__$1;(statearr_35974_36057[2] = null);
(statearr_35974_36057[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35963 === 5))
{var inst_35837 = cljs.core.deref.call(null,cs);var inst_35838 = cljs.core.seq.call(null,inst_35837);var inst_35839 = inst_35838;var inst_35840 = null;var inst_35841 = 0;var inst_35842 = 0;var state_35962__$1 = (function (){var statearr_35975 = state_35962;(statearr_35975[14] = inst_35839);
(statearr_35975[15] = inst_35842);
(statearr_35975[16] = inst_35841);
(statearr_35975[17] = inst_35840);
return statearr_35975;
})();var statearr_35976_36058 = state_35962__$1;(statearr_35976_36058[2] = null);
(statearr_35976_36058[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35963 === 37))
{var inst_35919 = (state_35962[9]);var inst_35928 = cljs.core.first.call(null,inst_35919);var state_35962__$1 = (function (){var statearr_35977 = state_35962;(statearr_35977[18] = inst_35928);
return statearr_35977;
})();var statearr_35978_36059 = state_35962__$1;(statearr_35978_36059[2] = null);
(statearr_35978_36059[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35963 === 6))
{var inst_35890 = (state_35962[19]);var inst_35889 = cljs.core.deref.call(null,cs);var inst_35890__$1 = cljs.core.keys.call(null,inst_35889);var inst_35891 = cljs.core.count.call(null,inst_35890__$1);var inst_35892 = cljs.core.reset_BANG_.call(null,dctr,inst_35891);var inst_35897 = cljs.core.seq.call(null,inst_35890__$1);var inst_35898 = inst_35897;var inst_35899 = null;var inst_35900 = 0;var inst_35901 = 0;var state_35962__$1 = (function (){var statearr_35979 = state_35962;(statearr_35979[20] = inst_35892);
(statearr_35979[19] = inst_35890__$1);
(statearr_35979[10] = inst_35898);
(statearr_35979[11] = inst_35899);
(statearr_35979[12] = inst_35900);
(statearr_35979[13] = inst_35901);
return statearr_35979;
})();var statearr_35980_36060 = state_35962__$1;(statearr_35980_36060[2] = null);
(statearr_35980_36060[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35963 === 38))
{var inst_35941 = (state_35962[2]);var state_35962__$1 = state_35962;var statearr_35981_36061 = state_35962__$1;(statearr_35981_36061[2] = inst_35941);
(statearr_35981_36061[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35963 === 7))
{var inst_35958 = (state_35962[2]);var state_35962__$1 = state_35962;var statearr_35982_36062 = state_35962__$1;(statearr_35982_36062[2] = inst_35958);
(statearr_35982_36062[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35963 === 39))
{var inst_35919 = (state_35962[9]);var inst_35937 = (state_35962[2]);var inst_35938 = cljs.core.next.call(null,inst_35919);var inst_35898 = inst_35938;var inst_35899 = null;var inst_35900 = 0;var inst_35901 = 0;var state_35962__$1 = (function (){var statearr_35983 = state_35962;(statearr_35983[10] = inst_35898);
(statearr_35983[11] = inst_35899);
(statearr_35983[21] = inst_35937);
(statearr_35983[12] = inst_35900);
(statearr_35983[13] = inst_35901);
return statearr_35983;
})();var statearr_35984_36063 = state_35962__$1;(statearr_35984_36063[2] = null);
(statearr_35984_36063[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35963 === 8))
{var inst_35842 = (state_35962[15]);var inst_35841 = (state_35962[16]);var inst_35844 = (inst_35842 < inst_35841);var inst_35845 = inst_35844;var state_35962__$1 = state_35962;if(cljs.core.truth_(inst_35845))
{var statearr_35985_36064 = state_35962__$1;(statearr_35985_36064[1] = 10);
} else
{var statearr_35986_36065 = state_35962__$1;(statearr_35986_36065[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35963 === 40))
{var inst_35928 = (state_35962[18]);var inst_35929 = (state_35962[2]);var inst_35930 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_35931 = cljs.core.async.untap_STAR_.call(null,m,inst_35928);var state_35962__$1 = (function (){var statearr_35987 = state_35962;(statearr_35987[22] = inst_35930);
(statearr_35987[23] = inst_35929);
return statearr_35987;
})();var statearr_35988_36066 = state_35962__$1;(statearr_35988_36066[2] = inst_35931);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35962__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35963 === 9))
{var inst_35887 = (state_35962[2]);var state_35962__$1 = state_35962;var statearr_35989_36067 = state_35962__$1;(statearr_35989_36067[2] = inst_35887);
(statearr_35989_36067[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35963 === 41))
{var inst_35928 = (state_35962[18]);var inst_35830 = (state_35962[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35962,40,Object,null,39);var inst_35935 = cljs.core.async.put_BANG_.call(null,inst_35928,inst_35830,done);var state_35962__$1 = state_35962;var statearr_35990_36068 = state_35962__$1;(statearr_35990_36068[2] = inst_35935);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35962__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35963 === 10))
{var inst_35842 = (state_35962[15]);var inst_35840 = (state_35962[17]);var inst_35848 = cljs.core._nth.call(null,inst_35840,inst_35842);var inst_35849 = cljs.core.nth.call(null,inst_35848,0,null);var inst_35850 = cljs.core.nth.call(null,inst_35848,1,null);var state_35962__$1 = (function (){var statearr_35991 = state_35962;(statearr_35991[24] = inst_35849);
return statearr_35991;
})();if(cljs.core.truth_(inst_35850))
{var statearr_35992_36069 = state_35962__$1;(statearr_35992_36069[1] = 13);
} else
{var statearr_35993_36070 = state_35962__$1;(statearr_35993_36070[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35963 === 42))
{var state_35962__$1 = state_35962;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35962__$1,45,dchan);
} else
{if((state_val_35963 === 11))
{var inst_35839 = (state_35962[14]);var inst_35859 = (state_35962[25]);var inst_35859__$1 = cljs.core.seq.call(null,inst_35839);var state_35962__$1 = (function (){var statearr_35994 = state_35962;(statearr_35994[25] = inst_35859__$1);
return statearr_35994;
})();if(inst_35859__$1)
{var statearr_35995_36071 = state_35962__$1;(statearr_35995_36071[1] = 16);
} else
{var statearr_35996_36072 = state_35962__$1;(statearr_35996_36072[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35963 === 43))
{var state_35962__$1 = state_35962;var statearr_35997_36073 = state_35962__$1;(statearr_35997_36073[2] = null);
(statearr_35997_36073[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35963 === 12))
{var inst_35885 = (state_35962[2]);var state_35962__$1 = state_35962;var statearr_35998_36074 = state_35962__$1;(statearr_35998_36074[2] = inst_35885);
(statearr_35998_36074[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35963 === 44))
{var inst_35955 = (state_35962[2]);var state_35962__$1 = (function (){var statearr_35999 = state_35962;(statearr_35999[26] = inst_35955);
return statearr_35999;
})();var statearr_36000_36075 = state_35962__$1;(statearr_36000_36075[2] = null);
(statearr_36000_36075[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35963 === 13))
{var inst_35849 = (state_35962[24]);var inst_35852 = cljs.core.async.close_BANG_.call(null,inst_35849);var state_35962__$1 = state_35962;var statearr_36001_36076 = state_35962__$1;(statearr_36001_36076[2] = inst_35852);
(statearr_36001_36076[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35963 === 45))
{var inst_35952 = (state_35962[2]);var state_35962__$1 = state_35962;var statearr_36005_36077 = state_35962__$1;(statearr_36005_36077[2] = inst_35952);
(statearr_36005_36077[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35963 === 14))
{var state_35962__$1 = state_35962;var statearr_36006_36078 = state_35962__$1;(statearr_36006_36078[2] = null);
(statearr_36006_36078[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35963 === 15))
{var inst_35839 = (state_35962[14]);var inst_35842 = (state_35962[15]);var inst_35841 = (state_35962[16]);var inst_35840 = (state_35962[17]);var inst_35855 = (state_35962[2]);var inst_35856 = (inst_35842 + 1);var tmp36002 = inst_35839;var tmp36003 = inst_35841;var tmp36004 = inst_35840;var inst_35839__$1 = tmp36002;var inst_35840__$1 = tmp36004;var inst_35841__$1 = tmp36003;var inst_35842__$1 = inst_35856;var state_35962__$1 = (function (){var statearr_36007 = state_35962;(statearr_36007[27] = inst_35855);
(statearr_36007[14] = inst_35839__$1);
(statearr_36007[15] = inst_35842__$1);
(statearr_36007[16] = inst_35841__$1);
(statearr_36007[17] = inst_35840__$1);
return statearr_36007;
})();var statearr_36008_36079 = state_35962__$1;(statearr_36008_36079[2] = null);
(statearr_36008_36079[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35963 === 16))
{var inst_35859 = (state_35962[25]);var inst_35861 = cljs.core.chunked_seq_QMARK_.call(null,inst_35859);var state_35962__$1 = state_35962;if(inst_35861)
{var statearr_36009_36080 = state_35962__$1;(statearr_36009_36080[1] = 19);
} else
{var statearr_36010_36081 = state_35962__$1;(statearr_36010_36081[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35963 === 17))
{var state_35962__$1 = state_35962;var statearr_36011_36082 = state_35962__$1;(statearr_36011_36082[2] = null);
(statearr_36011_36082[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35963 === 18))
{var inst_35883 = (state_35962[2]);var state_35962__$1 = state_35962;var statearr_36012_36083 = state_35962__$1;(statearr_36012_36083[2] = inst_35883);
(statearr_36012_36083[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35963 === 19))
{var inst_35859 = (state_35962[25]);var inst_35863 = cljs.core.chunk_first.call(null,inst_35859);var inst_35864 = cljs.core.chunk_rest.call(null,inst_35859);var inst_35865 = cljs.core.count.call(null,inst_35863);var inst_35839 = inst_35864;var inst_35840 = inst_35863;var inst_35841 = inst_35865;var inst_35842 = 0;var state_35962__$1 = (function (){var statearr_36013 = state_35962;(statearr_36013[14] = inst_35839);
(statearr_36013[15] = inst_35842);
(statearr_36013[16] = inst_35841);
(statearr_36013[17] = inst_35840);
return statearr_36013;
})();var statearr_36014_36084 = state_35962__$1;(statearr_36014_36084[2] = null);
(statearr_36014_36084[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35963 === 20))
{var inst_35859 = (state_35962[25]);var inst_35869 = cljs.core.first.call(null,inst_35859);var inst_35870 = cljs.core.nth.call(null,inst_35869,0,null);var inst_35871 = cljs.core.nth.call(null,inst_35869,1,null);var state_35962__$1 = (function (){var statearr_36015 = state_35962;(statearr_36015[28] = inst_35870);
return statearr_36015;
})();if(cljs.core.truth_(inst_35871))
{var statearr_36016_36085 = state_35962__$1;(statearr_36016_36085[1] = 22);
} else
{var statearr_36017_36086 = state_35962__$1;(statearr_36017_36086[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35963 === 21))
{var inst_35880 = (state_35962[2]);var state_35962__$1 = state_35962;var statearr_36018_36087 = state_35962__$1;(statearr_36018_36087[2] = inst_35880);
(statearr_36018_36087[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35963 === 22))
{var inst_35870 = (state_35962[28]);var inst_35873 = cljs.core.async.close_BANG_.call(null,inst_35870);var state_35962__$1 = state_35962;var statearr_36019_36088 = state_35962__$1;(statearr_36019_36088[2] = inst_35873);
(statearr_36019_36088[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35963 === 23))
{var state_35962__$1 = state_35962;var statearr_36020_36089 = state_35962__$1;(statearr_36020_36089[2] = null);
(statearr_36020_36089[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35963 === 24))
{var inst_35859 = (state_35962[25]);var inst_35876 = (state_35962[2]);var inst_35877 = cljs.core.next.call(null,inst_35859);var inst_35839 = inst_35877;var inst_35840 = null;var inst_35841 = 0;var inst_35842 = 0;var state_35962__$1 = (function (){var statearr_36021 = state_35962;(statearr_36021[14] = inst_35839);
(statearr_36021[15] = inst_35842);
(statearr_36021[29] = inst_35876);
(statearr_36021[16] = inst_35841);
(statearr_36021[17] = inst_35840);
return statearr_36021;
})();var statearr_36022_36090 = state_35962__$1;(statearr_36022_36090[2] = null);
(statearr_36022_36090[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35963 === 25))
{var inst_35900 = (state_35962[12]);var inst_35901 = (state_35962[13]);var inst_35903 = (inst_35901 < inst_35900);var inst_35904 = inst_35903;var state_35962__$1 = state_35962;if(cljs.core.truth_(inst_35904))
{var statearr_36023_36091 = state_35962__$1;(statearr_36023_36091[1] = 27);
} else
{var statearr_36024_36092 = state_35962__$1;(statearr_36024_36092[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35963 === 26))
{var inst_35890 = (state_35962[19]);var inst_35948 = (state_35962[2]);var inst_35949 = cljs.core.seq.call(null,inst_35890);var state_35962__$1 = (function (){var statearr_36025 = state_35962;(statearr_36025[30] = inst_35948);
return statearr_36025;
})();if(inst_35949)
{var statearr_36026_36093 = state_35962__$1;(statearr_36026_36093[1] = 42);
} else
{var statearr_36027_36094 = state_35962__$1;(statearr_36027_36094[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35963 === 27))
{var inst_35899 = (state_35962[11]);var inst_35901 = (state_35962[13]);var inst_35906 = cljs.core._nth.call(null,inst_35899,inst_35901);var state_35962__$1 = (function (){var statearr_36028 = state_35962;(statearr_36028[7] = inst_35906);
return statearr_36028;
})();var statearr_36029_36095 = state_35962__$1;(statearr_36029_36095[2] = null);
(statearr_36029_36095[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35963 === 28))
{var inst_35898 = (state_35962[10]);var inst_35919 = (state_35962[9]);var inst_35919__$1 = cljs.core.seq.call(null,inst_35898);var state_35962__$1 = (function (){var statearr_36033 = state_35962;(statearr_36033[9] = inst_35919__$1);
return statearr_36033;
})();if(inst_35919__$1)
{var statearr_36034_36096 = state_35962__$1;(statearr_36034_36096[1] = 33);
} else
{var statearr_36035_36097 = state_35962__$1;(statearr_36035_36097[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35963 === 29))
{var inst_35946 = (state_35962[2]);var state_35962__$1 = state_35962;var statearr_36036_36098 = state_35962__$1;(statearr_36036_36098[2] = inst_35946);
(statearr_36036_36098[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35963 === 30))
{var inst_35898 = (state_35962[10]);var inst_35899 = (state_35962[11]);var inst_35900 = (state_35962[12]);var inst_35901 = (state_35962[13]);var inst_35915 = (state_35962[2]);var inst_35916 = (inst_35901 + 1);var tmp36030 = inst_35898;var tmp36031 = inst_35899;var tmp36032 = inst_35900;var inst_35898__$1 = tmp36030;var inst_35899__$1 = tmp36031;var inst_35900__$1 = tmp36032;var inst_35901__$1 = inst_35916;var state_35962__$1 = (function (){var statearr_36037 = state_35962;(statearr_36037[10] = inst_35898__$1);
(statearr_36037[11] = inst_35899__$1);
(statearr_36037[31] = inst_35915);
(statearr_36037[12] = inst_35900__$1);
(statearr_36037[13] = inst_35901__$1);
return statearr_36037;
})();var statearr_36038_36099 = state_35962__$1;(statearr_36038_36099[2] = null);
(statearr_36038_36099[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35963 === 31))
{var inst_35906 = (state_35962[7]);var inst_35907 = (state_35962[2]);var inst_35908 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_35909 = cljs.core.async.untap_STAR_.call(null,m,inst_35906);var state_35962__$1 = (function (){var statearr_36039 = state_35962;(statearr_36039[32] = inst_35908);
(statearr_36039[33] = inst_35907);
return statearr_36039;
})();var statearr_36040_36100 = state_35962__$1;(statearr_36040_36100[2] = inst_35909);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35962__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_36044 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36044[0] = state_machine__5507__auto__);
(statearr_36044[1] = 1);
return statearr_36044;
});
var state_machine__5507__auto____1 = (function (state_35962){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35962);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36045){if((e36045 instanceof Object))
{var ex__5510__auto__ = e36045;var statearr_36046_36101 = state_35962;(statearr_36046_36101[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35962);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36045;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36102 = state_35962;
state_35962 = G__36102;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35962){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36047 = f__5522__auto__.call(null);(statearr_36047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36048);
return statearr_36047;
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
cljs.core.async.Mix = (function (){var obj36104 = {};return obj36104;
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
;var m = (function (){if(typeof cljs.core.async.t36214 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36214 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta36215){
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
this.meta36215 = meta36215;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36214.cljs$lang$type = true;
cljs.core.async.t36214.cljs$lang$ctorStr = "cljs.core.async/t36214";
cljs.core.async.t36214.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t36214");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36214.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t36214.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36214.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36214.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36214.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36214.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36214.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t36214.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36214.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36216){var self__ = this;
var _36216__$1 = this;return self__.meta36215;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36214.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36216,meta36215__$1){var self__ = this;
var _36216__$1 = this;return (new cljs.core.async.t36214(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta36215__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t36214 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t36214(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta36215){return (new cljs.core.async.t36214(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta36215));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t36214(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___36323 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36281){var state_val_36282 = (state_36281[1]);if((state_val_36282 === 1))
{var inst_36220 = (state_36281[7]);var inst_36220__$1 = calc_state.call(null);var inst_36221 = cljs.core.seq_QMARK_.call(null,inst_36220__$1);var state_36281__$1 = (function (){var statearr_36283 = state_36281;(statearr_36283[7] = inst_36220__$1);
return statearr_36283;
})();if(inst_36221)
{var statearr_36284_36324 = state_36281__$1;(statearr_36284_36324[1] = 2);
} else
{var statearr_36285_36325 = state_36281__$1;(statearr_36285_36325[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36282 === 2))
{var inst_36220 = (state_36281[7]);var inst_36223 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36220);var state_36281__$1 = state_36281;var statearr_36286_36326 = state_36281__$1;(statearr_36286_36326[2] = inst_36223);
(statearr_36286_36326[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36282 === 3))
{var inst_36220 = (state_36281[7]);var state_36281__$1 = state_36281;var statearr_36287_36327 = state_36281__$1;(statearr_36287_36327[2] = inst_36220);
(statearr_36287_36327[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36282 === 4))
{var inst_36220 = (state_36281[7]);var inst_36226 = (state_36281[2]);var inst_36227 = cljs.core.get.call(null,inst_36226,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_36228 = cljs.core.get.call(null,inst_36226,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_36229 = cljs.core.get.call(null,inst_36226,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_36230 = inst_36220;var state_36281__$1 = (function (){var statearr_36288 = state_36281;(statearr_36288[8] = inst_36228);
(statearr_36288[9] = inst_36229);
(statearr_36288[10] = inst_36227);
(statearr_36288[11] = inst_36230);
return statearr_36288;
})();var statearr_36289_36328 = state_36281__$1;(statearr_36289_36328[2] = null);
(statearr_36289_36328[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36282 === 5))
{var inst_36230 = (state_36281[11]);var inst_36233 = cljs.core.seq_QMARK_.call(null,inst_36230);var state_36281__$1 = state_36281;if(inst_36233)
{var statearr_36290_36329 = state_36281__$1;(statearr_36290_36329[1] = 7);
} else
{var statearr_36291_36330 = state_36281__$1;(statearr_36291_36330[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36282 === 6))
{var inst_36279 = (state_36281[2]);var state_36281__$1 = state_36281;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36281__$1,inst_36279);
} else
{if((state_val_36282 === 7))
{var inst_36230 = (state_36281[11]);var inst_36235 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36230);var state_36281__$1 = state_36281;var statearr_36292_36331 = state_36281__$1;(statearr_36292_36331[2] = inst_36235);
(statearr_36292_36331[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36282 === 8))
{var inst_36230 = (state_36281[11]);var state_36281__$1 = state_36281;var statearr_36293_36332 = state_36281__$1;(statearr_36293_36332[2] = inst_36230);
(statearr_36293_36332[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36282 === 9))
{var inst_36238 = (state_36281[12]);var inst_36238__$1 = (state_36281[2]);var inst_36239 = cljs.core.get.call(null,inst_36238__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_36240 = cljs.core.get.call(null,inst_36238__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_36241 = cljs.core.get.call(null,inst_36238__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_36281__$1 = (function (){var statearr_36294 = state_36281;(statearr_36294[12] = inst_36238__$1);
(statearr_36294[13] = inst_36241);
(statearr_36294[14] = inst_36240);
return statearr_36294;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_36281__$1,10,inst_36239);
} else
{if((state_val_36282 === 10))
{var inst_36245 = (state_36281[15]);var inst_36246 = (state_36281[16]);var inst_36244 = (state_36281[2]);var inst_36245__$1 = cljs.core.nth.call(null,inst_36244,0,null);var inst_36246__$1 = cljs.core.nth.call(null,inst_36244,1,null);var inst_36247 = (inst_36245__$1 == null);var inst_36248 = cljs.core._EQ_.call(null,inst_36246__$1,change);var inst_36249 = (inst_36247) || (inst_36248);var state_36281__$1 = (function (){var statearr_36295 = state_36281;(statearr_36295[15] = inst_36245__$1);
(statearr_36295[16] = inst_36246__$1);
return statearr_36295;
})();if(cljs.core.truth_(inst_36249))
{var statearr_36296_36333 = state_36281__$1;(statearr_36296_36333[1] = 11);
} else
{var statearr_36297_36334 = state_36281__$1;(statearr_36297_36334[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36282 === 11))
{var inst_36245 = (state_36281[15]);var inst_36251 = (inst_36245 == null);var state_36281__$1 = state_36281;if(cljs.core.truth_(inst_36251))
{var statearr_36298_36335 = state_36281__$1;(statearr_36298_36335[1] = 14);
} else
{var statearr_36299_36336 = state_36281__$1;(statearr_36299_36336[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36282 === 12))
{var inst_36260 = (state_36281[17]);var inst_36241 = (state_36281[13]);var inst_36246 = (state_36281[16]);var inst_36260__$1 = inst_36241.call(null,inst_36246);var state_36281__$1 = (function (){var statearr_36300 = state_36281;(statearr_36300[17] = inst_36260__$1);
return statearr_36300;
})();if(cljs.core.truth_(inst_36260__$1))
{var statearr_36301_36337 = state_36281__$1;(statearr_36301_36337[1] = 17);
} else
{var statearr_36302_36338 = state_36281__$1;(statearr_36302_36338[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36282 === 13))
{var inst_36277 = (state_36281[2]);var state_36281__$1 = state_36281;var statearr_36303_36339 = state_36281__$1;(statearr_36303_36339[2] = inst_36277);
(statearr_36303_36339[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36282 === 14))
{var inst_36246 = (state_36281[16]);var inst_36253 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_36246);var state_36281__$1 = state_36281;var statearr_36304_36340 = state_36281__$1;(statearr_36304_36340[2] = inst_36253);
(statearr_36304_36340[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36282 === 15))
{var state_36281__$1 = state_36281;var statearr_36305_36341 = state_36281__$1;(statearr_36305_36341[2] = null);
(statearr_36305_36341[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36282 === 16))
{var inst_36256 = (state_36281[2]);var inst_36257 = calc_state.call(null);var inst_36230 = inst_36257;var state_36281__$1 = (function (){var statearr_36306 = state_36281;(statearr_36306[11] = inst_36230);
(statearr_36306[18] = inst_36256);
return statearr_36306;
})();var statearr_36307_36342 = state_36281__$1;(statearr_36307_36342[2] = null);
(statearr_36307_36342[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36282 === 17))
{var inst_36260 = (state_36281[17]);var state_36281__$1 = state_36281;var statearr_36308_36343 = state_36281__$1;(statearr_36308_36343[2] = inst_36260);
(statearr_36308_36343[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36282 === 18))
{var inst_36241 = (state_36281[13]);var inst_36240 = (state_36281[14]);var inst_36246 = (state_36281[16]);var inst_36263 = cljs.core.empty_QMARK_.call(null,inst_36241);var inst_36264 = inst_36240.call(null,inst_36246);var inst_36265 = cljs.core.not.call(null,inst_36264);var inst_36266 = (inst_36263) && (inst_36265);var state_36281__$1 = state_36281;var statearr_36309_36344 = state_36281__$1;(statearr_36309_36344[2] = inst_36266);
(statearr_36309_36344[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36282 === 19))
{var inst_36268 = (state_36281[2]);var state_36281__$1 = state_36281;if(cljs.core.truth_(inst_36268))
{var statearr_36310_36345 = state_36281__$1;(statearr_36310_36345[1] = 20);
} else
{var statearr_36311_36346 = state_36281__$1;(statearr_36311_36346[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36282 === 20))
{var inst_36245 = (state_36281[15]);var state_36281__$1 = state_36281;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36281__$1,23,out,inst_36245);
} else
{if((state_val_36282 === 21))
{var state_36281__$1 = state_36281;var statearr_36312_36347 = state_36281__$1;(statearr_36312_36347[2] = null);
(statearr_36312_36347[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36282 === 22))
{var inst_36238 = (state_36281[12]);var inst_36274 = (state_36281[2]);var inst_36230 = inst_36238;var state_36281__$1 = (function (){var statearr_36313 = state_36281;(statearr_36313[11] = inst_36230);
(statearr_36313[19] = inst_36274);
return statearr_36313;
})();var statearr_36314_36348 = state_36281__$1;(statearr_36314_36348[2] = null);
(statearr_36314_36348[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36282 === 23))
{var inst_36271 = (state_36281[2]);var state_36281__$1 = state_36281;var statearr_36315_36349 = state_36281__$1;(statearr_36315_36349[2] = inst_36271);
(statearr_36315_36349[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_36319 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36319[0] = state_machine__5507__auto__);
(statearr_36319[1] = 1);
return statearr_36319;
});
var state_machine__5507__auto____1 = (function (state_36281){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36281);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36320){if((e36320 instanceof Object))
{var ex__5510__auto__ = e36320;var statearr_36321_36350 = state_36281;(statearr_36321_36350[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36281);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36320;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36351 = state_36281;
state_36281 = G__36351;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36281){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36322 = f__5522__auto__.call(null);(statearr_36322[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36323);
return statearr_36322;
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
cljs.core.async.Pub = (function (){var obj36353 = {};return obj36353;
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
return (function (p1__36354_SHARP_){if(cljs.core.truth_(p1__36354_SHARP_.call(null,topic)))
{return p1__36354_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__36354_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t36479 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36479 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta36480){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta36480 = meta36480;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36479.cljs$lang$type = true;
cljs.core.async.t36479.cljs$lang$ctorStr = "cljs.core.async/t36479";
cljs.core.async.t36479.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t36479");
});})(mults,ensure_mult))
;
cljs.core.async.t36479.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t36479.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t36479.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t36479.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t36479.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t36479.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t36479.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t36479.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_36481){var self__ = this;
var _36481__$1 = this;return self__.meta36480;
});})(mults,ensure_mult))
;
cljs.core.async.t36479.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_36481,meta36480__$1){var self__ = this;
var _36481__$1 = this;return (new cljs.core.async.t36479(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta36480__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t36479 = ((function (mults,ensure_mult){
return (function __GT_t36479(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta36480){return (new cljs.core.async.t36479(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta36480));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t36479(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___36603 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36555){var state_val_36556 = (state_36555[1]);if((state_val_36556 === 1))
{var state_36555__$1 = state_36555;var statearr_36557_36604 = state_36555__$1;(statearr_36557_36604[2] = null);
(statearr_36557_36604[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36556 === 2))
{var state_36555__$1 = state_36555;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36555__$1,4,ch);
} else
{if((state_val_36556 === 3))
{var inst_36553 = (state_36555[2]);var state_36555__$1 = state_36555;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36555__$1,inst_36553);
} else
{if((state_val_36556 === 4))
{var inst_36484 = (state_36555[7]);var inst_36484__$1 = (state_36555[2]);var inst_36485 = (inst_36484__$1 == null);var state_36555__$1 = (function (){var statearr_36558 = state_36555;(statearr_36558[7] = inst_36484__$1);
return statearr_36558;
})();if(cljs.core.truth_(inst_36485))
{var statearr_36559_36605 = state_36555__$1;(statearr_36559_36605[1] = 5);
} else
{var statearr_36560_36606 = state_36555__$1;(statearr_36560_36606[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36556 === 5))
{var inst_36491 = cljs.core.deref.call(null,mults);var inst_36492 = cljs.core.vals.call(null,inst_36491);var inst_36493 = cljs.core.seq.call(null,inst_36492);var inst_36494 = inst_36493;var inst_36495 = null;var inst_36496 = 0;var inst_36497 = 0;var state_36555__$1 = (function (){var statearr_36561 = state_36555;(statearr_36561[8] = inst_36497);
(statearr_36561[9] = inst_36495);
(statearr_36561[10] = inst_36496);
(statearr_36561[11] = inst_36494);
return statearr_36561;
})();var statearr_36562_36607 = state_36555__$1;(statearr_36562_36607[2] = null);
(statearr_36562_36607[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36556 === 6))
{var inst_36484 = (state_36555[7]);var inst_36534 = (state_36555[12]);var inst_36532 = (state_36555[13]);var inst_36532__$1 = topic_fn.call(null,inst_36484);var inst_36533 = cljs.core.deref.call(null,mults);var inst_36534__$1 = cljs.core.get.call(null,inst_36533,inst_36532__$1);var state_36555__$1 = (function (){var statearr_36563 = state_36555;(statearr_36563[12] = inst_36534__$1);
(statearr_36563[13] = inst_36532__$1);
return statearr_36563;
})();if(cljs.core.truth_(inst_36534__$1))
{var statearr_36564_36608 = state_36555__$1;(statearr_36564_36608[1] = 19);
} else
{var statearr_36565_36609 = state_36555__$1;(statearr_36565_36609[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36556 === 7))
{var inst_36551 = (state_36555[2]);var state_36555__$1 = state_36555;var statearr_36566_36610 = state_36555__$1;(statearr_36566_36610[2] = inst_36551);
(statearr_36566_36610[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36556 === 8))
{var inst_36497 = (state_36555[8]);var inst_36496 = (state_36555[10]);var inst_36499 = (inst_36497 < inst_36496);var inst_36500 = inst_36499;var state_36555__$1 = state_36555;if(cljs.core.truth_(inst_36500))
{var statearr_36570_36611 = state_36555__$1;(statearr_36570_36611[1] = 10);
} else
{var statearr_36571_36612 = state_36555__$1;(statearr_36571_36612[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36556 === 9))
{var inst_36530 = (state_36555[2]);var state_36555__$1 = state_36555;var statearr_36572_36613 = state_36555__$1;(statearr_36572_36613[2] = inst_36530);
(statearr_36572_36613[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36556 === 10))
{var inst_36497 = (state_36555[8]);var inst_36495 = (state_36555[9]);var inst_36496 = (state_36555[10]);var inst_36494 = (state_36555[11]);var inst_36502 = cljs.core._nth.call(null,inst_36495,inst_36497);var inst_36503 = cljs.core.async.muxch_STAR_.call(null,inst_36502);var inst_36504 = cljs.core.async.close_BANG_.call(null,inst_36503);var inst_36505 = (inst_36497 + 1);var tmp36567 = inst_36495;var tmp36568 = inst_36496;var tmp36569 = inst_36494;var inst_36494__$1 = tmp36569;var inst_36495__$1 = tmp36567;var inst_36496__$1 = tmp36568;var inst_36497__$1 = inst_36505;var state_36555__$1 = (function (){var statearr_36573 = state_36555;(statearr_36573[14] = inst_36504);
(statearr_36573[8] = inst_36497__$1);
(statearr_36573[9] = inst_36495__$1);
(statearr_36573[10] = inst_36496__$1);
(statearr_36573[11] = inst_36494__$1);
return statearr_36573;
})();var statearr_36574_36614 = state_36555__$1;(statearr_36574_36614[2] = null);
(statearr_36574_36614[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36556 === 11))
{var inst_36508 = (state_36555[15]);var inst_36494 = (state_36555[11]);var inst_36508__$1 = cljs.core.seq.call(null,inst_36494);var state_36555__$1 = (function (){var statearr_36575 = state_36555;(statearr_36575[15] = inst_36508__$1);
return statearr_36575;
})();if(inst_36508__$1)
{var statearr_36576_36615 = state_36555__$1;(statearr_36576_36615[1] = 13);
} else
{var statearr_36577_36616 = state_36555__$1;(statearr_36577_36616[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36556 === 12))
{var inst_36528 = (state_36555[2]);var state_36555__$1 = state_36555;var statearr_36578_36617 = state_36555__$1;(statearr_36578_36617[2] = inst_36528);
(statearr_36578_36617[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36556 === 13))
{var inst_36508 = (state_36555[15]);var inst_36510 = cljs.core.chunked_seq_QMARK_.call(null,inst_36508);var state_36555__$1 = state_36555;if(inst_36510)
{var statearr_36579_36618 = state_36555__$1;(statearr_36579_36618[1] = 16);
} else
{var statearr_36580_36619 = state_36555__$1;(statearr_36580_36619[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36556 === 14))
{var state_36555__$1 = state_36555;var statearr_36581_36620 = state_36555__$1;(statearr_36581_36620[2] = null);
(statearr_36581_36620[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36556 === 15))
{var inst_36526 = (state_36555[2]);var state_36555__$1 = state_36555;var statearr_36582_36621 = state_36555__$1;(statearr_36582_36621[2] = inst_36526);
(statearr_36582_36621[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36556 === 16))
{var inst_36508 = (state_36555[15]);var inst_36512 = cljs.core.chunk_first.call(null,inst_36508);var inst_36513 = cljs.core.chunk_rest.call(null,inst_36508);var inst_36514 = cljs.core.count.call(null,inst_36512);var inst_36494 = inst_36513;var inst_36495 = inst_36512;var inst_36496 = inst_36514;var inst_36497 = 0;var state_36555__$1 = (function (){var statearr_36583 = state_36555;(statearr_36583[8] = inst_36497);
(statearr_36583[9] = inst_36495);
(statearr_36583[10] = inst_36496);
(statearr_36583[11] = inst_36494);
return statearr_36583;
})();var statearr_36584_36622 = state_36555__$1;(statearr_36584_36622[2] = null);
(statearr_36584_36622[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36556 === 17))
{var inst_36508 = (state_36555[15]);var inst_36517 = cljs.core.first.call(null,inst_36508);var inst_36518 = cljs.core.async.muxch_STAR_.call(null,inst_36517);var inst_36519 = cljs.core.async.close_BANG_.call(null,inst_36518);var inst_36520 = cljs.core.next.call(null,inst_36508);var inst_36494 = inst_36520;var inst_36495 = null;var inst_36496 = 0;var inst_36497 = 0;var state_36555__$1 = (function (){var statearr_36585 = state_36555;(statearr_36585[16] = inst_36519);
(statearr_36585[8] = inst_36497);
(statearr_36585[9] = inst_36495);
(statearr_36585[10] = inst_36496);
(statearr_36585[11] = inst_36494);
return statearr_36585;
})();var statearr_36586_36623 = state_36555__$1;(statearr_36586_36623[2] = null);
(statearr_36586_36623[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36556 === 18))
{var inst_36523 = (state_36555[2]);var state_36555__$1 = state_36555;var statearr_36587_36624 = state_36555__$1;(statearr_36587_36624[2] = inst_36523);
(statearr_36587_36624[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36556 === 19))
{var state_36555__$1 = state_36555;var statearr_36588_36625 = state_36555__$1;(statearr_36588_36625[2] = null);
(statearr_36588_36625[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36556 === 20))
{var state_36555__$1 = state_36555;var statearr_36589_36626 = state_36555__$1;(statearr_36589_36626[2] = null);
(statearr_36589_36626[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36556 === 21))
{var inst_36548 = (state_36555[2]);var state_36555__$1 = (function (){var statearr_36590 = state_36555;(statearr_36590[17] = inst_36548);
return statearr_36590;
})();var statearr_36591_36627 = state_36555__$1;(statearr_36591_36627[2] = null);
(statearr_36591_36627[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36556 === 22))
{var inst_36545 = (state_36555[2]);var state_36555__$1 = state_36555;var statearr_36592_36628 = state_36555__$1;(statearr_36592_36628[2] = inst_36545);
(statearr_36592_36628[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36556 === 23))
{var inst_36532 = (state_36555[13]);var inst_36536 = (state_36555[2]);var inst_36537 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_36532);var state_36555__$1 = (function (){var statearr_36593 = state_36555;(statearr_36593[18] = inst_36536);
return statearr_36593;
})();var statearr_36594_36629 = state_36555__$1;(statearr_36594_36629[2] = inst_36537);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36555__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36556 === 24))
{var inst_36484 = (state_36555[7]);var inst_36534 = (state_36555[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36555,23,Object,null,22);var inst_36541 = cljs.core.async.muxch_STAR_.call(null,inst_36534);var state_36555__$1 = state_36555;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36555__$1,25,inst_36541,inst_36484);
} else
{if((state_val_36556 === 25))
{var inst_36543 = (state_36555[2]);var state_36555__$1 = state_36555;var statearr_36595_36630 = state_36555__$1;(statearr_36595_36630[2] = inst_36543);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36555__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_36599 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36599[0] = state_machine__5507__auto__);
(statearr_36599[1] = 1);
return statearr_36599;
});
var state_machine__5507__auto____1 = (function (state_36555){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36555);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36600){if((e36600 instanceof Object))
{var ex__5510__auto__ = e36600;var statearr_36601_36631 = state_36555;(statearr_36601_36631[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36555);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36600;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36632 = state_36555;
state_36555 = G__36632;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36555){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36602 = f__5522__auto__.call(null);(statearr_36602[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36603);
return statearr_36602;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___36769 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36739){var state_val_36740 = (state_36739[1]);if((state_val_36740 === 1))
{var state_36739__$1 = state_36739;var statearr_36741_36770 = state_36739__$1;(statearr_36741_36770[2] = null);
(statearr_36741_36770[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36740 === 2))
{var inst_36702 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_36703 = 0;var state_36739__$1 = (function (){var statearr_36742 = state_36739;(statearr_36742[7] = inst_36702);
(statearr_36742[8] = inst_36703);
return statearr_36742;
})();var statearr_36743_36771 = state_36739__$1;(statearr_36743_36771[2] = null);
(statearr_36743_36771[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36740 === 3))
{var inst_36737 = (state_36739[2]);var state_36739__$1 = state_36739;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36739__$1,inst_36737);
} else
{if((state_val_36740 === 4))
{var inst_36703 = (state_36739[8]);var inst_36705 = (inst_36703 < cnt);var state_36739__$1 = state_36739;if(cljs.core.truth_(inst_36705))
{var statearr_36744_36772 = state_36739__$1;(statearr_36744_36772[1] = 6);
} else
{var statearr_36745_36773 = state_36739__$1;(statearr_36745_36773[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36740 === 5))
{var inst_36723 = (state_36739[2]);var state_36739__$1 = (function (){var statearr_36746 = state_36739;(statearr_36746[9] = inst_36723);
return statearr_36746;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36739__$1,12,dchan);
} else
{if((state_val_36740 === 6))
{var state_36739__$1 = state_36739;var statearr_36747_36774 = state_36739__$1;(statearr_36747_36774[2] = null);
(statearr_36747_36774[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36740 === 7))
{var state_36739__$1 = state_36739;var statearr_36748_36775 = state_36739__$1;(statearr_36748_36775[2] = null);
(statearr_36748_36775[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36740 === 8))
{var inst_36721 = (state_36739[2]);var state_36739__$1 = state_36739;var statearr_36749_36776 = state_36739__$1;(statearr_36749_36776[2] = inst_36721);
(statearr_36749_36776[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36740 === 9))
{var inst_36703 = (state_36739[8]);var inst_36716 = (state_36739[2]);var inst_36717 = (inst_36703 + 1);var inst_36703__$1 = inst_36717;var state_36739__$1 = (function (){var statearr_36750 = state_36739;(statearr_36750[10] = inst_36716);
(statearr_36750[8] = inst_36703__$1);
return statearr_36750;
})();var statearr_36751_36777 = state_36739__$1;(statearr_36751_36777[2] = null);
(statearr_36751_36777[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36740 === 10))
{var inst_36707 = (state_36739[2]);var inst_36708 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_36739__$1 = (function (){var statearr_36752 = state_36739;(statearr_36752[11] = inst_36707);
return statearr_36752;
})();var statearr_36753_36778 = state_36739__$1;(statearr_36753_36778[2] = inst_36708);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36739__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36740 === 11))
{var inst_36703 = (state_36739[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36739,10,Object,null,9);var inst_36712 = chs__$1.call(null,inst_36703);var inst_36713 = done.call(null,inst_36703);var inst_36714 = cljs.core.async.take_BANG_.call(null,inst_36712,inst_36713);var state_36739__$1 = state_36739;var statearr_36754_36779 = state_36739__$1;(statearr_36754_36779[2] = inst_36714);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36739__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36740 === 12))
{var inst_36725 = (state_36739[12]);var inst_36725__$1 = (state_36739[2]);var inst_36726 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_36725__$1);var state_36739__$1 = (function (){var statearr_36755 = state_36739;(statearr_36755[12] = inst_36725__$1);
return statearr_36755;
})();if(cljs.core.truth_(inst_36726))
{var statearr_36756_36780 = state_36739__$1;(statearr_36756_36780[1] = 13);
} else
{var statearr_36757_36781 = state_36739__$1;(statearr_36757_36781[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36740 === 13))
{var inst_36728 = cljs.core.async.close_BANG_.call(null,out);var state_36739__$1 = state_36739;var statearr_36758_36782 = state_36739__$1;(statearr_36758_36782[2] = inst_36728);
(statearr_36758_36782[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36740 === 14))
{var inst_36725 = (state_36739[12]);var inst_36730 = cljs.core.apply.call(null,f,inst_36725);var state_36739__$1 = state_36739;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36739__$1,16,out,inst_36730);
} else
{if((state_val_36740 === 15))
{var inst_36735 = (state_36739[2]);var state_36739__$1 = state_36739;var statearr_36759_36783 = state_36739__$1;(statearr_36759_36783[2] = inst_36735);
(statearr_36759_36783[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36740 === 16))
{var inst_36732 = (state_36739[2]);var state_36739__$1 = (function (){var statearr_36760 = state_36739;(statearr_36760[13] = inst_36732);
return statearr_36760;
})();var statearr_36761_36784 = state_36739__$1;(statearr_36761_36784[2] = null);
(statearr_36761_36784[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_36765 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36765[0] = state_machine__5507__auto__);
(statearr_36765[1] = 1);
return statearr_36765;
});
var state_machine__5507__auto____1 = (function (state_36739){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36739);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36766){if((e36766 instanceof Object))
{var ex__5510__auto__ = e36766;var statearr_36767_36785 = state_36739;(statearr_36767_36785[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36739);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36766;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36786 = state_36739;
state_36739 = G__36786;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36739){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36768 = f__5522__auto__.call(null);(statearr_36768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36769);
return statearr_36768;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___36894 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36870){var state_val_36871 = (state_36870[1]);if((state_val_36871 === 1))
{var inst_36841 = cljs.core.vec.call(null,chs);var inst_36842 = inst_36841;var state_36870__$1 = (function (){var statearr_36872 = state_36870;(statearr_36872[7] = inst_36842);
return statearr_36872;
})();var statearr_36873_36895 = state_36870__$1;(statearr_36873_36895[2] = null);
(statearr_36873_36895[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36871 === 2))
{var inst_36842 = (state_36870[7]);var inst_36844 = cljs.core.count.call(null,inst_36842);var inst_36845 = (inst_36844 > 0);var state_36870__$1 = state_36870;if(cljs.core.truth_(inst_36845))
{var statearr_36874_36896 = state_36870__$1;(statearr_36874_36896[1] = 4);
} else
{var statearr_36875_36897 = state_36870__$1;(statearr_36875_36897[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36871 === 3))
{var inst_36868 = (state_36870[2]);var state_36870__$1 = state_36870;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36870__$1,inst_36868);
} else
{if((state_val_36871 === 4))
{var inst_36842 = (state_36870[7]);var state_36870__$1 = state_36870;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_36870__$1,7,inst_36842);
} else
{if((state_val_36871 === 5))
{var inst_36864 = cljs.core.async.close_BANG_.call(null,out);var state_36870__$1 = state_36870;var statearr_36876_36898 = state_36870__$1;(statearr_36876_36898[2] = inst_36864);
(statearr_36876_36898[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36871 === 6))
{var inst_36866 = (state_36870[2]);var state_36870__$1 = state_36870;var statearr_36877_36899 = state_36870__$1;(statearr_36877_36899[2] = inst_36866);
(statearr_36877_36899[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36871 === 7))
{var inst_36849 = (state_36870[8]);var inst_36850 = (state_36870[9]);var inst_36849__$1 = (state_36870[2]);var inst_36850__$1 = cljs.core.nth.call(null,inst_36849__$1,0,null);var inst_36851 = cljs.core.nth.call(null,inst_36849__$1,1,null);var inst_36852 = (inst_36850__$1 == null);var state_36870__$1 = (function (){var statearr_36878 = state_36870;(statearr_36878[8] = inst_36849__$1);
(statearr_36878[10] = inst_36851);
(statearr_36878[9] = inst_36850__$1);
return statearr_36878;
})();if(cljs.core.truth_(inst_36852))
{var statearr_36879_36900 = state_36870__$1;(statearr_36879_36900[1] = 8);
} else
{var statearr_36880_36901 = state_36870__$1;(statearr_36880_36901[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36871 === 8))
{var inst_36849 = (state_36870[8]);var inst_36851 = (state_36870[10]);var inst_36850 = (state_36870[9]);var inst_36842 = (state_36870[7]);var inst_36854 = (function (){var c = inst_36851;var v = inst_36850;var vec__36847 = inst_36849;var cs = inst_36842;return ((function (c,v,vec__36847,cs,inst_36849,inst_36851,inst_36850,inst_36842,state_val_36871){
return (function (p1__36787_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__36787_SHARP_);
});
;})(c,v,vec__36847,cs,inst_36849,inst_36851,inst_36850,inst_36842,state_val_36871))
})();var inst_36855 = cljs.core.filterv.call(null,inst_36854,inst_36842);var inst_36842__$1 = inst_36855;var state_36870__$1 = (function (){var statearr_36881 = state_36870;(statearr_36881[7] = inst_36842__$1);
return statearr_36881;
})();var statearr_36882_36902 = state_36870__$1;(statearr_36882_36902[2] = null);
(statearr_36882_36902[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36871 === 9))
{var inst_36850 = (state_36870[9]);var state_36870__$1 = state_36870;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36870__$1,11,out,inst_36850);
} else
{if((state_val_36871 === 10))
{var inst_36862 = (state_36870[2]);var state_36870__$1 = state_36870;var statearr_36884_36903 = state_36870__$1;(statearr_36884_36903[2] = inst_36862);
(statearr_36884_36903[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36871 === 11))
{var inst_36842 = (state_36870[7]);var inst_36859 = (state_36870[2]);var tmp36883 = inst_36842;var inst_36842__$1 = tmp36883;var state_36870__$1 = (function (){var statearr_36885 = state_36870;(statearr_36885[11] = inst_36859);
(statearr_36885[7] = inst_36842__$1);
return statearr_36885;
})();var statearr_36886_36904 = state_36870__$1;(statearr_36886_36904[2] = null);
(statearr_36886_36904[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_36890 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36890[0] = state_machine__5507__auto__);
(statearr_36890[1] = 1);
return statearr_36890;
});
var state_machine__5507__auto____1 = (function (state_36870){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36870);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36891){if((e36891 instanceof Object))
{var ex__5510__auto__ = e36891;var statearr_36892_36905 = state_36870;(statearr_36892_36905[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36870);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36891;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36906 = state_36870;
state_36870 = G__36906;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36870){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36893 = f__5522__auto__.call(null);(statearr_36893[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36894);
return statearr_36893;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___36999 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36976){var state_val_36977 = (state_36976[1]);if((state_val_36977 === 1))
{var inst_36953 = 0;var state_36976__$1 = (function (){var statearr_36978 = state_36976;(statearr_36978[7] = inst_36953);
return statearr_36978;
})();var statearr_36979_37000 = state_36976__$1;(statearr_36979_37000[2] = null);
(statearr_36979_37000[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36977 === 2))
{var inst_36953 = (state_36976[7]);var inst_36955 = (inst_36953 < n);var state_36976__$1 = state_36976;if(cljs.core.truth_(inst_36955))
{var statearr_36980_37001 = state_36976__$1;(statearr_36980_37001[1] = 4);
} else
{var statearr_36981_37002 = state_36976__$1;(statearr_36981_37002[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36977 === 3))
{var inst_36973 = (state_36976[2]);var inst_36974 = cljs.core.async.close_BANG_.call(null,out);var state_36976__$1 = (function (){var statearr_36982 = state_36976;(statearr_36982[8] = inst_36973);
return statearr_36982;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36976__$1,inst_36974);
} else
{if((state_val_36977 === 4))
{var state_36976__$1 = state_36976;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36976__$1,7,ch);
} else
{if((state_val_36977 === 5))
{var state_36976__$1 = state_36976;var statearr_36983_37003 = state_36976__$1;(statearr_36983_37003[2] = null);
(statearr_36983_37003[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36977 === 6))
{var inst_36971 = (state_36976[2]);var state_36976__$1 = state_36976;var statearr_36984_37004 = state_36976__$1;(statearr_36984_37004[2] = inst_36971);
(statearr_36984_37004[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36977 === 7))
{var inst_36958 = (state_36976[9]);var inst_36958__$1 = (state_36976[2]);var inst_36959 = (inst_36958__$1 == null);var inst_36960 = cljs.core.not.call(null,inst_36959);var state_36976__$1 = (function (){var statearr_36985 = state_36976;(statearr_36985[9] = inst_36958__$1);
return statearr_36985;
})();if(inst_36960)
{var statearr_36986_37005 = state_36976__$1;(statearr_36986_37005[1] = 8);
} else
{var statearr_36987_37006 = state_36976__$1;(statearr_36987_37006[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36977 === 8))
{var inst_36958 = (state_36976[9]);var state_36976__$1 = state_36976;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36976__$1,11,out,inst_36958);
} else
{if((state_val_36977 === 9))
{var state_36976__$1 = state_36976;var statearr_36988_37007 = state_36976__$1;(statearr_36988_37007[2] = null);
(statearr_36988_37007[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36977 === 10))
{var inst_36968 = (state_36976[2]);var state_36976__$1 = state_36976;var statearr_36989_37008 = state_36976__$1;(statearr_36989_37008[2] = inst_36968);
(statearr_36989_37008[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36977 === 11))
{var inst_36953 = (state_36976[7]);var inst_36963 = (state_36976[2]);var inst_36964 = (inst_36953 + 1);var inst_36953__$1 = inst_36964;var state_36976__$1 = (function (){var statearr_36990 = state_36976;(statearr_36990[7] = inst_36953__$1);
(statearr_36990[10] = inst_36963);
return statearr_36990;
})();var statearr_36991_37009 = state_36976__$1;(statearr_36991_37009[2] = null);
(statearr_36991_37009[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_36995 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_36995[0] = state_machine__5507__auto__);
(statearr_36995[1] = 1);
return statearr_36995;
});
var state_machine__5507__auto____1 = (function (state_36976){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36976);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36996){if((e36996 instanceof Object))
{var ex__5510__auto__ = e36996;var statearr_36997_37010 = state_36976;(statearr_36997_37010[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36976);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36996;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37011 = state_36976;
state_36976 = G__37011;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36976){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36998 = f__5522__auto__.call(null);(statearr_36998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36999);
return statearr_36998;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___37108 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_37083){var state_val_37084 = (state_37083[1]);if((state_val_37084 === 1))
{var inst_37060 = null;var state_37083__$1 = (function (){var statearr_37085 = state_37083;(statearr_37085[7] = inst_37060);
return statearr_37085;
})();var statearr_37086_37109 = state_37083__$1;(statearr_37086_37109[2] = null);
(statearr_37086_37109[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37084 === 2))
{var state_37083__$1 = state_37083;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37083__$1,4,ch);
} else
{if((state_val_37084 === 3))
{var inst_37080 = (state_37083[2]);var inst_37081 = cljs.core.async.close_BANG_.call(null,out);var state_37083__$1 = (function (){var statearr_37087 = state_37083;(statearr_37087[8] = inst_37080);
return statearr_37087;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37083__$1,inst_37081);
} else
{if((state_val_37084 === 4))
{var inst_37063 = (state_37083[9]);var inst_37063__$1 = (state_37083[2]);var inst_37064 = (inst_37063__$1 == null);var inst_37065 = cljs.core.not.call(null,inst_37064);var state_37083__$1 = (function (){var statearr_37088 = state_37083;(statearr_37088[9] = inst_37063__$1);
return statearr_37088;
})();if(inst_37065)
{var statearr_37089_37110 = state_37083__$1;(statearr_37089_37110[1] = 5);
} else
{var statearr_37090_37111 = state_37083__$1;(statearr_37090_37111[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37084 === 5))
{var inst_37060 = (state_37083[7]);var inst_37063 = (state_37083[9]);var inst_37067 = cljs.core._EQ_.call(null,inst_37063,inst_37060);var state_37083__$1 = state_37083;if(inst_37067)
{var statearr_37091_37112 = state_37083__$1;(statearr_37091_37112[1] = 8);
} else
{var statearr_37092_37113 = state_37083__$1;(statearr_37092_37113[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37084 === 6))
{var state_37083__$1 = state_37083;var statearr_37094_37114 = state_37083__$1;(statearr_37094_37114[2] = null);
(statearr_37094_37114[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37084 === 7))
{var inst_37078 = (state_37083[2]);var state_37083__$1 = state_37083;var statearr_37095_37115 = state_37083__$1;(statearr_37095_37115[2] = inst_37078);
(statearr_37095_37115[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37084 === 8))
{var inst_37060 = (state_37083[7]);var tmp37093 = inst_37060;var inst_37060__$1 = tmp37093;var state_37083__$1 = (function (){var statearr_37096 = state_37083;(statearr_37096[7] = inst_37060__$1);
return statearr_37096;
})();var statearr_37097_37116 = state_37083__$1;(statearr_37097_37116[2] = null);
(statearr_37097_37116[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37084 === 9))
{var inst_37063 = (state_37083[9]);var state_37083__$1 = state_37083;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37083__$1,11,out,inst_37063);
} else
{if((state_val_37084 === 10))
{var inst_37075 = (state_37083[2]);var state_37083__$1 = state_37083;var statearr_37098_37117 = state_37083__$1;(statearr_37098_37117[2] = inst_37075);
(statearr_37098_37117[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37084 === 11))
{var inst_37063 = (state_37083[9]);var inst_37072 = (state_37083[2]);var inst_37060 = inst_37063;var state_37083__$1 = (function (){var statearr_37099 = state_37083;(statearr_37099[7] = inst_37060);
(statearr_37099[10] = inst_37072);
return statearr_37099;
})();var statearr_37100_37118 = state_37083__$1;(statearr_37100_37118[2] = null);
(statearr_37100_37118[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_37104 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_37104[0] = state_machine__5507__auto__);
(statearr_37104[1] = 1);
return statearr_37104;
});
var state_machine__5507__auto____1 = (function (state_37083){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_37083);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e37105){if((e37105 instanceof Object))
{var ex__5510__auto__ = e37105;var statearr_37106_37119 = state_37083;(statearr_37106_37119[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37083);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37105;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37120 = state_37083;
state_37083 = G__37120;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_37083){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_37083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_37107 = f__5522__auto__.call(null);(statearr_37107[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___37108);
return statearr_37107;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___37255 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_37225){var state_val_37226 = (state_37225[1]);if((state_val_37226 === 1))
{var inst_37188 = (new Array(n));var inst_37189 = inst_37188;var inst_37190 = 0;var state_37225__$1 = (function (){var statearr_37227 = state_37225;(statearr_37227[7] = inst_37190);
(statearr_37227[8] = inst_37189);
return statearr_37227;
})();var statearr_37228_37256 = state_37225__$1;(statearr_37228_37256[2] = null);
(statearr_37228_37256[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37226 === 2))
{var state_37225__$1 = state_37225;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37225__$1,4,ch);
} else
{if((state_val_37226 === 3))
{var inst_37223 = (state_37225[2]);var state_37225__$1 = state_37225;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37225__$1,inst_37223);
} else
{if((state_val_37226 === 4))
{var inst_37193 = (state_37225[9]);var inst_37193__$1 = (state_37225[2]);var inst_37194 = (inst_37193__$1 == null);var inst_37195 = cljs.core.not.call(null,inst_37194);var state_37225__$1 = (function (){var statearr_37229 = state_37225;(statearr_37229[9] = inst_37193__$1);
return statearr_37229;
})();if(inst_37195)
{var statearr_37230_37257 = state_37225__$1;(statearr_37230_37257[1] = 5);
} else
{var statearr_37231_37258 = state_37225__$1;(statearr_37231_37258[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37226 === 5))
{var inst_37198 = (state_37225[10]);var inst_37190 = (state_37225[7]);var inst_37193 = (state_37225[9]);var inst_37189 = (state_37225[8]);var inst_37197 = (inst_37189[inst_37190] = inst_37193);var inst_37198__$1 = (inst_37190 + 1);var inst_37199 = (inst_37198__$1 < n);var state_37225__$1 = (function (){var statearr_37232 = state_37225;(statearr_37232[10] = inst_37198__$1);
(statearr_37232[11] = inst_37197);
return statearr_37232;
})();if(cljs.core.truth_(inst_37199))
{var statearr_37233_37259 = state_37225__$1;(statearr_37233_37259[1] = 8);
} else
{var statearr_37234_37260 = state_37225__$1;(statearr_37234_37260[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37226 === 6))
{var inst_37190 = (state_37225[7]);var inst_37211 = (inst_37190 > 0);var state_37225__$1 = state_37225;if(cljs.core.truth_(inst_37211))
{var statearr_37236_37261 = state_37225__$1;(statearr_37236_37261[1] = 12);
} else
{var statearr_37237_37262 = state_37225__$1;(statearr_37237_37262[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37226 === 7))
{var inst_37221 = (state_37225[2]);var state_37225__$1 = state_37225;var statearr_37238_37263 = state_37225__$1;(statearr_37238_37263[2] = inst_37221);
(statearr_37238_37263[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37226 === 8))
{var inst_37198 = (state_37225[10]);var inst_37189 = (state_37225[8]);var tmp37235 = inst_37189;var inst_37189__$1 = tmp37235;var inst_37190 = inst_37198;var state_37225__$1 = (function (){var statearr_37239 = state_37225;(statearr_37239[7] = inst_37190);
(statearr_37239[8] = inst_37189__$1);
return statearr_37239;
})();var statearr_37240_37264 = state_37225__$1;(statearr_37240_37264[2] = null);
(statearr_37240_37264[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37226 === 9))
{var inst_37189 = (state_37225[8]);var inst_37203 = cljs.core.vec.call(null,inst_37189);var state_37225__$1 = state_37225;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37225__$1,11,out,inst_37203);
} else
{if((state_val_37226 === 10))
{var inst_37209 = (state_37225[2]);var state_37225__$1 = state_37225;var statearr_37241_37265 = state_37225__$1;(statearr_37241_37265[2] = inst_37209);
(statearr_37241_37265[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37226 === 11))
{var inst_37205 = (state_37225[2]);var inst_37206 = (new Array(n));var inst_37189 = inst_37206;var inst_37190 = 0;var state_37225__$1 = (function (){var statearr_37242 = state_37225;(statearr_37242[12] = inst_37205);
(statearr_37242[7] = inst_37190);
(statearr_37242[8] = inst_37189);
return statearr_37242;
})();var statearr_37243_37266 = state_37225__$1;(statearr_37243_37266[2] = null);
(statearr_37243_37266[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37226 === 12))
{var inst_37189 = (state_37225[8]);var inst_37213 = cljs.core.vec.call(null,inst_37189);var state_37225__$1 = state_37225;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37225__$1,15,out,inst_37213);
} else
{if((state_val_37226 === 13))
{var state_37225__$1 = state_37225;var statearr_37244_37267 = state_37225__$1;(statearr_37244_37267[2] = null);
(statearr_37244_37267[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37226 === 14))
{var inst_37218 = (state_37225[2]);var inst_37219 = cljs.core.async.close_BANG_.call(null,out);var state_37225__$1 = (function (){var statearr_37245 = state_37225;(statearr_37245[13] = inst_37218);
return statearr_37245;
})();var statearr_37246_37268 = state_37225__$1;(statearr_37246_37268[2] = inst_37219);
(statearr_37246_37268[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37226 === 15))
{var inst_37215 = (state_37225[2]);var state_37225__$1 = state_37225;var statearr_37247_37269 = state_37225__$1;(statearr_37247_37269[2] = inst_37215);
(statearr_37247_37269[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_37251 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37251[0] = state_machine__5507__auto__);
(statearr_37251[1] = 1);
return statearr_37251;
});
var state_machine__5507__auto____1 = (function (state_37225){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_37225);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e37252){if((e37252 instanceof Object))
{var ex__5510__auto__ = e37252;var statearr_37253_37270 = state_37225;(statearr_37253_37270[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37225);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37252;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37271 = state_37225;
state_37225 = G__37271;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_37225){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_37225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_37254 = f__5522__auto__.call(null);(statearr_37254[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___37255);
return statearr_37254;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___37414 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_37384){var state_val_37385 = (state_37384[1]);if((state_val_37385 === 1))
{var inst_37343 = [];var inst_37344 = inst_37343;var inst_37345 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_37384__$1 = (function (){var statearr_37386 = state_37384;(statearr_37386[7] = inst_37344);
(statearr_37386[8] = inst_37345);
return statearr_37386;
})();var statearr_37387_37415 = state_37384__$1;(statearr_37387_37415[2] = null);
(statearr_37387_37415[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37385 === 2))
{var state_37384__$1 = state_37384;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37384__$1,4,ch);
} else
{if((state_val_37385 === 3))
{var inst_37382 = (state_37384[2]);var state_37384__$1 = state_37384;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37384__$1,inst_37382);
} else
{if((state_val_37385 === 4))
{var inst_37348 = (state_37384[9]);var inst_37348__$1 = (state_37384[2]);var inst_37349 = (inst_37348__$1 == null);var inst_37350 = cljs.core.not.call(null,inst_37349);var state_37384__$1 = (function (){var statearr_37388 = state_37384;(statearr_37388[9] = inst_37348__$1);
return statearr_37388;
})();if(inst_37350)
{var statearr_37389_37416 = state_37384__$1;(statearr_37389_37416[1] = 5);
} else
{var statearr_37390_37417 = state_37384__$1;(statearr_37390_37417[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37385 === 5))
{var inst_37352 = (state_37384[10]);var inst_37348 = (state_37384[9]);var inst_37345 = (state_37384[8]);var inst_37352__$1 = f.call(null,inst_37348);var inst_37353 = cljs.core._EQ_.call(null,inst_37352__$1,inst_37345);var inst_37354 = cljs.core.keyword_identical_QMARK_.call(null,inst_37345,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_37355 = (inst_37353) || (inst_37354);var state_37384__$1 = (function (){var statearr_37391 = state_37384;(statearr_37391[10] = inst_37352__$1);
return statearr_37391;
})();if(cljs.core.truth_(inst_37355))
{var statearr_37392_37418 = state_37384__$1;(statearr_37392_37418[1] = 8);
} else
{var statearr_37393_37419 = state_37384__$1;(statearr_37393_37419[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37385 === 6))
{var inst_37344 = (state_37384[7]);var inst_37369 = inst_37344.length;var inst_37370 = (inst_37369 > 0);var state_37384__$1 = state_37384;if(cljs.core.truth_(inst_37370))
{var statearr_37395_37420 = state_37384__$1;(statearr_37395_37420[1] = 12);
} else
{var statearr_37396_37421 = state_37384__$1;(statearr_37396_37421[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37385 === 7))
{var inst_37380 = (state_37384[2]);var state_37384__$1 = state_37384;var statearr_37397_37422 = state_37384__$1;(statearr_37397_37422[2] = inst_37380);
(statearr_37397_37422[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37385 === 8))
{var inst_37352 = (state_37384[10]);var inst_37348 = (state_37384[9]);var inst_37344 = (state_37384[7]);var inst_37357 = inst_37344.push(inst_37348);var tmp37394 = inst_37344;var inst_37344__$1 = tmp37394;var inst_37345 = inst_37352;var state_37384__$1 = (function (){var statearr_37398 = state_37384;(statearr_37398[11] = inst_37357);
(statearr_37398[7] = inst_37344__$1);
(statearr_37398[8] = inst_37345);
return statearr_37398;
})();var statearr_37399_37423 = state_37384__$1;(statearr_37399_37423[2] = null);
(statearr_37399_37423[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37385 === 9))
{var inst_37344 = (state_37384[7]);var inst_37360 = cljs.core.vec.call(null,inst_37344);var state_37384__$1 = state_37384;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37384__$1,11,out,inst_37360);
} else
{if((state_val_37385 === 10))
{var inst_37367 = (state_37384[2]);var state_37384__$1 = state_37384;var statearr_37400_37424 = state_37384__$1;(statearr_37400_37424[2] = inst_37367);
(statearr_37400_37424[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37385 === 11))
{var inst_37352 = (state_37384[10]);var inst_37348 = (state_37384[9]);var inst_37362 = (state_37384[2]);var inst_37363 = [];var inst_37364 = inst_37363.push(inst_37348);var inst_37344 = inst_37363;var inst_37345 = inst_37352;var state_37384__$1 = (function (){var statearr_37401 = state_37384;(statearr_37401[12] = inst_37364);
(statearr_37401[13] = inst_37362);
(statearr_37401[7] = inst_37344);
(statearr_37401[8] = inst_37345);
return statearr_37401;
})();var statearr_37402_37425 = state_37384__$1;(statearr_37402_37425[2] = null);
(statearr_37402_37425[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37385 === 12))
{var inst_37344 = (state_37384[7]);var inst_37372 = cljs.core.vec.call(null,inst_37344);var state_37384__$1 = state_37384;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37384__$1,15,out,inst_37372);
} else
{if((state_val_37385 === 13))
{var state_37384__$1 = state_37384;var statearr_37403_37426 = state_37384__$1;(statearr_37403_37426[2] = null);
(statearr_37403_37426[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37385 === 14))
{var inst_37377 = (state_37384[2]);var inst_37378 = cljs.core.async.close_BANG_.call(null,out);var state_37384__$1 = (function (){var statearr_37404 = state_37384;(statearr_37404[14] = inst_37377);
return statearr_37404;
})();var statearr_37405_37427 = state_37384__$1;(statearr_37405_37427[2] = inst_37378);
(statearr_37405_37427[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37385 === 15))
{var inst_37374 = (state_37384[2]);var state_37384__$1 = state_37384;var statearr_37406_37428 = state_37384__$1;(statearr_37406_37428[2] = inst_37374);
(statearr_37406_37428[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_37410 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37410[0] = state_machine__5507__auto__);
(statearr_37410[1] = 1);
return statearr_37410;
});
var state_machine__5507__auto____1 = (function (state_37384){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_37384);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e37411){if((e37411 instanceof Object))
{var ex__5510__auto__ = e37411;var statearr_37412_37429 = state_37384;(statearr_37412_37429[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37384);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37411;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37430 = state_37384;
state_37384 = G__37430;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_37384){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_37384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_37413 = f__5522__auto__.call(null);(statearr_37413[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___37414);
return statearr_37413;
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
