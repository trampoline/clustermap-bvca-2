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
var opt_wrapper_14990 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_14991 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_14992 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_14991,table_section_wrapper_14991,opt_wrapper_14990,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_14992,table_section_wrapper_14991,cell_wrapper_14992,opt_wrapper_14990,table_section_wrapper_14991,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_14991]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__14997 = cljs.core.seq.call(null,tbody);var chunk__14998 = null;var count__14999 = 0;var i__15000 = 0;while(true){
if((i__15000 < count__14999))
{var child = cljs.core._nth.call(null,chunk__14998,i__15000);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__15001 = seq__14997;
var G__15002 = chunk__14998;
var G__15003 = count__14999;
var G__15004 = (i__15000 + 1);
seq__14997 = G__15001;
chunk__14998 = G__15002;
count__14999 = G__15003;
i__15000 = G__15004;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14997);if(temp__4092__auto__)
{var seq__14997__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14997__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__14997__$1);{
var G__15005 = cljs.core.chunk_rest.call(null,seq__14997__$1);
var G__15006 = c__4148__auto__;
var G__15007 = cljs.core.count.call(null,c__4148__auto__);
var G__15008 = 0;
seq__14997 = G__15005;
chunk__14998 = G__15006;
count__14999 = G__15007;
i__15000 = G__15008;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__14997__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__15009 = cljs.core.next.call(null,seq__14997__$1);
var G__15010 = null;
var G__15011 = 0;
var G__15012 = 0;
seq__14997 = G__15009;
chunk__14998 = G__15010;
count__14999 = G__15011;
i__15000 = G__15012;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__15014 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__15014,0,null);var start_wrap = cljs.core.nth.call(null,vec__15014,1,null);var end_wrap = cljs.core.nth.call(null,vec__15014,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__15015 = wrapper.lastChild;
var G__15016 = (level - 1);
wrapper = G__15015;
level = G__15016;
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
domina.DomContent = (function (){var obj15018 = {};return obj15018;
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
log_debug.cljs$lang$applyTo = (function (arglist__15019){
var mesg = cljs.core.seq(arglist__15019);
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
log.cljs$lang$applyTo = (function (arglist__15020){
var mesg = cljs.core.seq(arglist__15020);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__15021){
var contents = cljs.core.seq(arglist__15021);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__15022_SHARP_){return p1__15022_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__15023_SHARP_,p2__15024_SHARP_){return goog.dom.insertChildAt(p1__15023_SHARP_,p2__15024_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__15026_SHARP_,p2__15025_SHARP_){return goog.dom.insertSiblingBefore(p2__15025_SHARP_,p1__15026_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__15028_SHARP_,p2__15027_SHARP_){return goog.dom.insertSiblingAfter(p2__15027_SHARP_,p1__15028_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__15030_SHARP_,p2__15029_SHARP_){return goog.dom.replaceNode(p2__15029_SHARP_,p1__15030_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__15035_15039 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15036_15040 = null;var count__15037_15041 = 0;var i__15038_15042 = 0;while(true){
if((i__15038_15042 < count__15037_15041))
{var n_15043 = cljs.core._nth.call(null,chunk__15036_15040,i__15038_15042);goog.style.setStyle(n_15043,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__15044 = seq__15035_15039;
var G__15045 = chunk__15036_15040;
var G__15046 = count__15037_15041;
var G__15047 = (i__15038_15042 + 1);
seq__15035_15039 = G__15044;
chunk__15036_15040 = G__15045;
count__15037_15041 = G__15046;
i__15038_15042 = G__15047;
continue;
}
} else
{var temp__4092__auto___15048 = cljs.core.seq.call(null,seq__15035_15039);if(temp__4092__auto___15048)
{var seq__15035_15049__$1 = temp__4092__auto___15048;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15035_15049__$1))
{var c__4148__auto___15050 = cljs.core.chunk_first.call(null,seq__15035_15049__$1);{
var G__15051 = cljs.core.chunk_rest.call(null,seq__15035_15049__$1);
var G__15052 = c__4148__auto___15050;
var G__15053 = cljs.core.count.call(null,c__4148__auto___15050);
var G__15054 = 0;
seq__15035_15039 = G__15051;
chunk__15036_15040 = G__15052;
count__15037_15041 = G__15053;
i__15038_15042 = G__15054;
continue;
}
} else
{var n_15055 = cljs.core.first.call(null,seq__15035_15049__$1);goog.style.setStyle(n_15055,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__15056 = cljs.core.next.call(null,seq__15035_15049__$1);
var G__15057 = null;
var G__15058 = 0;
var G__15059 = 0;
seq__15035_15039 = G__15056;
chunk__15036_15040 = G__15057;
count__15037_15041 = G__15058;
i__15038_15042 = G__15059;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__15060){
var content = cljs.core.first(arglist__15060);
arglist__15060 = cljs.core.next(arglist__15060);
var name = cljs.core.first(arglist__15060);
var value = cljs.core.rest(arglist__15060);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__15065_15069 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15066_15070 = null;var count__15067_15071 = 0;var i__15068_15072 = 0;while(true){
if((i__15068_15072 < count__15067_15071))
{var n_15073 = cljs.core._nth.call(null,chunk__15066_15070,i__15068_15072);n_15073.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
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
{var n_15085 = cljs.core.first.call(null,seq__15065_15079__$1);n_15085.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
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
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__15090){
var content = cljs.core.first(arglist__15090);
arglist__15090 = cljs.core.next(arglist__15090);
var name = cljs.core.first(arglist__15090);
var value = cljs.core.rest(arglist__15090);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__15095_15099 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15096_15100 = null;var count__15097_15101 = 0;var i__15098_15102 = 0;while(true){
if((i__15098_15102 < count__15097_15101))
{var n_15103 = cljs.core._nth.call(null,chunk__15096_15100,i__15098_15102);n_15103.removeAttribute(cljs.core.name.call(null,name));
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
{var n_15115 = cljs.core.first.call(null,seq__15095_15109__$1);n_15115.removeAttribute(cljs.core.name.call(null,name));
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
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__15121 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__15121,0,null);var v = cljs.core.nth.call(null,vec__15121,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__15122_SHARP_){var attr = attrs__$1.item(p1__15122_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__15129_15135 = cljs.core.seq.call(null,styles);var chunk__15130_15136 = null;var count__15131_15137 = 0;var i__15132_15138 = 0;while(true){
if((i__15132_15138 < count__15131_15137))
{var vec__15133_15139 = cljs.core._nth.call(null,chunk__15130_15136,i__15132_15138);var name_15140 = cljs.core.nth.call(null,vec__15133_15139,0,null);var value_15141 = cljs.core.nth.call(null,vec__15133_15139,1,null);domina.set_style_BANG_.call(null,content,name_15140,value_15141);
{
var G__15142 = seq__15129_15135;
var G__15143 = chunk__15130_15136;
var G__15144 = count__15131_15137;
var G__15145 = (i__15132_15138 + 1);
seq__15129_15135 = G__15142;
chunk__15130_15136 = G__15143;
count__15131_15137 = G__15144;
i__15132_15138 = G__15145;
continue;
}
} else
{var temp__4092__auto___15146 = cljs.core.seq.call(null,seq__15129_15135);if(temp__4092__auto___15146)
{var seq__15129_15147__$1 = temp__4092__auto___15146;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15129_15147__$1))
{var c__4148__auto___15148 = cljs.core.chunk_first.call(null,seq__15129_15147__$1);{
var G__15149 = cljs.core.chunk_rest.call(null,seq__15129_15147__$1);
var G__15150 = c__4148__auto___15148;
var G__15151 = cljs.core.count.call(null,c__4148__auto___15148);
var G__15152 = 0;
seq__15129_15135 = G__15149;
chunk__15130_15136 = G__15150;
count__15131_15137 = G__15151;
i__15132_15138 = G__15152;
continue;
}
} else
{var vec__15134_15153 = cljs.core.first.call(null,seq__15129_15147__$1);var name_15154 = cljs.core.nth.call(null,vec__15134_15153,0,null);var value_15155 = cljs.core.nth.call(null,vec__15134_15153,1,null);domina.set_style_BANG_.call(null,content,name_15154,value_15155);
{
var G__15156 = cljs.core.next.call(null,seq__15129_15147__$1);
var G__15157 = null;
var G__15158 = 0;
var G__15159 = 0;
seq__15129_15135 = G__15156;
chunk__15130_15136 = G__15157;
count__15131_15137 = G__15158;
i__15132_15138 = G__15159;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__15166_15172 = cljs.core.seq.call(null,attrs);var chunk__15167_15173 = null;var count__15168_15174 = 0;var i__15169_15175 = 0;while(true){
if((i__15169_15175 < count__15168_15174))
{var vec__15170_15176 = cljs.core._nth.call(null,chunk__15167_15173,i__15169_15175);var name_15177 = cljs.core.nth.call(null,vec__15170_15176,0,null);var value_15178 = cljs.core.nth.call(null,vec__15170_15176,1,null);domina.set_attr_BANG_.call(null,content,name_15177,value_15178);
{
var G__15179 = seq__15166_15172;
var G__15180 = chunk__15167_15173;
var G__15181 = count__15168_15174;
var G__15182 = (i__15169_15175 + 1);
seq__15166_15172 = G__15179;
chunk__15167_15173 = G__15180;
count__15168_15174 = G__15181;
i__15169_15175 = G__15182;
continue;
}
} else
{var temp__4092__auto___15183 = cljs.core.seq.call(null,seq__15166_15172);if(temp__4092__auto___15183)
{var seq__15166_15184__$1 = temp__4092__auto___15183;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15166_15184__$1))
{var c__4148__auto___15185 = cljs.core.chunk_first.call(null,seq__15166_15184__$1);{
var G__15186 = cljs.core.chunk_rest.call(null,seq__15166_15184__$1);
var G__15187 = c__4148__auto___15185;
var G__15188 = cljs.core.count.call(null,c__4148__auto___15185);
var G__15189 = 0;
seq__15166_15172 = G__15186;
chunk__15167_15173 = G__15187;
count__15168_15174 = G__15188;
i__15169_15175 = G__15189;
continue;
}
} else
{var vec__15171_15190 = cljs.core.first.call(null,seq__15166_15184__$1);var name_15191 = cljs.core.nth.call(null,vec__15171_15190,0,null);var value_15192 = cljs.core.nth.call(null,vec__15171_15190,1,null);domina.set_attr_BANG_.call(null,content,name_15191,value_15192);
{
var G__15193 = cljs.core.next.call(null,seq__15166_15184__$1);
var G__15194 = null;
var G__15195 = 0;
var G__15196 = 0;
seq__15166_15172 = G__15193;
chunk__15167_15173 = G__15194;
count__15168_15174 = G__15195;
i__15169_15175 = G__15196;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__15201_15205 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15202_15206 = null;var count__15203_15207 = 0;var i__15204_15208 = 0;while(true){
if((i__15204_15208 < count__15203_15207))
{var node_15209 = cljs.core._nth.call(null,chunk__15202_15206,i__15204_15208);goog.dom.classes.add(node_15209,class$);
{
var G__15210 = seq__15201_15205;
var G__15211 = chunk__15202_15206;
var G__15212 = count__15203_15207;
var G__15213 = (i__15204_15208 + 1);
seq__15201_15205 = G__15210;
chunk__15202_15206 = G__15211;
count__15203_15207 = G__15212;
i__15204_15208 = G__15213;
continue;
}
} else
{var temp__4092__auto___15214 = cljs.core.seq.call(null,seq__15201_15205);if(temp__4092__auto___15214)
{var seq__15201_15215__$1 = temp__4092__auto___15214;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15201_15215__$1))
{var c__4148__auto___15216 = cljs.core.chunk_first.call(null,seq__15201_15215__$1);{
var G__15217 = cljs.core.chunk_rest.call(null,seq__15201_15215__$1);
var G__15218 = c__4148__auto___15216;
var G__15219 = cljs.core.count.call(null,c__4148__auto___15216);
var G__15220 = 0;
seq__15201_15205 = G__15217;
chunk__15202_15206 = G__15218;
count__15203_15207 = G__15219;
i__15204_15208 = G__15220;
continue;
}
} else
{var node_15221 = cljs.core.first.call(null,seq__15201_15215__$1);goog.dom.classes.add(node_15221,class$);
{
var G__15222 = cljs.core.next.call(null,seq__15201_15215__$1);
var G__15223 = null;
var G__15224 = 0;
var G__15225 = 0;
seq__15201_15205 = G__15222;
chunk__15202_15206 = G__15223;
count__15203_15207 = G__15224;
i__15204_15208 = G__15225;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__15230_15234 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15231_15235 = null;var count__15232_15236 = 0;var i__15233_15237 = 0;while(true){
if((i__15233_15237 < count__15232_15236))
{var node_15238 = cljs.core._nth.call(null,chunk__15231_15235,i__15233_15237);goog.dom.classes.remove(node_15238,class$);
{
var G__15239 = seq__15230_15234;
var G__15240 = chunk__15231_15235;
var G__15241 = count__15232_15236;
var G__15242 = (i__15233_15237 + 1);
seq__15230_15234 = G__15239;
chunk__15231_15235 = G__15240;
count__15232_15236 = G__15241;
i__15233_15237 = G__15242;
continue;
}
} else
{var temp__4092__auto___15243 = cljs.core.seq.call(null,seq__15230_15234);if(temp__4092__auto___15243)
{var seq__15230_15244__$1 = temp__4092__auto___15243;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15230_15244__$1))
{var c__4148__auto___15245 = cljs.core.chunk_first.call(null,seq__15230_15244__$1);{
var G__15246 = cljs.core.chunk_rest.call(null,seq__15230_15244__$1);
var G__15247 = c__4148__auto___15245;
var G__15248 = cljs.core.count.call(null,c__4148__auto___15245);
var G__15249 = 0;
seq__15230_15234 = G__15246;
chunk__15231_15235 = G__15247;
count__15232_15236 = G__15248;
i__15233_15237 = G__15249;
continue;
}
} else
{var node_15250 = cljs.core.first.call(null,seq__15230_15244__$1);goog.dom.classes.remove(node_15250,class$);
{
var G__15251 = cljs.core.next.call(null,seq__15230_15244__$1);
var G__15252 = null;
var G__15253 = 0;
var G__15254 = 0;
seq__15230_15234 = G__15251;
chunk__15231_15235 = G__15252;
count__15232_15236 = G__15253;
i__15233_15237 = G__15254;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__15259_15263 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15260_15264 = null;var count__15261_15265 = 0;var i__15262_15266 = 0;while(true){
if((i__15262_15266 < count__15261_15265))
{var node_15267 = cljs.core._nth.call(null,chunk__15260_15264,i__15262_15266);goog.dom.classes.toggle(node_15267,class$);
{
var G__15268 = seq__15259_15263;
var G__15269 = chunk__15260_15264;
var G__15270 = count__15261_15265;
var G__15271 = (i__15262_15266 + 1);
seq__15259_15263 = G__15268;
chunk__15260_15264 = G__15269;
count__15261_15265 = G__15270;
i__15262_15266 = G__15271;
continue;
}
} else
{var temp__4092__auto___15272 = cljs.core.seq.call(null,seq__15259_15263);if(temp__4092__auto___15272)
{var seq__15259_15273__$1 = temp__4092__auto___15272;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15259_15273__$1))
{var c__4148__auto___15274 = cljs.core.chunk_first.call(null,seq__15259_15273__$1);{
var G__15275 = cljs.core.chunk_rest.call(null,seq__15259_15273__$1);
var G__15276 = c__4148__auto___15274;
var G__15277 = cljs.core.count.call(null,c__4148__auto___15274);
var G__15278 = 0;
seq__15259_15263 = G__15275;
chunk__15260_15264 = G__15276;
count__15261_15265 = G__15277;
i__15262_15266 = G__15278;
continue;
}
} else
{var node_15279 = cljs.core.first.call(null,seq__15259_15273__$1);goog.dom.classes.toggle(node_15279,class$);
{
var G__15280 = cljs.core.next.call(null,seq__15259_15273__$1);
var G__15281 = null;
var G__15282 = 0;
var G__15283 = 0;
seq__15259_15263 = G__15280;
chunk__15260_15264 = G__15281;
count__15261_15265 = G__15282;
i__15262_15266 = G__15283;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_15292__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__15288_15293 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15289_15294 = null;var count__15290_15295 = 0;var i__15291_15296 = 0;while(true){
if((i__15291_15296 < count__15290_15295))
{var node_15297 = cljs.core._nth.call(null,chunk__15289_15294,i__15291_15296);goog.dom.classes.set(node_15297,classes_15292__$1);
{
var G__15298 = seq__15288_15293;
var G__15299 = chunk__15289_15294;
var G__15300 = count__15290_15295;
var G__15301 = (i__15291_15296 + 1);
seq__15288_15293 = G__15298;
chunk__15289_15294 = G__15299;
count__15290_15295 = G__15300;
i__15291_15296 = G__15301;
continue;
}
} else
{var temp__4092__auto___15302 = cljs.core.seq.call(null,seq__15288_15293);if(temp__4092__auto___15302)
{var seq__15288_15303__$1 = temp__4092__auto___15302;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15288_15303__$1))
{var c__4148__auto___15304 = cljs.core.chunk_first.call(null,seq__15288_15303__$1);{
var G__15305 = cljs.core.chunk_rest.call(null,seq__15288_15303__$1);
var G__15306 = c__4148__auto___15304;
var G__15307 = cljs.core.count.call(null,c__4148__auto___15304);
var G__15308 = 0;
seq__15288_15293 = G__15305;
chunk__15289_15294 = G__15306;
count__15290_15295 = G__15307;
i__15291_15296 = G__15308;
continue;
}
} else
{var node_15309 = cljs.core.first.call(null,seq__15288_15303__$1);goog.dom.classes.set(node_15309,classes_15292__$1);
{
var G__15310 = cljs.core.next.call(null,seq__15288_15303__$1);
var G__15311 = null;
var G__15312 = 0;
var G__15313 = 0;
seq__15288_15293 = G__15310;
chunk__15289_15294 = G__15311;
count__15290_15295 = G__15312;
i__15291_15296 = G__15313;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__15318_15322 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15319_15323 = null;var count__15320_15324 = 0;var i__15321_15325 = 0;while(true){
if((i__15321_15325 < count__15320_15324))
{var node_15326 = cljs.core._nth.call(null,chunk__15319_15323,i__15321_15325);goog.dom.setTextContent(node_15326,value);
{
var G__15327 = seq__15318_15322;
var G__15328 = chunk__15319_15323;
var G__15329 = count__15320_15324;
var G__15330 = (i__15321_15325 + 1);
seq__15318_15322 = G__15327;
chunk__15319_15323 = G__15328;
count__15320_15324 = G__15329;
i__15321_15325 = G__15330;
continue;
}
} else
{var temp__4092__auto___15331 = cljs.core.seq.call(null,seq__15318_15322);if(temp__4092__auto___15331)
{var seq__15318_15332__$1 = temp__4092__auto___15331;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15318_15332__$1))
{var c__4148__auto___15333 = cljs.core.chunk_first.call(null,seq__15318_15332__$1);{
var G__15334 = cljs.core.chunk_rest.call(null,seq__15318_15332__$1);
var G__15335 = c__4148__auto___15333;
var G__15336 = cljs.core.count.call(null,c__4148__auto___15333);
var G__15337 = 0;
seq__15318_15322 = G__15334;
chunk__15319_15323 = G__15335;
count__15320_15324 = G__15336;
i__15321_15325 = G__15337;
continue;
}
} else
{var node_15338 = cljs.core.first.call(null,seq__15318_15332__$1);goog.dom.setTextContent(node_15338,value);
{
var G__15339 = cljs.core.next.call(null,seq__15318_15332__$1);
var G__15340 = null;
var G__15341 = 0;
var G__15342 = 0;
seq__15318_15322 = G__15339;
chunk__15319_15323 = G__15340;
count__15320_15324 = G__15341;
i__15321_15325 = G__15342;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__15347_15351 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15348_15352 = null;var count__15349_15353 = 0;var i__15350_15354 = 0;while(true){
if((i__15350_15354 < count__15349_15353))
{var node_15355 = cljs.core._nth.call(null,chunk__15348_15352,i__15350_15354);goog.dom.forms.setValue(node_15355,value);
{
var G__15356 = seq__15347_15351;
var G__15357 = chunk__15348_15352;
var G__15358 = count__15349_15353;
var G__15359 = (i__15350_15354 + 1);
seq__15347_15351 = G__15356;
chunk__15348_15352 = G__15357;
count__15349_15353 = G__15358;
i__15350_15354 = G__15359;
continue;
}
} else
{var temp__4092__auto___15360 = cljs.core.seq.call(null,seq__15347_15351);if(temp__4092__auto___15360)
{var seq__15347_15361__$1 = temp__4092__auto___15360;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15347_15361__$1))
{var c__4148__auto___15362 = cljs.core.chunk_first.call(null,seq__15347_15361__$1);{
var G__15363 = cljs.core.chunk_rest.call(null,seq__15347_15361__$1);
var G__15364 = c__4148__auto___15362;
var G__15365 = cljs.core.count.call(null,c__4148__auto___15362);
var G__15366 = 0;
seq__15347_15351 = G__15363;
chunk__15348_15352 = G__15364;
count__15349_15353 = G__15365;
i__15350_15354 = G__15366;
continue;
}
} else
{var node_15367 = cljs.core.first.call(null,seq__15347_15361__$1);goog.dom.forms.setValue(node_15367,value);
{
var G__15368 = cljs.core.next.call(null,seq__15347_15361__$1);
var G__15369 = null;
var G__15370 = 0;
var G__15371 = 0;
seq__15347_15351 = G__15368;
chunk__15348_15352 = G__15369;
count__15349_15353 = G__15370;
i__15350_15354 = G__15371;
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
{var value_15382 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__15378_15383 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15379_15384 = null;var count__15380_15385 = 0;var i__15381_15386 = 0;while(true){
if((i__15381_15386 < count__15380_15385))
{var node_15387 = cljs.core._nth.call(null,chunk__15379_15384,i__15381_15386);node_15387.innerHTML = value_15382;
{
var G__15388 = seq__15378_15383;
var G__15389 = chunk__15379_15384;
var G__15390 = count__15380_15385;
var G__15391 = (i__15381_15386 + 1);
seq__15378_15383 = G__15388;
chunk__15379_15384 = G__15389;
count__15380_15385 = G__15390;
i__15381_15386 = G__15391;
continue;
}
} else
{var temp__4092__auto___15392 = cljs.core.seq.call(null,seq__15378_15383);if(temp__4092__auto___15392)
{var seq__15378_15393__$1 = temp__4092__auto___15392;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15378_15393__$1))
{var c__4148__auto___15394 = cljs.core.chunk_first.call(null,seq__15378_15393__$1);{
var G__15395 = cljs.core.chunk_rest.call(null,seq__15378_15393__$1);
var G__15396 = c__4148__auto___15394;
var G__15397 = cljs.core.count.call(null,c__4148__auto___15394);
var G__15398 = 0;
seq__15378_15383 = G__15395;
chunk__15379_15384 = G__15396;
count__15380_15385 = G__15397;
i__15381_15386 = G__15398;
continue;
}
} else
{var node_15399 = cljs.core.first.call(null,seq__15378_15393__$1);node_15399.innerHTML = value_15382;
{
var G__15400 = cljs.core.next.call(null,seq__15378_15393__$1);
var G__15401 = null;
var G__15402 = 0;
var G__15403 = 0;
seq__15378_15383 = G__15400;
chunk__15379_15384 = G__15401;
count__15380_15385 = G__15402;
i__15381_15386 = G__15403;
continue;
}
}
} else
{}
}
break;
}
}catch (e15377){if((e15377 instanceof Error))
{var e_15404 = e15377;domina.replace_children_BANG_.call(null,content,value_15382);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15377;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__15411_15415 = cljs.core.seq.call(null,children);var chunk__15412_15416 = null;var count__15413_15417 = 0;var i__15414_15418 = 0;while(true){
if((i__15414_15418 < count__15413_15417))
{var child_15419 = cljs.core._nth.call(null,chunk__15412_15416,i__15414_15418);frag.appendChild(child_15419);
{
var G__15420 = seq__15411_15415;
var G__15421 = chunk__15412_15416;
var G__15422 = count__15413_15417;
var G__15423 = (i__15414_15418 + 1);
seq__15411_15415 = G__15420;
chunk__15412_15416 = G__15421;
count__15413_15417 = G__15422;
i__15414_15418 = G__15423;
continue;
}
} else
{var temp__4092__auto___15424 = cljs.core.seq.call(null,seq__15411_15415);if(temp__4092__auto___15424)
{var seq__15411_15425__$1 = temp__4092__auto___15424;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15411_15425__$1))
{var c__4148__auto___15426 = cljs.core.chunk_first.call(null,seq__15411_15425__$1);{
var G__15427 = cljs.core.chunk_rest.call(null,seq__15411_15425__$1);
var G__15428 = c__4148__auto___15426;
var G__15429 = cljs.core.count.call(null,c__4148__auto___15426);
var G__15430 = 0;
seq__15411_15415 = G__15427;
chunk__15412_15416 = G__15428;
count__15413_15417 = G__15429;
i__15414_15418 = G__15430;
continue;
}
} else
{var child_15431 = cljs.core.first.call(null,seq__15411_15425__$1);frag.appendChild(child_15431);
{
var G__15432 = cljs.core.next.call(null,seq__15411_15425__$1);
var G__15433 = null;
var G__15434 = 0;
var G__15435 = 0;
seq__15411_15415 = G__15432;
chunk__15412_15416 = G__15433;
count__15413_15417 = G__15434;
i__15414_15418 = G__15435;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__15405_SHARP_,p2__15406_SHARP_){return f.call(null,p1__15405_SHARP_,p2__15406_SHARP_);
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
{if((function (){var G__15437 = list_thing;if(G__15437)
{var bit__4050__auto__ = (G__15437.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__15437.cljs$core$ISeqable$))
{return true;
} else
{if((!G__15437.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15437);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15437);
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
{if((function (){var G__15438 = content;if(G__15438)
{var bit__4050__auto__ = (G__15438.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__15438.cljs$core$ISeqable$))
{return true;
} else
{if((!G__15438.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15438);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15438);
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
{if((function (){var G__15439 = content;if(G__15439)
{var bit__4050__auto__ = (G__15439.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__15439.cljs$core$ISeqable$))
{return true;
} else
{if((!G__15439.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15439);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15439);
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