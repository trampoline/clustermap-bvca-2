// Compiled by ClojureScript 0.0-2138
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.string');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('goog.dom.xml');
goog.require('goog.style');
goog.require('goog.dom.forms');
goog.require('domina.support');
goog.require('goog.events');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_15020 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_15021 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_15022 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_15021,table_section_wrapper_15021,opt_wrapper_15020,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_15022,table_section_wrapper_15021,cell_wrapper_15022,opt_wrapper_15020,table_section_wrapper_15021,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_15021]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__15027 = cljs.core.seq.call(null,tbody);var chunk__15028 = null;var count__15029 = 0;var i__15030 = 0;while(true){
if((i__15030 < count__15029))
{var child = cljs.core._nth.call(null,chunk__15028,i__15030);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__15031 = seq__15027;
var G__15032 = chunk__15028;
var G__15033 = count__15029;
var G__15034 = (i__15030 + 1);
seq__15027 = G__15031;
chunk__15028 = G__15032;
count__15029 = G__15033;
i__15030 = G__15034;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__15027);if(temp__4092__auto__)
{var seq__15027__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15027__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__15027__$1);{
var G__15035 = cljs.core.chunk_rest.call(null,seq__15027__$1);
var G__15036 = c__4148__auto__;
var G__15037 = cljs.core.count.call(null,c__4148__auto__);
var G__15038 = 0;
seq__15027 = G__15035;
chunk__15028 = G__15036;
count__15029 = G__15037;
i__15030 = G__15038;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__15027__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__15039 = cljs.core.next.call(null,seq__15027__$1);
var G__15040 = null;
var G__15041 = 0;
var G__15042 = 0;
seq__15027 = G__15039;
chunk__15028 = G__15040;
count__15029 = G__15041;
i__15030 = G__15042;
continue;
}
}
} else
{return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__15044 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__15044,0,null);var start_wrap = cljs.core.nth.call(null,vec__15044,1,null);var end_wrap = cljs.core.nth.call(null,vec__15044,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__15045 = wrapper.lastChild;
var G__15046 = (level - 1);
wrapper = G__15045;
level = G__15046;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3394__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3394__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3394__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj15048 = {};return obj15048;
})();
domina.nodes = (function nodes(content){if((function (){var and__3394__auto__ = content;if(and__3394__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3394__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4027__auto__ = (((content == null))?null:content);return (function (){var or__3406__auto__ = (domina.nodes[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.nodes["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3394__auto__ = nodeseq;if(and__3394__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3394__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4027__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3406__auto__ = (domina.single_node[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.single_node["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3394__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3394__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3394__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__15049){
var mesg = cljs.core.seq(arglist__15049);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__15050){
var mesg = cljs.core.seq(arglist__15050);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__15051){
var contents = cljs.core.seq(arglist__15051);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__15052_SHARP_){return p1__15052_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__15053_SHARP_,p2__15054_SHARP_){return goog.dom.insertChildAt(p1__15053_SHARP_,p2__15054_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__15056_SHARP_,p2__15055_SHARP_){return goog.dom.insertSiblingBefore(p2__15055_SHARP_,p1__15056_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__15058_SHARP_,p2__15057_SHARP_){return goog.dom.insertSiblingAfter(p2__15057_SHARP_,p1__15058_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__15060_SHARP_,p2__15059_SHARP_){return goog.dom.replaceNode(p2__15059_SHARP_,p1__15060_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__15065_15069 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15066_15070 = null;var count__15067_15071 = 0;var i__15068_15072 = 0;while(true){
if((i__15068_15072 < count__15067_15071))
{var n_15073 = cljs.core._nth.call(null,chunk__15066_15070,i__15068_15072);goog.style.setStyle(n_15073,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__15074 = seq__15065_15069;
var G__15075 = chunk__15066_15070;
var G__15076 = count__15067_15071;
var G__15077 = (i__15068_15072 + 1);
seq__15065_15069 = G__15074;
chunk__15066_15070 = G__15075;
count__15067_15071 = G__15076;
i__15068_15072 = G__15077;
continue;
}
} else
{var temp__4092__auto___15078 = cljs.core.seq.call(null,seq__15065_15069);if(temp__4092__auto___15078)
{var seq__15065_15079__$1 = temp__4092__auto___15078;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15065_15079__$1))
{var c__4148__auto___15080 = cljs.core.chunk_first.call(null,seq__15065_15079__$1);{
var G__15081 = cljs.core.chunk_rest.call(null,seq__15065_15079__$1);
var G__15082 = c__4148__auto___15080;
var G__15083 = cljs.core.count.call(null,c__4148__auto___15080);
var G__15084 = 0;
seq__15065_15069 = G__15081;
chunk__15066_15070 = G__15082;
count__15067_15071 = G__15083;
i__15068_15072 = G__15084;
continue;
}
} else
{var n_15085 = cljs.core.first.call(null,seq__15065_15079__$1);goog.style.setStyle(n_15085,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__15086 = cljs.core.next.call(null,seq__15065_15079__$1);
var G__15087 = null;
var G__15088 = 0;
var G__15089 = 0;
seq__15065_15069 = G__15086;
chunk__15066_15070 = G__15087;
count__15067_15071 = G__15088;
i__15068_15072 = G__15089;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__15090){
var content = cljs.core.first(arglist__15090);
arglist__15090 = cljs.core.next(arglist__15090);
var name = cljs.core.first(arglist__15090);
var value = cljs.core.rest(arglist__15090);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__15095_15099 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15096_15100 = null;var count__15097_15101 = 0;var i__15098_15102 = 0;while(true){
if((i__15098_15102 < count__15097_15101))
{var n_15103 = cljs.core._nth.call(null,chunk__15096_15100,i__15098_15102);n_15103.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__15104 = seq__15095_15099;
var G__15105 = chunk__15096_15100;
var G__15106 = count__15097_15101;
var G__15107 = (i__15098_15102 + 1);
seq__15095_15099 = G__15104;
chunk__15096_15100 = G__15105;
count__15097_15101 = G__15106;
i__15098_15102 = G__15107;
continue;
}
} else
{var temp__4092__auto___15108 = cljs.core.seq.call(null,seq__15095_15099);if(temp__4092__auto___15108)
{var seq__15095_15109__$1 = temp__4092__auto___15108;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15095_15109__$1))
{var c__4148__auto___15110 = cljs.core.chunk_first.call(null,seq__15095_15109__$1);{
var G__15111 = cljs.core.chunk_rest.call(null,seq__15095_15109__$1);
var G__15112 = c__4148__auto___15110;
var G__15113 = cljs.core.count.call(null,c__4148__auto___15110);
var G__15114 = 0;
seq__15095_15099 = G__15111;
chunk__15096_15100 = G__15112;
count__15097_15101 = G__15113;
i__15098_15102 = G__15114;
continue;
}
} else
{var n_15115 = cljs.core.first.call(null,seq__15095_15109__$1);n_15115.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__15116 = cljs.core.next.call(null,seq__15095_15109__$1);
var G__15117 = null;
var G__15118 = 0;
var G__15119 = 0;
seq__15095_15099 = G__15116;
chunk__15096_15100 = G__15117;
count__15097_15101 = G__15118;
i__15098_15102 = G__15119;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__15120){
var content = cljs.core.first(arglist__15120);
arglist__15120 = cljs.core.next(arglist__15120);
var name = cljs.core.first(arglist__15120);
var value = cljs.core.rest(arglist__15120);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__15125_15129 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15126_15130 = null;var count__15127_15131 = 0;var i__15128_15132 = 0;while(true){
if((i__15128_15132 < count__15127_15131))
{var n_15133 = cljs.core._nth.call(null,chunk__15126_15130,i__15128_15132);n_15133.removeAttribute(cljs.core.name.call(null,name));
{
var G__15134 = seq__15125_15129;
var G__15135 = chunk__15126_15130;
var G__15136 = count__15127_15131;
var G__15137 = (i__15128_15132 + 1);
seq__15125_15129 = G__15134;
chunk__15126_15130 = G__15135;
count__15127_15131 = G__15136;
i__15128_15132 = G__15137;
continue;
}
} else
{var temp__4092__auto___15138 = cljs.core.seq.call(null,seq__15125_15129);if(temp__4092__auto___15138)
{var seq__15125_15139__$1 = temp__4092__auto___15138;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15125_15139__$1))
{var c__4148__auto___15140 = cljs.core.chunk_first.call(null,seq__15125_15139__$1);{
var G__15141 = cljs.core.chunk_rest.call(null,seq__15125_15139__$1);
var G__15142 = c__4148__auto___15140;
var G__15143 = cljs.core.count.call(null,c__4148__auto___15140);
var G__15144 = 0;
seq__15125_15129 = G__15141;
chunk__15126_15130 = G__15142;
count__15127_15131 = G__15143;
i__15128_15132 = G__15144;
continue;
}
} else
{var n_15145 = cljs.core.first.call(null,seq__15125_15139__$1);n_15145.removeAttribute(cljs.core.name.call(null,name));
{
var G__15146 = cljs.core.next.call(null,seq__15125_15139__$1);
var G__15147 = null;
var G__15148 = 0;
var G__15149 = 0;
seq__15125_15129 = G__15146;
chunk__15126_15130 = G__15147;
count__15127_15131 = G__15148;
i__15128_15132 = G__15149;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__15151 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__15151,0,null);var v = cljs.core.nth.call(null,vec__15151,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
{return v;
} else
{return and__3394__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return null;
}
}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__15152_SHARP_){var attr = attrs__$1.item(p1__15152_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__15159_15165 = cljs.core.seq.call(null,styles);var chunk__15160_15166 = null;var count__15161_15167 = 0;var i__15162_15168 = 0;while(true){
if((i__15162_15168 < count__15161_15167))
{var vec__15163_15169 = cljs.core._nth.call(null,chunk__15160_15166,i__15162_15168);var name_15170 = cljs.core.nth.call(null,vec__15163_15169,0,null);var value_15171 = cljs.core.nth.call(null,vec__15163_15169,1,null);domina.set_style_BANG_.call(null,content,name_15170,value_15171);
{
var G__15172 = seq__15159_15165;
var G__15173 = chunk__15160_15166;
var G__15174 = count__15161_15167;
var G__15175 = (i__15162_15168 + 1);
seq__15159_15165 = G__15172;
chunk__15160_15166 = G__15173;
count__15161_15167 = G__15174;
i__15162_15168 = G__15175;
continue;
}
} else
{var temp__4092__auto___15176 = cljs.core.seq.call(null,seq__15159_15165);if(temp__4092__auto___15176)
{var seq__15159_15177__$1 = temp__4092__auto___15176;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15159_15177__$1))
{var c__4148__auto___15178 = cljs.core.chunk_first.call(null,seq__15159_15177__$1);{
var G__15179 = cljs.core.chunk_rest.call(null,seq__15159_15177__$1);
var G__15180 = c__4148__auto___15178;
var G__15181 = cljs.core.count.call(null,c__4148__auto___15178);
var G__15182 = 0;
seq__15159_15165 = G__15179;
chunk__15160_15166 = G__15180;
count__15161_15167 = G__15181;
i__15162_15168 = G__15182;
continue;
}
} else
{var vec__15164_15183 = cljs.core.first.call(null,seq__15159_15177__$1);var name_15184 = cljs.core.nth.call(null,vec__15164_15183,0,null);var value_15185 = cljs.core.nth.call(null,vec__15164_15183,1,null);domina.set_style_BANG_.call(null,content,name_15184,value_15185);
{
var G__15186 = cljs.core.next.call(null,seq__15159_15177__$1);
var G__15187 = null;
var G__15188 = 0;
var G__15189 = 0;
seq__15159_15165 = G__15186;
chunk__15160_15166 = G__15187;
count__15161_15167 = G__15188;
i__15162_15168 = G__15189;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__15196_15202 = cljs.core.seq.call(null,attrs);var chunk__15197_15203 = null;var count__15198_15204 = 0;var i__15199_15205 = 0;while(true){
if((i__15199_15205 < count__15198_15204))
{var vec__15200_15206 = cljs.core._nth.call(null,chunk__15197_15203,i__15199_15205);var name_15207 = cljs.core.nth.call(null,vec__15200_15206,0,null);var value_15208 = cljs.core.nth.call(null,vec__15200_15206,1,null);domina.set_attr_BANG_.call(null,content,name_15207,value_15208);
{
var G__15209 = seq__15196_15202;
var G__15210 = chunk__15197_15203;
var G__15211 = count__15198_15204;
var G__15212 = (i__15199_15205 + 1);
seq__15196_15202 = G__15209;
chunk__15197_15203 = G__15210;
count__15198_15204 = G__15211;
i__15199_15205 = G__15212;
continue;
}
} else
{var temp__4092__auto___15213 = cljs.core.seq.call(null,seq__15196_15202);if(temp__4092__auto___15213)
{var seq__15196_15214__$1 = temp__4092__auto___15213;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15196_15214__$1))
{var c__4148__auto___15215 = cljs.core.chunk_first.call(null,seq__15196_15214__$1);{
var G__15216 = cljs.core.chunk_rest.call(null,seq__15196_15214__$1);
var G__15217 = c__4148__auto___15215;
var G__15218 = cljs.core.count.call(null,c__4148__auto___15215);
var G__15219 = 0;
seq__15196_15202 = G__15216;
chunk__15197_15203 = G__15217;
count__15198_15204 = G__15218;
i__15199_15205 = G__15219;
continue;
}
} else
{var vec__15201_15220 = cljs.core.first.call(null,seq__15196_15214__$1);var name_15221 = cljs.core.nth.call(null,vec__15201_15220,0,null);var value_15222 = cljs.core.nth.call(null,vec__15201_15220,1,null);domina.set_attr_BANG_.call(null,content,name_15221,value_15222);
{
var G__15223 = cljs.core.next.call(null,seq__15196_15214__$1);
var G__15224 = null;
var G__15225 = 0;
var G__15226 = 0;
seq__15196_15202 = G__15223;
chunk__15197_15203 = G__15224;
count__15198_15204 = G__15225;
i__15199_15205 = G__15226;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__15231_15235 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15232_15236 = null;var count__15233_15237 = 0;var i__15234_15238 = 0;while(true){
if((i__15234_15238 < count__15233_15237))
{var node_15239 = cljs.core._nth.call(null,chunk__15232_15236,i__15234_15238);goog.dom.classes.add(node_15239,class$);
{
var G__15240 = seq__15231_15235;
var G__15241 = chunk__15232_15236;
var G__15242 = count__15233_15237;
var G__15243 = (i__15234_15238 + 1);
seq__15231_15235 = G__15240;
chunk__15232_15236 = G__15241;
count__15233_15237 = G__15242;
i__15234_15238 = G__15243;
continue;
}
} else
{var temp__4092__auto___15244 = cljs.core.seq.call(null,seq__15231_15235);if(temp__4092__auto___15244)
{var seq__15231_15245__$1 = temp__4092__auto___15244;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15231_15245__$1))
{var c__4148__auto___15246 = cljs.core.chunk_first.call(null,seq__15231_15245__$1);{
var G__15247 = cljs.core.chunk_rest.call(null,seq__15231_15245__$1);
var G__15248 = c__4148__auto___15246;
var G__15249 = cljs.core.count.call(null,c__4148__auto___15246);
var G__15250 = 0;
seq__15231_15235 = G__15247;
chunk__15232_15236 = G__15248;
count__15233_15237 = G__15249;
i__15234_15238 = G__15250;
continue;
}
} else
{var node_15251 = cljs.core.first.call(null,seq__15231_15245__$1);goog.dom.classes.add(node_15251,class$);
{
var G__15252 = cljs.core.next.call(null,seq__15231_15245__$1);
var G__15253 = null;
var G__15254 = 0;
var G__15255 = 0;
seq__15231_15235 = G__15252;
chunk__15232_15236 = G__15253;
count__15233_15237 = G__15254;
i__15234_15238 = G__15255;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__15260_15264 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15261_15265 = null;var count__15262_15266 = 0;var i__15263_15267 = 0;while(true){
if((i__15263_15267 < count__15262_15266))
{var node_15268 = cljs.core._nth.call(null,chunk__15261_15265,i__15263_15267);goog.dom.classes.remove(node_15268,class$);
{
var G__15269 = seq__15260_15264;
var G__15270 = chunk__15261_15265;
var G__15271 = count__15262_15266;
var G__15272 = (i__15263_15267 + 1);
seq__15260_15264 = G__15269;
chunk__15261_15265 = G__15270;
count__15262_15266 = G__15271;
i__15263_15267 = G__15272;
continue;
}
} else
{var temp__4092__auto___15273 = cljs.core.seq.call(null,seq__15260_15264);if(temp__4092__auto___15273)
{var seq__15260_15274__$1 = temp__4092__auto___15273;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15260_15274__$1))
{var c__4148__auto___15275 = cljs.core.chunk_first.call(null,seq__15260_15274__$1);{
var G__15276 = cljs.core.chunk_rest.call(null,seq__15260_15274__$1);
var G__15277 = c__4148__auto___15275;
var G__15278 = cljs.core.count.call(null,c__4148__auto___15275);
var G__15279 = 0;
seq__15260_15264 = G__15276;
chunk__15261_15265 = G__15277;
count__15262_15266 = G__15278;
i__15263_15267 = G__15279;
continue;
}
} else
{var node_15280 = cljs.core.first.call(null,seq__15260_15274__$1);goog.dom.classes.remove(node_15280,class$);
{
var G__15281 = cljs.core.next.call(null,seq__15260_15274__$1);
var G__15282 = null;
var G__15283 = 0;
var G__15284 = 0;
seq__15260_15264 = G__15281;
chunk__15261_15265 = G__15282;
count__15262_15266 = G__15283;
i__15263_15267 = G__15284;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__15289_15293 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15290_15294 = null;var count__15291_15295 = 0;var i__15292_15296 = 0;while(true){
if((i__15292_15296 < count__15291_15295))
{var node_15297 = cljs.core._nth.call(null,chunk__15290_15294,i__15292_15296);goog.dom.classes.toggle(node_15297,class$);
{
var G__15298 = seq__15289_15293;
var G__15299 = chunk__15290_15294;
var G__15300 = count__15291_15295;
var G__15301 = (i__15292_15296 + 1);
seq__15289_15293 = G__15298;
chunk__15290_15294 = G__15299;
count__15291_15295 = G__15300;
i__15292_15296 = G__15301;
continue;
}
} else
{var temp__4092__auto___15302 = cljs.core.seq.call(null,seq__15289_15293);if(temp__4092__auto___15302)
{var seq__15289_15303__$1 = temp__4092__auto___15302;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15289_15303__$1))
{var c__4148__auto___15304 = cljs.core.chunk_first.call(null,seq__15289_15303__$1);{
var G__15305 = cljs.core.chunk_rest.call(null,seq__15289_15303__$1);
var G__15306 = c__4148__auto___15304;
var G__15307 = cljs.core.count.call(null,c__4148__auto___15304);
var G__15308 = 0;
seq__15289_15293 = G__15305;
chunk__15290_15294 = G__15306;
count__15291_15295 = G__15307;
i__15292_15296 = G__15308;
continue;
}
} else
{var node_15309 = cljs.core.first.call(null,seq__15289_15303__$1);goog.dom.classes.toggle(node_15309,class$);
{
var G__15310 = cljs.core.next.call(null,seq__15289_15303__$1);
var G__15311 = null;
var G__15312 = 0;
var G__15313 = 0;
seq__15289_15293 = G__15310;
chunk__15290_15294 = G__15311;
count__15291_15295 = G__15312;
i__15292_15296 = G__15313;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_15322__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__15318_15323 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15319_15324 = null;var count__15320_15325 = 0;var i__15321_15326 = 0;while(true){
if((i__15321_15326 < count__15320_15325))
{var node_15327 = cljs.core._nth.call(null,chunk__15319_15324,i__15321_15326);goog.dom.classes.set(node_15327,classes_15322__$1);
{
var G__15328 = seq__15318_15323;
var G__15329 = chunk__15319_15324;
var G__15330 = count__15320_15325;
var G__15331 = (i__15321_15326 + 1);
seq__15318_15323 = G__15328;
chunk__15319_15324 = G__15329;
count__15320_15325 = G__15330;
i__15321_15326 = G__15331;
continue;
}
} else
{var temp__4092__auto___15332 = cljs.core.seq.call(null,seq__15318_15323);if(temp__4092__auto___15332)
{var seq__15318_15333__$1 = temp__4092__auto___15332;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15318_15333__$1))
{var c__4148__auto___15334 = cljs.core.chunk_first.call(null,seq__15318_15333__$1);{
var G__15335 = cljs.core.chunk_rest.call(null,seq__15318_15333__$1);
var G__15336 = c__4148__auto___15334;
var G__15337 = cljs.core.count.call(null,c__4148__auto___15334);
var G__15338 = 0;
seq__15318_15323 = G__15335;
chunk__15319_15324 = G__15336;
count__15320_15325 = G__15337;
i__15321_15326 = G__15338;
continue;
}
} else
{var node_15339 = cljs.core.first.call(null,seq__15318_15333__$1);goog.dom.classes.set(node_15339,classes_15322__$1);
{
var G__15340 = cljs.core.next.call(null,seq__15318_15333__$1);
var G__15341 = null;
var G__15342 = 0;
var G__15343 = 0;
seq__15318_15323 = G__15340;
chunk__15319_15324 = G__15341;
count__15320_15325 = G__15342;
i__15321_15326 = G__15343;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__15348_15352 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15349_15353 = null;var count__15350_15354 = 0;var i__15351_15355 = 0;while(true){
if((i__15351_15355 < count__15350_15354))
{var node_15356 = cljs.core._nth.call(null,chunk__15349_15353,i__15351_15355);goog.dom.setTextContent(node_15356,value);
{
var G__15357 = seq__15348_15352;
var G__15358 = chunk__15349_15353;
var G__15359 = count__15350_15354;
var G__15360 = (i__15351_15355 + 1);
seq__15348_15352 = G__15357;
chunk__15349_15353 = G__15358;
count__15350_15354 = G__15359;
i__15351_15355 = G__15360;
continue;
}
} else
{var temp__4092__auto___15361 = cljs.core.seq.call(null,seq__15348_15352);if(temp__4092__auto___15361)
{var seq__15348_15362__$1 = temp__4092__auto___15361;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15348_15362__$1))
{var c__4148__auto___15363 = cljs.core.chunk_first.call(null,seq__15348_15362__$1);{
var G__15364 = cljs.core.chunk_rest.call(null,seq__15348_15362__$1);
var G__15365 = c__4148__auto___15363;
var G__15366 = cljs.core.count.call(null,c__4148__auto___15363);
var G__15367 = 0;
seq__15348_15352 = G__15364;
chunk__15349_15353 = G__15365;
count__15350_15354 = G__15366;
i__15351_15355 = G__15367;
continue;
}
} else
{var node_15368 = cljs.core.first.call(null,seq__15348_15362__$1);goog.dom.setTextContent(node_15368,value);
{
var G__15369 = cljs.core.next.call(null,seq__15348_15362__$1);
var G__15370 = null;
var G__15371 = 0;
var G__15372 = 0;
seq__15348_15352 = G__15369;
chunk__15349_15353 = G__15370;
count__15350_15354 = G__15371;
i__15351_15355 = G__15372;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__15377_15381 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15378_15382 = null;var count__15379_15383 = 0;var i__15380_15384 = 0;while(true){
if((i__15380_15384 < count__15379_15383))
{var node_15385 = cljs.core._nth.call(null,chunk__15378_15382,i__15380_15384);goog.dom.forms.setValue(node_15385,value);
{
var G__15386 = seq__15377_15381;
var G__15387 = chunk__15378_15382;
var G__15388 = count__15379_15383;
var G__15389 = (i__15380_15384 + 1);
seq__15377_15381 = G__15386;
chunk__15378_15382 = G__15387;
count__15379_15383 = G__15388;
i__15380_15384 = G__15389;
continue;
}
} else
{var temp__4092__auto___15390 = cljs.core.seq.call(null,seq__15377_15381);if(temp__4092__auto___15390)
{var seq__15377_15391__$1 = temp__4092__auto___15390;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15377_15391__$1))
{var c__4148__auto___15392 = cljs.core.chunk_first.call(null,seq__15377_15391__$1);{
var G__15393 = cljs.core.chunk_rest.call(null,seq__15377_15391__$1);
var G__15394 = c__4148__auto___15392;
var G__15395 = cljs.core.count.call(null,c__4148__auto___15392);
var G__15396 = 0;
seq__15377_15381 = G__15393;
chunk__15378_15382 = G__15394;
count__15379_15383 = G__15395;
i__15380_15384 = G__15396;
continue;
}
} else
{var node_15397 = cljs.core.first.call(null,seq__15377_15391__$1);goog.dom.forms.setValue(node_15397,value);
{
var G__15398 = cljs.core.next.call(null,seq__15377_15391__$1);
var G__15399 = null;
var G__15400 = 0;
var G__15401 = 0;
seq__15377_15381 = G__15398;
chunk__15378_15382 = G__15399;
count__15379_15383 = G__15400;
i__15380_15384 = G__15401;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3394__auto__ = allows_inner_html_QMARK_;if(and__3394__auto__)
{var and__3394__auto____$1 = (function (){var or__3406__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3394__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
}
})()))
{var value_15412 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__15408_15413 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15409_15414 = null;var count__15410_15415 = 0;var i__15411_15416 = 0;while(true){
if((i__15411_15416 < count__15410_15415))
{var node_15417 = cljs.core._nth.call(null,chunk__15409_15414,i__15411_15416);node_15417.innerHTML = value_15412;
{
var G__15418 = seq__15408_15413;
var G__15419 = chunk__15409_15414;
var G__15420 = count__15410_15415;
var G__15421 = (i__15411_15416 + 1);
seq__15408_15413 = G__15418;
chunk__15409_15414 = G__15419;
count__15410_15415 = G__15420;
i__15411_15416 = G__15421;
continue;
}
} else
{var temp__4092__auto___15422 = cljs.core.seq.call(null,seq__15408_15413);if(temp__4092__auto___15422)
{var seq__15408_15423__$1 = temp__4092__auto___15422;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15408_15423__$1))
{var c__4148__auto___15424 = cljs.core.chunk_first.call(null,seq__15408_15423__$1);{
var G__15425 = cljs.core.chunk_rest.call(null,seq__15408_15423__$1);
var G__15426 = c__4148__auto___15424;
var G__15427 = cljs.core.count.call(null,c__4148__auto___15424);
var G__15428 = 0;
seq__15408_15413 = G__15425;
chunk__15409_15414 = G__15426;
count__15410_15415 = G__15427;
i__15411_15416 = G__15428;
continue;
}
} else
{var node_15429 = cljs.core.first.call(null,seq__15408_15423__$1);node_15429.innerHTML = value_15412;
{
var G__15430 = cljs.core.next.call(null,seq__15408_15423__$1);
var G__15431 = null;
var G__15432 = 0;
var G__15433 = 0;
seq__15408_15413 = G__15430;
chunk__15409_15414 = G__15431;
count__15410_15415 = G__15432;
i__15411_15416 = G__15433;
continue;
}
}
} else
{}
}
break;
}
}catch (e15407){if((e15407 instanceof Error))
{var e_15434 = e15407;domina.replace_children_BANG_.call(null,content,value_15412);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15407;
} else
{}
}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3394__auto__ = bubble;if(cljs.core.truth_(and__3394__auto__))
{return (value == null);
} else
{return and__3394__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.call(null,parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3406__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__15441_15445 = cljs.core.seq.call(null,children);var chunk__15442_15446 = null;var count__15443_15447 = 0;var i__15444_15448 = 0;while(true){
if((i__15444_15448 < count__15443_15447))
{var child_15449 = cljs.core._nth.call(null,chunk__15442_15446,i__15444_15448);frag.appendChild(child_15449);
{
var G__15450 = seq__15441_15445;
var G__15451 = chunk__15442_15446;
var G__15452 = count__15443_15447;
var G__15453 = (i__15444_15448 + 1);
seq__15441_15445 = G__15450;
chunk__15442_15446 = G__15451;
count__15443_15447 = G__15452;
i__15444_15448 = G__15453;
continue;
}
} else
{var temp__4092__auto___15454 = cljs.core.seq.call(null,seq__15441_15445);if(temp__4092__auto___15454)
{var seq__15441_15455__$1 = temp__4092__auto___15454;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15441_15455__$1))
{var c__4148__auto___15456 = cljs.core.chunk_first.call(null,seq__15441_15455__$1);{
var G__15457 = cljs.core.chunk_rest.call(null,seq__15441_15455__$1);
var G__15458 = c__4148__auto___15456;
var G__15459 = cljs.core.count.call(null,c__4148__auto___15456);
var G__15460 = 0;
seq__15441_15445 = G__15457;
chunk__15442_15446 = G__15458;
count__15443_15447 = G__15459;
i__15444_15448 = G__15460;
continue;
}
} else
{var child_15461 = cljs.core.first.call(null,seq__15441_15455__$1);frag.appendChild(child_15461);
{
var G__15462 = cljs.core.next.call(null,seq__15441_15455__$1);
var G__15463 = null;
var G__15464 = 0;
var G__15465 = 0;
seq__15441_15445 = G__15462;
chunk__15442_15446 = G__15463;
count__15443_15447 = G__15464;
i__15444_15448 = G__15465;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__15435_SHARP_,p2__15436_SHARP_){return f.call(null,p1__15435_SHARP_,p2__15436_SHARP_);
}),cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3394__auto__ = obj;if(cljs.core.truth_(and__3394__auto__))
{var and__3394__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3394__auto____$1)
{return obj.length;
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__15467 = list_thing;if(G__15467)
{var bit__4050__auto__ = (G__15467.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__15467.cljs$core$ISeqable$))
{return true;
} else
{if((!G__15467.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15467);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15467);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__15468 = content;if(G__15468)
{var bit__4050__auto__ = (G__15468.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__15468.cljs$core$ISeqable$))
{return true;
} else
{if((!G__15468.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15468);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15468);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__15469 = content;if(G__15469)
{var bit__4050__auto__ = (G__15469.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__15469.cljs$core$ISeqable$))
{return true;
} else
{if((!G__15469.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15469);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15469);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.call(null,coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}

//# sourceMappingURL=domina.js.map