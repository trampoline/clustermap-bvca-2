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
var opt_wrapper_16950 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_16951 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_16952 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_16951,table_section_wrapper_16951,opt_wrapper_16950,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_16952,table_section_wrapper_16951,cell_wrapper_16952,opt_wrapper_16950,table_section_wrapper_16951,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_16951]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__16957 = cljs.core.seq.call(null,tbody);var chunk__16958 = null;var count__16959 = 0;var i__16960 = 0;while(true){
if((i__16960 < count__16959))
{var child = cljs.core._nth.call(null,chunk__16958,i__16960);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__16961 = seq__16957;
var G__16962 = chunk__16958;
var G__16963 = count__16959;
var G__16964 = (i__16960 + 1);
seq__16957 = G__16961;
chunk__16958 = G__16962;
count__16959 = G__16963;
i__16960 = G__16964;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16957);if(temp__4092__auto__)
{var seq__16957__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16957__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16957__$1);{
var G__16965 = cljs.core.chunk_rest.call(null,seq__16957__$1);
var G__16966 = c__4148__auto__;
var G__16967 = cljs.core.count.call(null,c__4148__auto__);
var G__16968 = 0;
seq__16957 = G__16965;
chunk__16958 = G__16966;
count__16959 = G__16967;
i__16960 = G__16968;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__16957__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__16969 = cljs.core.next.call(null,seq__16957__$1);
var G__16970 = null;
var G__16971 = 0;
var G__16972 = 0;
seq__16957 = G__16969;
chunk__16958 = G__16970;
count__16959 = G__16971;
i__16960 = G__16972;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__16974 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__16974,0,null);var start_wrap = cljs.core.nth.call(null,vec__16974,1,null);var end_wrap = cljs.core.nth.call(null,vec__16974,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__16975 = wrapper.lastChild;
var G__16976 = (level - 1);
wrapper = G__16975;
level = G__16976;
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
domina.DomContent = (function (){var obj16978 = {};return obj16978;
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
log_debug.cljs$lang$applyTo = (function (arglist__16979){
var mesg = cljs.core.seq(arglist__16979);
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
log.cljs$lang$applyTo = (function (arglist__16980){
var mesg = cljs.core.seq(arglist__16980);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__16981){
var contents = cljs.core.seq(arglist__16981);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__16982_SHARP_){return p1__16982_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__16983_SHARP_,p2__16984_SHARP_){return goog.dom.insertChildAt(p1__16983_SHARP_,p2__16984_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__16986_SHARP_,p2__16985_SHARP_){return goog.dom.insertSiblingBefore(p2__16985_SHARP_,p1__16986_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__16988_SHARP_,p2__16987_SHARP_){return goog.dom.insertSiblingAfter(p2__16987_SHARP_,p1__16988_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__16990_SHARP_,p2__16989_SHARP_){return goog.dom.replaceNode(p2__16989_SHARP_,p1__16990_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__16995_16999 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16996_17000 = null;var count__16997_17001 = 0;var i__16998_17002 = 0;while(true){
if((i__16998_17002 < count__16997_17001))
{var n_17003 = cljs.core._nth.call(null,chunk__16996_17000,i__16998_17002);goog.style.setStyle(n_17003,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17004 = seq__16995_16999;
var G__17005 = chunk__16996_17000;
var G__17006 = count__16997_17001;
var G__17007 = (i__16998_17002 + 1);
seq__16995_16999 = G__17004;
chunk__16996_17000 = G__17005;
count__16997_17001 = G__17006;
i__16998_17002 = G__17007;
continue;
}
} else
{var temp__4092__auto___17008 = cljs.core.seq.call(null,seq__16995_16999);if(temp__4092__auto___17008)
{var seq__16995_17009__$1 = temp__4092__auto___17008;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16995_17009__$1))
{var c__4148__auto___17010 = cljs.core.chunk_first.call(null,seq__16995_17009__$1);{
var G__17011 = cljs.core.chunk_rest.call(null,seq__16995_17009__$1);
var G__17012 = c__4148__auto___17010;
var G__17013 = cljs.core.count.call(null,c__4148__auto___17010);
var G__17014 = 0;
seq__16995_16999 = G__17011;
chunk__16996_17000 = G__17012;
count__16997_17001 = G__17013;
i__16998_17002 = G__17014;
continue;
}
} else
{var n_17015 = cljs.core.first.call(null,seq__16995_17009__$1);goog.style.setStyle(n_17015,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17016 = cljs.core.next.call(null,seq__16995_17009__$1);
var G__17017 = null;
var G__17018 = 0;
var G__17019 = 0;
seq__16995_16999 = G__17016;
chunk__16996_17000 = G__17017;
count__16997_17001 = G__17018;
i__16998_17002 = G__17019;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__17020){
var content = cljs.core.first(arglist__17020);
arglist__17020 = cljs.core.next(arglist__17020);
var name = cljs.core.first(arglist__17020);
var value = cljs.core.rest(arglist__17020);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__17025_17029 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17026_17030 = null;var count__17027_17031 = 0;var i__17028_17032 = 0;while(true){
if((i__17028_17032 < count__17027_17031))
{var n_17033 = cljs.core._nth.call(null,chunk__17026_17030,i__17028_17032);n_17033.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17034 = seq__17025_17029;
var G__17035 = chunk__17026_17030;
var G__17036 = count__17027_17031;
var G__17037 = (i__17028_17032 + 1);
seq__17025_17029 = G__17034;
chunk__17026_17030 = G__17035;
count__17027_17031 = G__17036;
i__17028_17032 = G__17037;
continue;
}
} else
{var temp__4092__auto___17038 = cljs.core.seq.call(null,seq__17025_17029);if(temp__4092__auto___17038)
{var seq__17025_17039__$1 = temp__4092__auto___17038;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17025_17039__$1))
{var c__4148__auto___17040 = cljs.core.chunk_first.call(null,seq__17025_17039__$1);{
var G__17041 = cljs.core.chunk_rest.call(null,seq__17025_17039__$1);
var G__17042 = c__4148__auto___17040;
var G__17043 = cljs.core.count.call(null,c__4148__auto___17040);
var G__17044 = 0;
seq__17025_17029 = G__17041;
chunk__17026_17030 = G__17042;
count__17027_17031 = G__17043;
i__17028_17032 = G__17044;
continue;
}
} else
{var n_17045 = cljs.core.first.call(null,seq__17025_17039__$1);n_17045.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17046 = cljs.core.next.call(null,seq__17025_17039__$1);
var G__17047 = null;
var G__17048 = 0;
var G__17049 = 0;
seq__17025_17029 = G__17046;
chunk__17026_17030 = G__17047;
count__17027_17031 = G__17048;
i__17028_17032 = G__17049;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__17050){
var content = cljs.core.first(arglist__17050);
arglist__17050 = cljs.core.next(arglist__17050);
var name = cljs.core.first(arglist__17050);
var value = cljs.core.rest(arglist__17050);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__17055_17059 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17056_17060 = null;var count__17057_17061 = 0;var i__17058_17062 = 0;while(true){
if((i__17058_17062 < count__17057_17061))
{var n_17063 = cljs.core._nth.call(null,chunk__17056_17060,i__17058_17062);n_17063.removeAttribute(cljs.core.name.call(null,name));
{
var G__17064 = seq__17055_17059;
var G__17065 = chunk__17056_17060;
var G__17066 = count__17057_17061;
var G__17067 = (i__17058_17062 + 1);
seq__17055_17059 = G__17064;
chunk__17056_17060 = G__17065;
count__17057_17061 = G__17066;
i__17058_17062 = G__17067;
continue;
}
} else
{var temp__4092__auto___17068 = cljs.core.seq.call(null,seq__17055_17059);if(temp__4092__auto___17068)
{var seq__17055_17069__$1 = temp__4092__auto___17068;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17055_17069__$1))
{var c__4148__auto___17070 = cljs.core.chunk_first.call(null,seq__17055_17069__$1);{
var G__17071 = cljs.core.chunk_rest.call(null,seq__17055_17069__$1);
var G__17072 = c__4148__auto___17070;
var G__17073 = cljs.core.count.call(null,c__4148__auto___17070);
var G__17074 = 0;
seq__17055_17059 = G__17071;
chunk__17056_17060 = G__17072;
count__17057_17061 = G__17073;
i__17058_17062 = G__17074;
continue;
}
} else
{var n_17075 = cljs.core.first.call(null,seq__17055_17069__$1);n_17075.removeAttribute(cljs.core.name.call(null,name));
{
var G__17076 = cljs.core.next.call(null,seq__17055_17069__$1);
var G__17077 = null;
var G__17078 = 0;
var G__17079 = 0;
seq__17055_17059 = G__17076;
chunk__17056_17060 = G__17077;
count__17057_17061 = G__17078;
i__17058_17062 = G__17079;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__17081 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__17081,0,null);var v = cljs.core.nth.call(null,vec__17081,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__17082_SHARP_){var attr = attrs__$1.item(p1__17082_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__17089_17095 = cljs.core.seq.call(null,styles);var chunk__17090_17096 = null;var count__17091_17097 = 0;var i__17092_17098 = 0;while(true){
if((i__17092_17098 < count__17091_17097))
{var vec__17093_17099 = cljs.core._nth.call(null,chunk__17090_17096,i__17092_17098);var name_17100 = cljs.core.nth.call(null,vec__17093_17099,0,null);var value_17101 = cljs.core.nth.call(null,vec__17093_17099,1,null);domina.set_style_BANG_.call(null,content,name_17100,value_17101);
{
var G__17102 = seq__17089_17095;
var G__17103 = chunk__17090_17096;
var G__17104 = count__17091_17097;
var G__17105 = (i__17092_17098 + 1);
seq__17089_17095 = G__17102;
chunk__17090_17096 = G__17103;
count__17091_17097 = G__17104;
i__17092_17098 = G__17105;
continue;
}
} else
{var temp__4092__auto___17106 = cljs.core.seq.call(null,seq__17089_17095);if(temp__4092__auto___17106)
{var seq__17089_17107__$1 = temp__4092__auto___17106;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17089_17107__$1))
{var c__4148__auto___17108 = cljs.core.chunk_first.call(null,seq__17089_17107__$1);{
var G__17109 = cljs.core.chunk_rest.call(null,seq__17089_17107__$1);
var G__17110 = c__4148__auto___17108;
var G__17111 = cljs.core.count.call(null,c__4148__auto___17108);
var G__17112 = 0;
seq__17089_17095 = G__17109;
chunk__17090_17096 = G__17110;
count__17091_17097 = G__17111;
i__17092_17098 = G__17112;
continue;
}
} else
{var vec__17094_17113 = cljs.core.first.call(null,seq__17089_17107__$1);var name_17114 = cljs.core.nth.call(null,vec__17094_17113,0,null);var value_17115 = cljs.core.nth.call(null,vec__17094_17113,1,null);domina.set_style_BANG_.call(null,content,name_17114,value_17115);
{
var G__17116 = cljs.core.next.call(null,seq__17089_17107__$1);
var G__17117 = null;
var G__17118 = 0;
var G__17119 = 0;
seq__17089_17095 = G__17116;
chunk__17090_17096 = G__17117;
count__17091_17097 = G__17118;
i__17092_17098 = G__17119;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__17126_17132 = cljs.core.seq.call(null,attrs);var chunk__17127_17133 = null;var count__17128_17134 = 0;var i__17129_17135 = 0;while(true){
if((i__17129_17135 < count__17128_17134))
{var vec__17130_17136 = cljs.core._nth.call(null,chunk__17127_17133,i__17129_17135);var name_17137 = cljs.core.nth.call(null,vec__17130_17136,0,null);var value_17138 = cljs.core.nth.call(null,vec__17130_17136,1,null);domina.set_attr_BANG_.call(null,content,name_17137,value_17138);
{
var G__17139 = seq__17126_17132;
var G__17140 = chunk__17127_17133;
var G__17141 = count__17128_17134;
var G__17142 = (i__17129_17135 + 1);
seq__17126_17132 = G__17139;
chunk__17127_17133 = G__17140;
count__17128_17134 = G__17141;
i__17129_17135 = G__17142;
continue;
}
} else
{var temp__4092__auto___17143 = cljs.core.seq.call(null,seq__17126_17132);if(temp__4092__auto___17143)
{var seq__17126_17144__$1 = temp__4092__auto___17143;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17126_17144__$1))
{var c__4148__auto___17145 = cljs.core.chunk_first.call(null,seq__17126_17144__$1);{
var G__17146 = cljs.core.chunk_rest.call(null,seq__17126_17144__$1);
var G__17147 = c__4148__auto___17145;
var G__17148 = cljs.core.count.call(null,c__4148__auto___17145);
var G__17149 = 0;
seq__17126_17132 = G__17146;
chunk__17127_17133 = G__17147;
count__17128_17134 = G__17148;
i__17129_17135 = G__17149;
continue;
}
} else
{var vec__17131_17150 = cljs.core.first.call(null,seq__17126_17144__$1);var name_17151 = cljs.core.nth.call(null,vec__17131_17150,0,null);var value_17152 = cljs.core.nth.call(null,vec__17131_17150,1,null);domina.set_attr_BANG_.call(null,content,name_17151,value_17152);
{
var G__17153 = cljs.core.next.call(null,seq__17126_17144__$1);
var G__17154 = null;
var G__17155 = 0;
var G__17156 = 0;
seq__17126_17132 = G__17153;
chunk__17127_17133 = G__17154;
count__17128_17134 = G__17155;
i__17129_17135 = G__17156;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__17161_17165 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17162_17166 = null;var count__17163_17167 = 0;var i__17164_17168 = 0;while(true){
if((i__17164_17168 < count__17163_17167))
{var node_17169 = cljs.core._nth.call(null,chunk__17162_17166,i__17164_17168);goog.dom.classes.add(node_17169,class$);
{
var G__17170 = seq__17161_17165;
var G__17171 = chunk__17162_17166;
var G__17172 = count__17163_17167;
var G__17173 = (i__17164_17168 + 1);
seq__17161_17165 = G__17170;
chunk__17162_17166 = G__17171;
count__17163_17167 = G__17172;
i__17164_17168 = G__17173;
continue;
}
} else
{var temp__4092__auto___17174 = cljs.core.seq.call(null,seq__17161_17165);if(temp__4092__auto___17174)
{var seq__17161_17175__$1 = temp__4092__auto___17174;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17161_17175__$1))
{var c__4148__auto___17176 = cljs.core.chunk_first.call(null,seq__17161_17175__$1);{
var G__17177 = cljs.core.chunk_rest.call(null,seq__17161_17175__$1);
var G__17178 = c__4148__auto___17176;
var G__17179 = cljs.core.count.call(null,c__4148__auto___17176);
var G__17180 = 0;
seq__17161_17165 = G__17177;
chunk__17162_17166 = G__17178;
count__17163_17167 = G__17179;
i__17164_17168 = G__17180;
continue;
}
} else
{var node_17181 = cljs.core.first.call(null,seq__17161_17175__$1);goog.dom.classes.add(node_17181,class$);
{
var G__17182 = cljs.core.next.call(null,seq__17161_17175__$1);
var G__17183 = null;
var G__17184 = 0;
var G__17185 = 0;
seq__17161_17165 = G__17182;
chunk__17162_17166 = G__17183;
count__17163_17167 = G__17184;
i__17164_17168 = G__17185;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__17190_17194 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17191_17195 = null;var count__17192_17196 = 0;var i__17193_17197 = 0;while(true){
if((i__17193_17197 < count__17192_17196))
{var node_17198 = cljs.core._nth.call(null,chunk__17191_17195,i__17193_17197);goog.dom.classes.remove(node_17198,class$);
{
var G__17199 = seq__17190_17194;
var G__17200 = chunk__17191_17195;
var G__17201 = count__17192_17196;
var G__17202 = (i__17193_17197 + 1);
seq__17190_17194 = G__17199;
chunk__17191_17195 = G__17200;
count__17192_17196 = G__17201;
i__17193_17197 = G__17202;
continue;
}
} else
{var temp__4092__auto___17203 = cljs.core.seq.call(null,seq__17190_17194);if(temp__4092__auto___17203)
{var seq__17190_17204__$1 = temp__4092__auto___17203;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17190_17204__$1))
{var c__4148__auto___17205 = cljs.core.chunk_first.call(null,seq__17190_17204__$1);{
var G__17206 = cljs.core.chunk_rest.call(null,seq__17190_17204__$1);
var G__17207 = c__4148__auto___17205;
var G__17208 = cljs.core.count.call(null,c__4148__auto___17205);
var G__17209 = 0;
seq__17190_17194 = G__17206;
chunk__17191_17195 = G__17207;
count__17192_17196 = G__17208;
i__17193_17197 = G__17209;
continue;
}
} else
{var node_17210 = cljs.core.first.call(null,seq__17190_17204__$1);goog.dom.classes.remove(node_17210,class$);
{
var G__17211 = cljs.core.next.call(null,seq__17190_17204__$1);
var G__17212 = null;
var G__17213 = 0;
var G__17214 = 0;
seq__17190_17194 = G__17211;
chunk__17191_17195 = G__17212;
count__17192_17196 = G__17213;
i__17193_17197 = G__17214;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__17219_17223 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17220_17224 = null;var count__17221_17225 = 0;var i__17222_17226 = 0;while(true){
if((i__17222_17226 < count__17221_17225))
{var node_17227 = cljs.core._nth.call(null,chunk__17220_17224,i__17222_17226);goog.dom.classes.toggle(node_17227,class$);
{
var G__17228 = seq__17219_17223;
var G__17229 = chunk__17220_17224;
var G__17230 = count__17221_17225;
var G__17231 = (i__17222_17226 + 1);
seq__17219_17223 = G__17228;
chunk__17220_17224 = G__17229;
count__17221_17225 = G__17230;
i__17222_17226 = G__17231;
continue;
}
} else
{var temp__4092__auto___17232 = cljs.core.seq.call(null,seq__17219_17223);if(temp__4092__auto___17232)
{var seq__17219_17233__$1 = temp__4092__auto___17232;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17219_17233__$1))
{var c__4148__auto___17234 = cljs.core.chunk_first.call(null,seq__17219_17233__$1);{
var G__17235 = cljs.core.chunk_rest.call(null,seq__17219_17233__$1);
var G__17236 = c__4148__auto___17234;
var G__17237 = cljs.core.count.call(null,c__4148__auto___17234);
var G__17238 = 0;
seq__17219_17223 = G__17235;
chunk__17220_17224 = G__17236;
count__17221_17225 = G__17237;
i__17222_17226 = G__17238;
continue;
}
} else
{var node_17239 = cljs.core.first.call(null,seq__17219_17233__$1);goog.dom.classes.toggle(node_17239,class$);
{
var G__17240 = cljs.core.next.call(null,seq__17219_17233__$1);
var G__17241 = null;
var G__17242 = 0;
var G__17243 = 0;
seq__17219_17223 = G__17240;
chunk__17220_17224 = G__17241;
count__17221_17225 = G__17242;
i__17222_17226 = G__17243;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_17252__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__17248_17253 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17249_17254 = null;var count__17250_17255 = 0;var i__17251_17256 = 0;while(true){
if((i__17251_17256 < count__17250_17255))
{var node_17257 = cljs.core._nth.call(null,chunk__17249_17254,i__17251_17256);goog.dom.classes.set(node_17257,classes_17252__$1);
{
var G__17258 = seq__17248_17253;
var G__17259 = chunk__17249_17254;
var G__17260 = count__17250_17255;
var G__17261 = (i__17251_17256 + 1);
seq__17248_17253 = G__17258;
chunk__17249_17254 = G__17259;
count__17250_17255 = G__17260;
i__17251_17256 = G__17261;
continue;
}
} else
{var temp__4092__auto___17262 = cljs.core.seq.call(null,seq__17248_17253);if(temp__4092__auto___17262)
{var seq__17248_17263__$1 = temp__4092__auto___17262;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17248_17263__$1))
{var c__4148__auto___17264 = cljs.core.chunk_first.call(null,seq__17248_17263__$1);{
var G__17265 = cljs.core.chunk_rest.call(null,seq__17248_17263__$1);
var G__17266 = c__4148__auto___17264;
var G__17267 = cljs.core.count.call(null,c__4148__auto___17264);
var G__17268 = 0;
seq__17248_17253 = G__17265;
chunk__17249_17254 = G__17266;
count__17250_17255 = G__17267;
i__17251_17256 = G__17268;
continue;
}
} else
{var node_17269 = cljs.core.first.call(null,seq__17248_17263__$1);goog.dom.classes.set(node_17269,classes_17252__$1);
{
var G__17270 = cljs.core.next.call(null,seq__17248_17263__$1);
var G__17271 = null;
var G__17272 = 0;
var G__17273 = 0;
seq__17248_17253 = G__17270;
chunk__17249_17254 = G__17271;
count__17250_17255 = G__17272;
i__17251_17256 = G__17273;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__17278_17282 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17279_17283 = null;var count__17280_17284 = 0;var i__17281_17285 = 0;while(true){
if((i__17281_17285 < count__17280_17284))
{var node_17286 = cljs.core._nth.call(null,chunk__17279_17283,i__17281_17285);goog.dom.setTextContent(node_17286,value);
{
var G__17287 = seq__17278_17282;
var G__17288 = chunk__17279_17283;
var G__17289 = count__17280_17284;
var G__17290 = (i__17281_17285 + 1);
seq__17278_17282 = G__17287;
chunk__17279_17283 = G__17288;
count__17280_17284 = G__17289;
i__17281_17285 = G__17290;
continue;
}
} else
{var temp__4092__auto___17291 = cljs.core.seq.call(null,seq__17278_17282);if(temp__4092__auto___17291)
{var seq__17278_17292__$1 = temp__4092__auto___17291;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17278_17292__$1))
{var c__4148__auto___17293 = cljs.core.chunk_first.call(null,seq__17278_17292__$1);{
var G__17294 = cljs.core.chunk_rest.call(null,seq__17278_17292__$1);
var G__17295 = c__4148__auto___17293;
var G__17296 = cljs.core.count.call(null,c__4148__auto___17293);
var G__17297 = 0;
seq__17278_17282 = G__17294;
chunk__17279_17283 = G__17295;
count__17280_17284 = G__17296;
i__17281_17285 = G__17297;
continue;
}
} else
{var node_17298 = cljs.core.first.call(null,seq__17278_17292__$1);goog.dom.setTextContent(node_17298,value);
{
var G__17299 = cljs.core.next.call(null,seq__17278_17292__$1);
var G__17300 = null;
var G__17301 = 0;
var G__17302 = 0;
seq__17278_17282 = G__17299;
chunk__17279_17283 = G__17300;
count__17280_17284 = G__17301;
i__17281_17285 = G__17302;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__17307_17311 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17308_17312 = null;var count__17309_17313 = 0;var i__17310_17314 = 0;while(true){
if((i__17310_17314 < count__17309_17313))
{var node_17315 = cljs.core._nth.call(null,chunk__17308_17312,i__17310_17314);goog.dom.forms.setValue(node_17315,value);
{
var G__17316 = seq__17307_17311;
var G__17317 = chunk__17308_17312;
var G__17318 = count__17309_17313;
var G__17319 = (i__17310_17314 + 1);
seq__17307_17311 = G__17316;
chunk__17308_17312 = G__17317;
count__17309_17313 = G__17318;
i__17310_17314 = G__17319;
continue;
}
} else
{var temp__4092__auto___17320 = cljs.core.seq.call(null,seq__17307_17311);if(temp__4092__auto___17320)
{var seq__17307_17321__$1 = temp__4092__auto___17320;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17307_17321__$1))
{var c__4148__auto___17322 = cljs.core.chunk_first.call(null,seq__17307_17321__$1);{
var G__17323 = cljs.core.chunk_rest.call(null,seq__17307_17321__$1);
var G__17324 = c__4148__auto___17322;
var G__17325 = cljs.core.count.call(null,c__4148__auto___17322);
var G__17326 = 0;
seq__17307_17311 = G__17323;
chunk__17308_17312 = G__17324;
count__17309_17313 = G__17325;
i__17310_17314 = G__17326;
continue;
}
} else
{var node_17327 = cljs.core.first.call(null,seq__17307_17321__$1);goog.dom.forms.setValue(node_17327,value);
{
var G__17328 = cljs.core.next.call(null,seq__17307_17321__$1);
var G__17329 = null;
var G__17330 = 0;
var G__17331 = 0;
seq__17307_17311 = G__17328;
chunk__17308_17312 = G__17329;
count__17309_17313 = G__17330;
i__17310_17314 = G__17331;
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
{var value_17342 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__17338_17343 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17339_17344 = null;var count__17340_17345 = 0;var i__17341_17346 = 0;while(true){
if((i__17341_17346 < count__17340_17345))
{var node_17347 = cljs.core._nth.call(null,chunk__17339_17344,i__17341_17346);node_17347.innerHTML = value_17342;
{
var G__17348 = seq__17338_17343;
var G__17349 = chunk__17339_17344;
var G__17350 = count__17340_17345;
var G__17351 = (i__17341_17346 + 1);
seq__17338_17343 = G__17348;
chunk__17339_17344 = G__17349;
count__17340_17345 = G__17350;
i__17341_17346 = G__17351;
continue;
}
} else
{var temp__4092__auto___17352 = cljs.core.seq.call(null,seq__17338_17343);if(temp__4092__auto___17352)
{var seq__17338_17353__$1 = temp__4092__auto___17352;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17338_17353__$1))
{var c__4148__auto___17354 = cljs.core.chunk_first.call(null,seq__17338_17353__$1);{
var G__17355 = cljs.core.chunk_rest.call(null,seq__17338_17353__$1);
var G__17356 = c__4148__auto___17354;
var G__17357 = cljs.core.count.call(null,c__4148__auto___17354);
var G__17358 = 0;
seq__17338_17343 = G__17355;
chunk__17339_17344 = G__17356;
count__17340_17345 = G__17357;
i__17341_17346 = G__17358;
continue;
}
} else
{var node_17359 = cljs.core.first.call(null,seq__17338_17353__$1);node_17359.innerHTML = value_17342;
{
var G__17360 = cljs.core.next.call(null,seq__17338_17353__$1);
var G__17361 = null;
var G__17362 = 0;
var G__17363 = 0;
seq__17338_17343 = G__17360;
chunk__17339_17344 = G__17361;
count__17340_17345 = G__17362;
i__17341_17346 = G__17363;
continue;
}
}
} else
{}
}
break;
}
}catch (e17337){if((e17337 instanceof Error))
{var e_17364 = e17337;domina.replace_children_BANG_.call(null,content,value_17342);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17337;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__17371_17375 = cljs.core.seq.call(null,children);var chunk__17372_17376 = null;var count__17373_17377 = 0;var i__17374_17378 = 0;while(true){
if((i__17374_17378 < count__17373_17377))
{var child_17379 = cljs.core._nth.call(null,chunk__17372_17376,i__17374_17378);frag.appendChild(child_17379);
{
var G__17380 = seq__17371_17375;
var G__17381 = chunk__17372_17376;
var G__17382 = count__17373_17377;
var G__17383 = (i__17374_17378 + 1);
seq__17371_17375 = G__17380;
chunk__17372_17376 = G__17381;
count__17373_17377 = G__17382;
i__17374_17378 = G__17383;
continue;
}
} else
{var temp__4092__auto___17384 = cljs.core.seq.call(null,seq__17371_17375);if(temp__4092__auto___17384)
{var seq__17371_17385__$1 = temp__4092__auto___17384;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17371_17385__$1))
{var c__4148__auto___17386 = cljs.core.chunk_first.call(null,seq__17371_17385__$1);{
var G__17387 = cljs.core.chunk_rest.call(null,seq__17371_17385__$1);
var G__17388 = c__4148__auto___17386;
var G__17389 = cljs.core.count.call(null,c__4148__auto___17386);
var G__17390 = 0;
seq__17371_17375 = G__17387;
chunk__17372_17376 = G__17388;
count__17373_17377 = G__17389;
i__17374_17378 = G__17390;
continue;
}
} else
{var child_17391 = cljs.core.first.call(null,seq__17371_17385__$1);frag.appendChild(child_17391);
{
var G__17392 = cljs.core.next.call(null,seq__17371_17385__$1);
var G__17393 = null;
var G__17394 = 0;
var G__17395 = 0;
seq__17371_17375 = G__17392;
chunk__17372_17376 = G__17393;
count__17373_17377 = G__17394;
i__17374_17378 = G__17395;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__17365_SHARP_,p2__17366_SHARP_){return f.call(null,p1__17365_SHARP_,p2__17366_SHARP_);
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
{if((function (){var G__17397 = list_thing;if(G__17397)
{var bit__4050__auto__ = (G__17397.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__17397.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17397.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17397);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17397);
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
{if((function (){var G__17398 = content;if(G__17398)
{var bit__4050__auto__ = (G__17398.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__17398.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17398.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17398);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17398);
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
{if((function (){var G__17399 = content;if(G__17399)
{var bit__4050__auto__ = (G__17399.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__17399.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17399.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17399);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17399);
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