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
var opt_wrapper_35842 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_35843 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_35844 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_35843,table_section_wrapper_35843,opt_wrapper_35842,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_35844,table_section_wrapper_35843,cell_wrapper_35844,opt_wrapper_35842,table_section_wrapper_35843,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_35843]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__35849 = cljs.core.seq.call(null,tbody);var chunk__35850 = null;var count__35851 = 0;var i__35852 = 0;while(true){
if((i__35852 < count__35851))
{var child = cljs.core._nth.call(null,chunk__35850,i__35852);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__35853 = seq__35849;
var G__35854 = chunk__35850;
var G__35855 = count__35851;
var G__35856 = (i__35852 + 1);
seq__35849 = G__35853;
chunk__35850 = G__35854;
count__35851 = G__35855;
i__35852 = G__35856;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__35849);if(temp__4092__auto__)
{var seq__35849__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35849__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__35849__$1);{
var G__35857 = cljs.core.chunk_rest.call(null,seq__35849__$1);
var G__35858 = c__4148__auto__;
var G__35859 = cljs.core.count.call(null,c__4148__auto__);
var G__35860 = 0;
seq__35849 = G__35857;
chunk__35850 = G__35858;
count__35851 = G__35859;
i__35852 = G__35860;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__35849__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__35861 = cljs.core.next.call(null,seq__35849__$1);
var G__35862 = null;
var G__35863 = 0;
var G__35864 = 0;
seq__35849 = G__35861;
chunk__35850 = G__35862;
count__35851 = G__35863;
i__35852 = G__35864;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__35866 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__35866,0,null);var start_wrap = cljs.core.nth.call(null,vec__35866,1,null);var end_wrap = cljs.core.nth.call(null,vec__35866,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__35867 = wrapper.lastChild;
var G__35868 = (level - 1);
wrapper = G__35867;
level = G__35868;
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
domina.DomContent = (function (){var obj35870 = {};return obj35870;
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
log_debug.cljs$lang$applyTo = (function (arglist__35871){
var mesg = cljs.core.seq(arglist__35871);
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
log.cljs$lang$applyTo = (function (arglist__35872){
var mesg = cljs.core.seq(arglist__35872);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__35873){
var contents = cljs.core.seq(arglist__35873);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__35874_SHARP_){return p1__35874_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__35875_SHARP_,p2__35876_SHARP_){return goog.dom.insertChildAt(p1__35875_SHARP_,p2__35876_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__35878_SHARP_,p2__35877_SHARP_){return goog.dom.insertSiblingBefore(p2__35877_SHARP_,p1__35878_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__35880_SHARP_,p2__35879_SHARP_){return goog.dom.insertSiblingAfter(p2__35879_SHARP_,p1__35880_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__35882_SHARP_,p2__35881_SHARP_){return goog.dom.replaceNode(p2__35881_SHARP_,p1__35882_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__35887_35891 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__35888_35892 = null;var count__35889_35893 = 0;var i__35890_35894 = 0;while(true){
if((i__35890_35894 < count__35889_35893))
{var n_35895 = cljs.core._nth.call(null,chunk__35888_35892,i__35890_35894);goog.style.setStyle(n_35895,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__35896 = seq__35887_35891;
var G__35897 = chunk__35888_35892;
var G__35898 = count__35889_35893;
var G__35899 = (i__35890_35894 + 1);
seq__35887_35891 = G__35896;
chunk__35888_35892 = G__35897;
count__35889_35893 = G__35898;
i__35890_35894 = G__35899;
continue;
}
} else
{var temp__4092__auto___35900 = cljs.core.seq.call(null,seq__35887_35891);if(temp__4092__auto___35900)
{var seq__35887_35901__$1 = temp__4092__auto___35900;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35887_35901__$1))
{var c__4148__auto___35902 = cljs.core.chunk_first.call(null,seq__35887_35901__$1);{
var G__35903 = cljs.core.chunk_rest.call(null,seq__35887_35901__$1);
var G__35904 = c__4148__auto___35902;
var G__35905 = cljs.core.count.call(null,c__4148__auto___35902);
var G__35906 = 0;
seq__35887_35891 = G__35903;
chunk__35888_35892 = G__35904;
count__35889_35893 = G__35905;
i__35890_35894 = G__35906;
continue;
}
} else
{var n_35907 = cljs.core.first.call(null,seq__35887_35901__$1);goog.style.setStyle(n_35907,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__35908 = cljs.core.next.call(null,seq__35887_35901__$1);
var G__35909 = null;
var G__35910 = 0;
var G__35911 = 0;
seq__35887_35891 = G__35908;
chunk__35888_35892 = G__35909;
count__35889_35893 = G__35910;
i__35890_35894 = G__35911;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__35912){
var content = cljs.core.first(arglist__35912);
arglist__35912 = cljs.core.next(arglist__35912);
var name = cljs.core.first(arglist__35912);
var value = cljs.core.rest(arglist__35912);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__35917_35921 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__35918_35922 = null;var count__35919_35923 = 0;var i__35920_35924 = 0;while(true){
if((i__35920_35924 < count__35919_35923))
{var n_35925 = cljs.core._nth.call(null,chunk__35918_35922,i__35920_35924);n_35925.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__35926 = seq__35917_35921;
var G__35927 = chunk__35918_35922;
var G__35928 = count__35919_35923;
var G__35929 = (i__35920_35924 + 1);
seq__35917_35921 = G__35926;
chunk__35918_35922 = G__35927;
count__35919_35923 = G__35928;
i__35920_35924 = G__35929;
continue;
}
} else
{var temp__4092__auto___35930 = cljs.core.seq.call(null,seq__35917_35921);if(temp__4092__auto___35930)
{var seq__35917_35931__$1 = temp__4092__auto___35930;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35917_35931__$1))
{var c__4148__auto___35932 = cljs.core.chunk_first.call(null,seq__35917_35931__$1);{
var G__35933 = cljs.core.chunk_rest.call(null,seq__35917_35931__$1);
var G__35934 = c__4148__auto___35932;
var G__35935 = cljs.core.count.call(null,c__4148__auto___35932);
var G__35936 = 0;
seq__35917_35921 = G__35933;
chunk__35918_35922 = G__35934;
count__35919_35923 = G__35935;
i__35920_35924 = G__35936;
continue;
}
} else
{var n_35937 = cljs.core.first.call(null,seq__35917_35931__$1);n_35937.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__35938 = cljs.core.next.call(null,seq__35917_35931__$1);
var G__35939 = null;
var G__35940 = 0;
var G__35941 = 0;
seq__35917_35921 = G__35938;
chunk__35918_35922 = G__35939;
count__35919_35923 = G__35940;
i__35920_35924 = G__35941;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__35942){
var content = cljs.core.first(arglist__35942);
arglist__35942 = cljs.core.next(arglist__35942);
var name = cljs.core.first(arglist__35942);
var value = cljs.core.rest(arglist__35942);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__35947_35951 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__35948_35952 = null;var count__35949_35953 = 0;var i__35950_35954 = 0;while(true){
if((i__35950_35954 < count__35949_35953))
{var n_35955 = cljs.core._nth.call(null,chunk__35948_35952,i__35950_35954);n_35955.removeAttribute(cljs.core.name.call(null,name));
{
var G__35956 = seq__35947_35951;
var G__35957 = chunk__35948_35952;
var G__35958 = count__35949_35953;
var G__35959 = (i__35950_35954 + 1);
seq__35947_35951 = G__35956;
chunk__35948_35952 = G__35957;
count__35949_35953 = G__35958;
i__35950_35954 = G__35959;
continue;
}
} else
{var temp__4092__auto___35960 = cljs.core.seq.call(null,seq__35947_35951);if(temp__4092__auto___35960)
{var seq__35947_35961__$1 = temp__4092__auto___35960;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35947_35961__$1))
{var c__4148__auto___35962 = cljs.core.chunk_first.call(null,seq__35947_35961__$1);{
var G__35963 = cljs.core.chunk_rest.call(null,seq__35947_35961__$1);
var G__35964 = c__4148__auto___35962;
var G__35965 = cljs.core.count.call(null,c__4148__auto___35962);
var G__35966 = 0;
seq__35947_35951 = G__35963;
chunk__35948_35952 = G__35964;
count__35949_35953 = G__35965;
i__35950_35954 = G__35966;
continue;
}
} else
{var n_35967 = cljs.core.first.call(null,seq__35947_35961__$1);n_35967.removeAttribute(cljs.core.name.call(null,name));
{
var G__35968 = cljs.core.next.call(null,seq__35947_35961__$1);
var G__35969 = null;
var G__35970 = 0;
var G__35971 = 0;
seq__35947_35951 = G__35968;
chunk__35948_35952 = G__35969;
count__35949_35953 = G__35970;
i__35950_35954 = G__35971;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__35973 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__35973,0,null);var v = cljs.core.nth.call(null,vec__35973,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__35974_SHARP_){var attr = attrs__$1.item(p1__35974_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__35981_35987 = cljs.core.seq.call(null,styles);var chunk__35982_35988 = null;var count__35983_35989 = 0;var i__35984_35990 = 0;while(true){
if((i__35984_35990 < count__35983_35989))
{var vec__35985_35991 = cljs.core._nth.call(null,chunk__35982_35988,i__35984_35990);var name_35992 = cljs.core.nth.call(null,vec__35985_35991,0,null);var value_35993 = cljs.core.nth.call(null,vec__35985_35991,1,null);domina.set_style_BANG_.call(null,content,name_35992,value_35993);
{
var G__35994 = seq__35981_35987;
var G__35995 = chunk__35982_35988;
var G__35996 = count__35983_35989;
var G__35997 = (i__35984_35990 + 1);
seq__35981_35987 = G__35994;
chunk__35982_35988 = G__35995;
count__35983_35989 = G__35996;
i__35984_35990 = G__35997;
continue;
}
} else
{var temp__4092__auto___35998 = cljs.core.seq.call(null,seq__35981_35987);if(temp__4092__auto___35998)
{var seq__35981_35999__$1 = temp__4092__auto___35998;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35981_35999__$1))
{var c__4148__auto___36000 = cljs.core.chunk_first.call(null,seq__35981_35999__$1);{
var G__36001 = cljs.core.chunk_rest.call(null,seq__35981_35999__$1);
var G__36002 = c__4148__auto___36000;
var G__36003 = cljs.core.count.call(null,c__4148__auto___36000);
var G__36004 = 0;
seq__35981_35987 = G__36001;
chunk__35982_35988 = G__36002;
count__35983_35989 = G__36003;
i__35984_35990 = G__36004;
continue;
}
} else
{var vec__35986_36005 = cljs.core.first.call(null,seq__35981_35999__$1);var name_36006 = cljs.core.nth.call(null,vec__35986_36005,0,null);var value_36007 = cljs.core.nth.call(null,vec__35986_36005,1,null);domina.set_style_BANG_.call(null,content,name_36006,value_36007);
{
var G__36008 = cljs.core.next.call(null,seq__35981_35999__$1);
var G__36009 = null;
var G__36010 = 0;
var G__36011 = 0;
seq__35981_35987 = G__36008;
chunk__35982_35988 = G__36009;
count__35983_35989 = G__36010;
i__35984_35990 = G__36011;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__36018_36024 = cljs.core.seq.call(null,attrs);var chunk__36019_36025 = null;var count__36020_36026 = 0;var i__36021_36027 = 0;while(true){
if((i__36021_36027 < count__36020_36026))
{var vec__36022_36028 = cljs.core._nth.call(null,chunk__36019_36025,i__36021_36027);var name_36029 = cljs.core.nth.call(null,vec__36022_36028,0,null);var value_36030 = cljs.core.nth.call(null,vec__36022_36028,1,null);domina.set_attr_BANG_.call(null,content,name_36029,value_36030);
{
var G__36031 = seq__36018_36024;
var G__36032 = chunk__36019_36025;
var G__36033 = count__36020_36026;
var G__36034 = (i__36021_36027 + 1);
seq__36018_36024 = G__36031;
chunk__36019_36025 = G__36032;
count__36020_36026 = G__36033;
i__36021_36027 = G__36034;
continue;
}
} else
{var temp__4092__auto___36035 = cljs.core.seq.call(null,seq__36018_36024);if(temp__4092__auto___36035)
{var seq__36018_36036__$1 = temp__4092__auto___36035;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36018_36036__$1))
{var c__4148__auto___36037 = cljs.core.chunk_first.call(null,seq__36018_36036__$1);{
var G__36038 = cljs.core.chunk_rest.call(null,seq__36018_36036__$1);
var G__36039 = c__4148__auto___36037;
var G__36040 = cljs.core.count.call(null,c__4148__auto___36037);
var G__36041 = 0;
seq__36018_36024 = G__36038;
chunk__36019_36025 = G__36039;
count__36020_36026 = G__36040;
i__36021_36027 = G__36041;
continue;
}
} else
{var vec__36023_36042 = cljs.core.first.call(null,seq__36018_36036__$1);var name_36043 = cljs.core.nth.call(null,vec__36023_36042,0,null);var value_36044 = cljs.core.nth.call(null,vec__36023_36042,1,null);domina.set_attr_BANG_.call(null,content,name_36043,value_36044);
{
var G__36045 = cljs.core.next.call(null,seq__36018_36036__$1);
var G__36046 = null;
var G__36047 = 0;
var G__36048 = 0;
seq__36018_36024 = G__36045;
chunk__36019_36025 = G__36046;
count__36020_36026 = G__36047;
i__36021_36027 = G__36048;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__36053_36057 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36054_36058 = null;var count__36055_36059 = 0;var i__36056_36060 = 0;while(true){
if((i__36056_36060 < count__36055_36059))
{var node_36061 = cljs.core._nth.call(null,chunk__36054_36058,i__36056_36060);goog.dom.classes.add(node_36061,class$);
{
var G__36062 = seq__36053_36057;
var G__36063 = chunk__36054_36058;
var G__36064 = count__36055_36059;
var G__36065 = (i__36056_36060 + 1);
seq__36053_36057 = G__36062;
chunk__36054_36058 = G__36063;
count__36055_36059 = G__36064;
i__36056_36060 = G__36065;
continue;
}
} else
{var temp__4092__auto___36066 = cljs.core.seq.call(null,seq__36053_36057);if(temp__4092__auto___36066)
{var seq__36053_36067__$1 = temp__4092__auto___36066;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36053_36067__$1))
{var c__4148__auto___36068 = cljs.core.chunk_first.call(null,seq__36053_36067__$1);{
var G__36069 = cljs.core.chunk_rest.call(null,seq__36053_36067__$1);
var G__36070 = c__4148__auto___36068;
var G__36071 = cljs.core.count.call(null,c__4148__auto___36068);
var G__36072 = 0;
seq__36053_36057 = G__36069;
chunk__36054_36058 = G__36070;
count__36055_36059 = G__36071;
i__36056_36060 = G__36072;
continue;
}
} else
{var node_36073 = cljs.core.first.call(null,seq__36053_36067__$1);goog.dom.classes.add(node_36073,class$);
{
var G__36074 = cljs.core.next.call(null,seq__36053_36067__$1);
var G__36075 = null;
var G__36076 = 0;
var G__36077 = 0;
seq__36053_36057 = G__36074;
chunk__36054_36058 = G__36075;
count__36055_36059 = G__36076;
i__36056_36060 = G__36077;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__36082_36086 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36083_36087 = null;var count__36084_36088 = 0;var i__36085_36089 = 0;while(true){
if((i__36085_36089 < count__36084_36088))
{var node_36090 = cljs.core._nth.call(null,chunk__36083_36087,i__36085_36089);goog.dom.classes.remove(node_36090,class$);
{
var G__36091 = seq__36082_36086;
var G__36092 = chunk__36083_36087;
var G__36093 = count__36084_36088;
var G__36094 = (i__36085_36089 + 1);
seq__36082_36086 = G__36091;
chunk__36083_36087 = G__36092;
count__36084_36088 = G__36093;
i__36085_36089 = G__36094;
continue;
}
} else
{var temp__4092__auto___36095 = cljs.core.seq.call(null,seq__36082_36086);if(temp__4092__auto___36095)
{var seq__36082_36096__$1 = temp__4092__auto___36095;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36082_36096__$1))
{var c__4148__auto___36097 = cljs.core.chunk_first.call(null,seq__36082_36096__$1);{
var G__36098 = cljs.core.chunk_rest.call(null,seq__36082_36096__$1);
var G__36099 = c__4148__auto___36097;
var G__36100 = cljs.core.count.call(null,c__4148__auto___36097);
var G__36101 = 0;
seq__36082_36086 = G__36098;
chunk__36083_36087 = G__36099;
count__36084_36088 = G__36100;
i__36085_36089 = G__36101;
continue;
}
} else
{var node_36102 = cljs.core.first.call(null,seq__36082_36096__$1);goog.dom.classes.remove(node_36102,class$);
{
var G__36103 = cljs.core.next.call(null,seq__36082_36096__$1);
var G__36104 = null;
var G__36105 = 0;
var G__36106 = 0;
seq__36082_36086 = G__36103;
chunk__36083_36087 = G__36104;
count__36084_36088 = G__36105;
i__36085_36089 = G__36106;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__36111_36115 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36112_36116 = null;var count__36113_36117 = 0;var i__36114_36118 = 0;while(true){
if((i__36114_36118 < count__36113_36117))
{var node_36119 = cljs.core._nth.call(null,chunk__36112_36116,i__36114_36118);goog.dom.classes.toggle(node_36119,class$);
{
var G__36120 = seq__36111_36115;
var G__36121 = chunk__36112_36116;
var G__36122 = count__36113_36117;
var G__36123 = (i__36114_36118 + 1);
seq__36111_36115 = G__36120;
chunk__36112_36116 = G__36121;
count__36113_36117 = G__36122;
i__36114_36118 = G__36123;
continue;
}
} else
{var temp__4092__auto___36124 = cljs.core.seq.call(null,seq__36111_36115);if(temp__4092__auto___36124)
{var seq__36111_36125__$1 = temp__4092__auto___36124;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36111_36125__$1))
{var c__4148__auto___36126 = cljs.core.chunk_first.call(null,seq__36111_36125__$1);{
var G__36127 = cljs.core.chunk_rest.call(null,seq__36111_36125__$1);
var G__36128 = c__4148__auto___36126;
var G__36129 = cljs.core.count.call(null,c__4148__auto___36126);
var G__36130 = 0;
seq__36111_36115 = G__36127;
chunk__36112_36116 = G__36128;
count__36113_36117 = G__36129;
i__36114_36118 = G__36130;
continue;
}
} else
{var node_36131 = cljs.core.first.call(null,seq__36111_36125__$1);goog.dom.classes.toggle(node_36131,class$);
{
var G__36132 = cljs.core.next.call(null,seq__36111_36125__$1);
var G__36133 = null;
var G__36134 = 0;
var G__36135 = 0;
seq__36111_36115 = G__36132;
chunk__36112_36116 = G__36133;
count__36113_36117 = G__36134;
i__36114_36118 = G__36135;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_36144__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__36140_36145 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36141_36146 = null;var count__36142_36147 = 0;var i__36143_36148 = 0;while(true){
if((i__36143_36148 < count__36142_36147))
{var node_36149 = cljs.core._nth.call(null,chunk__36141_36146,i__36143_36148);goog.dom.classes.set(node_36149,classes_36144__$1);
{
var G__36150 = seq__36140_36145;
var G__36151 = chunk__36141_36146;
var G__36152 = count__36142_36147;
var G__36153 = (i__36143_36148 + 1);
seq__36140_36145 = G__36150;
chunk__36141_36146 = G__36151;
count__36142_36147 = G__36152;
i__36143_36148 = G__36153;
continue;
}
} else
{var temp__4092__auto___36154 = cljs.core.seq.call(null,seq__36140_36145);if(temp__4092__auto___36154)
{var seq__36140_36155__$1 = temp__4092__auto___36154;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36140_36155__$1))
{var c__4148__auto___36156 = cljs.core.chunk_first.call(null,seq__36140_36155__$1);{
var G__36157 = cljs.core.chunk_rest.call(null,seq__36140_36155__$1);
var G__36158 = c__4148__auto___36156;
var G__36159 = cljs.core.count.call(null,c__4148__auto___36156);
var G__36160 = 0;
seq__36140_36145 = G__36157;
chunk__36141_36146 = G__36158;
count__36142_36147 = G__36159;
i__36143_36148 = G__36160;
continue;
}
} else
{var node_36161 = cljs.core.first.call(null,seq__36140_36155__$1);goog.dom.classes.set(node_36161,classes_36144__$1);
{
var G__36162 = cljs.core.next.call(null,seq__36140_36155__$1);
var G__36163 = null;
var G__36164 = 0;
var G__36165 = 0;
seq__36140_36145 = G__36162;
chunk__36141_36146 = G__36163;
count__36142_36147 = G__36164;
i__36143_36148 = G__36165;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__36170_36174 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36171_36175 = null;var count__36172_36176 = 0;var i__36173_36177 = 0;while(true){
if((i__36173_36177 < count__36172_36176))
{var node_36178 = cljs.core._nth.call(null,chunk__36171_36175,i__36173_36177);goog.dom.setTextContent(node_36178,value);
{
var G__36179 = seq__36170_36174;
var G__36180 = chunk__36171_36175;
var G__36181 = count__36172_36176;
var G__36182 = (i__36173_36177 + 1);
seq__36170_36174 = G__36179;
chunk__36171_36175 = G__36180;
count__36172_36176 = G__36181;
i__36173_36177 = G__36182;
continue;
}
} else
{var temp__4092__auto___36183 = cljs.core.seq.call(null,seq__36170_36174);if(temp__4092__auto___36183)
{var seq__36170_36184__$1 = temp__4092__auto___36183;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36170_36184__$1))
{var c__4148__auto___36185 = cljs.core.chunk_first.call(null,seq__36170_36184__$1);{
var G__36186 = cljs.core.chunk_rest.call(null,seq__36170_36184__$1);
var G__36187 = c__4148__auto___36185;
var G__36188 = cljs.core.count.call(null,c__4148__auto___36185);
var G__36189 = 0;
seq__36170_36174 = G__36186;
chunk__36171_36175 = G__36187;
count__36172_36176 = G__36188;
i__36173_36177 = G__36189;
continue;
}
} else
{var node_36190 = cljs.core.first.call(null,seq__36170_36184__$1);goog.dom.setTextContent(node_36190,value);
{
var G__36191 = cljs.core.next.call(null,seq__36170_36184__$1);
var G__36192 = null;
var G__36193 = 0;
var G__36194 = 0;
seq__36170_36174 = G__36191;
chunk__36171_36175 = G__36192;
count__36172_36176 = G__36193;
i__36173_36177 = G__36194;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__36199_36203 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36200_36204 = null;var count__36201_36205 = 0;var i__36202_36206 = 0;while(true){
if((i__36202_36206 < count__36201_36205))
{var node_36207 = cljs.core._nth.call(null,chunk__36200_36204,i__36202_36206);goog.dom.forms.setValue(node_36207,value);
{
var G__36208 = seq__36199_36203;
var G__36209 = chunk__36200_36204;
var G__36210 = count__36201_36205;
var G__36211 = (i__36202_36206 + 1);
seq__36199_36203 = G__36208;
chunk__36200_36204 = G__36209;
count__36201_36205 = G__36210;
i__36202_36206 = G__36211;
continue;
}
} else
{var temp__4092__auto___36212 = cljs.core.seq.call(null,seq__36199_36203);if(temp__4092__auto___36212)
{var seq__36199_36213__$1 = temp__4092__auto___36212;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36199_36213__$1))
{var c__4148__auto___36214 = cljs.core.chunk_first.call(null,seq__36199_36213__$1);{
var G__36215 = cljs.core.chunk_rest.call(null,seq__36199_36213__$1);
var G__36216 = c__4148__auto___36214;
var G__36217 = cljs.core.count.call(null,c__4148__auto___36214);
var G__36218 = 0;
seq__36199_36203 = G__36215;
chunk__36200_36204 = G__36216;
count__36201_36205 = G__36217;
i__36202_36206 = G__36218;
continue;
}
} else
{var node_36219 = cljs.core.first.call(null,seq__36199_36213__$1);goog.dom.forms.setValue(node_36219,value);
{
var G__36220 = cljs.core.next.call(null,seq__36199_36213__$1);
var G__36221 = null;
var G__36222 = 0;
var G__36223 = 0;
seq__36199_36203 = G__36220;
chunk__36200_36204 = G__36221;
count__36201_36205 = G__36222;
i__36202_36206 = G__36223;
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
{var value_36234 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__36230_36235 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36231_36236 = null;var count__36232_36237 = 0;var i__36233_36238 = 0;while(true){
if((i__36233_36238 < count__36232_36237))
{var node_36239 = cljs.core._nth.call(null,chunk__36231_36236,i__36233_36238);node_36239.innerHTML = value_36234;
{
var G__36240 = seq__36230_36235;
var G__36241 = chunk__36231_36236;
var G__36242 = count__36232_36237;
var G__36243 = (i__36233_36238 + 1);
seq__36230_36235 = G__36240;
chunk__36231_36236 = G__36241;
count__36232_36237 = G__36242;
i__36233_36238 = G__36243;
continue;
}
} else
{var temp__4092__auto___36244 = cljs.core.seq.call(null,seq__36230_36235);if(temp__4092__auto___36244)
{var seq__36230_36245__$1 = temp__4092__auto___36244;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36230_36245__$1))
{var c__4148__auto___36246 = cljs.core.chunk_first.call(null,seq__36230_36245__$1);{
var G__36247 = cljs.core.chunk_rest.call(null,seq__36230_36245__$1);
var G__36248 = c__4148__auto___36246;
var G__36249 = cljs.core.count.call(null,c__4148__auto___36246);
var G__36250 = 0;
seq__36230_36235 = G__36247;
chunk__36231_36236 = G__36248;
count__36232_36237 = G__36249;
i__36233_36238 = G__36250;
continue;
}
} else
{var node_36251 = cljs.core.first.call(null,seq__36230_36245__$1);node_36251.innerHTML = value_36234;
{
var G__36252 = cljs.core.next.call(null,seq__36230_36245__$1);
var G__36253 = null;
var G__36254 = 0;
var G__36255 = 0;
seq__36230_36235 = G__36252;
chunk__36231_36236 = G__36253;
count__36232_36237 = G__36254;
i__36233_36238 = G__36255;
continue;
}
}
} else
{}
}
break;
}
}catch (e36229){if((e36229 instanceof Error))
{var e_36256 = e36229;domina.replace_children_BANG_.call(null,content,value_36234);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36229;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__36263_36267 = cljs.core.seq.call(null,children);var chunk__36264_36268 = null;var count__36265_36269 = 0;var i__36266_36270 = 0;while(true){
if((i__36266_36270 < count__36265_36269))
{var child_36271 = cljs.core._nth.call(null,chunk__36264_36268,i__36266_36270);frag.appendChild(child_36271);
{
var G__36272 = seq__36263_36267;
var G__36273 = chunk__36264_36268;
var G__36274 = count__36265_36269;
var G__36275 = (i__36266_36270 + 1);
seq__36263_36267 = G__36272;
chunk__36264_36268 = G__36273;
count__36265_36269 = G__36274;
i__36266_36270 = G__36275;
continue;
}
} else
{var temp__4092__auto___36276 = cljs.core.seq.call(null,seq__36263_36267);if(temp__4092__auto___36276)
{var seq__36263_36277__$1 = temp__4092__auto___36276;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36263_36277__$1))
{var c__4148__auto___36278 = cljs.core.chunk_first.call(null,seq__36263_36277__$1);{
var G__36279 = cljs.core.chunk_rest.call(null,seq__36263_36277__$1);
var G__36280 = c__4148__auto___36278;
var G__36281 = cljs.core.count.call(null,c__4148__auto___36278);
var G__36282 = 0;
seq__36263_36267 = G__36279;
chunk__36264_36268 = G__36280;
count__36265_36269 = G__36281;
i__36266_36270 = G__36282;
continue;
}
} else
{var child_36283 = cljs.core.first.call(null,seq__36263_36277__$1);frag.appendChild(child_36283);
{
var G__36284 = cljs.core.next.call(null,seq__36263_36277__$1);
var G__36285 = null;
var G__36286 = 0;
var G__36287 = 0;
seq__36263_36267 = G__36284;
chunk__36264_36268 = G__36285;
count__36265_36269 = G__36286;
i__36266_36270 = G__36287;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__36257_SHARP_,p2__36258_SHARP_){return f.call(null,p1__36257_SHARP_,p2__36258_SHARP_);
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
{if((function (){var G__36289 = list_thing;if(G__36289)
{var bit__4050__auto__ = (G__36289.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__36289.cljs$core$ISeqable$))
{return true;
} else
{if((!G__36289.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36289);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36289);
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
{if((function (){var G__36290 = content;if(G__36290)
{var bit__4050__auto__ = (G__36290.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__36290.cljs$core$ISeqable$))
{return true;
} else
{if((!G__36290.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36290);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36290);
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
{if((function (){var G__36291 = content;if(G__36291)
{var bit__4050__auto__ = (G__36291.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__36291.cljs$core$ISeqable$))
{return true;
} else
{if((!G__36291.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36291);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36291);
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
