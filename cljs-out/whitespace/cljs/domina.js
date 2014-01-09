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
var opt_wrapper_32926 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_32927 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_32928 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_32927,table_section_wrapper_32927,opt_wrapper_32926,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_32928,table_section_wrapper_32927,cell_wrapper_32928,opt_wrapper_32926,table_section_wrapper_32927,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_32927]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__32933 = cljs.core.seq.call(null,tbody);var chunk__32934 = null;var count__32935 = 0;var i__32936 = 0;while(true){
if((i__32936 < count__32935))
{var child = cljs.core._nth.call(null,chunk__32934,i__32936);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__32937 = seq__32933;
var G__32938 = chunk__32934;
var G__32939 = count__32935;
var G__32940 = (i__32936 + 1);
seq__32933 = G__32937;
chunk__32934 = G__32938;
count__32935 = G__32939;
i__32936 = G__32940;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__32933);if(temp__4092__auto__)
{var seq__32933__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32933__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__32933__$1);{
var G__32941 = cljs.core.chunk_rest.call(null,seq__32933__$1);
var G__32942 = c__4148__auto__;
var G__32943 = cljs.core.count.call(null,c__4148__auto__);
var G__32944 = 0;
seq__32933 = G__32941;
chunk__32934 = G__32942;
count__32935 = G__32943;
i__32936 = G__32944;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__32933__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__32945 = cljs.core.next.call(null,seq__32933__$1);
var G__32946 = null;
var G__32947 = 0;
var G__32948 = 0;
seq__32933 = G__32945;
chunk__32934 = G__32946;
count__32935 = G__32947;
i__32936 = G__32948;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__32950 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__32950,0,null);var start_wrap = cljs.core.nth.call(null,vec__32950,1,null);var end_wrap = cljs.core.nth.call(null,vec__32950,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__32951 = wrapper.lastChild;
var G__32952 = (level - 1);
wrapper = G__32951;
level = G__32952;
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
domina.DomContent = (function (){var obj32954 = {};return obj32954;
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
log_debug.cljs$lang$applyTo = (function (arglist__32955){
var mesg = cljs.core.seq(arglist__32955);
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
log.cljs$lang$applyTo = (function (arglist__32956){
var mesg = cljs.core.seq(arglist__32956);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__32957){
var contents = cljs.core.seq(arglist__32957);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__32958_SHARP_){return p1__32958_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__32959_SHARP_,p2__32960_SHARP_){return goog.dom.insertChildAt(p1__32959_SHARP_,p2__32960_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__32962_SHARP_,p2__32961_SHARP_){return goog.dom.insertSiblingBefore(p2__32961_SHARP_,p1__32962_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__32964_SHARP_,p2__32963_SHARP_){return goog.dom.insertSiblingAfter(p2__32963_SHARP_,p1__32964_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__32966_SHARP_,p2__32965_SHARP_){return goog.dom.replaceNode(p2__32965_SHARP_,p1__32966_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__32971_32975 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32972_32976 = null;var count__32973_32977 = 0;var i__32974_32978 = 0;while(true){
if((i__32974_32978 < count__32973_32977))
{var n_32979 = cljs.core._nth.call(null,chunk__32972_32976,i__32974_32978);goog.style.setStyle(n_32979,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__32980 = seq__32971_32975;
var G__32981 = chunk__32972_32976;
var G__32982 = count__32973_32977;
var G__32983 = (i__32974_32978 + 1);
seq__32971_32975 = G__32980;
chunk__32972_32976 = G__32981;
count__32973_32977 = G__32982;
i__32974_32978 = G__32983;
continue;
}
} else
{var temp__4092__auto___32984 = cljs.core.seq.call(null,seq__32971_32975);if(temp__4092__auto___32984)
{var seq__32971_32985__$1 = temp__4092__auto___32984;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32971_32985__$1))
{var c__4148__auto___32986 = cljs.core.chunk_first.call(null,seq__32971_32985__$1);{
var G__32987 = cljs.core.chunk_rest.call(null,seq__32971_32985__$1);
var G__32988 = c__4148__auto___32986;
var G__32989 = cljs.core.count.call(null,c__4148__auto___32986);
var G__32990 = 0;
seq__32971_32975 = G__32987;
chunk__32972_32976 = G__32988;
count__32973_32977 = G__32989;
i__32974_32978 = G__32990;
continue;
}
} else
{var n_32991 = cljs.core.first.call(null,seq__32971_32985__$1);goog.style.setStyle(n_32991,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__32992 = cljs.core.next.call(null,seq__32971_32985__$1);
var G__32993 = null;
var G__32994 = 0;
var G__32995 = 0;
seq__32971_32975 = G__32992;
chunk__32972_32976 = G__32993;
count__32973_32977 = G__32994;
i__32974_32978 = G__32995;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__32996){
var content = cljs.core.first(arglist__32996);
arglist__32996 = cljs.core.next(arglist__32996);
var name = cljs.core.first(arglist__32996);
var value = cljs.core.rest(arglist__32996);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__33001_33005 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33002_33006 = null;var count__33003_33007 = 0;var i__33004_33008 = 0;while(true){
if((i__33004_33008 < count__33003_33007))
{var n_33009 = cljs.core._nth.call(null,chunk__33002_33006,i__33004_33008);n_33009.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__33010 = seq__33001_33005;
var G__33011 = chunk__33002_33006;
var G__33012 = count__33003_33007;
var G__33013 = (i__33004_33008 + 1);
seq__33001_33005 = G__33010;
chunk__33002_33006 = G__33011;
count__33003_33007 = G__33012;
i__33004_33008 = G__33013;
continue;
}
} else
{var temp__4092__auto___33014 = cljs.core.seq.call(null,seq__33001_33005);if(temp__4092__auto___33014)
{var seq__33001_33015__$1 = temp__4092__auto___33014;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33001_33015__$1))
{var c__4148__auto___33016 = cljs.core.chunk_first.call(null,seq__33001_33015__$1);{
var G__33017 = cljs.core.chunk_rest.call(null,seq__33001_33015__$1);
var G__33018 = c__4148__auto___33016;
var G__33019 = cljs.core.count.call(null,c__4148__auto___33016);
var G__33020 = 0;
seq__33001_33005 = G__33017;
chunk__33002_33006 = G__33018;
count__33003_33007 = G__33019;
i__33004_33008 = G__33020;
continue;
}
} else
{var n_33021 = cljs.core.first.call(null,seq__33001_33015__$1);n_33021.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__33022 = cljs.core.next.call(null,seq__33001_33015__$1);
var G__33023 = null;
var G__33024 = 0;
var G__33025 = 0;
seq__33001_33005 = G__33022;
chunk__33002_33006 = G__33023;
count__33003_33007 = G__33024;
i__33004_33008 = G__33025;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__33026){
var content = cljs.core.first(arglist__33026);
arglist__33026 = cljs.core.next(arglist__33026);
var name = cljs.core.first(arglist__33026);
var value = cljs.core.rest(arglist__33026);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__33031_33035 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33032_33036 = null;var count__33033_33037 = 0;var i__33034_33038 = 0;while(true){
if((i__33034_33038 < count__33033_33037))
{var n_33039 = cljs.core._nth.call(null,chunk__33032_33036,i__33034_33038);n_33039.removeAttribute(cljs.core.name.call(null,name));
{
var G__33040 = seq__33031_33035;
var G__33041 = chunk__33032_33036;
var G__33042 = count__33033_33037;
var G__33043 = (i__33034_33038 + 1);
seq__33031_33035 = G__33040;
chunk__33032_33036 = G__33041;
count__33033_33037 = G__33042;
i__33034_33038 = G__33043;
continue;
}
} else
{var temp__4092__auto___33044 = cljs.core.seq.call(null,seq__33031_33035);if(temp__4092__auto___33044)
{var seq__33031_33045__$1 = temp__4092__auto___33044;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33031_33045__$1))
{var c__4148__auto___33046 = cljs.core.chunk_first.call(null,seq__33031_33045__$1);{
var G__33047 = cljs.core.chunk_rest.call(null,seq__33031_33045__$1);
var G__33048 = c__4148__auto___33046;
var G__33049 = cljs.core.count.call(null,c__4148__auto___33046);
var G__33050 = 0;
seq__33031_33035 = G__33047;
chunk__33032_33036 = G__33048;
count__33033_33037 = G__33049;
i__33034_33038 = G__33050;
continue;
}
} else
{var n_33051 = cljs.core.first.call(null,seq__33031_33045__$1);n_33051.removeAttribute(cljs.core.name.call(null,name));
{
var G__33052 = cljs.core.next.call(null,seq__33031_33045__$1);
var G__33053 = null;
var G__33054 = 0;
var G__33055 = 0;
seq__33031_33035 = G__33052;
chunk__33032_33036 = G__33053;
count__33033_33037 = G__33054;
i__33034_33038 = G__33055;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__33057 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__33057,0,null);var v = cljs.core.nth.call(null,vec__33057,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__33058_SHARP_){var attr = attrs__$1.item(p1__33058_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__33065_33071 = cljs.core.seq.call(null,styles);var chunk__33066_33072 = null;var count__33067_33073 = 0;var i__33068_33074 = 0;while(true){
if((i__33068_33074 < count__33067_33073))
{var vec__33069_33075 = cljs.core._nth.call(null,chunk__33066_33072,i__33068_33074);var name_33076 = cljs.core.nth.call(null,vec__33069_33075,0,null);var value_33077 = cljs.core.nth.call(null,vec__33069_33075,1,null);domina.set_style_BANG_.call(null,content,name_33076,value_33077);
{
var G__33078 = seq__33065_33071;
var G__33079 = chunk__33066_33072;
var G__33080 = count__33067_33073;
var G__33081 = (i__33068_33074 + 1);
seq__33065_33071 = G__33078;
chunk__33066_33072 = G__33079;
count__33067_33073 = G__33080;
i__33068_33074 = G__33081;
continue;
}
} else
{var temp__4092__auto___33082 = cljs.core.seq.call(null,seq__33065_33071);if(temp__4092__auto___33082)
{var seq__33065_33083__$1 = temp__4092__auto___33082;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33065_33083__$1))
{var c__4148__auto___33084 = cljs.core.chunk_first.call(null,seq__33065_33083__$1);{
var G__33085 = cljs.core.chunk_rest.call(null,seq__33065_33083__$1);
var G__33086 = c__4148__auto___33084;
var G__33087 = cljs.core.count.call(null,c__4148__auto___33084);
var G__33088 = 0;
seq__33065_33071 = G__33085;
chunk__33066_33072 = G__33086;
count__33067_33073 = G__33087;
i__33068_33074 = G__33088;
continue;
}
} else
{var vec__33070_33089 = cljs.core.first.call(null,seq__33065_33083__$1);var name_33090 = cljs.core.nth.call(null,vec__33070_33089,0,null);var value_33091 = cljs.core.nth.call(null,vec__33070_33089,1,null);domina.set_style_BANG_.call(null,content,name_33090,value_33091);
{
var G__33092 = cljs.core.next.call(null,seq__33065_33083__$1);
var G__33093 = null;
var G__33094 = 0;
var G__33095 = 0;
seq__33065_33071 = G__33092;
chunk__33066_33072 = G__33093;
count__33067_33073 = G__33094;
i__33068_33074 = G__33095;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__33102_33108 = cljs.core.seq.call(null,attrs);var chunk__33103_33109 = null;var count__33104_33110 = 0;var i__33105_33111 = 0;while(true){
if((i__33105_33111 < count__33104_33110))
{var vec__33106_33112 = cljs.core._nth.call(null,chunk__33103_33109,i__33105_33111);var name_33113 = cljs.core.nth.call(null,vec__33106_33112,0,null);var value_33114 = cljs.core.nth.call(null,vec__33106_33112,1,null);domina.set_attr_BANG_.call(null,content,name_33113,value_33114);
{
var G__33115 = seq__33102_33108;
var G__33116 = chunk__33103_33109;
var G__33117 = count__33104_33110;
var G__33118 = (i__33105_33111 + 1);
seq__33102_33108 = G__33115;
chunk__33103_33109 = G__33116;
count__33104_33110 = G__33117;
i__33105_33111 = G__33118;
continue;
}
} else
{var temp__4092__auto___33119 = cljs.core.seq.call(null,seq__33102_33108);if(temp__4092__auto___33119)
{var seq__33102_33120__$1 = temp__4092__auto___33119;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33102_33120__$1))
{var c__4148__auto___33121 = cljs.core.chunk_first.call(null,seq__33102_33120__$1);{
var G__33122 = cljs.core.chunk_rest.call(null,seq__33102_33120__$1);
var G__33123 = c__4148__auto___33121;
var G__33124 = cljs.core.count.call(null,c__4148__auto___33121);
var G__33125 = 0;
seq__33102_33108 = G__33122;
chunk__33103_33109 = G__33123;
count__33104_33110 = G__33124;
i__33105_33111 = G__33125;
continue;
}
} else
{var vec__33107_33126 = cljs.core.first.call(null,seq__33102_33120__$1);var name_33127 = cljs.core.nth.call(null,vec__33107_33126,0,null);var value_33128 = cljs.core.nth.call(null,vec__33107_33126,1,null);domina.set_attr_BANG_.call(null,content,name_33127,value_33128);
{
var G__33129 = cljs.core.next.call(null,seq__33102_33120__$1);
var G__33130 = null;
var G__33131 = 0;
var G__33132 = 0;
seq__33102_33108 = G__33129;
chunk__33103_33109 = G__33130;
count__33104_33110 = G__33131;
i__33105_33111 = G__33132;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__33137_33141 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33138_33142 = null;var count__33139_33143 = 0;var i__33140_33144 = 0;while(true){
if((i__33140_33144 < count__33139_33143))
{var node_33145 = cljs.core._nth.call(null,chunk__33138_33142,i__33140_33144);goog.dom.classes.add(node_33145,class$);
{
var G__33146 = seq__33137_33141;
var G__33147 = chunk__33138_33142;
var G__33148 = count__33139_33143;
var G__33149 = (i__33140_33144 + 1);
seq__33137_33141 = G__33146;
chunk__33138_33142 = G__33147;
count__33139_33143 = G__33148;
i__33140_33144 = G__33149;
continue;
}
} else
{var temp__4092__auto___33150 = cljs.core.seq.call(null,seq__33137_33141);if(temp__4092__auto___33150)
{var seq__33137_33151__$1 = temp__4092__auto___33150;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33137_33151__$1))
{var c__4148__auto___33152 = cljs.core.chunk_first.call(null,seq__33137_33151__$1);{
var G__33153 = cljs.core.chunk_rest.call(null,seq__33137_33151__$1);
var G__33154 = c__4148__auto___33152;
var G__33155 = cljs.core.count.call(null,c__4148__auto___33152);
var G__33156 = 0;
seq__33137_33141 = G__33153;
chunk__33138_33142 = G__33154;
count__33139_33143 = G__33155;
i__33140_33144 = G__33156;
continue;
}
} else
{var node_33157 = cljs.core.first.call(null,seq__33137_33151__$1);goog.dom.classes.add(node_33157,class$);
{
var G__33158 = cljs.core.next.call(null,seq__33137_33151__$1);
var G__33159 = null;
var G__33160 = 0;
var G__33161 = 0;
seq__33137_33141 = G__33158;
chunk__33138_33142 = G__33159;
count__33139_33143 = G__33160;
i__33140_33144 = G__33161;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__33166_33170 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33167_33171 = null;var count__33168_33172 = 0;var i__33169_33173 = 0;while(true){
if((i__33169_33173 < count__33168_33172))
{var node_33174 = cljs.core._nth.call(null,chunk__33167_33171,i__33169_33173);goog.dom.classes.remove(node_33174,class$);
{
var G__33175 = seq__33166_33170;
var G__33176 = chunk__33167_33171;
var G__33177 = count__33168_33172;
var G__33178 = (i__33169_33173 + 1);
seq__33166_33170 = G__33175;
chunk__33167_33171 = G__33176;
count__33168_33172 = G__33177;
i__33169_33173 = G__33178;
continue;
}
} else
{var temp__4092__auto___33179 = cljs.core.seq.call(null,seq__33166_33170);if(temp__4092__auto___33179)
{var seq__33166_33180__$1 = temp__4092__auto___33179;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33166_33180__$1))
{var c__4148__auto___33181 = cljs.core.chunk_first.call(null,seq__33166_33180__$1);{
var G__33182 = cljs.core.chunk_rest.call(null,seq__33166_33180__$1);
var G__33183 = c__4148__auto___33181;
var G__33184 = cljs.core.count.call(null,c__4148__auto___33181);
var G__33185 = 0;
seq__33166_33170 = G__33182;
chunk__33167_33171 = G__33183;
count__33168_33172 = G__33184;
i__33169_33173 = G__33185;
continue;
}
} else
{var node_33186 = cljs.core.first.call(null,seq__33166_33180__$1);goog.dom.classes.remove(node_33186,class$);
{
var G__33187 = cljs.core.next.call(null,seq__33166_33180__$1);
var G__33188 = null;
var G__33189 = 0;
var G__33190 = 0;
seq__33166_33170 = G__33187;
chunk__33167_33171 = G__33188;
count__33168_33172 = G__33189;
i__33169_33173 = G__33190;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__33195_33199 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33196_33200 = null;var count__33197_33201 = 0;var i__33198_33202 = 0;while(true){
if((i__33198_33202 < count__33197_33201))
{var node_33203 = cljs.core._nth.call(null,chunk__33196_33200,i__33198_33202);goog.dom.classes.toggle(node_33203,class$);
{
var G__33204 = seq__33195_33199;
var G__33205 = chunk__33196_33200;
var G__33206 = count__33197_33201;
var G__33207 = (i__33198_33202 + 1);
seq__33195_33199 = G__33204;
chunk__33196_33200 = G__33205;
count__33197_33201 = G__33206;
i__33198_33202 = G__33207;
continue;
}
} else
{var temp__4092__auto___33208 = cljs.core.seq.call(null,seq__33195_33199);if(temp__4092__auto___33208)
{var seq__33195_33209__$1 = temp__4092__auto___33208;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33195_33209__$1))
{var c__4148__auto___33210 = cljs.core.chunk_first.call(null,seq__33195_33209__$1);{
var G__33211 = cljs.core.chunk_rest.call(null,seq__33195_33209__$1);
var G__33212 = c__4148__auto___33210;
var G__33213 = cljs.core.count.call(null,c__4148__auto___33210);
var G__33214 = 0;
seq__33195_33199 = G__33211;
chunk__33196_33200 = G__33212;
count__33197_33201 = G__33213;
i__33198_33202 = G__33214;
continue;
}
} else
{var node_33215 = cljs.core.first.call(null,seq__33195_33209__$1);goog.dom.classes.toggle(node_33215,class$);
{
var G__33216 = cljs.core.next.call(null,seq__33195_33209__$1);
var G__33217 = null;
var G__33218 = 0;
var G__33219 = 0;
seq__33195_33199 = G__33216;
chunk__33196_33200 = G__33217;
count__33197_33201 = G__33218;
i__33198_33202 = G__33219;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_33228__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__33224_33229 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33225_33230 = null;var count__33226_33231 = 0;var i__33227_33232 = 0;while(true){
if((i__33227_33232 < count__33226_33231))
{var node_33233 = cljs.core._nth.call(null,chunk__33225_33230,i__33227_33232);goog.dom.classes.set(node_33233,classes_33228__$1);
{
var G__33234 = seq__33224_33229;
var G__33235 = chunk__33225_33230;
var G__33236 = count__33226_33231;
var G__33237 = (i__33227_33232 + 1);
seq__33224_33229 = G__33234;
chunk__33225_33230 = G__33235;
count__33226_33231 = G__33236;
i__33227_33232 = G__33237;
continue;
}
} else
{var temp__4092__auto___33238 = cljs.core.seq.call(null,seq__33224_33229);if(temp__4092__auto___33238)
{var seq__33224_33239__$1 = temp__4092__auto___33238;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33224_33239__$1))
{var c__4148__auto___33240 = cljs.core.chunk_first.call(null,seq__33224_33239__$1);{
var G__33241 = cljs.core.chunk_rest.call(null,seq__33224_33239__$1);
var G__33242 = c__4148__auto___33240;
var G__33243 = cljs.core.count.call(null,c__4148__auto___33240);
var G__33244 = 0;
seq__33224_33229 = G__33241;
chunk__33225_33230 = G__33242;
count__33226_33231 = G__33243;
i__33227_33232 = G__33244;
continue;
}
} else
{var node_33245 = cljs.core.first.call(null,seq__33224_33239__$1);goog.dom.classes.set(node_33245,classes_33228__$1);
{
var G__33246 = cljs.core.next.call(null,seq__33224_33239__$1);
var G__33247 = null;
var G__33248 = 0;
var G__33249 = 0;
seq__33224_33229 = G__33246;
chunk__33225_33230 = G__33247;
count__33226_33231 = G__33248;
i__33227_33232 = G__33249;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__33254_33258 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33255_33259 = null;var count__33256_33260 = 0;var i__33257_33261 = 0;while(true){
if((i__33257_33261 < count__33256_33260))
{var node_33262 = cljs.core._nth.call(null,chunk__33255_33259,i__33257_33261);goog.dom.setTextContent(node_33262,value);
{
var G__33263 = seq__33254_33258;
var G__33264 = chunk__33255_33259;
var G__33265 = count__33256_33260;
var G__33266 = (i__33257_33261 + 1);
seq__33254_33258 = G__33263;
chunk__33255_33259 = G__33264;
count__33256_33260 = G__33265;
i__33257_33261 = G__33266;
continue;
}
} else
{var temp__4092__auto___33267 = cljs.core.seq.call(null,seq__33254_33258);if(temp__4092__auto___33267)
{var seq__33254_33268__$1 = temp__4092__auto___33267;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33254_33268__$1))
{var c__4148__auto___33269 = cljs.core.chunk_first.call(null,seq__33254_33268__$1);{
var G__33270 = cljs.core.chunk_rest.call(null,seq__33254_33268__$1);
var G__33271 = c__4148__auto___33269;
var G__33272 = cljs.core.count.call(null,c__4148__auto___33269);
var G__33273 = 0;
seq__33254_33258 = G__33270;
chunk__33255_33259 = G__33271;
count__33256_33260 = G__33272;
i__33257_33261 = G__33273;
continue;
}
} else
{var node_33274 = cljs.core.first.call(null,seq__33254_33268__$1);goog.dom.setTextContent(node_33274,value);
{
var G__33275 = cljs.core.next.call(null,seq__33254_33268__$1);
var G__33276 = null;
var G__33277 = 0;
var G__33278 = 0;
seq__33254_33258 = G__33275;
chunk__33255_33259 = G__33276;
count__33256_33260 = G__33277;
i__33257_33261 = G__33278;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__33283_33287 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33284_33288 = null;var count__33285_33289 = 0;var i__33286_33290 = 0;while(true){
if((i__33286_33290 < count__33285_33289))
{var node_33291 = cljs.core._nth.call(null,chunk__33284_33288,i__33286_33290);goog.dom.forms.setValue(node_33291,value);
{
var G__33292 = seq__33283_33287;
var G__33293 = chunk__33284_33288;
var G__33294 = count__33285_33289;
var G__33295 = (i__33286_33290 + 1);
seq__33283_33287 = G__33292;
chunk__33284_33288 = G__33293;
count__33285_33289 = G__33294;
i__33286_33290 = G__33295;
continue;
}
} else
{var temp__4092__auto___33296 = cljs.core.seq.call(null,seq__33283_33287);if(temp__4092__auto___33296)
{var seq__33283_33297__$1 = temp__4092__auto___33296;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33283_33297__$1))
{var c__4148__auto___33298 = cljs.core.chunk_first.call(null,seq__33283_33297__$1);{
var G__33299 = cljs.core.chunk_rest.call(null,seq__33283_33297__$1);
var G__33300 = c__4148__auto___33298;
var G__33301 = cljs.core.count.call(null,c__4148__auto___33298);
var G__33302 = 0;
seq__33283_33287 = G__33299;
chunk__33284_33288 = G__33300;
count__33285_33289 = G__33301;
i__33286_33290 = G__33302;
continue;
}
} else
{var node_33303 = cljs.core.first.call(null,seq__33283_33297__$1);goog.dom.forms.setValue(node_33303,value);
{
var G__33304 = cljs.core.next.call(null,seq__33283_33297__$1);
var G__33305 = null;
var G__33306 = 0;
var G__33307 = 0;
seq__33283_33287 = G__33304;
chunk__33284_33288 = G__33305;
count__33285_33289 = G__33306;
i__33286_33290 = G__33307;
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
{var value_33318 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__33314_33319 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33315_33320 = null;var count__33316_33321 = 0;var i__33317_33322 = 0;while(true){
if((i__33317_33322 < count__33316_33321))
{var node_33323 = cljs.core._nth.call(null,chunk__33315_33320,i__33317_33322);node_33323.innerHTML = value_33318;
{
var G__33324 = seq__33314_33319;
var G__33325 = chunk__33315_33320;
var G__33326 = count__33316_33321;
var G__33327 = (i__33317_33322 + 1);
seq__33314_33319 = G__33324;
chunk__33315_33320 = G__33325;
count__33316_33321 = G__33326;
i__33317_33322 = G__33327;
continue;
}
} else
{var temp__4092__auto___33328 = cljs.core.seq.call(null,seq__33314_33319);if(temp__4092__auto___33328)
{var seq__33314_33329__$1 = temp__4092__auto___33328;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33314_33329__$1))
{var c__4148__auto___33330 = cljs.core.chunk_first.call(null,seq__33314_33329__$1);{
var G__33331 = cljs.core.chunk_rest.call(null,seq__33314_33329__$1);
var G__33332 = c__4148__auto___33330;
var G__33333 = cljs.core.count.call(null,c__4148__auto___33330);
var G__33334 = 0;
seq__33314_33319 = G__33331;
chunk__33315_33320 = G__33332;
count__33316_33321 = G__33333;
i__33317_33322 = G__33334;
continue;
}
} else
{var node_33335 = cljs.core.first.call(null,seq__33314_33329__$1);node_33335.innerHTML = value_33318;
{
var G__33336 = cljs.core.next.call(null,seq__33314_33329__$1);
var G__33337 = null;
var G__33338 = 0;
var G__33339 = 0;
seq__33314_33319 = G__33336;
chunk__33315_33320 = G__33337;
count__33316_33321 = G__33338;
i__33317_33322 = G__33339;
continue;
}
}
} else
{}
}
break;
}
}catch (e33313){if((e33313 instanceof Error))
{var e_33340 = e33313;domina.replace_children_BANG_.call(null,content,value_33318);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33313;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__33347_33351 = cljs.core.seq.call(null,children);var chunk__33348_33352 = null;var count__33349_33353 = 0;var i__33350_33354 = 0;while(true){
if((i__33350_33354 < count__33349_33353))
{var child_33355 = cljs.core._nth.call(null,chunk__33348_33352,i__33350_33354);frag.appendChild(child_33355);
{
var G__33356 = seq__33347_33351;
var G__33357 = chunk__33348_33352;
var G__33358 = count__33349_33353;
var G__33359 = (i__33350_33354 + 1);
seq__33347_33351 = G__33356;
chunk__33348_33352 = G__33357;
count__33349_33353 = G__33358;
i__33350_33354 = G__33359;
continue;
}
} else
{var temp__4092__auto___33360 = cljs.core.seq.call(null,seq__33347_33351);if(temp__4092__auto___33360)
{var seq__33347_33361__$1 = temp__4092__auto___33360;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33347_33361__$1))
{var c__4148__auto___33362 = cljs.core.chunk_first.call(null,seq__33347_33361__$1);{
var G__33363 = cljs.core.chunk_rest.call(null,seq__33347_33361__$1);
var G__33364 = c__4148__auto___33362;
var G__33365 = cljs.core.count.call(null,c__4148__auto___33362);
var G__33366 = 0;
seq__33347_33351 = G__33363;
chunk__33348_33352 = G__33364;
count__33349_33353 = G__33365;
i__33350_33354 = G__33366;
continue;
}
} else
{var child_33367 = cljs.core.first.call(null,seq__33347_33361__$1);frag.appendChild(child_33367);
{
var G__33368 = cljs.core.next.call(null,seq__33347_33361__$1);
var G__33369 = null;
var G__33370 = 0;
var G__33371 = 0;
seq__33347_33351 = G__33368;
chunk__33348_33352 = G__33369;
count__33349_33353 = G__33370;
i__33350_33354 = G__33371;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__33341_SHARP_,p2__33342_SHARP_){return f.call(null,p1__33341_SHARP_,p2__33342_SHARP_);
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
{if((function (){var G__33373 = list_thing;if(G__33373)
{var bit__4050__auto__ = (G__33373.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__33373.cljs$core$ISeqable$))
{return true;
} else
{if((!G__33373.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__33373);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__33373);
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
{if((function (){var G__33374 = content;if(G__33374)
{var bit__4050__auto__ = (G__33374.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__33374.cljs$core$ISeqable$))
{return true;
} else
{if((!G__33374.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__33374);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__33374);
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
{if((function (){var G__33375 = content;if(G__33375)
{var bit__4050__auto__ = (G__33375.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__33375.cljs$core$ISeqable$))
{return true;
} else
{if((!G__33375.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__33375);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__33375);
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
