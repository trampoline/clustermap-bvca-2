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
var opt_wrapper_36910 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_36911 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_36912 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_36911,table_section_wrapper_36911,opt_wrapper_36910,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_36912,table_section_wrapper_36911,cell_wrapper_36912,opt_wrapper_36910,table_section_wrapper_36911,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_36911]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__36917 = cljs.core.seq.call(null,tbody);var chunk__36918 = null;var count__36919 = 0;var i__36920 = 0;while(true){
if((i__36920 < count__36919))
{var child = cljs.core._nth.call(null,chunk__36918,i__36920);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__36921 = seq__36917;
var G__36922 = chunk__36918;
var G__36923 = count__36919;
var G__36924 = (i__36920 + 1);
seq__36917 = G__36921;
chunk__36918 = G__36922;
count__36919 = G__36923;
i__36920 = G__36924;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__36917);if(temp__4092__auto__)
{var seq__36917__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36917__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__36917__$1);{
var G__36925 = cljs.core.chunk_rest.call(null,seq__36917__$1);
var G__36926 = c__4148__auto__;
var G__36927 = cljs.core.count.call(null,c__4148__auto__);
var G__36928 = 0;
seq__36917 = G__36925;
chunk__36918 = G__36926;
count__36919 = G__36927;
i__36920 = G__36928;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__36917__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__36929 = cljs.core.next.call(null,seq__36917__$1);
var G__36930 = null;
var G__36931 = 0;
var G__36932 = 0;
seq__36917 = G__36929;
chunk__36918 = G__36930;
count__36919 = G__36931;
i__36920 = G__36932;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__36934 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__36934,0,null);var start_wrap = cljs.core.nth.call(null,vec__36934,1,null);var end_wrap = cljs.core.nth.call(null,vec__36934,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__36935 = wrapper.lastChild;
var G__36936 = (level - 1);
wrapper = G__36935;
level = G__36936;
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
domina.DomContent = (function (){var obj36938 = {};return obj36938;
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
log_debug.cljs$lang$applyTo = (function (arglist__36939){
var mesg = cljs.core.seq(arglist__36939);
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
log.cljs$lang$applyTo = (function (arglist__36940){
var mesg = cljs.core.seq(arglist__36940);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__36941){
var contents = cljs.core.seq(arglist__36941);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__36942_SHARP_){return p1__36942_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__36943_SHARP_,p2__36944_SHARP_){return goog.dom.insertChildAt(p1__36943_SHARP_,p2__36944_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__36946_SHARP_,p2__36945_SHARP_){return goog.dom.insertSiblingBefore(p2__36945_SHARP_,p1__36946_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__36948_SHARP_,p2__36947_SHARP_){return goog.dom.insertSiblingAfter(p2__36947_SHARP_,p1__36948_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__36950_SHARP_,p2__36949_SHARP_){return goog.dom.replaceNode(p2__36949_SHARP_,p1__36950_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__36955_36959 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36956_36960 = null;var count__36957_36961 = 0;var i__36958_36962 = 0;while(true){
if((i__36958_36962 < count__36957_36961))
{var n_36963 = cljs.core._nth.call(null,chunk__36956_36960,i__36958_36962);goog.style.setStyle(n_36963,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__36964 = seq__36955_36959;
var G__36965 = chunk__36956_36960;
var G__36966 = count__36957_36961;
var G__36967 = (i__36958_36962 + 1);
seq__36955_36959 = G__36964;
chunk__36956_36960 = G__36965;
count__36957_36961 = G__36966;
i__36958_36962 = G__36967;
continue;
}
} else
{var temp__4092__auto___36968 = cljs.core.seq.call(null,seq__36955_36959);if(temp__4092__auto___36968)
{var seq__36955_36969__$1 = temp__4092__auto___36968;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36955_36969__$1))
{var c__4148__auto___36970 = cljs.core.chunk_first.call(null,seq__36955_36969__$1);{
var G__36971 = cljs.core.chunk_rest.call(null,seq__36955_36969__$1);
var G__36972 = c__4148__auto___36970;
var G__36973 = cljs.core.count.call(null,c__4148__auto___36970);
var G__36974 = 0;
seq__36955_36959 = G__36971;
chunk__36956_36960 = G__36972;
count__36957_36961 = G__36973;
i__36958_36962 = G__36974;
continue;
}
} else
{var n_36975 = cljs.core.first.call(null,seq__36955_36969__$1);goog.style.setStyle(n_36975,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__36976 = cljs.core.next.call(null,seq__36955_36969__$1);
var G__36977 = null;
var G__36978 = 0;
var G__36979 = 0;
seq__36955_36959 = G__36976;
chunk__36956_36960 = G__36977;
count__36957_36961 = G__36978;
i__36958_36962 = G__36979;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__36980){
var content = cljs.core.first(arglist__36980);
arglist__36980 = cljs.core.next(arglist__36980);
var name = cljs.core.first(arglist__36980);
var value = cljs.core.rest(arglist__36980);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__36985_36989 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36986_36990 = null;var count__36987_36991 = 0;var i__36988_36992 = 0;while(true){
if((i__36988_36992 < count__36987_36991))
{var n_36993 = cljs.core._nth.call(null,chunk__36986_36990,i__36988_36992);n_36993.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__36994 = seq__36985_36989;
var G__36995 = chunk__36986_36990;
var G__36996 = count__36987_36991;
var G__36997 = (i__36988_36992 + 1);
seq__36985_36989 = G__36994;
chunk__36986_36990 = G__36995;
count__36987_36991 = G__36996;
i__36988_36992 = G__36997;
continue;
}
} else
{var temp__4092__auto___36998 = cljs.core.seq.call(null,seq__36985_36989);if(temp__4092__auto___36998)
{var seq__36985_36999__$1 = temp__4092__auto___36998;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36985_36999__$1))
{var c__4148__auto___37000 = cljs.core.chunk_first.call(null,seq__36985_36999__$1);{
var G__37001 = cljs.core.chunk_rest.call(null,seq__36985_36999__$1);
var G__37002 = c__4148__auto___37000;
var G__37003 = cljs.core.count.call(null,c__4148__auto___37000);
var G__37004 = 0;
seq__36985_36989 = G__37001;
chunk__36986_36990 = G__37002;
count__36987_36991 = G__37003;
i__36988_36992 = G__37004;
continue;
}
} else
{var n_37005 = cljs.core.first.call(null,seq__36985_36999__$1);n_37005.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__37006 = cljs.core.next.call(null,seq__36985_36999__$1);
var G__37007 = null;
var G__37008 = 0;
var G__37009 = 0;
seq__36985_36989 = G__37006;
chunk__36986_36990 = G__37007;
count__36987_36991 = G__37008;
i__36988_36992 = G__37009;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__37010){
var content = cljs.core.first(arglist__37010);
arglist__37010 = cljs.core.next(arglist__37010);
var name = cljs.core.first(arglist__37010);
var value = cljs.core.rest(arglist__37010);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__37015_37019 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37016_37020 = null;var count__37017_37021 = 0;var i__37018_37022 = 0;while(true){
if((i__37018_37022 < count__37017_37021))
{var n_37023 = cljs.core._nth.call(null,chunk__37016_37020,i__37018_37022);n_37023.removeAttribute(cljs.core.name.call(null,name));
{
var G__37024 = seq__37015_37019;
var G__37025 = chunk__37016_37020;
var G__37026 = count__37017_37021;
var G__37027 = (i__37018_37022 + 1);
seq__37015_37019 = G__37024;
chunk__37016_37020 = G__37025;
count__37017_37021 = G__37026;
i__37018_37022 = G__37027;
continue;
}
} else
{var temp__4092__auto___37028 = cljs.core.seq.call(null,seq__37015_37019);if(temp__4092__auto___37028)
{var seq__37015_37029__$1 = temp__4092__auto___37028;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37015_37029__$1))
{var c__4148__auto___37030 = cljs.core.chunk_first.call(null,seq__37015_37029__$1);{
var G__37031 = cljs.core.chunk_rest.call(null,seq__37015_37029__$1);
var G__37032 = c__4148__auto___37030;
var G__37033 = cljs.core.count.call(null,c__4148__auto___37030);
var G__37034 = 0;
seq__37015_37019 = G__37031;
chunk__37016_37020 = G__37032;
count__37017_37021 = G__37033;
i__37018_37022 = G__37034;
continue;
}
} else
{var n_37035 = cljs.core.first.call(null,seq__37015_37029__$1);n_37035.removeAttribute(cljs.core.name.call(null,name));
{
var G__37036 = cljs.core.next.call(null,seq__37015_37029__$1);
var G__37037 = null;
var G__37038 = 0;
var G__37039 = 0;
seq__37015_37019 = G__37036;
chunk__37016_37020 = G__37037;
count__37017_37021 = G__37038;
i__37018_37022 = G__37039;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__37041 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__37041,0,null);var v = cljs.core.nth.call(null,vec__37041,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__37042_SHARP_){var attr = attrs__$1.item(p1__37042_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__37049_37055 = cljs.core.seq.call(null,styles);var chunk__37050_37056 = null;var count__37051_37057 = 0;var i__37052_37058 = 0;while(true){
if((i__37052_37058 < count__37051_37057))
{var vec__37053_37059 = cljs.core._nth.call(null,chunk__37050_37056,i__37052_37058);var name_37060 = cljs.core.nth.call(null,vec__37053_37059,0,null);var value_37061 = cljs.core.nth.call(null,vec__37053_37059,1,null);domina.set_style_BANG_.call(null,content,name_37060,value_37061);
{
var G__37062 = seq__37049_37055;
var G__37063 = chunk__37050_37056;
var G__37064 = count__37051_37057;
var G__37065 = (i__37052_37058 + 1);
seq__37049_37055 = G__37062;
chunk__37050_37056 = G__37063;
count__37051_37057 = G__37064;
i__37052_37058 = G__37065;
continue;
}
} else
{var temp__4092__auto___37066 = cljs.core.seq.call(null,seq__37049_37055);if(temp__4092__auto___37066)
{var seq__37049_37067__$1 = temp__4092__auto___37066;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37049_37067__$1))
{var c__4148__auto___37068 = cljs.core.chunk_first.call(null,seq__37049_37067__$1);{
var G__37069 = cljs.core.chunk_rest.call(null,seq__37049_37067__$1);
var G__37070 = c__4148__auto___37068;
var G__37071 = cljs.core.count.call(null,c__4148__auto___37068);
var G__37072 = 0;
seq__37049_37055 = G__37069;
chunk__37050_37056 = G__37070;
count__37051_37057 = G__37071;
i__37052_37058 = G__37072;
continue;
}
} else
{var vec__37054_37073 = cljs.core.first.call(null,seq__37049_37067__$1);var name_37074 = cljs.core.nth.call(null,vec__37054_37073,0,null);var value_37075 = cljs.core.nth.call(null,vec__37054_37073,1,null);domina.set_style_BANG_.call(null,content,name_37074,value_37075);
{
var G__37076 = cljs.core.next.call(null,seq__37049_37067__$1);
var G__37077 = null;
var G__37078 = 0;
var G__37079 = 0;
seq__37049_37055 = G__37076;
chunk__37050_37056 = G__37077;
count__37051_37057 = G__37078;
i__37052_37058 = G__37079;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__37086_37092 = cljs.core.seq.call(null,attrs);var chunk__37087_37093 = null;var count__37088_37094 = 0;var i__37089_37095 = 0;while(true){
if((i__37089_37095 < count__37088_37094))
{var vec__37090_37096 = cljs.core._nth.call(null,chunk__37087_37093,i__37089_37095);var name_37097 = cljs.core.nth.call(null,vec__37090_37096,0,null);var value_37098 = cljs.core.nth.call(null,vec__37090_37096,1,null);domina.set_attr_BANG_.call(null,content,name_37097,value_37098);
{
var G__37099 = seq__37086_37092;
var G__37100 = chunk__37087_37093;
var G__37101 = count__37088_37094;
var G__37102 = (i__37089_37095 + 1);
seq__37086_37092 = G__37099;
chunk__37087_37093 = G__37100;
count__37088_37094 = G__37101;
i__37089_37095 = G__37102;
continue;
}
} else
{var temp__4092__auto___37103 = cljs.core.seq.call(null,seq__37086_37092);if(temp__4092__auto___37103)
{var seq__37086_37104__$1 = temp__4092__auto___37103;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37086_37104__$1))
{var c__4148__auto___37105 = cljs.core.chunk_first.call(null,seq__37086_37104__$1);{
var G__37106 = cljs.core.chunk_rest.call(null,seq__37086_37104__$1);
var G__37107 = c__4148__auto___37105;
var G__37108 = cljs.core.count.call(null,c__4148__auto___37105);
var G__37109 = 0;
seq__37086_37092 = G__37106;
chunk__37087_37093 = G__37107;
count__37088_37094 = G__37108;
i__37089_37095 = G__37109;
continue;
}
} else
{var vec__37091_37110 = cljs.core.first.call(null,seq__37086_37104__$1);var name_37111 = cljs.core.nth.call(null,vec__37091_37110,0,null);var value_37112 = cljs.core.nth.call(null,vec__37091_37110,1,null);domina.set_attr_BANG_.call(null,content,name_37111,value_37112);
{
var G__37113 = cljs.core.next.call(null,seq__37086_37104__$1);
var G__37114 = null;
var G__37115 = 0;
var G__37116 = 0;
seq__37086_37092 = G__37113;
chunk__37087_37093 = G__37114;
count__37088_37094 = G__37115;
i__37089_37095 = G__37116;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__37121_37125 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37122_37126 = null;var count__37123_37127 = 0;var i__37124_37128 = 0;while(true){
if((i__37124_37128 < count__37123_37127))
{var node_37129 = cljs.core._nth.call(null,chunk__37122_37126,i__37124_37128);goog.dom.classes.add(node_37129,class$);
{
var G__37130 = seq__37121_37125;
var G__37131 = chunk__37122_37126;
var G__37132 = count__37123_37127;
var G__37133 = (i__37124_37128 + 1);
seq__37121_37125 = G__37130;
chunk__37122_37126 = G__37131;
count__37123_37127 = G__37132;
i__37124_37128 = G__37133;
continue;
}
} else
{var temp__4092__auto___37134 = cljs.core.seq.call(null,seq__37121_37125);if(temp__4092__auto___37134)
{var seq__37121_37135__$1 = temp__4092__auto___37134;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37121_37135__$1))
{var c__4148__auto___37136 = cljs.core.chunk_first.call(null,seq__37121_37135__$1);{
var G__37137 = cljs.core.chunk_rest.call(null,seq__37121_37135__$1);
var G__37138 = c__4148__auto___37136;
var G__37139 = cljs.core.count.call(null,c__4148__auto___37136);
var G__37140 = 0;
seq__37121_37125 = G__37137;
chunk__37122_37126 = G__37138;
count__37123_37127 = G__37139;
i__37124_37128 = G__37140;
continue;
}
} else
{var node_37141 = cljs.core.first.call(null,seq__37121_37135__$1);goog.dom.classes.add(node_37141,class$);
{
var G__37142 = cljs.core.next.call(null,seq__37121_37135__$1);
var G__37143 = null;
var G__37144 = 0;
var G__37145 = 0;
seq__37121_37125 = G__37142;
chunk__37122_37126 = G__37143;
count__37123_37127 = G__37144;
i__37124_37128 = G__37145;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__37150_37154 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37151_37155 = null;var count__37152_37156 = 0;var i__37153_37157 = 0;while(true){
if((i__37153_37157 < count__37152_37156))
{var node_37158 = cljs.core._nth.call(null,chunk__37151_37155,i__37153_37157);goog.dom.classes.remove(node_37158,class$);
{
var G__37159 = seq__37150_37154;
var G__37160 = chunk__37151_37155;
var G__37161 = count__37152_37156;
var G__37162 = (i__37153_37157 + 1);
seq__37150_37154 = G__37159;
chunk__37151_37155 = G__37160;
count__37152_37156 = G__37161;
i__37153_37157 = G__37162;
continue;
}
} else
{var temp__4092__auto___37163 = cljs.core.seq.call(null,seq__37150_37154);if(temp__4092__auto___37163)
{var seq__37150_37164__$1 = temp__4092__auto___37163;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37150_37164__$1))
{var c__4148__auto___37165 = cljs.core.chunk_first.call(null,seq__37150_37164__$1);{
var G__37166 = cljs.core.chunk_rest.call(null,seq__37150_37164__$1);
var G__37167 = c__4148__auto___37165;
var G__37168 = cljs.core.count.call(null,c__4148__auto___37165);
var G__37169 = 0;
seq__37150_37154 = G__37166;
chunk__37151_37155 = G__37167;
count__37152_37156 = G__37168;
i__37153_37157 = G__37169;
continue;
}
} else
{var node_37170 = cljs.core.first.call(null,seq__37150_37164__$1);goog.dom.classes.remove(node_37170,class$);
{
var G__37171 = cljs.core.next.call(null,seq__37150_37164__$1);
var G__37172 = null;
var G__37173 = 0;
var G__37174 = 0;
seq__37150_37154 = G__37171;
chunk__37151_37155 = G__37172;
count__37152_37156 = G__37173;
i__37153_37157 = G__37174;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__37179_37183 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37180_37184 = null;var count__37181_37185 = 0;var i__37182_37186 = 0;while(true){
if((i__37182_37186 < count__37181_37185))
{var node_37187 = cljs.core._nth.call(null,chunk__37180_37184,i__37182_37186);goog.dom.classes.toggle(node_37187,class$);
{
var G__37188 = seq__37179_37183;
var G__37189 = chunk__37180_37184;
var G__37190 = count__37181_37185;
var G__37191 = (i__37182_37186 + 1);
seq__37179_37183 = G__37188;
chunk__37180_37184 = G__37189;
count__37181_37185 = G__37190;
i__37182_37186 = G__37191;
continue;
}
} else
{var temp__4092__auto___37192 = cljs.core.seq.call(null,seq__37179_37183);if(temp__4092__auto___37192)
{var seq__37179_37193__$1 = temp__4092__auto___37192;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37179_37193__$1))
{var c__4148__auto___37194 = cljs.core.chunk_first.call(null,seq__37179_37193__$1);{
var G__37195 = cljs.core.chunk_rest.call(null,seq__37179_37193__$1);
var G__37196 = c__4148__auto___37194;
var G__37197 = cljs.core.count.call(null,c__4148__auto___37194);
var G__37198 = 0;
seq__37179_37183 = G__37195;
chunk__37180_37184 = G__37196;
count__37181_37185 = G__37197;
i__37182_37186 = G__37198;
continue;
}
} else
{var node_37199 = cljs.core.first.call(null,seq__37179_37193__$1);goog.dom.classes.toggle(node_37199,class$);
{
var G__37200 = cljs.core.next.call(null,seq__37179_37193__$1);
var G__37201 = null;
var G__37202 = 0;
var G__37203 = 0;
seq__37179_37183 = G__37200;
chunk__37180_37184 = G__37201;
count__37181_37185 = G__37202;
i__37182_37186 = G__37203;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_37212__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__37208_37213 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37209_37214 = null;var count__37210_37215 = 0;var i__37211_37216 = 0;while(true){
if((i__37211_37216 < count__37210_37215))
{var node_37217 = cljs.core._nth.call(null,chunk__37209_37214,i__37211_37216);goog.dom.classes.set(node_37217,classes_37212__$1);
{
var G__37218 = seq__37208_37213;
var G__37219 = chunk__37209_37214;
var G__37220 = count__37210_37215;
var G__37221 = (i__37211_37216 + 1);
seq__37208_37213 = G__37218;
chunk__37209_37214 = G__37219;
count__37210_37215 = G__37220;
i__37211_37216 = G__37221;
continue;
}
} else
{var temp__4092__auto___37222 = cljs.core.seq.call(null,seq__37208_37213);if(temp__4092__auto___37222)
{var seq__37208_37223__$1 = temp__4092__auto___37222;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37208_37223__$1))
{var c__4148__auto___37224 = cljs.core.chunk_first.call(null,seq__37208_37223__$1);{
var G__37225 = cljs.core.chunk_rest.call(null,seq__37208_37223__$1);
var G__37226 = c__4148__auto___37224;
var G__37227 = cljs.core.count.call(null,c__4148__auto___37224);
var G__37228 = 0;
seq__37208_37213 = G__37225;
chunk__37209_37214 = G__37226;
count__37210_37215 = G__37227;
i__37211_37216 = G__37228;
continue;
}
} else
{var node_37229 = cljs.core.first.call(null,seq__37208_37223__$1);goog.dom.classes.set(node_37229,classes_37212__$1);
{
var G__37230 = cljs.core.next.call(null,seq__37208_37223__$1);
var G__37231 = null;
var G__37232 = 0;
var G__37233 = 0;
seq__37208_37213 = G__37230;
chunk__37209_37214 = G__37231;
count__37210_37215 = G__37232;
i__37211_37216 = G__37233;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__37238_37242 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37239_37243 = null;var count__37240_37244 = 0;var i__37241_37245 = 0;while(true){
if((i__37241_37245 < count__37240_37244))
{var node_37246 = cljs.core._nth.call(null,chunk__37239_37243,i__37241_37245);goog.dom.setTextContent(node_37246,value);
{
var G__37247 = seq__37238_37242;
var G__37248 = chunk__37239_37243;
var G__37249 = count__37240_37244;
var G__37250 = (i__37241_37245 + 1);
seq__37238_37242 = G__37247;
chunk__37239_37243 = G__37248;
count__37240_37244 = G__37249;
i__37241_37245 = G__37250;
continue;
}
} else
{var temp__4092__auto___37251 = cljs.core.seq.call(null,seq__37238_37242);if(temp__4092__auto___37251)
{var seq__37238_37252__$1 = temp__4092__auto___37251;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37238_37252__$1))
{var c__4148__auto___37253 = cljs.core.chunk_first.call(null,seq__37238_37252__$1);{
var G__37254 = cljs.core.chunk_rest.call(null,seq__37238_37252__$1);
var G__37255 = c__4148__auto___37253;
var G__37256 = cljs.core.count.call(null,c__4148__auto___37253);
var G__37257 = 0;
seq__37238_37242 = G__37254;
chunk__37239_37243 = G__37255;
count__37240_37244 = G__37256;
i__37241_37245 = G__37257;
continue;
}
} else
{var node_37258 = cljs.core.first.call(null,seq__37238_37252__$1);goog.dom.setTextContent(node_37258,value);
{
var G__37259 = cljs.core.next.call(null,seq__37238_37252__$1);
var G__37260 = null;
var G__37261 = 0;
var G__37262 = 0;
seq__37238_37242 = G__37259;
chunk__37239_37243 = G__37260;
count__37240_37244 = G__37261;
i__37241_37245 = G__37262;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__37267_37271 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37268_37272 = null;var count__37269_37273 = 0;var i__37270_37274 = 0;while(true){
if((i__37270_37274 < count__37269_37273))
{var node_37275 = cljs.core._nth.call(null,chunk__37268_37272,i__37270_37274);goog.dom.forms.setValue(node_37275,value);
{
var G__37276 = seq__37267_37271;
var G__37277 = chunk__37268_37272;
var G__37278 = count__37269_37273;
var G__37279 = (i__37270_37274 + 1);
seq__37267_37271 = G__37276;
chunk__37268_37272 = G__37277;
count__37269_37273 = G__37278;
i__37270_37274 = G__37279;
continue;
}
} else
{var temp__4092__auto___37280 = cljs.core.seq.call(null,seq__37267_37271);if(temp__4092__auto___37280)
{var seq__37267_37281__$1 = temp__4092__auto___37280;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37267_37281__$1))
{var c__4148__auto___37282 = cljs.core.chunk_first.call(null,seq__37267_37281__$1);{
var G__37283 = cljs.core.chunk_rest.call(null,seq__37267_37281__$1);
var G__37284 = c__4148__auto___37282;
var G__37285 = cljs.core.count.call(null,c__4148__auto___37282);
var G__37286 = 0;
seq__37267_37271 = G__37283;
chunk__37268_37272 = G__37284;
count__37269_37273 = G__37285;
i__37270_37274 = G__37286;
continue;
}
} else
{var node_37287 = cljs.core.first.call(null,seq__37267_37281__$1);goog.dom.forms.setValue(node_37287,value);
{
var G__37288 = cljs.core.next.call(null,seq__37267_37281__$1);
var G__37289 = null;
var G__37290 = 0;
var G__37291 = 0;
seq__37267_37271 = G__37288;
chunk__37268_37272 = G__37289;
count__37269_37273 = G__37290;
i__37270_37274 = G__37291;
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
{var value_37302 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__37298_37303 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37299_37304 = null;var count__37300_37305 = 0;var i__37301_37306 = 0;while(true){
if((i__37301_37306 < count__37300_37305))
{var node_37307 = cljs.core._nth.call(null,chunk__37299_37304,i__37301_37306);node_37307.innerHTML = value_37302;
{
var G__37308 = seq__37298_37303;
var G__37309 = chunk__37299_37304;
var G__37310 = count__37300_37305;
var G__37311 = (i__37301_37306 + 1);
seq__37298_37303 = G__37308;
chunk__37299_37304 = G__37309;
count__37300_37305 = G__37310;
i__37301_37306 = G__37311;
continue;
}
} else
{var temp__4092__auto___37312 = cljs.core.seq.call(null,seq__37298_37303);if(temp__4092__auto___37312)
{var seq__37298_37313__$1 = temp__4092__auto___37312;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37298_37313__$1))
{var c__4148__auto___37314 = cljs.core.chunk_first.call(null,seq__37298_37313__$1);{
var G__37315 = cljs.core.chunk_rest.call(null,seq__37298_37313__$1);
var G__37316 = c__4148__auto___37314;
var G__37317 = cljs.core.count.call(null,c__4148__auto___37314);
var G__37318 = 0;
seq__37298_37303 = G__37315;
chunk__37299_37304 = G__37316;
count__37300_37305 = G__37317;
i__37301_37306 = G__37318;
continue;
}
} else
{var node_37319 = cljs.core.first.call(null,seq__37298_37313__$1);node_37319.innerHTML = value_37302;
{
var G__37320 = cljs.core.next.call(null,seq__37298_37313__$1);
var G__37321 = null;
var G__37322 = 0;
var G__37323 = 0;
seq__37298_37303 = G__37320;
chunk__37299_37304 = G__37321;
count__37300_37305 = G__37322;
i__37301_37306 = G__37323;
continue;
}
}
} else
{}
}
break;
}
}catch (e37297){if((e37297 instanceof Error))
{var e_37324 = e37297;domina.replace_children_BANG_.call(null,content,value_37302);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37297;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__37331_37335 = cljs.core.seq.call(null,children);var chunk__37332_37336 = null;var count__37333_37337 = 0;var i__37334_37338 = 0;while(true){
if((i__37334_37338 < count__37333_37337))
{var child_37339 = cljs.core._nth.call(null,chunk__37332_37336,i__37334_37338);frag.appendChild(child_37339);
{
var G__37340 = seq__37331_37335;
var G__37341 = chunk__37332_37336;
var G__37342 = count__37333_37337;
var G__37343 = (i__37334_37338 + 1);
seq__37331_37335 = G__37340;
chunk__37332_37336 = G__37341;
count__37333_37337 = G__37342;
i__37334_37338 = G__37343;
continue;
}
} else
{var temp__4092__auto___37344 = cljs.core.seq.call(null,seq__37331_37335);if(temp__4092__auto___37344)
{var seq__37331_37345__$1 = temp__4092__auto___37344;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37331_37345__$1))
{var c__4148__auto___37346 = cljs.core.chunk_first.call(null,seq__37331_37345__$1);{
var G__37347 = cljs.core.chunk_rest.call(null,seq__37331_37345__$1);
var G__37348 = c__4148__auto___37346;
var G__37349 = cljs.core.count.call(null,c__4148__auto___37346);
var G__37350 = 0;
seq__37331_37335 = G__37347;
chunk__37332_37336 = G__37348;
count__37333_37337 = G__37349;
i__37334_37338 = G__37350;
continue;
}
} else
{var child_37351 = cljs.core.first.call(null,seq__37331_37345__$1);frag.appendChild(child_37351);
{
var G__37352 = cljs.core.next.call(null,seq__37331_37345__$1);
var G__37353 = null;
var G__37354 = 0;
var G__37355 = 0;
seq__37331_37335 = G__37352;
chunk__37332_37336 = G__37353;
count__37333_37337 = G__37354;
i__37334_37338 = G__37355;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__37325_SHARP_,p2__37326_SHARP_){return f.call(null,p1__37325_SHARP_,p2__37326_SHARP_);
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
{if((function (){var G__37357 = list_thing;if(G__37357)
{var bit__4050__auto__ = (G__37357.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__37357.cljs$core$ISeqable$))
{return true;
} else
{if((!G__37357.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__37357);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__37357);
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
{if((function (){var G__37358 = content;if(G__37358)
{var bit__4050__auto__ = (G__37358.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__37358.cljs$core$ISeqable$))
{return true;
} else
{if((!G__37358.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__37358);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__37358);
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
{if((function (){var G__37359 = content;if(G__37359)
{var bit__4050__auto__ = (G__37359.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__37359.cljs$core$ISeqable$))
{return true;
} else
{if((!G__37359.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__37359);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__37359);
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
